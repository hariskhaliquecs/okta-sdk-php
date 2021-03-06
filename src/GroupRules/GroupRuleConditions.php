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

class GroupRuleConditions extends AbstractResource
{
    const PEOPLE = 'people';
    const EXPRESSION = 'expression';

    /**
     * Get the people.
     *
     * @return GroupRulePeopleCondition
     */
    public function getPeople(array $options = []): GroupRulePeopleCondition
    {
        return $this->getResourceProperty(
            self::PEOPLE,
            GroupRulePeopleCondition::class,
            $options
        );
    }

    /**
     * Set the people.
     *
     * @param GroupRulePeopleCondition $people The GroupRulePeopleCondition instance.
     * @return self
     */
    public function setPeople(GroupRulePeopleCondition $people)
    {
        $this->setResourceProperty(
            self::PEOPLE,
            $people
        );
        
        return $this;
    }
    /**
     * Get the expression.
     *
     * @return GroupRuleExpression
     */
    public function getExpression(array $options = []): GroupRuleExpression
    {
        return $this->getResourceProperty(
            self::EXPRESSION,
            GroupRuleExpression::class,
            $options
        );
    }

    /**
     * Set the expression.
     *
     * @param GroupRuleExpression $expression The GroupRuleExpression instance.
     * @return self
     */
    public function setExpression(GroupRuleExpression $expression)
    {
        $this->setResourceProperty(
            self::EXPRESSION,
            $expression
        );
        
        return $this;
    }
}
