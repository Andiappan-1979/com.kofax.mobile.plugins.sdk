//
// DocumentsArray.js
//
//  Copyright (c) 2012 - 2021 Kofax. Use of this code is with permission pursuant to Kofax license terms.

var ActionUtils = require("./ActionUtils");
var DocumentObject = require("./DocumentObject");
var PageObject = require("./PageObject");

//Start of Documents Array
/**
 * @class
 * @alias DocumentsArray
 * @constructor
 */
var DocumentsArray = function () {};
/// Get all document ids from DocumentsArray
/**
 * Method to get all document ids from DocumentsArray
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -   KMC_SUCCESS success call back jsonArray of page ids.
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Exception,KmcException,JSONException.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var docarray = kfxCordova.kfxLibLogistics.createDocumentsArray();
 * docarray.getDocumentIds(successCallback,errorCallback);
 */
DocumentsArray.prototype.getDocumentIds = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kloGetDocumentIds,
		[]
	);
};
/// Remove all documents from DocumentsArray
/**
 * Method to remove all documents from DocumentsArray
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  The library returns KMC_SUCCESS.
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Exception,KmcException,JSONException.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var docarray = kfxCordova.kfxLibLogistics.createDocumentsArray();
 * docarray.removeAllDocuments(successCallback,errorCallback);
 */
DocumentsArray.prototype.removeAllDocuments = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kloRemoveAllDocuments,
		[]
	);
};
/// Create document using documentType
/**
 * Method to Create document using documentType and add in DocumentsArray.
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {String} docTypeName - A JSON object contains the documenttype name.
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  The library returns KMC_SUCCESS.
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

 * captureServer.registerDevice(function(success){
 *      captureServer.loginAnonymously(function(success){
 *          documentTypesArray = success;
 *      },function(registerError){
 *          alert(JSON.stringify(registerError));
 *      });
 * },function(registerError){
 *      alert(JSON.stringify(registerError));
 * });
 *
 * kfxCordova.kfxLibLogistics.createDocumentWithDocumentType(function(docObject){
 *     createdDocument = docObject;
 * },function(createDocumentError){
 *      alert(JSON.stringify(createDocumentError));
 * },documentTypesArray[0].typeName);
 *
 */
DocumentsArray.prototype.createDocumentWithDocumentType = function (successCallback, errorCallback, docTypeName) {
	ActionUtils.exec(
		function (result) {
			var documentObj = new DocumentObject(result);
			if (successCallback) successCallback(documentObj);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kloCreateDocumentWithDocumentType,
		[docTypeName]
	);
};
/// Create document using documentType and id
/**
 * Method to Create document using documentType and id and add in DocumentsArray.
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Object} docTypeNameAndId :A JSON object contains the documenttype name and id.
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  The library returns KMC_SUCCESS.
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
 *
 * var kfsdocumentTypeReadyCallback = function(documentType){
 *   docarray.createDocumentWithDocumentTypeAndId(function(docObject){
 *       createdDocument = docObject;
 *   },function(error){
 *       alert(JSON.stringify(error));
 *   },{ documentTypeName:documentTypesArray[0].typeName, documentID: "document id what do you want to give"});
 * };
 *
 */
DocumentsArray.prototype.createDocumentWithDocumentTypeAndId = function (
	successCallback,
	errorCallback,
	docTypeNameAndId
) {
	ActionUtils.exec(
		function (result) {
			var documentObj = new DocumentObject(result);
			if (successCallback) successCallback(documentObj);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kloCreateDocumentWithDocumentTypeAndId,
		[docTypeNameAndId]
	);
};
/// Delete Documents from DocumentsArray
/**
 * Method to Delete Documents from DocumentsArray which you wants to delete.
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Array} documentIDs:A JSON array contains the ids of the documents.
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  The library returns KMC_SUCCESS.
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Exception,KmcException,JSONException.
 *
 * @example
 * var docIDArray = [];
 * var docarray = kfxCordova.kfxLibLogistics.createDocumentsArray();
 * docarray.deleteDocuments(function(success){
 *       alert(JSON.stringify(success));
 * },function(error){
 *       alert(JSON.stringify(error));
 * },docIDArray); //docIDArray contains the Docids which you wants to delete.
 */
DocumentsArray.prototype.deleteDocuments = function (successCallback, errorCallback, documentIDs) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kloDeleteDocuments,
		[documentIDs]
	);
};

/// Get the properties of the Document from DocumentsArray
/**
 * Get the properties of the Document from DocumentsArray
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Object} documentID - A JSON object contains the document id.
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS success call back with document Object properties.
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are KmcRuntimeException,Exception.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var createdDocument = null;
 * var docarray = kfxCordova.kfxLibLogistics.createDocumentsArray();
 * kfxCordova.kfxLibLogistics.createDocumentWithDocumentType(function(docObject){
 *    createdDocument = docObject;
 * },function(error){
 *    alert(JSON.stringify(error));
 * },"document type name");
 * docarray.getPropertiesOfDocument(successCallback,errorCallback,{documentID : createdDocument.documentID});
 */
DocumentsArray.prototype.getPropertiesOfDocument = function (successCallback, errorCallback, documentID) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kloGetDocumentProperties,
		[documentID]
	);
};

/// Update the fields of the Document
/**
 * Update the fields of the Document
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Object} parameters - A JSON object contains the documentType id and fields array.
 *
 * @param {String} [parameters.documentID] - the id of the document in which you want to update the fields
 *
 * @param {Array} [parameters.fields] - updated list of fields
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS success call back .
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are KmcRuntimeException,Exception.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var createdDocument = null;
 * var docarray = kfxCordova.kfxLibLogistics.createDocumentsArray();
 * kfxCordova.kfxLibLogistics.createDocumentWithDocumentType(function(docObject){
 *       createdDocument = docObject;
 * },function(error){
 *       alert(JSON.stringify(error));
 * },"document type name");
 * docarray.updateFieldsOfDocument(successCallback,errorCallback,{documentID:createdDocument.documentID,fields:createdDocument.fields});
 */
DocumentsArray.prototype.updateFieldsOfDocument = function (successCallback, errorCallback, parameters) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kloUpdateFields,
		[parameters]
	);
};

///Add page to the Document
/**
 * Method to Add page to the Document
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Object} parameters - A JSON object contains the documenttype and page ids.
 *
 * @param {String} [parameters.documentID=""] id of the document where you would like to add the page
 *
 * @param {String} [parameters.pageID=""] id of the page you want to add to document
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS success call back .
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are KmcRuntimeException,Exception.
 *
 * @example
 * var createdDocument = null;
 * var pageObject = null;
 * var pagearray = kfxCordova.kfxLibLogistics.createPagesArray();
 * var docarray = kfxCordova.kfxLibLogistics.createDocumentsArray();
 * pagearray.createPageObject(function(pageObj){
 *      pageObject = pageObj;
 * },function(error){
 *      alert(JSON.stringify(error));
 * },{side:"FRONT"});// use side:"BACK" to create back side image
 * kfxCordova.kfxLibLogistics.createDocumentWithDocumentType(function(docObject){
 *    createdDocument = docObject;
 * },function(error){
 *    alert(JSON.stringify(error));
 * },"document type name");
 * docarray.addPageToDocument(function(document){
 *    alert("updated document is "+ JSON.stringify(document));
 * },function(error){
 *    alert (JSON.stringify(error));
 * },{documentID:createdDocument.documentID,pageID:pageObject.pageID});
 */
DocumentsArray.prototype.addPageToDocument = function (successCallback, errorCallback, parameters) {
	ActionUtils.exec(
		function (result) {
			var docObj = new DocumentObject(result);
			if (successCallback) successCallback(docObj);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kloAddPageToDocument,
		[parameters]
	);
};

///Remove page to the Document
/**
 * Method to remove page to the Document
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Object} parameters - A JSON object contains the documenttype and page ids.
 *
 * @param {String} [parameters.documentID=""] id of the document where you would like to remove the page
 *
 * @param {String} [parameters.pageID=""] id of the page you want to remove from document
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS success call back.
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are KmcRuntimeException,Exception.
 *
 * @example
 * var createdDocument =null;
 * var pageObject = null;
 * var pagearray = kfxCordova.kfxLibLogistics.createPagesArray();
 * var docarray = kfxCordova.kfxLibLogistics.createDocumentsArray();
 * pagearray.createPageObject(function(pageObj){
 *      pageObject = pageObj;
 * },function(error){
 *      alert(JSON.stringify(error));
 * },{side:"FRONT"});// use side:"BACK" to create back side image
 * kfxCordova.kfxLibLogistics.createDocumentWithDocumentType(function(docObject){
 *    createdDocument = docObject;
 * },function(error){},"document type name");
 * docarray.removePageFromDocument(function(document){
 *    alert("updated document is "+ JSON.stringify(document));
 * },function(error){
 *    alert(JSON.stringify(error));
 * },{documentID:createdDocument.documentID,pageID:pageObject.pageID});
 */
DocumentsArray.prototype.removePageFromDocument = function (successCallback, errorCallback, parameters) {
	ActionUtils.exec(
		function (result) {
			var docObj = new DocumentObject(result);
			if (successCallback) successCallback(docObj);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kloRemovePageFromDocument,
		[parameters]
	);
};

//End of Documents Array

module.exports = DocumentsArray;
