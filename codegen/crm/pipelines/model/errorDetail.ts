/**
 * CRM Pipelines
 * Pipelines represent distinct stages in a workflow, like closing a deal or servicing a support ticket. These endpoints provide access to read and modify pipelines in HubSpot. Pipelines support `deals` and `tickets` object types.  ## Pipeline ID validation  When calling endpoints that take pipelineId as a parameter, that ID must correspond to an existing, un-archived pipeline. Otherwise the request will fail with a `404 Not Found` response.
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class ErrorDetail {
    /**
    * A human readable message describing the error along with remediation steps where appropriate
    */
    'message': string;
    /**
    * The name of the field or parameter in which the error was found.
    */
    '_in'?: string;
    /**
    * Context about the error condition
    */
    'context'?: { [key: string]: Array<string>; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "_in",
            "baseName": "in",
            "type": "string"
        },
        {
            "name": "context",
            "baseName": "context",
            "type": "{ [key: string]: Array<string>; }"
        }    ];

    static getAttributeTypeMap() {
        return ErrorDetail.attributeTypeMap;
    }
}

