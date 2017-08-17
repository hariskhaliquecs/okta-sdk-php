
window.projectVersion = '0.1.0';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:Okta" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Okta.html">Okta</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Okta_DataStore" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Okta/DataStore.html">DataStore</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Okta_DataStore_DefaultDataStore" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Okta/DataStore/DefaultDataStore.html">DefaultDataStore</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Okta_Exceptions" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Okta/Exceptions.html">Exceptions</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Okta_Exceptions_Error" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Okta/Exceptions/Error.html">Error</a>                    </div>                </li>                            <li data-name="class:Okta_Exceptions_GeneralException" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Okta/Exceptions/GeneralException.html">GeneralException</a>                    </div>                </li>                            <li data-name="class:Okta_Exceptions_ResourceException" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Okta/Exceptions/ResourceException.html">ResourceException</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Okta_GroupRules" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Okta/GroupRules.html">GroupRules</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Okta_GroupRules_Collection" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Okta/GroupRules/Collection.html">Collection</a>                    </div>                </li>                            <li data-name="class:Okta_GroupRules_GroupRule" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Okta/GroupRules/GroupRule.html">GroupRule</a>                    </div>                </li>                            <li data-name="class:Okta_GroupRules_GroupRuleAction" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Okta/GroupRules/GroupRuleAction.html">GroupRuleAction</a>                    </div>                </li>                            <li data-name="class:Okta_GroupRules_GroupRuleConditions" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Okta/GroupRules/GroupRuleConditions.html">GroupRuleConditions</a>                    </div>                </li>                            <li data-name="class:Okta_GroupRules_GroupRuleExpression" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Okta/GroupRules/GroupRuleExpression.html">GroupRuleExpression</a>                    </div>                </li>                            <li data-name="class:Okta_GroupRules_GroupRuleGroupAssignment" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Okta/GroupRules/GroupRuleGroupAssignment.html">GroupRuleGroupAssignment</a>                    </div>                </li>                            <li data-name="class:Okta_GroupRules_GroupRuleGroupCondition" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Okta/GroupRules/GroupRuleGroupCondition.html">GroupRuleGroupCondition</a>                    </div>                </li>                            <li data-name="class:Okta_GroupRules_GroupRulePeopleCondition" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Okta/GroupRules/GroupRulePeopleCondition.html">GroupRulePeopleCondition</a>                    </div>                </li>                            <li data-name="class:Okta_GroupRules_GroupRuleStatus" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Okta/GroupRules/GroupRuleStatus.html">GroupRuleStatus</a>                    </div>                </li>                            <li data-name="class:Okta_GroupRules_GroupRuleUserCondition" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Okta/GroupRules/GroupRuleUserCondition.html">GroupRuleUserCondition</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Okta_Groups" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Okta/Groups.html">Groups</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Okta_Groups_Collection" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Okta/Groups/Collection.html">Collection</a>                    </div>                </li>                            <li data-name="class:Okta_Groups_Group" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Okta/Groups/Group.html">Group</a>                    </div>                </li>                            <li data-name="class:Okta_Groups_GroupProfile" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Okta/Groups/GroupProfile.html">GroupProfile</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Okta_Resource" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Okta/Resource.html">Resource</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Okta_Resource_AbstractCollection" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Okta/Resource/AbstractCollection.html">AbstractCollection</a>                    </div>                </li>                            <li data-name="class:Okta_Resource_AbstractResource" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Okta/Resource/AbstractResource.html">AbstractResource</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Okta_Users" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Okta/Users.html">Users</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Okta_Users_AppLink" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Okta/Users/AppLink.html">AppLink</a>                    </div>                </li>                            <li data-name="class:Okta_Users_AuthenticationProvider" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Okta/Users/AuthenticationProvider.html">AuthenticationProvider</a>                    </div>                </li>                            <li data-name="class:Okta_Users_AuthenticationProviderType" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Okta/Users/AuthenticationProviderType.html">AuthenticationProviderType</a>                    </div>                </li>                            <li data-name="class:Okta_Users_ChangePasswordRequest" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Okta/Users/ChangePasswordRequest.html">ChangePasswordRequest</a>                    </div>                </li>                            <li data-name="class:Okta_Users_Collection" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Okta/Users/Collection.html">Collection</a>                    </div>                </li>                            <li data-name="class:Okta_Users_ForgotPasswordResponse" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Okta/Users/ForgotPasswordResponse.html">ForgotPasswordResponse</a>                    </div>                </li>                            <li data-name="class:Okta_Users_PasswordCredential" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Okta/Users/PasswordCredential.html">PasswordCredential</a>                    </div>                </li>                            <li data-name="class:Okta_Users_RecoveryQuestionCredential" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Okta/Users/RecoveryQuestionCredential.html">RecoveryQuestionCredential</a>                    </div>                </li>                            <li data-name="class:Okta_Users_ResetPasswordToken" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Okta/Users/ResetPasswordToken.html">ResetPasswordToken</a>                    </div>                </li>                            <li data-name="class:Okta_Users_Role" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Okta/Users/Role.html">Role</a>                    </div>                </li>                            <li data-name="class:Okta_Users_RoleStatus" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Okta/Users/RoleStatus.html">RoleStatus</a>                    </div>                </li>                            <li data-name="class:Okta_Users_TempPassword" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Okta/Users/TempPassword.html">TempPassword</a>                    </div>                </li>                            <li data-name="class:Okta_Users_User" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Okta/Users/User.html">User</a>                    </div>                </li>                            <li data-name="class:Okta_Users_UserActivationToken" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Okta/Users/UserActivationToken.html">UserActivationToken</a>                    </div>                </li>                            <li data-name="class:Okta_Users_UserCredentials" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Okta/Users/UserCredentials.html">UserCredentials</a>                    </div>                </li>                            <li data-name="class:Okta_Users_UserProfile" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Okta/Users/UserProfile.html">UserProfile</a>                    </div>                </li>                            <li data-name="class:Okta_Users_UserStatus" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Okta/Users/UserStatus.html">UserStatus</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Okta_Utilities" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Okta/Utilities.html">Utilities</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Okta_Utilities_SswsAuth" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Okta/Utilities/SswsAuth.html">SswsAuth</a>                    </div>                </li>                            <li data-name="class:Okta_Utilities_UserAgentBuilder" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Okta/Utilities/UserAgentBuilder.html">UserAgentBuilder</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:Okta_Client" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Okta/Client.html">Client</a>                    </div>                </li>                            <li data-name="class:Okta_ClientBuilder" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Okta/ClientBuilder.html">ClientBuilder</a>                    </div>                </li>                            <li data-name="class:Okta_Okta" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Okta/Okta.html">Okta</a>                    </div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "Okta.html", "name": "Okta", "doc": "Namespace Okta"},{"type": "Namespace", "link": "Okta/DataStore.html", "name": "Okta\\DataStore", "doc": "Namespace Okta\\DataStore"},{"type": "Namespace", "link": "Okta/Exceptions.html", "name": "Okta\\Exceptions", "doc": "Namespace Okta\\Exceptions"},{"type": "Namespace", "link": "Okta/GroupRules.html", "name": "Okta\\GroupRules", "doc": "Namespace Okta\\GroupRules"},{"type": "Namespace", "link": "Okta/Groups.html", "name": "Okta\\Groups", "doc": "Namespace Okta\\Groups"},{"type": "Namespace", "link": "Okta/Resource.html", "name": "Okta\\Resource", "doc": "Namespace Okta\\Resource"},{"type": "Namespace", "link": "Okta/Users.html", "name": "Okta\\Users", "doc": "Namespace Okta\\Users"},{"type": "Namespace", "link": "Okta/Utilities.html", "name": "Okta\\Utilities", "doc": "Namespace Okta\\Utilities"},
            
            {"type": "Class", "fromName": "Okta", "fromLink": "Okta.html", "link": "Okta/Client.html", "name": "Okta\\Client", "doc": "&quot;Class Client&quot;"},
                                                        {"type": "Method", "fromName": "Okta\\Client", "fromLink": "Okta/Client.html", "link": "Okta/Client.html#method___construct", "name": "Okta\\Client::__construct", "doc": "&quot;Create a new instance of Client.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Client", "fromLink": "Okta/Client.html", "link": "Okta/Client.html#method_getOrganizationUrl", "name": "Okta\\Client::getOrganizationUrl", "doc": "&quot;Get the Organization url from the client.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Client", "fromLink": "Okta/Client.html", "link": "Okta/Client.html#method_getIntegrationUserAgent", "name": "Okta\\Client::getIntegrationUserAgent", "doc": "&quot;Get the Integration User Agent string.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Client", "fromLink": "Okta/Client.html", "link": "Okta/Client.html#method_getDataStore", "name": "Okta\\Client::getDataStore", "doc": "&quot;Get the DataStore Instance.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Client", "fromLink": "Okta/Client.html", "link": "Okta/Client.html#method_getInstance", "name": "Okta\\Client::getInstance", "doc": "&quot;Get the current instance of the Client object.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Client", "fromLink": "Okta/Client.html", "link": "Okta/Client.html#method_destroy", "name": "Okta\\Client::destroy", "doc": "&quot;Destroys the Client object.&quot;"},
            
            {"type": "Class", "fromName": "Okta", "fromLink": "Okta.html", "link": "Okta/ClientBuilder.html", "name": "Okta\\ClientBuilder", "doc": "&quot;Class ClientBuilder&quot;"},
                                                        {"type": "Method", "fromName": "Okta\\ClientBuilder", "fromLink": "Okta/ClientBuilder.html", "link": "Okta/ClientBuilder.html#method___construct", "name": "Okta\\ClientBuilder::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Okta\\ClientBuilder", "fromLink": "Okta/ClientBuilder.html", "link": "Okta/ClientBuilder.html#method_setToken", "name": "Okta\\ClientBuilder::setToken", "doc": "&quot;Set the API token on the client builder.&quot;"},
                    {"type": "Method", "fromName": "Okta\\ClientBuilder", "fromLink": "Okta/ClientBuilder.html", "link": "Okta/ClientBuilder.html#method_setOrganizationUrl", "name": "Okta\\ClientBuilder::setOrganizationUrl", "doc": "&quot;Set the organization URL on the client builder.&quot;"},
                    {"type": "Method", "fromName": "Okta\\ClientBuilder", "fromLink": "Okta/ClientBuilder.html", "link": "Okta/ClientBuilder.html#method_setConfigFileLocation", "name": "Okta\\ClientBuilder::setConfigFileLocation", "doc": "&quot;Set the Config File Location on the client builder.&quot;"},
                    {"type": "Method", "fromName": "Okta\\ClientBuilder", "fromLink": "Okta/ClientBuilder.html", "link": "Okta/ClientBuilder.html#method_setHttpClient", "name": "Okta\\ClientBuilder::setHttpClient", "doc": "&quot;Sets the HTTP Client to use.&quot;"},
                    {"type": "Method", "fromName": "Okta\\ClientBuilder", "fromLink": "Okta/ClientBuilder.html", "link": "Okta/ClientBuilder.html#method_setIntegrationUserAgent", "name": "Okta\\ClientBuilder::setIntegrationUserAgent", "doc": "&quot;Set the Integrations User Agent string to be added to the UserAgent.&quot;"},
                    {"type": "Method", "fromName": "Okta\\ClientBuilder", "fromLink": "Okta/ClientBuilder.html", "link": "Okta/ClientBuilder.html#method_build", "name": "Okta\\ClientBuilder::build", "doc": "&quot;Build the Okta client based on ClientBuilder settings.&quot;"},
                    {"type": "Method", "fromName": "Okta\\ClientBuilder", "fromLink": "Okta/ClientBuilder.html", "link": "Okta/ClientBuilder.html#method___toString", "name": "Okta\\ClientBuilder::__toString", "doc": "&quot;Get string of settings.&quot;"},
            
            {"type": "Class", "fromName": "Okta\\DataStore", "fromLink": "Okta/DataStore.html", "link": "Okta/DataStore/DefaultDataStore.html", "name": "Okta\\DataStore\\DefaultDataStore", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Okta\\DataStore\\DefaultDataStore", "fromLink": "Okta/DataStore/DefaultDataStore.html", "link": "Okta/DataStore/DefaultDataStore.html#method___construct", "name": "Okta\\DataStore\\DefaultDataStore::__construct", "doc": "&quot;DefaultDataStore constructor.&quot;"},
                    {"type": "Method", "fromName": "Okta\\DataStore\\DefaultDataStore", "fromLink": "Okta/DataStore/DefaultDataStore.html", "link": "Okta/DataStore/DefaultDataStore.html#method_instantiate", "name": "Okta\\DataStore\\DefaultDataStore::instantiate", "doc": "&quot;Create a new instance of a class with the provided properties.&quot;"},
                    {"type": "Method", "fromName": "Okta\\DataStore\\DefaultDataStore", "fromLink": "Okta/DataStore/DefaultDataStore.html", "link": "Okta/DataStore/DefaultDataStore.html#method_getResource", "name": "Okta\\DataStore\\DefaultDataStore::getResource", "doc": "&quot;Get a resource from the API.&quot;"},
                    {"type": "Method", "fromName": "Okta\\DataStore\\DefaultDataStore", "fromLink": "Okta/DataStore/DefaultDataStore.html", "link": "Okta/DataStore/DefaultDataStore.html#method_getCollection", "name": "Okta\\DataStore\\DefaultDataStore::getCollection", "doc": "&quot;Get a collection of items.&quot;"},
                    {"type": "Method", "fromName": "Okta\\DataStore\\DefaultDataStore", "fromLink": "Okta/DataStore/DefaultDataStore.html", "link": "Okta/DataStore/DefaultDataStore.html#method_saveResource", "name": "Okta\\DataStore\\DefaultDataStore::saveResource", "doc": "&quot;Issues a save request to the API.&quot;"},
                    {"type": "Method", "fromName": "Okta\\DataStore\\DefaultDataStore", "fromLink": "Okta/DataStore/DefaultDataStore.html", "link": "Okta/DataStore/DefaultDataStore.html#method_createResource", "name": "Okta\\DataStore\\DefaultDataStore::createResource", "doc": "&quot;Issues a save request to the API.&quot;"},
                    {"type": "Method", "fromName": "Okta\\DataStore\\DefaultDataStore", "fromLink": "Okta/DataStore/DefaultDataStore.html", "link": "Okta/DataStore/DefaultDataStore.html#method_deleteResource", "name": "Okta\\DataStore\\DefaultDataStore::deleteResource", "doc": "&quot;Issues a delete request to the API.&quot;"},
                    {"type": "Method", "fromName": "Okta\\DataStore\\DefaultDataStore", "fromLink": "Okta/DataStore/DefaultDataStore.html", "link": "Okta/DataStore/DefaultDataStore.html#method_executeRequest", "name": "Okta\\DataStore\\DefaultDataStore::executeRequest", "doc": "&quot;Make the request.&quot;"},
                    {"type": "Method", "fromName": "Okta\\DataStore\\DefaultDataStore", "fromLink": "Okta/DataStore/DefaultDataStore.html", "link": "Okta/DataStore/DefaultDataStore.html#method_getHttpClient", "name": "Okta\\DataStore\\DefaultDataStore::getHttpClient", "doc": "&quot;Get the current PluginClient instance.&quot;"},
                    {"type": "Method", "fromName": "Okta\\DataStore\\DefaultDataStore", "fromLink": "Okta/DataStore/DefaultDataStore.html", "link": "Okta/DataStore/DefaultDataStore.html#method_getMessageFactory", "name": "Okta\\DataStore\\DefaultDataStore::getMessageFactory", "doc": "&quot;Get the current MessageFactory instance.&quot;"},
                    {"type": "Method", "fromName": "Okta\\DataStore\\DefaultDataStore", "fromLink": "Okta/DataStore/DefaultDataStore.html", "link": "Okta/DataStore/DefaultDataStore.html#method_getUriFactory", "name": "Okta\\DataStore\\DefaultDataStore::getUriFactory", "doc": "&quot;Get the current UriFactory instance.&quot;"},
                    {"type": "Method", "fromName": "Okta\\DataStore\\DefaultDataStore", "fromLink": "Okta/DataStore/DefaultDataStore.html", "link": "Okta/DataStore/DefaultDataStore.html#method_getOrganizationUrl", "name": "Okta\\DataStore\\DefaultDataStore::getOrganizationUrl", "doc": "&quot;Get the organization url.&quot;"},
                    {"type": "Method", "fromName": "Okta\\DataStore\\DefaultDataStore", "fromLink": "Okta/DataStore/DefaultDataStore.html", "link": "Okta/DataStore/DefaultDataStore.html#method_buildUri", "name": "Okta\\DataStore\\DefaultDataStore::buildUri", "doc": "&quot;Create an instance of Uri that can be used in the request.&quot;"},
            
            {"type": "Class", "fromName": "Okta\\Exceptions", "fromLink": "Okta/Exceptions.html", "link": "Okta/Exceptions/Error.html", "name": "Okta\\Exceptions\\Error", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Okta\\Exceptions\\Error", "fromLink": "Okta/Exceptions/Error.html", "link": "Okta/Exceptions/Error.html#method___construct", "name": "Okta\\Exceptions\\Error::__construct", "doc": "&quot;AbstractResource constructor.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Exceptions\\Error", "fromLink": "Okta/Exceptions/Error.html", "link": "Okta/Exceptions/Error.html#method_getErrorCode", "name": "Okta\\Exceptions\\Error::getErrorCode", "doc": "&quot;Gets the errorCode property.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Exceptions\\Error", "fromLink": "Okta/Exceptions/Error.html", "link": "Okta/Exceptions/Error.html#method_getErrorSummary", "name": "Okta\\Exceptions\\Error::getErrorSummary", "doc": "&quot;Gets the errorSummary property.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Exceptions\\Error", "fromLink": "Okta/Exceptions/Error.html", "link": "Okta/Exceptions/Error.html#method_getErrorLink", "name": "Okta\\Exceptions\\Error::getErrorLink", "doc": "&quot;Gets the errorLink property.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Exceptions\\Error", "fromLink": "Okta/Exceptions/Error.html", "link": "Okta/Exceptions/Error.html#method_getErrorId", "name": "Okta\\Exceptions\\Error::getErrorId", "doc": "&quot;Gets the errorId property.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Exceptions\\Error", "fromLink": "Okta/Exceptions/Error.html", "link": "Okta/Exceptions/Error.html#method_getErrorCauses", "name": "Okta\\Exceptions\\Error::getErrorCauses", "doc": "&quot;Gets the errorCauses property.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Exceptions\\Error", "fromLink": "Okta/Exceptions/Error.html", "link": "Okta/Exceptions/Error.html#method_getHttpStatus", "name": "Okta\\Exceptions\\Error::getHttpStatus", "doc": "&quot;Gets the httpStatusCode property.&quot;"},
            
            {"type": "Class", "fromName": "Okta\\Exceptions", "fromLink": "Okta/Exceptions.html", "link": "Okta/Exceptions/GeneralException.html", "name": "Okta\\Exceptions\\GeneralException", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "Okta\\Exceptions", "fromLink": "Okta/Exceptions.html", "link": "Okta/Exceptions/ResourceException.html", "name": "Okta\\Exceptions\\ResourceException", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Okta\\Exceptions\\ResourceException", "fromLink": "Okta/Exceptions/ResourceException.html", "link": "Okta/Exceptions/ResourceException.html#method___construct", "name": "Okta\\Exceptions\\ResourceException::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Okta\\Exceptions\\ResourceException", "fromLink": "Okta/Exceptions/ResourceException.html", "link": "Okta/Exceptions/ResourceException.html#method_getHttpStatus", "name": "Okta\\Exceptions\\ResourceException::getHttpStatus", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Okta\\Exceptions\\ResourceException", "fromLink": "Okta/Exceptions/ResourceException.html", "link": "Okta/Exceptions/ResourceException.html#method_getErrorCode", "name": "Okta\\Exceptions\\ResourceException::getErrorCode", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Okta\\Exceptions\\ResourceException", "fromLink": "Okta/Exceptions/ResourceException.html", "link": "Okta/Exceptions/ResourceException.html#method_getErrorLink", "name": "Okta\\Exceptions\\ResourceException::getErrorLink", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Okta\\Exceptions\\ResourceException", "fromLink": "Okta/Exceptions/ResourceException.html", "link": "Okta/Exceptions/ResourceException.html#method_getErrorId", "name": "Okta\\Exceptions\\ResourceException::getErrorId", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Okta\\Exceptions\\ResourceException", "fromLink": "Okta/Exceptions/ResourceException.html", "link": "Okta/Exceptions/ResourceException.html#method_getErrorCauses", "name": "Okta\\Exceptions\\ResourceException::getErrorCauses", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Okta\\Exceptions\\ResourceException", "fromLink": "Okta/Exceptions/ResourceException.html", "link": "Okta/Exceptions/ResourceException.html#method_getErrorSummary", "name": "Okta\\Exceptions\\ResourceException::getErrorSummary", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Okta\\GroupRules", "fromLink": "Okta/GroupRules.html", "link": "Okta/GroupRules/Collection.html", "name": "Okta\\GroupRules\\Collection", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "Okta\\GroupRules", "fromLink": "Okta/GroupRules.html", "link": "Okta/GroupRules/GroupRule.html", "name": "Okta\\GroupRules\\GroupRule", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Okta\\GroupRules\\GroupRule", "fromLink": "Okta/GroupRules/GroupRule.html", "link": "Okta/GroupRules/GroupRule.html#method_save", "name": "Okta\\GroupRules\\GroupRule::save", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Okta\\GroupRules\\GroupRule", "fromLink": "Okta/GroupRules/GroupRule.html", "link": "Okta/GroupRules/GroupRule.html#method_delete", "name": "Okta\\GroupRules\\GroupRule::delete", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Okta\\GroupRules\\GroupRule", "fromLink": "Okta/GroupRules/GroupRule.html", "link": "Okta/GroupRules/GroupRule.html#method_getId", "name": "Okta\\GroupRules\\GroupRule::getId", "doc": "&quot;Get the id.&quot;"},
                    {"type": "Method", "fromName": "Okta\\GroupRules\\GroupRule", "fromLink": "Okta/GroupRules/GroupRule.html", "link": "Okta/GroupRules/GroupRule.html#method_getName", "name": "Okta\\GroupRules\\GroupRule::getName", "doc": "&quot;Get the name.&quot;"},
                    {"type": "Method", "fromName": "Okta\\GroupRules\\GroupRule", "fromLink": "Okta/GroupRules/GroupRule.html", "link": "Okta/GroupRules/GroupRule.html#method_setName", "name": "Okta\\GroupRules\\GroupRule::setName", "doc": "&quot;Set the name.&quot;"},
                    {"type": "Method", "fromName": "Okta\\GroupRules\\GroupRule", "fromLink": "Okta/GroupRules/GroupRule.html", "link": "Okta/GroupRules/GroupRule.html#method_getType", "name": "Okta\\GroupRules\\GroupRule::getType", "doc": "&quot;Get the type.&quot;"},
                    {"type": "Method", "fromName": "Okta\\GroupRules\\GroupRule", "fromLink": "Okta/GroupRules/GroupRule.html", "link": "Okta/GroupRules/GroupRule.html#method_setType", "name": "Okta\\GroupRules\\GroupRule::setType", "doc": "&quot;Set the type.&quot;"},
                    {"type": "Method", "fromName": "Okta\\GroupRules\\GroupRule", "fromLink": "Okta/GroupRules/GroupRule.html", "link": "Okta/GroupRules/GroupRule.html#method_getStatus", "name": "Okta\\GroupRules\\GroupRule::getStatus", "doc": "&quot;Get the status.&quot;"},
                    {"type": "Method", "fromName": "Okta\\GroupRules\\GroupRule", "fromLink": "Okta/GroupRules/GroupRule.html", "link": "Okta/GroupRules/GroupRule.html#method_getActions", "name": "Okta\\GroupRules\\GroupRule::getActions", "doc": "&quot;Get the actions.&quot;"},
                    {"type": "Method", "fromName": "Okta\\GroupRules\\GroupRule", "fromLink": "Okta/GroupRules/GroupRule.html", "link": "Okta/GroupRules/GroupRule.html#method_setActions", "name": "Okta\\GroupRules\\GroupRule::setActions", "doc": "&quot;Set the actions.&quot;"},
                    {"type": "Method", "fromName": "Okta\\GroupRules\\GroupRule", "fromLink": "Okta/GroupRules/GroupRule.html", "link": "Okta/GroupRules/GroupRule.html#method_getCreated", "name": "Okta\\GroupRules\\GroupRule::getCreated", "doc": "&quot;Get the created.&quot;"},
                    {"type": "Method", "fromName": "Okta\\GroupRules\\GroupRule", "fromLink": "Okta/GroupRules/GroupRule.html", "link": "Okta/GroupRules/GroupRule.html#method_getConditions", "name": "Okta\\GroupRules\\GroupRule::getConditions", "doc": "&quot;Get the conditions.&quot;"},
                    {"type": "Method", "fromName": "Okta\\GroupRules\\GroupRule", "fromLink": "Okta/GroupRules/GroupRule.html", "link": "Okta/GroupRules/GroupRule.html#method_setConditions", "name": "Okta\\GroupRules\\GroupRule::setConditions", "doc": "&quot;Set the conditions.&quot;"},
                    {"type": "Method", "fromName": "Okta\\GroupRules\\GroupRule", "fromLink": "Okta/GroupRules/GroupRule.html", "link": "Okta/GroupRules/GroupRule.html#method_getLastUpdated", "name": "Okta\\GroupRules\\GroupRule::getLastUpdated", "doc": "&quot;Get the lastUpdated.&quot;"},
                    {"type": "Method", "fromName": "Okta\\GroupRules\\GroupRule", "fromLink": "Okta/GroupRules/GroupRule.html", "link": "Okta/GroupRules/GroupRule.html#method_activate", "name": "Okta\\GroupRules\\GroupRule::activate", "doc": "&quot;Sends a request to the activate endpoint.&quot;"},
                    {"type": "Method", "fromName": "Okta\\GroupRules\\GroupRule", "fromLink": "Okta/GroupRules/GroupRule.html", "link": "Okta/GroupRules/GroupRule.html#method_deactivate", "name": "Okta\\GroupRules\\GroupRule::deactivate", "doc": "&quot;Sends a request to the deactivate endpoint.&quot;"},
            
            {"type": "Class", "fromName": "Okta\\GroupRules", "fromLink": "Okta/GroupRules.html", "link": "Okta/GroupRules/GroupRuleAction.html", "name": "Okta\\GroupRules\\GroupRuleAction", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Okta\\GroupRules\\GroupRuleAction", "fromLink": "Okta/GroupRules/GroupRuleAction.html", "link": "Okta/GroupRules/GroupRuleAction.html#method_getAssignUserToGroups", "name": "Okta\\GroupRules\\GroupRuleAction::getAssignUserToGroups", "doc": "&quot;Get the assignUserToGroups.&quot;"},
                    {"type": "Method", "fromName": "Okta\\GroupRules\\GroupRuleAction", "fromLink": "Okta/GroupRules/GroupRuleAction.html", "link": "Okta/GroupRules/GroupRuleAction.html#method_setAssignUserToGroups", "name": "Okta\\GroupRules\\GroupRuleAction::setAssignUserToGroups", "doc": "&quot;Set the assignUserToGroups.&quot;"},
            
            {"type": "Class", "fromName": "Okta\\GroupRules", "fromLink": "Okta/GroupRules.html", "link": "Okta/GroupRules/GroupRuleConditions.html", "name": "Okta\\GroupRules\\GroupRuleConditions", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Okta\\GroupRules\\GroupRuleConditions", "fromLink": "Okta/GroupRules/GroupRuleConditions.html", "link": "Okta/GroupRules/GroupRuleConditions.html#method_getPeople", "name": "Okta\\GroupRules\\GroupRuleConditions::getPeople", "doc": "&quot;Get the people.&quot;"},
                    {"type": "Method", "fromName": "Okta\\GroupRules\\GroupRuleConditions", "fromLink": "Okta/GroupRules/GroupRuleConditions.html", "link": "Okta/GroupRules/GroupRuleConditions.html#method_setPeople", "name": "Okta\\GroupRules\\GroupRuleConditions::setPeople", "doc": "&quot;Set the people.&quot;"},
                    {"type": "Method", "fromName": "Okta\\GroupRules\\GroupRuleConditions", "fromLink": "Okta/GroupRules/GroupRuleConditions.html", "link": "Okta/GroupRules/GroupRuleConditions.html#method_getExpression", "name": "Okta\\GroupRules\\GroupRuleConditions::getExpression", "doc": "&quot;Get the expression.&quot;"},
                    {"type": "Method", "fromName": "Okta\\GroupRules\\GroupRuleConditions", "fromLink": "Okta/GroupRules/GroupRuleConditions.html", "link": "Okta/GroupRules/GroupRuleConditions.html#method_setExpression", "name": "Okta\\GroupRules\\GroupRuleConditions::setExpression", "doc": "&quot;Set the expression.&quot;"},
            
            {"type": "Class", "fromName": "Okta\\GroupRules", "fromLink": "Okta/GroupRules.html", "link": "Okta/GroupRules/GroupRuleExpression.html", "name": "Okta\\GroupRules\\GroupRuleExpression", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Okta\\GroupRules\\GroupRuleExpression", "fromLink": "Okta/GroupRules/GroupRuleExpression.html", "link": "Okta/GroupRules/GroupRuleExpression.html#method_getType", "name": "Okta\\GroupRules\\GroupRuleExpression::getType", "doc": "&quot;Get the type.&quot;"},
                    {"type": "Method", "fromName": "Okta\\GroupRules\\GroupRuleExpression", "fromLink": "Okta/GroupRules/GroupRuleExpression.html", "link": "Okta/GroupRules/GroupRuleExpression.html#method_setType", "name": "Okta\\GroupRules\\GroupRuleExpression::setType", "doc": "&quot;Set the type.&quot;"},
                    {"type": "Method", "fromName": "Okta\\GroupRules\\GroupRuleExpression", "fromLink": "Okta/GroupRules/GroupRuleExpression.html", "link": "Okta/GroupRules/GroupRuleExpression.html#method_getValue", "name": "Okta\\GroupRules\\GroupRuleExpression::getValue", "doc": "&quot;Get the value.&quot;"},
                    {"type": "Method", "fromName": "Okta\\GroupRules\\GroupRuleExpression", "fromLink": "Okta/GroupRules/GroupRuleExpression.html", "link": "Okta/GroupRules/GroupRuleExpression.html#method_setValue", "name": "Okta\\GroupRules\\GroupRuleExpression::setValue", "doc": "&quot;Set the value.&quot;"},
            
            {"type": "Class", "fromName": "Okta\\GroupRules", "fromLink": "Okta/GroupRules.html", "link": "Okta/GroupRules/GroupRuleGroupAssignment.html", "name": "Okta\\GroupRules\\GroupRuleGroupAssignment", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Okta\\GroupRules\\GroupRuleGroupAssignment", "fromLink": "Okta/GroupRules/GroupRuleGroupAssignment.html", "link": "Okta/GroupRules/GroupRuleGroupAssignment.html#method_getGroupIds", "name": "Okta\\GroupRules\\GroupRuleGroupAssignment::getGroupIds", "doc": "&quot;Get the groupIds.&quot;"},
                    {"type": "Method", "fromName": "Okta\\GroupRules\\GroupRuleGroupAssignment", "fromLink": "Okta/GroupRules/GroupRuleGroupAssignment.html", "link": "Okta/GroupRules/GroupRuleGroupAssignment.html#method_setGroupIds", "name": "Okta\\GroupRules\\GroupRuleGroupAssignment::setGroupIds", "doc": "&quot;Set the groupIds.&quot;"},
            
            {"type": "Class", "fromName": "Okta\\GroupRules", "fromLink": "Okta/GroupRules.html", "link": "Okta/GroupRules/GroupRuleGroupCondition.html", "name": "Okta\\GroupRules\\GroupRuleGroupCondition", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Okta\\GroupRules\\GroupRuleGroupCondition", "fromLink": "Okta/GroupRules/GroupRuleGroupCondition.html", "link": "Okta/GroupRules/GroupRuleGroupCondition.html#method_getExclude", "name": "Okta\\GroupRules\\GroupRuleGroupCondition::getExclude", "doc": "&quot;Get the exclude.&quot;"},
                    {"type": "Method", "fromName": "Okta\\GroupRules\\GroupRuleGroupCondition", "fromLink": "Okta/GroupRules/GroupRuleGroupCondition.html", "link": "Okta/GroupRules/GroupRuleGroupCondition.html#method_setExclude", "name": "Okta\\GroupRules\\GroupRuleGroupCondition::setExclude", "doc": "&quot;Set the exclude.&quot;"},
                    {"type": "Method", "fromName": "Okta\\GroupRules\\GroupRuleGroupCondition", "fromLink": "Okta/GroupRules/GroupRuleGroupCondition.html", "link": "Okta/GroupRules/GroupRuleGroupCondition.html#method_getInclude", "name": "Okta\\GroupRules\\GroupRuleGroupCondition::getInclude", "doc": "&quot;Get the include.&quot;"},
                    {"type": "Method", "fromName": "Okta\\GroupRules\\GroupRuleGroupCondition", "fromLink": "Okta/GroupRules/GroupRuleGroupCondition.html", "link": "Okta/GroupRules/GroupRuleGroupCondition.html#method_setInclude", "name": "Okta\\GroupRules\\GroupRuleGroupCondition::setInclude", "doc": "&quot;Set the include.&quot;"},
            
            {"type": "Class", "fromName": "Okta\\GroupRules", "fromLink": "Okta/GroupRules.html", "link": "Okta/GroupRules/GroupRulePeopleCondition.html", "name": "Okta\\GroupRules\\GroupRulePeopleCondition", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Okta\\GroupRules\\GroupRulePeopleCondition", "fromLink": "Okta/GroupRules/GroupRulePeopleCondition.html", "link": "Okta/GroupRules/GroupRulePeopleCondition.html#method_getUsers", "name": "Okta\\GroupRules\\GroupRulePeopleCondition::getUsers", "doc": "&quot;Get the users.&quot;"},
                    {"type": "Method", "fromName": "Okta\\GroupRules\\GroupRulePeopleCondition", "fromLink": "Okta/GroupRules/GroupRulePeopleCondition.html", "link": "Okta/GroupRules/GroupRulePeopleCondition.html#method_setUsers", "name": "Okta\\GroupRules\\GroupRulePeopleCondition::setUsers", "doc": "&quot;Set the users.&quot;"},
                    {"type": "Method", "fromName": "Okta\\GroupRules\\GroupRulePeopleCondition", "fromLink": "Okta/GroupRules/GroupRulePeopleCondition.html", "link": "Okta/GroupRules/GroupRulePeopleCondition.html#method_getGroups", "name": "Okta\\GroupRules\\GroupRulePeopleCondition::getGroups", "doc": "&quot;Get the groups.&quot;"},
                    {"type": "Method", "fromName": "Okta\\GroupRules\\GroupRulePeopleCondition", "fromLink": "Okta/GroupRules/GroupRulePeopleCondition.html", "link": "Okta/GroupRules/GroupRulePeopleCondition.html#method_setGroups", "name": "Okta\\GroupRules\\GroupRulePeopleCondition::setGroups", "doc": "&quot;Set the groups.&quot;"},
            
            {"type": "Class", "fromName": "Okta\\GroupRules", "fromLink": "Okta/GroupRules.html", "link": "Okta/GroupRules/GroupRuleStatus.html", "name": "Okta\\GroupRules\\GroupRuleStatus", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "Okta\\GroupRules", "fromLink": "Okta/GroupRules.html", "link": "Okta/GroupRules/GroupRuleUserCondition.html", "name": "Okta\\GroupRules\\GroupRuleUserCondition", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Okta\\GroupRules\\GroupRuleUserCondition", "fromLink": "Okta/GroupRules/GroupRuleUserCondition.html", "link": "Okta/GroupRules/GroupRuleUserCondition.html#method_getExclude", "name": "Okta\\GroupRules\\GroupRuleUserCondition::getExclude", "doc": "&quot;Get the exclude.&quot;"},
                    {"type": "Method", "fromName": "Okta\\GroupRules\\GroupRuleUserCondition", "fromLink": "Okta/GroupRules/GroupRuleUserCondition.html", "link": "Okta/GroupRules/GroupRuleUserCondition.html#method_setExclude", "name": "Okta\\GroupRules\\GroupRuleUserCondition::setExclude", "doc": "&quot;Set the exclude.&quot;"},
                    {"type": "Method", "fromName": "Okta\\GroupRules\\GroupRuleUserCondition", "fromLink": "Okta/GroupRules/GroupRuleUserCondition.html", "link": "Okta/GroupRules/GroupRuleUserCondition.html#method_getInclude", "name": "Okta\\GroupRules\\GroupRuleUserCondition::getInclude", "doc": "&quot;Get the include.&quot;"},
                    {"type": "Method", "fromName": "Okta\\GroupRules\\GroupRuleUserCondition", "fromLink": "Okta/GroupRules/GroupRuleUserCondition.html", "link": "Okta/GroupRules/GroupRuleUserCondition.html#method_setInclude", "name": "Okta\\GroupRules\\GroupRuleUserCondition::setInclude", "doc": "&quot;Set the include.&quot;"},
            
            {"type": "Class", "fromName": "Okta\\Groups", "fromLink": "Okta/Groups.html", "link": "Okta/Groups/Collection.html", "name": "Okta\\Groups\\Collection", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "Okta\\Groups", "fromLink": "Okta/Groups.html", "link": "Okta/Groups/Group.html", "name": "Okta\\Groups\\Group", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Okta\\Groups\\Group", "fromLink": "Okta/Groups/Group.html", "link": "Okta/Groups/Group.html#method_save", "name": "Okta\\Groups\\Group::save", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Okta\\Groups\\Group", "fromLink": "Okta/Groups/Group.html", "link": "Okta/Groups/Group.html#method_delete", "name": "Okta\\Groups\\Group::delete", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Okta\\Groups\\Group", "fromLink": "Okta/Groups/Group.html", "link": "Okta/Groups/Group.html#method_getId", "name": "Okta\\Groups\\Group::getId", "doc": "&quot;Get the id.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Groups\\Group", "fromLink": "Okta/Groups/Group.html", "link": "Okta/Groups/Group.html#method_getType", "name": "Okta\\Groups\\Group::getType", "doc": "&quot;Get the type.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Groups\\Group", "fromLink": "Okta/Groups/Group.html", "link": "Okta/Groups/Group.html#method_getLinks", "name": "Okta\\Groups\\Group::getLinks", "doc": "&quot;Get the _links.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Groups\\Group", "fromLink": "Okta/Groups/Group.html", "link": "Okta/Groups/Group.html#method_getCreated", "name": "Okta\\Groups\\Group::getCreated", "doc": "&quot;Get the created.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Groups\\Group", "fromLink": "Okta/Groups/Group.html", "link": "Okta/Groups/Group.html#method_getProfile", "name": "Okta\\Groups\\Group::getProfile", "doc": "&quot;Get the profile.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Groups\\Group", "fromLink": "Okta/Groups/Group.html", "link": "Okta/Groups/Group.html#method_setProfile", "name": "Okta\\Groups\\Group::setProfile", "doc": "&quot;Set the profile.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Groups\\Group", "fromLink": "Okta/Groups/Group.html", "link": "Okta/Groups/Group.html#method_getEmbedded", "name": "Okta\\Groups\\Group::getEmbedded", "doc": "&quot;Get the _embedded.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Groups\\Group", "fromLink": "Okta/Groups/Group.html", "link": "Okta/Groups/Group.html#method_getLastUpdated", "name": "Okta\\Groups\\Group::getLastUpdated", "doc": "&quot;Get the lastUpdated.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Groups\\Group", "fromLink": "Okta/Groups/Group.html", "link": "Okta/Groups/Group.html#method_getObjectClass", "name": "Okta\\Groups\\Group::getObjectClass", "doc": "&quot;Get the objectClass.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Groups\\Group", "fromLink": "Okta/Groups/Group.html", "link": "Okta/Groups/Group.html#method_getLastMembershipUpdated", "name": "Okta\\Groups\\Group::getLastMembershipUpdated", "doc": "&quot;Get the lastMembershipUpdated.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Groups\\Group", "fromLink": "Okta/Groups/Group.html", "link": "Okta/Groups/Group.html#method_removeUser", "name": "Okta\\Groups\\Group::removeUser", "doc": "&quot;Sends a request to the removeUser endpoint.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Groups\\Group", "fromLink": "Okta/Groups/Group.html", "link": "Okta/Groups/Group.html#method_getUsers", "name": "Okta\\Groups\\Group::getUsers", "doc": "&quot;Get the User object.&quot;"},
            
            {"type": "Class", "fromName": "Okta\\Groups", "fromLink": "Okta/Groups.html", "link": "Okta/Groups/GroupProfile.html", "name": "Okta\\Groups\\GroupProfile", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Okta\\Groups\\GroupProfile", "fromLink": "Okta/Groups/GroupProfile.html", "link": "Okta/Groups/GroupProfile.html#method_getName", "name": "Okta\\Groups\\GroupProfile::getName", "doc": "&quot;Get the name.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Groups\\GroupProfile", "fromLink": "Okta/Groups/GroupProfile.html", "link": "Okta/Groups/GroupProfile.html#method_setName", "name": "Okta\\Groups\\GroupProfile::setName", "doc": "&quot;Set the name.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Groups\\GroupProfile", "fromLink": "Okta/Groups/GroupProfile.html", "link": "Okta/Groups/GroupProfile.html#method_getDescription", "name": "Okta\\Groups\\GroupProfile::getDescription", "doc": "&quot;Get the description.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Groups\\GroupProfile", "fromLink": "Okta/Groups/GroupProfile.html", "link": "Okta/Groups/GroupProfile.html#method_setDescription", "name": "Okta\\Groups\\GroupProfile::setDescription", "doc": "&quot;Set the description.&quot;"},
            
            {"type": "Class", "fromName": "Okta", "fromLink": "Okta.html", "link": "Okta/Okta.html", "name": "Okta\\Okta", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Okta\\Okta", "fromLink": "Okta/Okta.html", "link": "Okta/Okta.html#method___construct", "name": "Okta\\Okta::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Okta\\Okta", "fromLink": "Okta/Okta.html", "link": "Okta/Okta.html#method_getUsers", "name": "Okta\\Okta::getUsers", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Okta\\Okta", "fromLink": "Okta/Okta.html", "link": "Okta/Okta.html#method_getGroups", "name": "Okta\\Okta::getGroups", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Okta\\Resource", "fromLink": "Okta/Resource.html", "link": "Okta/Resource/AbstractCollection.html", "name": "Okta\\Resource\\AbstractCollection", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Okta\\Resource\\AbstractCollection", "fromLink": "Okta/Resource/AbstractCollection.html", "link": "Okta/Resource/AbstractCollection.html#method_operatorForWhere", "name": "Okta\\Resource\\AbstractCollection::operatorForWhere", "doc": "&quot;Get an operator checker callback.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Resource\\AbstractCollection", "fromLink": "Okta/Resource/AbstractCollection.html", "link": "Okta/Resource/AbstractCollection.html#method_dataGet", "name": "Okta\\Resource\\AbstractCollection::dataGet", "doc": "&quot;Get an item from an array or object using \&quot;dot\&quot; notation.&quot;"},
            
            {"type": "Class", "fromName": "Okta\\Resource", "fromLink": "Okta/Resource.html", "link": "Okta/Resource/AbstractResource.html", "name": "Okta\\Resource\\AbstractResource", "doc": "&quot;Class AbstractResource&quot;"},
                                                        {"type": "Method", "fromName": "Okta\\Resource\\AbstractResource", "fromLink": "Okta/Resource/AbstractResource.html", "link": "Okta/Resource/AbstractResource.html#method___construct", "name": "Okta\\Resource\\AbstractResource::__construct", "doc": "&quot;AbstractResource constructor.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Resource\\AbstractResource", "fromLink": "Okta/Resource/AbstractResource.html", "link": "Okta/Resource/AbstractResource.html#method_getHref", "name": "Okta\\Resource\\AbstractResource::getHref", "doc": "&quot;Gets the href property.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Resource\\AbstractResource", "fromLink": "Okta/Resource/AbstractResource.html", "link": "Okta/Resource/AbstractResource.html#method_setProperties", "name": "Okta\\Resource\\AbstractResource::setProperties", "doc": "&quot;Set properties on the resource.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Resource\\AbstractResource", "fromLink": "Okta/Resource/AbstractResource.html", "link": "Okta/Resource/AbstractResource.html#method_getProperty", "name": "Okta\\Resource\\AbstractResource::getProperty", "doc": "&quot;Gets a property off the resource and allow you to cast it to a type.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Resource\\AbstractResource", "fromLink": "Okta/Resource/AbstractResource.html", "link": "Okta/Resource/AbstractResource.html#method_getLinkProperty", "name": "Okta\\Resource\\AbstractResource::getLinkProperty", "doc": "&quot;Get a HAL Linked property.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Resource\\AbstractResource", "fromLink": "Okta/Resource/AbstractResource.html", "link": "Okta/Resource/AbstractResource.html#method_getDateProperty", "name": "Okta\\Resource\\AbstractResource::getDateProperty", "doc": "&quot;Returns an instance of Carbon for the date property.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Resource\\AbstractResource", "fromLink": "Okta/Resource/AbstractResource.html", "link": "Okta/Resource/AbstractResource.html#method_getPropertyNames", "name": "Okta\\Resource\\AbstractResource::getPropertyNames", "doc": "&quot;Gets the current property names for the resource.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Resource\\AbstractResource", "fromLink": "Okta/Resource/AbstractResource.html", "link": "Okta/Resource/AbstractResource.html#method_getDirtyPropertyNames", "name": "Okta\\Resource\\AbstractResource::getDirtyPropertyNames", "doc": "&quot;Gets the property names that have been updated.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Resource\\AbstractResource", "fromLink": "Okta/Resource/AbstractResource.html", "link": "Okta/Resource/AbstractResource.html#method_setOptions", "name": "Okta\\Resource\\AbstractResource::setOptions", "doc": "&quot;Set the current options to use for the resource.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Resource\\AbstractResource", "fromLink": "Okta/Resource/AbstractResource.html", "link": "Okta/Resource/AbstractResource.html#method_clearOptions", "name": "Okta\\Resource\\AbstractResource::clearOptions", "doc": "&quot;Clears all options on the resource.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Resource\\AbstractResource", "fromLink": "Okta/Resource/AbstractResource.html", "link": "Okta/Resource/AbstractResource.html#method_getOptions", "name": "Okta\\Resource\\AbstractResource::getOptions", "doc": "&quot;Get the options currently set on the resource.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Resource\\AbstractResource", "fromLink": "Okta/Resource/AbstractResource.html", "link": "Okta/Resource/AbstractResource.html#method_getResourceProperty", "name": "Okta\\Resource\\AbstractResource::getResourceProperty", "doc": "&quot;Get a resource property from the resource.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Resource\\AbstractResource", "fromLink": "Okta/Resource/AbstractResource.html", "link": "Okta/Resource/AbstractResource.html#method_setResourceProperty", "name": "Okta\\Resource\\AbstractResource::setResourceProperty", "doc": "&quot;Set a resource property  on a resource.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Resource\\AbstractResource", "fromLink": "Okta/Resource/AbstractResource.html", "link": "Okta/Resource/AbstractResource.html#method_setProperty", "name": "Okta\\Resource\\AbstractResource::setProperty", "doc": "&quot;Set a property on a resource.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Resource\\AbstractResource", "fromLink": "Okta/Resource/AbstractResource.html", "link": "Okta/Resource/AbstractResource.html#method_getDataStore", "name": "Okta\\Resource\\AbstractResource::getDataStore", "doc": "&quot;Get the current DataStore instance.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Resource\\AbstractResource", "fromLink": "Okta/Resource/AbstractResource.html", "link": "Okta/Resource/AbstractResource.html#method_isDirty", "name": "Okta\\Resource\\AbstractResource::isDirty", "doc": "&quot;Is the resource dirty.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Resource\\AbstractResource", "fromLink": "Okta/Resource/AbstractResource.html", "link": "Okta/Resource/AbstractResource.html#method_getId", "name": "Okta\\Resource\\AbstractResource::getId", "doc": "&quot;Gets the ID property off the resource.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Resource\\AbstractResource", "fromLink": "Okta/Resource/AbstractResource.html", "link": "Okta/Resource/AbstractResource.html#method_isNew", "name": "Okta\\Resource\\AbstractResource::isNew", "doc": "&quot;Determines if the resource is new or not based on assigned id property.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Resource\\AbstractResource", "fromLink": "Okta/Resource/AbstractResource.html", "link": "Okta/Resource/AbstractResource.html#method___get", "name": "Okta\\Resource\\AbstractResource::__get", "doc": "&quot;Magic \&quot;get\&quot; method&quot;"},
                    {"type": "Method", "fromName": "Okta\\Resource\\AbstractResource", "fromLink": "Okta/Resource/AbstractResource.html", "link": "Okta/Resource/AbstractResource.html#method___set", "name": "Okta\\Resource\\AbstractResource::__set", "doc": "&quot;Magic \&quot;set\&quot; method&quot;"},
                    {"type": "Method", "fromName": "Okta\\Resource\\AbstractResource", "fromLink": "Okta/Resource/AbstractResource.html", "link": "Okta/Resource/AbstractResource.html#method___toString", "name": "Okta\\Resource\\AbstractResource::__toString", "doc": "&quot;Returns a json string representation of the resource.&quot;"},
            
            {"type": "Class", "fromName": "Okta\\Users", "fromLink": "Okta/Users.html", "link": "Okta/Users/AppLink.html", "name": "Okta\\Users\\AppLink", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Okta\\Users\\AppLink", "fromLink": "Okta/Users/AppLink.html", "link": "Okta/Users/AppLink.html#method_getId", "name": "Okta\\Users\\AppLink::getId", "doc": "&quot;Get the id.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\AppLink", "fromLink": "Okta/Users/AppLink.html", "link": "Okta/Users/AppLink.html#method_getLabel", "name": "Okta\\Users\\AppLink::getLabel", "doc": "&quot;Get the label.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\AppLink", "fromLink": "Okta/Users/AppLink.html", "link": "Okta/Users/AppLink.html#method_getHidden", "name": "Okta\\Users\\AppLink::getHidden", "doc": "&quot;Get the hidden.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\AppLink", "fromLink": "Okta/Users/AppLink.html", "link": "Okta/Users/AppLink.html#method_getAppName", "name": "Okta\\Users\\AppLink::getAppName", "doc": "&quot;Get the appName.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\AppLink", "fromLink": "Okta/Users/AppLink.html", "link": "Okta/Users/AppLink.html#method_getLinkUrl", "name": "Okta\\Users\\AppLink::getLinkUrl", "doc": "&quot;Get the linkUrl.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\AppLink", "fromLink": "Okta/Users/AppLink.html", "link": "Okta/Users/AppLink.html#method_getLogoUrl", "name": "Okta\\Users\\AppLink::getLogoUrl", "doc": "&quot;Get the logoUrl.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\AppLink", "fromLink": "Okta/Users/AppLink.html", "link": "Okta/Users/AppLink.html#method_getSortOrder", "name": "Okta\\Users\\AppLink::getSortOrder", "doc": "&quot;Get the sortOrder.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\AppLink", "fromLink": "Okta/Users/AppLink.html", "link": "Okta/Users/AppLink.html#method_getAppInstanceId", "name": "Okta\\Users\\AppLink::getAppInstanceId", "doc": "&quot;Get the appInstanceId.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\AppLink", "fromLink": "Okta/Users/AppLink.html", "link": "Okta/Users/AppLink.html#method_getAppAssignmentId", "name": "Okta\\Users\\AppLink::getAppAssignmentId", "doc": "&quot;Get the appAssignmentId.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\AppLink", "fromLink": "Okta/Users/AppLink.html", "link": "Okta/Users/AppLink.html#method_getCredentialsSetup", "name": "Okta\\Users\\AppLink::getCredentialsSetup", "doc": "&quot;Get the credentialsSetup.&quot;"},
            
            {"type": "Class", "fromName": "Okta\\Users", "fromLink": "Okta/Users.html", "link": "Okta/Users/AuthenticationProvider.html", "name": "Okta\\Users\\AuthenticationProvider", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Okta\\Users\\AuthenticationProvider", "fromLink": "Okta/Users/AuthenticationProvider.html", "link": "Okta/Users/AuthenticationProvider.html#method_getName", "name": "Okta\\Users\\AuthenticationProvider::getName", "doc": "&quot;Get the name.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\AuthenticationProvider", "fromLink": "Okta/Users/AuthenticationProvider.html", "link": "Okta/Users/AuthenticationProvider.html#method_setName", "name": "Okta\\Users\\AuthenticationProvider::setName", "doc": "&quot;Set the name.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\AuthenticationProvider", "fromLink": "Okta/Users/AuthenticationProvider.html", "link": "Okta/Users/AuthenticationProvider.html#method_getType", "name": "Okta\\Users\\AuthenticationProvider::getType", "doc": "&quot;Get the type.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\AuthenticationProvider", "fromLink": "Okta/Users/AuthenticationProvider.html", "link": "Okta/Users/AuthenticationProvider.html#method_setType", "name": "Okta\\Users\\AuthenticationProvider::setType", "doc": "&quot;Set the type.&quot;"},
            
            {"type": "Class", "fromName": "Okta\\Users", "fromLink": "Okta/Users.html", "link": "Okta/Users/AuthenticationProviderType.html", "name": "Okta\\Users\\AuthenticationProviderType", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "Okta\\Users", "fromLink": "Okta/Users.html", "link": "Okta/Users/ChangePasswordRequest.html", "name": "Okta\\Users\\ChangePasswordRequest", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Okta\\Users\\ChangePasswordRequest", "fromLink": "Okta/Users/ChangePasswordRequest.html", "link": "Okta/Users/ChangePasswordRequest.html#method_getNewPassword", "name": "Okta\\Users\\ChangePasswordRequest::getNewPassword", "doc": "&quot;Get the newPassword.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\ChangePasswordRequest", "fromLink": "Okta/Users/ChangePasswordRequest.html", "link": "Okta/Users/ChangePasswordRequest.html#method_setNewPassword", "name": "Okta\\Users\\ChangePasswordRequest::setNewPassword", "doc": "&quot;Set the newPassword.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\ChangePasswordRequest", "fromLink": "Okta/Users/ChangePasswordRequest.html", "link": "Okta/Users/ChangePasswordRequest.html#method_getOldPassword", "name": "Okta\\Users\\ChangePasswordRequest::getOldPassword", "doc": "&quot;Get the oldPassword.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\ChangePasswordRequest", "fromLink": "Okta/Users/ChangePasswordRequest.html", "link": "Okta/Users/ChangePasswordRequest.html#method_setOldPassword", "name": "Okta\\Users\\ChangePasswordRequest::setOldPassword", "doc": "&quot;Set the oldPassword.&quot;"},
            
            {"type": "Class", "fromName": "Okta\\Users", "fromLink": "Okta/Users.html", "link": "Okta/Users/Collection.html", "name": "Okta\\Users\\Collection", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "Okta\\Users", "fromLink": "Okta/Users.html", "link": "Okta/Users/ForgotPasswordResponse.html", "name": "Okta\\Users\\ForgotPasswordResponse", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Okta\\Users\\ForgotPasswordResponse", "fromLink": "Okta/Users/ForgotPasswordResponse.html", "link": "Okta/Users/ForgotPasswordResponse.html#method_getResetPasswordUrl", "name": "Okta\\Users\\ForgotPasswordResponse::getResetPasswordUrl", "doc": "&quot;Get the resetPasswordUrl.&quot;"},
            
            {"type": "Class", "fromName": "Okta\\Users", "fromLink": "Okta/Users.html", "link": "Okta/Users/PasswordCredential.html", "name": "Okta\\Users\\PasswordCredential", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Okta\\Users\\PasswordCredential", "fromLink": "Okta/Users/PasswordCredential.html", "link": "Okta/Users/PasswordCredential.html#method_getValue", "name": "Okta\\Users\\PasswordCredential::getValue", "doc": "&quot;Get the value.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\PasswordCredential", "fromLink": "Okta/Users/PasswordCredential.html", "link": "Okta/Users/PasswordCredential.html#method_setValue", "name": "Okta\\Users\\PasswordCredential::setValue", "doc": "&quot;Set the value.&quot;"},
            
            {"type": "Class", "fromName": "Okta\\Users", "fromLink": "Okta/Users.html", "link": "Okta/Users/RecoveryQuestionCredential.html", "name": "Okta\\Users\\RecoveryQuestionCredential", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Okta\\Users\\RecoveryQuestionCredential", "fromLink": "Okta/Users/RecoveryQuestionCredential.html", "link": "Okta/Users/RecoveryQuestionCredential.html#method_getAnswer", "name": "Okta\\Users\\RecoveryQuestionCredential::getAnswer", "doc": "&quot;Get the answer.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\RecoveryQuestionCredential", "fromLink": "Okta/Users/RecoveryQuestionCredential.html", "link": "Okta/Users/RecoveryQuestionCredential.html#method_setAnswer", "name": "Okta\\Users\\RecoveryQuestionCredential::setAnswer", "doc": "&quot;Set the answer.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\RecoveryQuestionCredential", "fromLink": "Okta/Users/RecoveryQuestionCredential.html", "link": "Okta/Users/RecoveryQuestionCredential.html#method_getQuestion", "name": "Okta\\Users\\RecoveryQuestionCredential::getQuestion", "doc": "&quot;Get the question.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\RecoveryQuestionCredential", "fromLink": "Okta/Users/RecoveryQuestionCredential.html", "link": "Okta/Users/RecoveryQuestionCredential.html#method_setQuestion", "name": "Okta\\Users\\RecoveryQuestionCredential::setQuestion", "doc": "&quot;Set the question.&quot;"},
            
            {"type": "Class", "fromName": "Okta\\Users", "fromLink": "Okta/Users.html", "link": "Okta/Users/ResetPasswordToken.html", "name": "Okta\\Users\\ResetPasswordToken", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Okta\\Users\\ResetPasswordToken", "fromLink": "Okta/Users/ResetPasswordToken.html", "link": "Okta/Users/ResetPasswordToken.html#method_getResetPasswordUrl", "name": "Okta\\Users\\ResetPasswordToken::getResetPasswordUrl", "doc": "&quot;Get the resetPasswordUrl.&quot;"},
            
            {"type": "Class", "fromName": "Okta\\Users", "fromLink": "Okta/Users.html", "link": "Okta/Users/Role.html", "name": "Okta\\Users\\Role", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Okta\\Users\\Role", "fromLink": "Okta/Users/Role.html", "link": "Okta/Users/Role.html#method_getId", "name": "Okta\\Users\\Role::getId", "doc": "&quot;Get the id.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\Role", "fromLink": "Okta/Users/Role.html", "link": "Okta/Users/Role.html#method_getType", "name": "Okta\\Users\\Role::getType", "doc": "&quot;Get the type.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\Role", "fromLink": "Okta/Users/Role.html", "link": "Okta/Users/Role.html#method_getLabel", "name": "Okta\\Users\\Role::getLabel", "doc": "&quot;Get the label.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\Role", "fromLink": "Okta/Users/Role.html", "link": "Okta/Users/Role.html#method_getStatus", "name": "Okta\\Users\\Role::getStatus", "doc": "&quot;Get the status.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\Role", "fromLink": "Okta/Users/Role.html", "link": "Okta/Users/Role.html#method_getCreated", "name": "Okta\\Users\\Role::getCreated", "doc": "&quot;Get the created.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\Role", "fromLink": "Okta/Users/Role.html", "link": "Okta/Users/Role.html#method_getEmbedded", "name": "Okta\\Users\\Role::getEmbedded", "doc": "&quot;Get the _embedded.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\Role", "fromLink": "Okta/Users/Role.html", "link": "Okta/Users/Role.html#method_getDescription", "name": "Okta\\Users\\Role::getDescription", "doc": "&quot;Get the description.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\Role", "fromLink": "Okta/Users/Role.html", "link": "Okta/Users/Role.html#method_setDescription", "name": "Okta\\Users\\Role::setDescription", "doc": "&quot;Set the description.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\Role", "fromLink": "Okta/Users/Role.html", "link": "Okta/Users/Role.html#method_getLastUpdated", "name": "Okta\\Users\\Role::getLastUpdated", "doc": "&quot;Get the lastUpdated.&quot;"},
            
            {"type": "Class", "fromName": "Okta\\Users", "fromLink": "Okta/Users.html", "link": "Okta/Users/RoleStatus.html", "name": "Okta\\Users\\RoleStatus", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "Okta\\Users", "fromLink": "Okta/Users.html", "link": "Okta/Users/TempPassword.html", "name": "Okta\\Users\\TempPassword", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Okta\\Users\\TempPassword", "fromLink": "Okta/Users/TempPassword.html", "link": "Okta/Users/TempPassword.html#method_getTempPassword", "name": "Okta\\Users\\TempPassword::getTempPassword", "doc": "&quot;Get the tempPassword.&quot;"},
            
            {"type": "Class", "fromName": "Okta\\Users", "fromLink": "Okta/Users.html", "link": "Okta/Users/User.html", "name": "Okta\\Users\\User", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Okta\\Users\\User", "fromLink": "Okta/Users/User.html", "link": "Okta/Users/User.html#method_create", "name": "Okta\\Users\\User::create", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\User", "fromLink": "Okta/Users/User.html", "link": "Okta/Users/User.html#method_get", "name": "Okta\\Users\\User::get", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\User", "fromLink": "Okta/Users/User.html", "link": "Okta/Users/User.html#method_save", "name": "Okta\\Users\\User::save", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\User", "fromLink": "Okta/Users/User.html", "link": "Okta/Users/User.html#method_delete", "name": "Okta\\Users\\User::delete", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\User", "fromLink": "Okta/Users/User.html", "link": "Okta/Users/User.html#method_getId", "name": "Okta\\Users\\User::getId", "doc": "&quot;Get the id.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\User", "fromLink": "Okta/Users/User.html", "link": "Okta/Users/User.html#method_getLinks", "name": "Okta\\Users\\User::getLinks", "doc": "&quot;Get the _links.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\User", "fromLink": "Okta/Users/User.html", "link": "Okta/Users/User.html#method_getStatus", "name": "Okta\\Users\\User::getStatus", "doc": "&quot;Get the status.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\User", "fromLink": "Okta/Users/User.html", "link": "Okta/Users/User.html#method_getCreated", "name": "Okta\\Users\\User::getCreated", "doc": "&quot;Get the created.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\User", "fromLink": "Okta/Users/User.html", "link": "Okta/Users/User.html#method_getProfile", "name": "Okta\\Users\\User::getProfile", "doc": "&quot;Get the profile.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\User", "fromLink": "Okta/Users/User.html", "link": "Okta/Users/User.html#method_setProfile", "name": "Okta\\Users\\User::setProfile", "doc": "&quot;Set the profile.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\User", "fromLink": "Okta/Users/User.html", "link": "Okta/Users/User.html#method_getEmbedded", "name": "Okta\\Users\\User::getEmbedded", "doc": "&quot;Get the _embedded.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\User", "fromLink": "Okta/Users/User.html", "link": "Okta/Users/User.html#method_getActivated", "name": "Okta\\Users\\User::getActivated", "doc": "&quot;Get the activated.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\User", "fromLink": "Okta/Users/User.html", "link": "Okta/Users/User.html#method_getLastLogin", "name": "Okta\\Users\\User::getLastLogin", "doc": "&quot;Get the lastLogin.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\User", "fromLink": "Okta/Users/User.html", "link": "Okta/Users/User.html#method_getCredentials", "name": "Okta\\Users\\User::getCredentials", "doc": "&quot;Get the credentials.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\User", "fromLink": "Okta/Users/User.html", "link": "Okta/Users/User.html#method_setCredentials", "name": "Okta\\Users\\User::setCredentials", "doc": "&quot;Set the credentials.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\User", "fromLink": "Okta/Users/User.html", "link": "Okta/Users/User.html#method_getLastUpdated", "name": "Okta\\Users\\User::getLastUpdated", "doc": "&quot;Get the lastUpdated.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\User", "fromLink": "Okta/Users/User.html", "link": "Okta/Users/User.html#method_getStatusChanged", "name": "Okta\\Users\\User::getStatusChanged", "doc": "&quot;Get the statusChanged.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\User", "fromLink": "Okta/Users/User.html", "link": "Okta/Users/User.html#method_getPasswordChanged", "name": "Okta\\Users\\User::getPasswordChanged", "doc": "&quot;Get the passwordChanged.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\User", "fromLink": "Okta/Users/User.html", "link": "Okta/Users/User.html#method_getTransitioningToStatus", "name": "Okta\\Users\\User::getTransitioningToStatus", "doc": "&quot;Get the transitioningToStatus.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\User", "fromLink": "Okta/Users/User.html", "link": "Okta/Users/User.html#method_getAppLinks", "name": "Okta\\Users\\User::getAppLinks", "doc": "&quot;Get the AppLink object.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\User", "fromLink": "Okta/Users/User.html", "link": "Okta/Users/User.html#method_changePassword", "name": "Okta\\Users\\User::changePassword", "doc": "&quot;Sends a request to the changePassword endpoint.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\User", "fromLink": "Okta/Users/User.html", "link": "Okta/Users/User.html#method_changeRecoveryQuestion", "name": "Okta\\Users\\User::changeRecoveryQuestion", "doc": "&quot;Sends a request to the changeRecoveryQuestion endpoint.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\User", "fromLink": "Okta/Users/User.html", "link": "Okta/Users/User.html#method_forgotPassword", "name": "Okta\\Users\\User::forgotPassword", "doc": "&quot;Sends a request to the forgotPassword endpoint.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\User", "fromLink": "Okta/Users/User.html", "link": "Okta/Users/User.html#method_getRoles", "name": "Okta\\Users\\User::getRoles", "doc": "&quot;Get the Role object.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\User", "fromLink": "Okta/Users/User.html", "link": "Okta/Users/User.html#method_addRole", "name": "Okta\\Users\\User::addRole", "doc": "&quot;Sends a request to the addRole endpoint.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\User", "fromLink": "Okta/Users/User.html", "link": "Okta/Users/User.html#method_removeRole", "name": "Okta\\Users\\User::removeRole", "doc": "&quot;Sends a request to the removeRole endpoint.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\User", "fromLink": "Okta/Users/User.html", "link": "Okta/Users/User.html#method_getGroupTargetsForRole", "name": "Okta\\Users\\User::getGroupTargetsForRole", "doc": "&quot;Get the Group object.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\User", "fromLink": "Okta/Users/User.html", "link": "Okta/Users/User.html#method_removeGroupTargetFromRole", "name": "Okta\\Users\\User::removeGroupTargetFromRole", "doc": "&quot;Sends a request to the removeGroupTargetFromRole endpoint.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\User", "fromLink": "Okta/Users/User.html", "link": "Okta/Users/User.html#method_addGroupTargetToRole", "name": "Okta\\Users\\User::addGroupTargetToRole", "doc": "&quot;Sends a request to the addGroupTargetToRole endpoint.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\User", "fromLink": "Okta/Users/User.html", "link": "Okta/Users/User.html#method_getGroups", "name": "Okta\\Users\\User::getGroups", "doc": "&quot;Get the Group object.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\User", "fromLink": "Okta/Users/User.html", "link": "Okta/Users/User.html#method_activate", "name": "Okta\\Users\\User::activate", "doc": "&quot;Sends a request to the activate endpoint.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\User", "fromLink": "Okta/Users/User.html", "link": "Okta/Users/User.html#method_deactivate", "name": "Okta\\Users\\User::deactivate", "doc": "&quot;Sends a request to the deactivate endpoint.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\User", "fromLink": "Okta/Users/User.html", "link": "Okta/Users/User.html#method_suspend", "name": "Okta\\Users\\User::suspend", "doc": "&quot;Sends a request to the suspend endpoint.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\User", "fromLink": "Okta/Users/User.html", "link": "Okta/Users/User.html#method_unsuspend", "name": "Okta\\Users\\User::unsuspend", "doc": "&quot;Sends a request to the unsuspend endpoint.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\User", "fromLink": "Okta/Users/User.html", "link": "Okta/Users/User.html#method_resetPassword", "name": "Okta\\Users\\User::resetPassword", "doc": "&quot;Sends a request to the resetPassword endpoint.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\User", "fromLink": "Okta/Users/User.html", "link": "Okta/Users/User.html#method_expirePassword", "name": "Okta\\Users\\User::expirePassword", "doc": "&quot;Sends a request to the expirePassword endpoint.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\User", "fromLink": "Okta/Users/User.html", "link": "Okta/Users/User.html#method_unlock", "name": "Okta\\Users\\User::unlock", "doc": "&quot;Sends a request to the unlock endpoint.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\User", "fromLink": "Okta/Users/User.html", "link": "Okta/Users/User.html#method_resetFactors", "name": "Okta\\Users\\User::resetFactors", "doc": "&quot;Sends a request to the resetFactors endpoint.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\User", "fromLink": "Okta/Users/User.html", "link": "Okta/Users/User.html#method_addToGroup", "name": "Okta\\Users\\User::addToGroup", "doc": "&quot;Sends a request to the addToGroup endpoint.&quot;"},
            
            {"type": "Class", "fromName": "Okta\\Users", "fromLink": "Okta/Users.html", "link": "Okta/Users/UserActivationToken.html", "name": "Okta\\Users\\UserActivationToken", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Okta\\Users\\UserActivationToken", "fromLink": "Okta/Users/UserActivationToken.html", "link": "Okta/Users/UserActivationToken.html#method_getActivationUrl", "name": "Okta\\Users\\UserActivationToken::getActivationUrl", "doc": "&quot;Get the activationUrl.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\UserActivationToken", "fromLink": "Okta/Users/UserActivationToken.html", "link": "Okta/Users/UserActivationToken.html#method_getActivationToken", "name": "Okta\\Users\\UserActivationToken::getActivationToken", "doc": "&quot;Get the activationToken.&quot;"},
            
            {"type": "Class", "fromName": "Okta\\Users", "fromLink": "Okta/Users.html", "link": "Okta/Users/UserCredentials.html", "name": "Okta\\Users\\UserCredentials", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Okta\\Users\\UserCredentials", "fromLink": "Okta/Users/UserCredentials.html", "link": "Okta/Users/UserCredentials.html#method_getPassword", "name": "Okta\\Users\\UserCredentials::getPassword", "doc": "&quot;Get the password.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\UserCredentials", "fromLink": "Okta/Users/UserCredentials.html", "link": "Okta/Users/UserCredentials.html#method_setPassword", "name": "Okta\\Users\\UserCredentials::setPassword", "doc": "&quot;Set the password.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\UserCredentials", "fromLink": "Okta/Users/UserCredentials.html", "link": "Okta/Users/UserCredentials.html#method_getProvider", "name": "Okta\\Users\\UserCredentials::getProvider", "doc": "&quot;Get the provider.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\UserCredentials", "fromLink": "Okta/Users/UserCredentials.html", "link": "Okta/Users/UserCredentials.html#method_setProvider", "name": "Okta\\Users\\UserCredentials::setProvider", "doc": "&quot;Set the provider.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\UserCredentials", "fromLink": "Okta/Users/UserCredentials.html", "link": "Okta/Users/UserCredentials.html#method_getRecoveryQuestion", "name": "Okta\\Users\\UserCredentials::getRecoveryQuestion", "doc": "&quot;Get the recovery_question.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\UserCredentials", "fromLink": "Okta/Users/UserCredentials.html", "link": "Okta/Users/UserCredentials.html#method_setRecoveryQuestion", "name": "Okta\\Users\\UserCredentials::setRecoveryQuestion", "doc": "&quot;Set the recovery_question.&quot;"},
            
            {"type": "Class", "fromName": "Okta\\Users", "fromLink": "Okta/Users.html", "link": "Okta/Users/UserProfile.html", "name": "Okta\\Users\\UserProfile", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Okta\\Users\\UserProfile", "fromLink": "Okta/Users/UserProfile.html", "link": "Okta/Users/UserProfile.html#method_getEmail", "name": "Okta\\Users\\UserProfile::getEmail", "doc": "&quot;Get the email.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\UserProfile", "fromLink": "Okta/Users/UserProfile.html", "link": "Okta/Users/UserProfile.html#method_setEmail", "name": "Okta\\Users\\UserProfile::setEmail", "doc": "&quot;Set the email.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\UserProfile", "fromLink": "Okta/Users/UserProfile.html", "link": "Okta/Users/UserProfile.html#method_getLogin", "name": "Okta\\Users\\UserProfile::getLogin", "doc": "&quot;Get the login.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\UserProfile", "fromLink": "Okta/Users/UserProfile.html", "link": "Okta/Users/UserProfile.html#method_setLogin", "name": "Okta\\Users\\UserProfile::setLogin", "doc": "&quot;Set the login.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\UserProfile", "fromLink": "Okta/Users/UserProfile.html", "link": "Okta/Users/UserProfile.html#method_getLastName", "name": "Okta\\Users\\UserProfile::getLastName", "doc": "&quot;Get the lastName.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\UserProfile", "fromLink": "Okta/Users/UserProfile.html", "link": "Okta/Users/UserProfile.html#method_setLastName", "name": "Okta\\Users\\UserProfile::setLastName", "doc": "&quot;Set the lastName.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\UserProfile", "fromLink": "Okta/Users/UserProfile.html", "link": "Okta/Users/UserProfile.html#method_getFirstName", "name": "Okta\\Users\\UserProfile::getFirstName", "doc": "&quot;Get the firstName.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\UserProfile", "fromLink": "Okta/Users/UserProfile.html", "link": "Okta/Users/UserProfile.html#method_setFirstName", "name": "Okta\\Users\\UserProfile::setFirstName", "doc": "&quot;Set the firstName.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\UserProfile", "fromLink": "Okta/Users/UserProfile.html", "link": "Okta/Users/UserProfile.html#method_getMobilePhone", "name": "Okta\\Users\\UserProfile::getMobilePhone", "doc": "&quot;Get the mobilePhone.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\UserProfile", "fromLink": "Okta/Users/UserProfile.html", "link": "Okta/Users/UserProfile.html#method_setMobilePhone", "name": "Okta\\Users\\UserProfile::setMobilePhone", "doc": "&quot;Set the mobilePhone.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\UserProfile", "fromLink": "Okta/Users/UserProfile.html", "link": "Okta/Users/UserProfile.html#method_getSecondEmail", "name": "Okta\\Users\\UserProfile::getSecondEmail", "doc": "&quot;Get the secondEmail.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Users\\UserProfile", "fromLink": "Okta/Users/UserProfile.html", "link": "Okta/Users/UserProfile.html#method_setSecondEmail", "name": "Okta\\Users\\UserProfile::setSecondEmail", "doc": "&quot;Set the secondEmail.&quot;"},
            
            {"type": "Class", "fromName": "Okta\\Users", "fromLink": "Okta/Users.html", "link": "Okta/Users/UserStatus.html", "name": "Okta\\Users\\UserStatus", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "Okta\\Utilities", "fromLink": "Okta/Utilities.html", "link": "Okta/Utilities/SswsAuth.html", "name": "Okta\\Utilities\\SswsAuth", "doc": "&quot;Class SswsAuth&quot;"},
                                                        {"type": "Method", "fromName": "Okta\\Utilities\\SswsAuth", "fromLink": "Okta/Utilities/SswsAuth.html", "link": "Okta/Utilities/SswsAuth.html#method___construct", "name": "Okta\\Utilities\\SswsAuth::__construct", "doc": "&quot;SswsAuth constructor.&quot;"},
                    {"type": "Method", "fromName": "Okta\\Utilities\\SswsAuth", "fromLink": "Okta/Utilities/SswsAuth.html", "link": "Okta/Utilities/SswsAuth.html#method_authenticate", "name": "Okta\\Utilities\\SswsAuth::authenticate", "doc": "&quot;Authenticates a request.&quot;"},
            
            {"type": "Class", "fromName": "Okta\\Utilities", "fromLink": "Okta/Utilities.html", "link": "Okta/Utilities/UserAgentBuilder.html", "name": "Okta\\Utilities\\UserAgentBuilder", "doc": "&quot;Class UserAgentBuilder&quot;"},
                                                        {"type": "Method", "fromName": "Okta\\Utilities\\UserAgentBuilder", "fromLink": "Okta/Utilities/UserAgentBuilder.html", "link": "Okta/Utilities/UserAgentBuilder.html#method_setPhpVersion", "name": "Okta\\Utilities\\UserAgentBuilder::setPhpVersion", "doc": "&quot;Set the PHP Version&quot;"},
                    {"type": "Method", "fromName": "Okta\\Utilities\\UserAgentBuilder", "fromLink": "Okta/Utilities/UserAgentBuilder.html", "link": "Okta/Utilities/UserAgentBuilder.html#method_setOsName", "name": "Okta\\Utilities\\UserAgentBuilder::setOsName", "doc": "&quot;Set the Operating System Name&quot;"},
                    {"type": "Method", "fromName": "Okta\\Utilities\\UserAgentBuilder", "fromLink": "Okta/Utilities/UserAgentBuilder.html", "link": "Okta/Utilities/UserAgentBuilder.html#method_setOsVersion", "name": "Okta\\Utilities\\UserAgentBuilder::setOsVersion", "doc": "&quot;Set the Operating System Version&quot;"},
                    {"type": "Method", "fromName": "Okta\\Utilities\\UserAgentBuilder", "fromLink": "Okta/Utilities/UserAgentBuilder.html", "link": "Okta/Utilities/UserAgentBuilder.html#method_build", "name": "Okta\\Utilities\\UserAgentBuilder::build", "doc": "&quot;Build your User Agent.  This will build in an order required by Okta.&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


