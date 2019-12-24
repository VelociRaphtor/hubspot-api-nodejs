/**
 * CRM Objects
 * CRM objects such as companies, contacts, deals, line items, products, tickets, and quotes are native objects in HubSpot’s CRM. These core building blocks support custom properties, store critical information, and play a central role in the HubSpot application.  ## Supported Object Types  This API provides access to collections of CRM objects, which return a map of property names to values. Each object type has its own set of default properties, which can be found by exploring the [CRM Object Properties API](https://developers.hubspot.com/docs/methods/crm-properties/crm-properties-overview).  |Object Type |Properties returned by default | |--|--| | `companies` | `name`, `domain` | | `contacts` | `firstname`, `lastname`, `email` | | `deals` | `dealname`, `amount`, `closedate`, `pipeline`, `dealstage` | | `products` | `name`, `description`, `price` | | `tickets` | `content`, `hs_pipeline`, `hs_pipeline_stage`, `hs_ticket_category`, `hs_ticket_priority`, `subject` |  Find a list of all properties for an object type using the [CRM Object Properties](https://developers.hubspot.com/docs/methods/crm-properties/get-properties) API. e.g. `GET https://api.hubapi.com/properties/v2/companies/properties`. Change the properties returned in the response using the `properties` array in the request body.
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import localVarRequest = require('request');
import http = require('http');

/* tslint:disable:no-unused-locals */
import { CollectionResponseSimplePublicObjectId } from '../model/collectionResponseSimplePublicObjectId';
import { SimplePublicObject } from '../model/simplePublicObject';

import { ObjectSerializer, Authentication, HttpBasicAuth, ApiKeyAuth, OAuth, VoidAuth } from '../model/models';

let defaultBasePath = 'https://api.hubapi.com/crm/v3/objects';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum AssociationsApiApiKeys {
    hapikey,
}

export class AssociationsApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'hapikey': new ApiKeyAuth('query', 'hapikey'),
        'oauth2': new OAuth(),
    }

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: AssociationsApiApiKeys, value: string) {
        (this.authentications as any)[AssociationsApiApiKeys[key]].apiKey = value;
    }

    set accessToken(token: string) {
        this.authentications.oauth2.accessToken = token;
    }

    /**
     * 
     * @summary Remove an association between two objects
     * @param objectType 
     * @param objectId 
     * @param associatedObjectType 
     * @param toObjectId 
     */
    public archiveAssociation (objectType: string, objectId: string, associatedObjectType: string, toObjectId: string) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/{objectType}/{objectId}/associations/{associatedObjectType}/{toObjectId}'
            .replace('{' + 'objectType' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'objectId' + '}', encodeURIComponent(String(objectId)))
            .replace('{' + 'associatedObjectType' + '}', encodeURIComponent(String(associatedObjectType)))
            .replace('{' + 'toObjectId' + '}', encodeURIComponent(String(toObjectId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new Error('Required parameter objectType was null or undefined when calling archiveAssociation.');
        }

        // verify required parameter 'objectId' is not null or undefined
        if (objectId === null || objectId === undefined) {
            throw new Error('Required parameter objectId was null or undefined when calling archiveAssociation.');
        }

        // verify required parameter 'associatedObjectType' is not null or undefined
        if (associatedObjectType === null || associatedObjectType === undefined) {
            throw new Error('Required parameter associatedObjectType was null or undefined when calling archiveAssociation.');
        }

        // verify required parameter 'toObjectId' is not null or undefined
        if (toObjectId === null || toObjectId === undefined) {
            throw new Error('Required parameter toObjectId was null or undefined when calling archiveAssociation.');
        }


        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.hapikey.applyToRequest(localVarRequestOptions);

        this.authentications.oauth2.applyToRequest(localVarRequestOptions);

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary Associate two objects
     * @param objectType 
     * @param objectId 
     * @param associatedObjectType 
     * @param toObjectId 
     */
    public createAssociation (objectType: string, objectId: string, associatedObjectType: string, toObjectId: string) : Promise<{ response: http.IncomingMessage; body: SimplePublicObject;  }> {
        const localVarPath = this.basePath + '/{objectType}/{objectId}/associations/{associatedObjectType}/{toObjectId}'
            .replace('{' + 'objectType' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'objectId' + '}', encodeURIComponent(String(objectId)))
            .replace('{' + 'associatedObjectType' + '}', encodeURIComponent(String(associatedObjectType)))
            .replace('{' + 'toObjectId' + '}', encodeURIComponent(String(toObjectId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new Error('Required parameter objectType was null or undefined when calling createAssociation.');
        }

        // verify required parameter 'objectId' is not null or undefined
        if (objectId === null || objectId === undefined) {
            throw new Error('Required parameter objectId was null or undefined when calling createAssociation.');
        }

        // verify required parameter 'associatedObjectType' is not null or undefined
        if (associatedObjectType === null || associatedObjectType === undefined) {
            throw new Error('Required parameter associatedObjectType was null or undefined when calling createAssociation.');
        }

        // verify required parameter 'toObjectId' is not null or undefined
        if (toObjectId === null || toObjectId === undefined) {
            throw new Error('Required parameter toObjectId was null or undefined when calling createAssociation.');
        }


        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.hapikey.applyToRequest(localVarRequestOptions);

        this.authentications.oauth2.applyToRequest(localVarRequestOptions);

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: SimplePublicObject;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "SimplePublicObject");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * 
     * @summary List associations of an object by type
     * @param objectType 
     * @param objectId 
     * @param associatedObjectType 
     */
    public getAssociations (objectType: string, objectId: string, associatedObjectType: string) : Promise<{ response: http.IncomingMessage; body: CollectionResponseSimplePublicObjectId;  }> {
        const localVarPath = this.basePath + '/{objectType}/{objectId}/associations/{associatedObjectType}'
            .replace('{' + 'objectType' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'objectId' + '}', encodeURIComponent(String(objectId)))
            .replace('{' + 'associatedObjectType' + '}', encodeURIComponent(String(associatedObjectType)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new Error('Required parameter objectType was null or undefined when calling getAssociations.');
        }

        // verify required parameter 'objectId' is not null or undefined
        if (objectId === null || objectId === undefined) {
            throw new Error('Required parameter objectId was null or undefined when calling getAssociations.');
        }

        // verify required parameter 'associatedObjectType' is not null or undefined
        if (associatedObjectType === null || associatedObjectType === undefined) {
            throw new Error('Required parameter associatedObjectType was null or undefined when calling getAssociations.');
        }


        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.hapikey.applyToRequest(localVarRequestOptions);

        this.authentications.oauth2.applyToRequest(localVarRequestOptions);

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: CollectionResponseSimplePublicObjectId;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "CollectionResponseSimplePublicObjectId");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
