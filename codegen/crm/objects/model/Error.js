/**
 * CRM Objects
 * CRM objects such as companies, contacts, deals, line items, products, tickets, and quotes are native objects in HubSpot’s CRM. These core building blocks support custom properties, store critical information, and play a central role in the HubSpot application.  ## Supported Object Types  This API provides access to collections of CRM objects, which return a map of property names to values. Each object type has its own set of default properties, which can be found by exploring the [CRM Object Properties API](https://developers.hubspot.com/docs/methods/crm-properties/crm-properties-overview).  |Object Type |Properties returned by default | |--|--| | `companies` | `name`, `domain` | | `contacts` | `firstname`, `lastname`, `email` | | `deals` | `dealname`, `amount`, `closedate`, `pipeline`, `dealstage` | | `products` | `name`, `description`, `price` | | `tickets` | `content`, `hs_pipeline`, `hs_pipeline_stage`, `hs_ticket_category`, `hs_ticket_priority`, `subject` |  Find a list of all properties for an object type using the [CRM Object Properties](https://developers.hubspot.com/docs/methods/crm-properties/get-properties) API. e.g. `GET https://api.hubapi.com/properties/v2/companies/properties`. Change the properties returned in the response using the `properties` array in the request body.
 *
 * OpenAPI spec version: v3
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.8
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ErrorDetail'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ErrorDetail'));
  } else {
    // Browser globals (root is window)
    if (!root.CrmObjects) {
      root.CrmObjects = {};
    }
    root.CrmObjects.Error = factory(root.CrmObjects.ApiClient, root.CrmObjects.ErrorDetail);
  }
}(this, function(ApiClient, ErrorDetail) {
  'use strict';




  /**
   * The Error model module.
   * @module model/Error
   * @version v3
   */

  /**
   * Constructs a new <code>Error</code>.
   * @alias module:model/Error
   * @class
   * @param message {String} A human readable message describing the error along with remediation steps where appropriate
   * @param correlationId {String} A unique identifier for the request. Include this value with any error reports or support tickets
   * @param category {String} The error category
   */
  var exports = function(message, correlationId, category) {
    var _this = this;

    _this['message'] = message;
    _this['correlationId'] = correlationId;
    _this['category'] = category;



  };

  /**
   * Constructs a <code>Error</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Error} obj Optional instance to populate.
   * @return {module:model/Error} The populated <code>Error</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('correlationId')) {
        obj['correlationId'] = ApiClient.convertToType(data['correlationId'], 'String');
      }
      if (data.hasOwnProperty('category')) {
        obj['category'] = ApiClient.convertToType(data['category'], 'String');
      }
      if (data.hasOwnProperty('errors')) {
        obj['errors'] = ApiClient.convertToType(data['errors'], [ErrorDetail]);
      }
      if (data.hasOwnProperty('context')) {
        obj['context'] = ApiClient.convertToType(data['context'], {'String': ['String']});
      }
      if (data.hasOwnProperty('links')) {
        obj['links'] = ApiClient.convertToType(data['links'], {'String': 'String'});
      }
    }
    return obj;
  }

  /**
   * A human readable message describing the error along with remediation steps where appropriate
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * A unique identifier for the request. Include this value with any error reports or support tickets
   * @member {String} correlationId
   */
  exports.prototype['correlationId'] = undefined;
  /**
   * The error category
   * @member {String} category
   */
  exports.prototype['category'] = undefined;
  /**
   * further information about the error
   * @member {Array.<module:model/ErrorDetail>} errors
   */
  exports.prototype['errors'] = undefined;
  /**
   * Context about the error condition
   * @member {Object.<String, Array.<String>>} context
   */
  exports.prototype['context'] = undefined;
  /**
   * A map of link names to associated URIs containing documentation about the error or recommended remediation steps
   * @member {Object.<String, String>} links
   */
  exports.prototype['links'] = undefined;



  return exports;
}));

