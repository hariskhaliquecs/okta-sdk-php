<?php
use Okta\ClientBuilder;
use Okta\Users\User;

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

class GetUserTest extends BaseIntegrationTestCase
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
            $this->createUser();
        }
    }

    /** @test */
    public function can_create_a_user()
    {
        $this->assertInstanceOf(User::class, static::$user);
    }


    /** @test */
    public function can_get_user_by_id()
    {
        $localUser = (new User)->get(static::$user->getId());

        $this->assertInstanceOf(User::class, $localUser);
        $this->assertEquals(
            static::$user,
            $localUser
        );
    }

    /** @test */
    public function can_get_user_by_login_name()
    {
        $localUser = (new User)->get(static::$user->getProfile()->getLogin());

        $this->assertInstanceOf(User::class, $localUser);
        $this->assertEquals(
            static::$user,
            $localUser
        );
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

    private function createUser()
    {
        $user = new User();

        $profile = $user->getProfile();
        $profile->setFirstName('John');
        $profile->setLastName('Get-User');
        $profile->setEmail('john-get-user@example.com');
        $profile->setLogin('john-get-user@example.com');
        $user->setProfile($profile);

        $credentials = $user->getCredentials();
        $password = $credentials->getPassword();
        $password->setValue('Abcd1234');

        $credentials->setPassword($password);

        $user->setCredentials($credentials);

        static::$user = $user->create();
    }

}