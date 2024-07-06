//
// DocumentObject.js
//
//  Copyright (c) 2012 - 2021 Kofax. Use of this code is with permission pursuant to Kofax license terms.

var ActionUtils = require("./ActionUtils");
var DocumentTypeObject = require("./DocumentTypeObject");
var PageObject = require("./PageObject");

//Start of Document Object

/**
 * @class
 * @alias DocumentObject
 * @constructor
 */
var DocumentObject = function (options) {
	this.documentType = new DocumentTypeObject(options.documentType);
	this.fields = options.fields;
	this.pages = new Array();
	for (var m = 0; m < options.pages.length; m++) {
		var pageObj = new PageObject(options.pages[m]);
		this.pages[m] = pageObj;
	}
	this.documentID = options.documentID;
	this.transactionID = options.transactionID;
};

/// Delete the document object from the documentArray
/**
 * Delete the document object from the documentArray
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS success call back
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are JSONException,KmcRuntimeException,Exception.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var createdDocument = null;
 * kfxCordova.kfxLibLogistics.createDocumentWithDocumentType(function(docObject){
 *    createdDocument = docObject;
 * },function(error){
 *    alert(JSON.stringify(error));
 * },"document type name");
 * createdDocument.delete(successCallback,errorCallback);
 */
DocumentObject.prototype.delete = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kloDeleteDocuments,
		[[this.documentID]]
	);
};

/// Get the properties of the document
/**
 * Get the properties of the document
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error call back function name
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
 * kfxCordova.kfxLibLogistics.createDocumentWithDocumentType(function(docObject){
 *    createdDocument = docObject;
 * },function(error){
 *    alert(JSON.stringify(error));
 * },"document type name");
 * createdDocument.getProperties(successCallback,errorCallback);
 */
DocumentObject.prototype.getProperties = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kloGetDocumentProperties,
		[this.documentID]
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
 * kfxCordova.kfxLibLogistics.createDocumentWithDocumentType(function(docObject){
 *       createdDocument = docObject;
 * },function(error){
 *       alert(JSON.stringify(error));
 * },"document type name");
 * createdDocument.updateFields(successCallback,errorCallback,{documentID:createdDocument.documentID,fields:createdDocument.fields});
 */
DocumentObject.prototype.updateFields = function (successCallback, errorCallback, parameters) {
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
 * Add page to the Document
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
 * createdDocument.addPage(function(document){
 *    alert("updated document is "+ JSON.stringify(document));
 * },function(error){
 *    alert (JSON.stringify(error));
 * },{documentID:createdDocument.documentID,pageID:pageObject.pageID});
 */

DocumentObject.prototype.addPage = function (successCallback, errorCallback, parameters) {
	var parent = this;
	ActionUtils.exec(
		function (result) {
			parent.pages = new Array();
			for (var m = 0; m < result.pages.length; m++) {
				var pageObj = new PageObject(result.pages[m]);
				parent.pages[m] = pageObj;
			}
			if (successCallback) successCallback(parent);
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
 * pagearray.createPageObject(function(pageObj){
 *      pageObject = pageObj;
 * },function(error){
 *      alert(JSON.stringify(error));
 * },{side:"FRONT"});// use side:"BACK" to create back side image
 * kfxCordova.kfxLibLogistics.createDocumentWithDocumentType(function(docObject){
 *    createdDocument = docObject;
 * },function(error){},"document type name");
 * createdDocument.removePage(function(document){
 *    alert("updated document is "+ JSON.stringify(document));
 * },function(error){
 *    alert(JSON.stringify(error));
 * },{documentID:createdDocument.documentID,pageID:pageObject.pageID});
 */
DocumentObject.prototype.removePage = function (successCallback, errorCallback, parameters) {
	var parent = this;
	ActionUtils.exec(
		function (result) {
			parent.pages = new Array();
			for (var m = 0; m < result.pages.length; m++) {
				var pageObj = new PageObject(result.pages[m]);
				parent.pages[m] = pageObj;
			}
			if (successCallback) successCallback(parent);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kloRemovePageFromDocument,
		[parameters]
	);
};
//End of Document Object

module.exports = DocumentObject;
