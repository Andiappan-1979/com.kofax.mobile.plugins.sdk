//
// DocumentTypesArray.js
//
//  Copyright (c) 2012 - 2021 Kofax. Use of this code is with permission pursuant to Kofax license terms.

var ActionUtils = require("./ActionUtils");
var DocumentTypeObject = require("./DocumentTypeObject");

//Start of DocumentTypesArray
/**
 * @class
 * @alias DocumentTypesArray
 * @constructor
 */
var DocumentTypesArray = function () {};
/**
 * this method is used to create the document type
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Array} fieldTypesArray - list of field types
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
 * var docarray = kfxCordova.kfxLibLogistics.createDocumentsArray();
 * var kfsdocumentTypeReadyCallback = function(documentType){
 *   docarray.createDocumentTypeObjectWithFieldTypesArray(function(success){
 *       alert(JSON.stringify(success));
 *   },function(error){
 *       alert(JSON.stringify(error));
 *   }, documentType.fieldTypesArray);
 * };
 */
DocumentTypesArray.prototype.createDocumentTypeObjectWithFieldTypesArray = function (
	successCallback,
	errorCallback,
	fieldTypesArray
) {
	ActionUtils.exec(
		function (result) {
			var documentTypeObj = new DocumentTypeObject(result);
			if (successCallback) successCallback(documentTypeObj);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kloCreateDocumentTypeWithFieldTypes,
		[fieldTypesArray]
	);
};
/**
 * this method is used to get all document type names
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
 * var docarray = kfxCordova.kfxLibLogistics.createDocumentsArray();
 * var kfsdocumentTypeReadyCallback = function(documentType){
 *   docarray.getDocumentTypes(function(success){
 *       alert(JSON.stringify(success));
 *   },function(error){
 *       alert(JSON.stringify(error));
 *   });
 * };
 */
DocumentTypesArray.prototype.getDocumentTypes = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kloGetDocumentTypes,
		[]
	);
};
/**
 * this method is used to delete all document types
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
 * var docarray = kfxCordova.kfxLibLogistics.createDocumentsArray();
 * var kfsdocumentTypeReadyCallback = function(documentType){
 *   docarray.removeAllDocumentTypes(function(success){
 *       alert(JSON.stringify(success));
 *   },function(error){
 *       alert(JSON.stringify(error));
 *   });
 * };
 */
DocumentTypesArray.prototype.removeAllDocumentTypes = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kloRemoveAllDocumentTypes,
		[]
	);
};
/**
 * this method is used to delete the document types from document type array
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Array} documentTypeNameArray - list of the doucment type names
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
 * var docarray = kfxCordova.kfxLibLogistics.createDocumentsArray();
 * var kfsdocumentTypeReadyCallback = function(documentType){
 *   docarray.deleteDocumentTypes(function(success){
 *       alert(JSON.stringify(success));
 *   },function(error){
 *       alert(JSON.stringify(error));
 *   },[documentType.typeName]);
 * };
 */
DocumentTypesArray.prototype.deleteDocumentTypes = function (successCallback, errorCallback, documentTypeNameArray) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kloDeleteDocumentTypes,
		[documentTypeNameArray]
	);
};
/**
 * this method is used to get the properties of the document type
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {String} documentTypeName - name of the doucment type
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
 * var docarray = kfxCordova.kfxLibLogistics.createDocumentsArray();
 * var kfsdocumentTypeReadyCallback = function(documentType){
 *   docarray.getPropertiesOfDocumentType(function(success){
 *       alert(JSON.stringify(success));
 *   },function(error){
 *       alert(JSON.stringify(error));
 *   },documentType.typeName);
 * };
 */
DocumentTypesArray.prototype.getPropertiesOfDocumentType = function (successCallback, errorCallback, documentTypeName) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kloGetDocumentTypeProperties,
		[documentTypeName]
	);
};

//End of DocumentTypesArray

module.exports = DocumentTypesArray;
