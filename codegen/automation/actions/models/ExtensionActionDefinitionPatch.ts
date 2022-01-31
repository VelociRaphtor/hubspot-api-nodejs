/**
 * Custom Workflow Actions
 * Create custom workflow actions
 *
 * OpenAPI spec version: v4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ActionLabels } from './ActionLabels';
import { ConditionalSingleFieldDependency } from './ConditionalSingleFieldDependency';
import { InputFieldDefinition } from './InputFieldDefinition';
import { ObjectRequestOptions } from './ObjectRequestOptions';
import { SingleFieldDependency } from './SingleFieldDependency';
import { HttpFile } from '../http/http';

/**
* Fields on custom workflow action to be updated.
*/
export class ExtensionActionDefinitionPatch {
    /**
    * The URL that will accept an HTTPS request each time workflows executes the custom action.
    */
    'actionUrl'?: string;
    /**
    * Whether this custom action is published to customers.
    */
    'published'?: boolean;
    /**
    * The list of input fields to display in this custom action.
    */
    'inputFields'?: Array<InputFieldDefinition>;
    'objectRequestOptions'?: ObjectRequestOptions;
    /**
    * A list of dependencies between the input fields. These configure when the input fields should be visible.
    */
    'inputFieldDependencies'?: Array<SingleFieldDependency | ConditionalSingleFieldDependency>;
    /**
    * The user-facing labels for the custom action.
    */
    'labels'?: { [key: string]: ActionLabels; };
    /**
    * The object types that this custom action supports.
    */
    'objectTypes'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "actionUrl",
            "baseName": "actionUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "published",
            "baseName": "published",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "inputFields",
            "baseName": "inputFields",
            "type": "Array<InputFieldDefinition>",
            "format": ""
        },
        {
            "name": "objectRequestOptions",
            "baseName": "objectRequestOptions",
            "type": "ObjectRequestOptions",
            "format": ""
        },
        {
            "name": "inputFieldDependencies",
            "baseName": "inputFieldDependencies",
            "type": "Array<SingleFieldDependency | ConditionalSingleFieldDependency>",
            "format": ""
        },
        {
            "name": "labels",
            "baseName": "labels",
            "type": "{ [key: string]: ActionLabels; }",
            "format": ""
        },
        {
            "name": "objectTypes",
            "baseName": "objectTypes",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ExtensionActionDefinitionPatch.attributeTypeMap;
    }

    public constructor() {
    }
}
