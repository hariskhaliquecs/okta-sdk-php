<?php
/*******************************************************************************
 * Copyright 2017 Okta, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ******************************************************************************/

namespace Okta\GroupRules;

use Okta\Resource\AbstractResource;

class GroupRule extends AbstractResource
{
    const ID = 'id';
    const NAME = 'name';
    const TYPE = 'type';
    const STATUS = 'status';
    const ACTIONS = 'actions';
    const CREATED = 'created';
    const CONDITIONS = 'conditions';
    const LAST_UPDATED = 'lastUpdated';

    public function save()
    {
        return \Okta\Client::getInstance()
                ->getDataStore()
                ->saveResource(
                    '/groups',
                    $this,
                    self::class
                );
    }

    public function delete()
    {
        return \Okta\Client::getInstance()
                ->getDataStore()
                ->deleteResource(
                    '/groups',
                    $this
                );
    }

    /**
     * Get the id.
     *
     * @return string
     */
    public function getId(): string
    {
        return $this->getProperty(self::ID);
    }
    /**
     * Get the name.
     *
     * @return string
     */
    public function getName(): string
    {
        return $this->getProperty(self::NAME);
    }
    /**
    * Set the name.
    *
    * @param mixed $name The value to set.
    * @return self
    */
    public function setName($name)
    {
        $this->setProperty(
            self::NAME,
            $name
        );

        return $this;
    }
    /**
     * Get the type.
     *
     * @return string
     */
    public function getType(): string
    {
        return $this->getProperty(self::TYPE);
    }
    /**
    * Set the type.
    *
    * @param mixed $type The value to set.
    * @return self
    */
    public function setType($type)
    {
        $this->setProperty(
            self::TYPE,
            $type
        );

        return $this;
    }
    /**
     * Get the status.
     *
     * @return string
     */
    public function getStatus(): string
    {
        return $this->getProperty(self::STATUS);
    }
    /**
     * Get the actions.
     *
     * @return GroupRuleAction
     */
    public function getActions(array $options = []): GroupRuleAction
    {
        return $this->getResourceProperty(
            self::ACTIONS,
            GroupRuleAction::class,
            $options
        );
    }

    /**
     * Set the actions.
     *
     * @param GroupRuleAction $actions The GroupRuleAction instance.
     * @return self
     */
    public function setActions(GroupRuleAction $actions)
    {
        $this->setResourceProperty(
            self::ACTIONS,
            $actions
        );
        
        return $this;
    }
    /**
     * Get the created.
     *
     * @return \Carbon\Carbon|null
     */
    public function getCreated()
    {
        return $this->getDateProperty(self::CREATED);
    }
    /**
     * Get the conditions.
     *
     * @return GroupRuleConditions
     */
    public function getConditions(array $options = []): GroupRuleConditions
    {
        return $this->getResourceProperty(
            self::CONDITIONS,
            GroupRuleConditions::class,
            $options
        );
    }

    /**
     * Set the conditions.
     *
     * @param GroupRuleConditions $conditions The GroupRuleConditions instance.
     * @return self
     */
    public function setConditions(GroupRuleConditions $conditions)
    {
        $this->setResourceProperty(
            self::CONDITIONS,
            $conditions
        );
        
        return $this;
    }
    /**
     * Get the lastUpdated.
     *
     * @return \Carbon\Carbon|null
     */
    public function getLastUpdated()
    {
        return $this->getDateProperty(self::LAST_UPDATED);
    }
    /**
    * Sends a request to the activate endpoint.
    *
    *
    * @return mixed|null
    */
    public function activate()
    {
        $uri = "/api/v1/groups/rules/{$this->getId()}/lifecycle/activate";
        $uri = $this->getDataStore()->buildUri(
            $this->getDataStore()->getOrganizationUrl() . $uri
        );
        return $this
                ->getDataStore()
                ->executeRequest('POST', $uri);
    }
    /**
    * Sends a request to the deactivate endpoint.
    *
    *
    * @return mixed|null
    */
    public function deactivate()
    {
        $uri = "/api/v1/groups/rules/{$this->getId()}/lifecycle/deactivate";
        $uri = $this->getDataStore()->buildUri(
            $this->getDataStore()->getOrganizationUrl() . $uri
        );
        return $this
                ->getDataStore()
                ->executeRequest('POST', $uri);
    }
}
