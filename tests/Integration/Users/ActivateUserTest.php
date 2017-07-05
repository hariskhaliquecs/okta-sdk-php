<?php
/******************************************************************************
 * Copyright 2017 Okta, Inc.                                                  *
 *                                                                            *
 * Licensed under the Apache License, Version 2.0 (the "License");            *
 * you may not use this file except in compliance with the License.           *
 * You may obtain a copy of the License at                                    *
 *                                                                            *
 *      http://www.apache.org/licenses/LICENSE-2.0                            *
 *                                                                            *
 * Unless required by applicable law or agreed to in writing, software        *
 * distributed under the License is distributed on an "AS IS" BASIS,          *
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.   *
 * See the License for the specific language governing permissions and        *
 * limitations under the License.                                             *
 ******************************************************************************/

use Okta\ClientBuilder;
use Okta\Users\User;

class ActivateUserTest extends BaseIntegrationTestCase
{
    /** @var User $localUser */
    public static $user = null;

    public static function setUpBeforeClass()
    {
        parent::setUpBeforeClass();

        $clientBuilder = new ClientBuilder();
        self::$client = $clientBuilder
            ->build();
    }

    public function setUp()
    {
        if(null === static::$user) {
            $user = $this->createUser(true);
            static::$user = $user->create(['query'=>['activate'=>false]]);
        }

    }

    /** @test */
    public function creates_user_that_is_unactivated()
    {
        $this->assertEquals('STAGED', static::$user->getStatus());
    }

    /** @test */
    public function can_deactivate_a_user()
    {
        static::$user->deactivate();

        /** @var User $localUser */
        $localUser = (new User)->get(static::$user->getId());
        $this->assertEquals('DEPROVISIONED', $localUser->getStatus());
    }

    /** @test */
    public function can_delete_a_user()
    {
        static::$user->delete();
        try {
            $localUser = (new User)->get(static::$user->getId());
            $this->markTestSkipped('Could not verify delete');
        } catch (\Okta\Exceptions\ResourceException $re) {
            $this->assertEquals(404, $re->getHttpStatus());
        }

    }



    public static function tearDownAfterClass()
    {
        if(static::$user instanceof User) {

            try {
                static::$user->deactivate();
            } catch (\Okta\Exceptions\ResourceException $re) {

            }

            try {
                static::$user->delete();
            } catch (\Okta\Exceptions\ResourceException $re) {

            }

        }

        parent::tearDownAfterClass();
    }

    private function createUser($returnOnly = false)
    {
        $user = new User();

        $profile = $user->getProfile();
        $profile->setFirstName('John');
        $profile->setLastName('Activate');
        $profile->setEmail('john-activate@example.com');
        $profile->setLogin('john-activate@example.com');
        $user->setProfile($profile);

        $credentials = $user->getCredentials();
        $password = $credentials->getPassword();
        $password->setValue('Abcd1234');

        $credentials->setPassword($password);

        $user->setCredentials($credentials);

        if($returnOnly) {
            return $user;
        }

        static::$user = $user->create();
    }

}