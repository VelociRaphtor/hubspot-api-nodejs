/**
 * Timeline events
 * This feature allows an app to create and configure custom events that can show up in the timelines of certain CRM object like contacts, companies, or deals. You\'ll find multiple use cases for this API in the sections below.
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { TimelineEventResponse } from './timelineEventResponse';

/**
* The state of the batch event request.
*/
export class BatchResponseTimelineEventResponse {
    /**
    * Successfully created events.
    */
    'results': Array<TimelineEventResponse>;
    /**
    * The number of events that weren\'t created because of an error.
    */
    'numErrors'?: number;
    /**
    * The events that weren\'t created.
    */
    'errors'?: Array<Error>;
    /**
    * The status of the batch response. Should always be COMPLETED if processed.
    */
    'status': BatchResponseTimelineEventResponse.StatusEnum;
    /**
    * The time the request occurred.
    */
    'requestedAt'?: Date;
    /**
    * The time the request began processing.
    */
    'startedAt': Date;
    /**
    * The time the request was completed.
    */
    'completedAt': Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<TimelineEventResponse>"
        },
        {
            "name": "numErrors",
            "baseName": "numErrors",
            "type": "number"
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<Error>"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "BatchResponseTimelineEventResponse.StatusEnum"
        },
        {
            "name": "requestedAt",
            "baseName": "requestedAt",
            "type": "Date"
        },
        {
            "name": "startedAt",
            "baseName": "startedAt",
            "type": "Date"
        },
        {
            "name": "completedAt",
            "baseName": "completedAt",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return BatchResponseTimelineEventResponse.attributeTypeMap;
    }
}

export namespace BatchResponseTimelineEventResponse {
    export enum StatusEnum {
        PENDING = <any> 'PENDING',
        PROCESSING = <any> 'PROCESSING',
        CANCELED = <any> 'CANCELED',
        COMPLETE = <any> 'COMPLETE'
    }
}