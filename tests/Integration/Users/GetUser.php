<?php
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

class GetUser extends BaseIntegrationTestCase
{
    /** @var User $localUser */
    public static $user;

    public static function setUpBeforeClass()
    {
        parent::setUpBeforeClass();

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

        static::$user = $user->create();

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
            dump($localUser);
        } catch (\Okta\Exceptions\ResourceException $re) {
            $this->assertEquals(404, $re->getHttpStatus());
        }

    }



    public static function tearDownAfterClass()
    {
//        static::$user->delete();

        parent::tearDownAfterClass();
    }

}