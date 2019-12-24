/**
 * Properties
 * All HubSpot objects store data in default and custom properties. These endpoints provide access to read and modify object properties in HubSpot.
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { OptionInput } from './optionInput';

export class PropertyCreate {
    /**
    * The internal property name, which must be used when referencing the property via the API.
    */
    'name': string;
    /**
    * A human-readable property label that will be shown in HubSpot.
    */
    'label': string;
    /**
    * The data type of the property.
    */
    'type': PropertyCreate.TypeEnum;
    /**
    * Controls how the property appears in HubSpot.
    */
    'fieldType': PropertyCreate.FieldTypeEnum;
    /**
    * The name of the property group the property belongs to.
    */
    'groupName': string;
    /**
    * A description of the property that will be shown as help text in HubSpot.
    */
    'description'?: string;
    /**
    * A list of valid options for the property. This field is required for enumerated properties.
    */
    'options'?: Array<OptionInput>;
    /**
    * Properties are displayed in order starting with the lowest positive integer value. Values of -1 will cause the property to be displayed after any positive values.
    */
    'displayOrder'?: number;
    /**
    * Whether or not the property's value must be unique. Once set, this can't be changed.
    */
    'hasUniqueValue'?: boolean;
    /**
    * If true, the property won't be visible and can't be used in HubSpot.
    */
    'hidden'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "PropertyCreate.TypeEnum"
        },
        {
            "name": "fieldType",
            "baseName": "fieldType",
            "type": "PropertyCreate.FieldTypeEnum"
        },
        {
            "name": "groupName",
            "baseName": "groupName",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "options",
            "baseName": "options",
            "type": "Array<OptionInput>"
        },
        {
            "name": "displayOrder",
            "baseName": "displayOrder",
            "type": "number"
        },
        {
            "name": "hasUniqueValue",
            "baseName": "hasUniqueValue",
            "type": "boolean"
        },
        {
            "name": "hidden",
            "baseName": "hidden",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return PropertyCreate.attributeTypeMap;
    }
}

export namespace PropertyCreate {
    export enum TypeEnum {
        String = <any> 'string',
        Number = <any> 'number',
        Date = <any> 'date',
        Datetime = <any> 'datetime',
        Enumeration = <any> 'enumeration'
    }
    export enum FieldTypeEnum {
        Textarea = <any> 'textarea',
        Text = <any> 'text',
        Date = <any> 'date',
        File = <any> 'file',
        Number = <any> 'number',
        Select = <any> 'select',
        Radio = <any> 'radio',
        Checkbox = <any> 'checkbox',
        Booleancheckbox = <any> 'booleancheckbox'
    }
}
