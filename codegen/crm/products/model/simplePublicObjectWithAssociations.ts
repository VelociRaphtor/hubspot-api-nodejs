/**
 * Products
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { CollectionResponseAssociatedId } from './collectionResponseAssociatedId';

export class SimplePublicObjectWithAssociations {
    'id': string;
    'properties': { [key: string]: string; };
    'createdAt': Date;
    'updatedAt': Date;
    'archived'?: boolean;
    'archivedAt'?: Date;
    'associations'?: { [key: string]: CollectionResponseAssociatedId; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date"
        },
        {
            "name": "archived",
            "baseName": "archived",
            "type": "boolean"
        },
        {
            "name": "archivedAt",
            "baseName": "archivedAt",
            "type": "Date"
        },
        {
            "name": "associations",
            "baseName": "associations",
            "type": "{ [key: string]: CollectionResponseAssociatedId; }"
        }    ];

    static getAttributeTypeMap() {
        return SimplePublicObjectWithAssociations.attributeTypeMap;
    }
}

