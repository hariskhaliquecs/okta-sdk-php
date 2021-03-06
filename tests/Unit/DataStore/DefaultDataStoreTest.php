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

use Okta\DataStore\DefaultDataStore;
use PHPUnit\Framework\TestCase;

class DefaultDataStoreTest extends TestCase
{
    /** @test */
    public function returns_instance_of_plugin_client_from_http_client()
    {
        $dataStore = new Okta\DataStore\DefaultDataStore('123', 'https://example.com');

        $this->assertInstanceOf(
            \Http\Client\Common\PluginClient::class,
            $dataStore->getHttpClient(),
            'The HttpClient does not return instance of ' . \Http\Client\Common\PluginClient::class
        );

    }

    /** @test */
    public function returns_instance_of_message_factory()
    {
        $dataStore = new Okta\DataStore\DefaultDataStore('123', 'https://example.com');

        $this->assertInstanceOf(
            \Http\Message\MessageFactory::class,
            $dataStore->getMessageFactory(),
            'The MessageFactory does not return instance of ' . \Http\Message\MessageFactory::class
        );
    }


    /** @test */
    public function returns_instance_of_uri_factory()
    {
        $dataStore = new Okta\DataStore\DefaultDataStore('123', 'https://example.com');

        $this->assertInstanceOf(
            \Http\Message\UriFactory::class,
            $dataStore->getUriFactory(),
            'The UriFactory does not return instance of ' . \Http\Message\UriFactory::class
        );
    }

    /** @test */
    public function can_set_query_when_getting_resource()
    {
        $httpClient = $this->createNewHttpClient();

        $dataStore = new Okta\DataStore\DefaultDataStore('123', 'https://example.com', $httpClient);

        $dataStore->getResource(
            '123',
            \Okta\Users\User::class,
            'users',
            ['query'=>['limit'=>1]]

        );

        $request = $httpClient->getRequests();

        $this->assertEquals(
            'limit=1',
            $request[0]->getUri()->getQuery()
        );

    }

    /** @test */
    public function can_set_query_when_getting_collection()
    {
        $httpClient = $this->createNewHttpClient([
            'getBody' => '[]'
        ]);

        $dataStore = new Okta\DataStore\DefaultDataStore('123', 'https://example.com', $httpClient);

        $dataStore->getCollection(
            '/api/v1/users',
            \Okta\Users\User::class,
            \Okta\Users\Collection::class,
            ['query'=>['limit'=>1]]

        );

        $request = $httpClient->getRequests();

        $this->assertEquals(
            'limit=1',
            $request[0]->getUri()->getQuery()
        );

    }

    /** @test */
    public function an_error_is_returned_correctly()
    {
        $this->expectException(\Okta\Exceptions\ResourceException::class);
        $httpClient = $this->createNewHttpClient([
            'getStatusCode' => 403,
            'getBody' => '{"errorCode":"E0000005","errorSummary":"Invalid session","errorLink":"E0000005","errorId":"oae6VxJiR3xSTKFwE2Ppx3HHA","errorCauses":[]}'
        ]);

        $dataStore = new Okta\DataStore\DefaultDataStore('123', 'https://example.com', $httpClient);

        $dataStore->getResource(
            '123',
            \Okta\Users\User::class,
            'users',
            ['query'=>['limit'=>1]]

        );
    }

    /** @test */
    public function query_can_be_appended()
    {
        $httpClient = $this->createNewHttpClient();

        $dataStore = new Okta\DataStore\DefaultDataStore('123', 'https://example.com', $httpClient);

        $dataStore->getResource(
            '123?limit=4&start=2',
            \Okta\Users\User::class,
            'users',
            ['query'=>['limit'=>1]]

        );

        $request = $httpClient->getRequests();

        $this->assertEquals(
            'limit=1&start=2',
            $request[0]->getUri()->getQuery()
        );

    }

    /** @test */
    public function execute_request_can_have_query()
    {
        $httpClient = $this->createNewHttpClient();

        $dataStore = new Okta\DataStore\DefaultDataStore('123', 'https://example.com', $httpClient);

        $uri = "test";
        $uri = $dataStore->buildUri(
            'http://example.com/' . $uri
        );

        $dataStore->executeRequest(
            'GET',
            $uri,
            null,
            ['query' => ['limit'=>1]]
        );

        $request = $httpClient->getRequests();

        $this->assertEquals(
            'limit=1',
            $request[0]->getUri()->getQuery()
        );

    }

    /**
     * @param array $returns
     *
     * @return \Http\Mock\Client
     */
    private function createNewHttpClient($returns = []): \Http\Mock\Client
    {
        $defaults = [
            'getStatusCode' => 200,
            'getBody' => '{}'
        ];

        $mockReturns = array_replace_recursive($defaults, $returns);

        $response = $this->createMock('Psr\Http\Message\ResponseInterface');
        foreach($mockReturns as $method=>$return) {
            $response->method($method)->willReturn($return);
        }
        $httpClient = new \Http\Mock\Client;
        $httpClient->addResponse($response);

        (new \Okta\ClientBuilder())
            ->setOrganizationUrl('https://dev.okta.com')
            ->setToken('abc123')
            ->setHttpClient($httpClient)
            ->build();
        return $httpClient;
    }



}
