//
// DocumentTypeObject.js
//
//  Copyright (c) 2012 - 2021 Kofax. Use of this code is with permission pursuant to Kofax license terms.

var ActionUtils = require("./ActionUtils");
//Start of DocumentTypeObject
/**
 * @class
 * @alias DocumentTypeObject
 * @constructor
 * @param {Object} properties the properties of the document type object
 */
var DocumentTypeObject = function (options) {
	this.typeName = options.typeName;
	this.displayName = options.displayName;
	this.version = options.version;
	this.fieldTypes = options.fieldTypes;
	this.docOrientation = options.docOrientation;
	this.docWidth = options.docWidth;
	this.docHeight = options.docHeight;
	this.ImagePerfectionProfile = options.ImagePerfectionProfile;
	this.BasicSettingsProfile = options.BasicSettingsProfile;
	this.sourceServer = options.sourceServer;
};
/**
 * this method is used to delete the document type from document type array
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -   KMC_SUCCESS success call back jsonArray of page ids.
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Exception,KmcException,JSONException.
 *
 * @example
 * var createdDocument = null;
 * var captureServer = null;
 * var documentTypesArray = null;
 * kfxCordova.kfxLibLogistics.createCaptureServer(function(captureServerObj){
 *      captureServer = captureServerObj;
 * },function(error){
 *      alert(JSON.stringify(error));
 * },{serverUrl:"valid url",serverType:"SERVER_KFS"});
 *
 * captureServer.registerDevice(function(success){
 *      captureServer.loginAnonymously(function(success){
 *          documentTypesArray = success;
 *      },function(registerError){
 *          alert(JSON.stringify(registerError));
 *      });
 * },function(registerError){
 *      alert(JSON.stringify(registerError));
 * });
 * var documentType = documentTypesArray[0];
 * var kfsdocumentTypeReadyCallback = function(documentType){
 *   documentType.delete(function(success){
 *       alert(JSON.stringify(success));
 *   },function(error){
 *       alert(JSON.stringify(error));
 *   });
 * };
 */
DocumentTypeObject.prototype.delete = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kloDeleteDocumentTypes,
		[[this.typeName]]
	);
};
/**
 * this method is used to get the properties of the document type
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -   KMC_SUCCESS success call back jsonArray of page ids.
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Exception,KmcException,JSONException.
 *
 * @example
 * var createdDocument = null;
 * var captureServer = null;
 * var documentTypesArray = null;
 * kfxCordova.kfxLibLogistics.createCaptureServer(function(captureServerObj){
 *      captureServer = captureServerObj;
 * },function(error){
 *      alert(JSON.stringify(error));
 * },{serverUrl:"valid url",serverType:"SERVER_KFS"});
 *
 * captureServer.registerDevice(function(success){
 *      captureServer.loginAnonymously(function(success){
 *          documentTypesArray = success;
 *      },function(registerError){
 *          alert(JSON.stringify(registerError));
 *      });
 * },function(registerError){
 *      alert(JSON.stringify(registerError));
 * });
 * var documentType = documentTypesArray[0];
 * var kfsdocumentTypeReadyCallback = function(documentType){
 *   documentType.getProperties(function(success){
 *       alert(JSON.stringify(success));
 *   },function(error){
 *       alert(JSON.stringify(error));
 *   });
 * };
 */
DocumentTypeObject.prototype.getProperties = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kloGetDocumentTypeProperties,
		[this.typeName]
	);
};
//End of Document Type Object

module.exports = DocumentTypeObject;
