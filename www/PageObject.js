//
// PageObject.js
//
//  Copyright (c) 2012 - 2021 Kofax. Use of this code is with permission pursuant to Kofax license terms.

var ActionUtils = require("./ActionUtils");
var ImageObject = require("./ImageObject");
//start of Page Object

/**
 * @class
 * @alias PageObject
 * @constructor
 * @param {Object} options - which are used to create page object
 */
//PageObject constructor and corresponding methods
var PageObject = function (options) {
	this.images = new Array();
	for (var m = 0; m < options.images.length; m++) {
		var imgObj = new ImageObject(options.images[m]);
		this.images[m] = imgObj;
	}
	this.side = options.side;
	this.pageID = options.pageID;
	this.sheetID = options.sheetID;
	this.currentImageIndex = options.currentImageIndex;
	this.documentID = options.documentID;
};

/// Delete the page object from the current document
/**
 * Delete the page object from the current document
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS success call back
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are JSONException,KmcRuntimeException,Exception.
 *
 * @example
 * var pageObject = null;
 * kfxCordova.kfxLibLogistics.createPageObject(function(pageObj){
 *       pageObject = pageObj;
 * },function(error){
 *       alert(JSON.stringify(error));
 * });
 * pageObject.delete(function(success){
 *       alert(JSON.stringify(success));
 * },function(error){
 *       alert(JSON.stringify(error));
 * });
 */
PageObject.prototype.delete = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kloDeletePages,
		[[this.pageID]]
	);
};

/// Set the properties of the page
/**
 * Set the properties of the page
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Object} pageproperties - A JSON object contains the properties of the page object.
 *
 * @param {String} [pageproperties.pageID = null]
 *       unique id which is used to get the page and perform the corresponding operations
 *
 * @param {String} [pageproperties.side = "FRONT"]
 *       What side of the page i.e, either FRONT or BACK
 *
 * @return The return value is captured in the 'successCB' for a successful operation, and might return in 'errorCB' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCB :  KMC_SUCCESS success call back
 * errorCB :    error message would contain the appropriate error description.Possible error objects are KmcRuntimeException,Exception.
 *
 * @example
 * var pageObject = null;
 * kfxCordova.kfxLibLogistics.createPageObject(function(pageObj){
 *       pageObject = pageObj;
 * },function(error){
 *       alert(JSON.stringify(error));
 * });
 * pageObject.setProperties(function(success){
 *       alert(JSON.stringify(success));
 * },function(error){
 *       alert(JSON.stringify(error));
 * },{pageID:pageObject.pageID,side:"FRONT"});// use side:"BACK" to set back side pageobject properties
 */
PageObject.prototype.setProperties = function (successCallback, errorCallback, pageproperties) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kloSetPageProperties,
		[pageproperties]
	);
};

/// addImage to the current document
/**
 * This method adds an image object to the 'images' array property of the page. After the image is added, the currentImageIndex is updated to indicate that the most recent image is current.
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Object} properties - A JSON object contains the page and image ids.
 *
 * @param {String} [properties.pageID = null]
 *       unique id which is used to get the page and perform the corresponding operations
 *
 * @param {String} [properties.imageID = null]
 *       id of the image which we want to add to page
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS success call back
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are KmcRuntimeException,Exception.
 *
 * @see You can create the imageObject by using {@link ImageArray#getImageFromBase64 getImageFromBase64} or {@link ImageArray#getImageFromFilePath getImageFromFilePath}
 *
 * @example
 * var pageObject = null, imageObject = null;
 * kfxCordova.kfxLibLogistics.createPageObject(function(pageObj){
 *       pageObject = pageObj;
 * },function(error){
 *        alert(JSON.stringify(error));
 * });
 * pageObject.addImage(function(success){
 *        alert(JSON.stringify(success));
 * },function(error){
 *        alert(JSON.stringify(error));
 * },{pageID:pageObject.pageID,imageID:imageObject.imgID});
 */
PageObject.prototype.addImage = function (successCallback, errorCallback, properties) {
	var parent = this;
	ActionUtils.exec(
		function (result) {
			parent.images = new Array();
			for (var m = 0; m < result.images.length; m++) {
				var imgObj = new ImageObject(result.images[m]);
				parent.images[m] = imgObj;
			}
			if (successCallback) successCallback(parent);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kloAddImageToPage,
		[properties]
	);
};
///removeImage from the current document
/**
 * This method removes an image from the 'images' array property. The image to be removed is determined by matching the supplied imageID string to the contents of the images in the array.
 * If the current image is removed, the currentImageIndex is set to 0. Otherwise, the currentImageIndex refers to the same image.
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Object} properties - A JSON object contains the page and image ids.
 *
 * @param {String} [properties.pageID = null]
 *       unique id which is used to get the page and perform the corresponding operations
 *
 * @param {String} [properties.imageID = null]
 *       id of the image which we want to remove from page
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS success call back
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are KmcRuntimeException,Exception.
 *
 * @see You can create the imageObject by using {@link ImageArray#getImageFromBase64 getImageFromBase64} or {@link ImageArray#getImageFromFilePath getImageFromFilePath}
 *
 * @example
 * var pageObject = null, imageObject = null;
 * kfxCordova.kfxLibLogistics.createPageObject(function(pageObj){
 *       pageObject = pageObj;
 * },function(error){
 *       alert(JSON.stringify(error));
 * });
 * pageObject.removeImage(function(success){
 *       alert(JSON.stringify(success));
 * },function(error){
 *       alert(JSON.stringify(error));
 * },{pageID:pageObject.pageID,imageID:imageObject.imgID});
 */
PageObject.prototype.removeImage = function (successCallback, errorCallback, properties) {
	var parent = this;
	ActionUtils.exec(
		function (result) {
			parent.images = new Array();
			for (var m = 0; m < result.images.length; m++) {
				var imgObj = new ImageObject(result.images[m]);
				parent.images[m] = imgObj;
			}
			if (successCallback) successCallback(parent);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kloRemoveImageFromPage,
		[properties]
	);
};
/// Get the properties of the page
/**
 * Get the properties of the page
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS success call back with page Object properties.
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are KmcRuntimeException,Exception.
 *
 * @example
 * var pageObject = null;
 * kfxCordova.kfxLibLogistics.createPageObject(function(pageObj){
 *       pageObject = pageObj;
 * },function(error){
 *       alert(JSON.stringify(error));
 * });
 * pageObject.getProperties(function(properties){
 *       alert(JSON.stringify(properties));
 * },function(error){
 *       alert(JSON.stringify(error));
 * });
 * @endcode
 */
PageObject.prototype.getProperties = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kloGetPageProperties,
		[this.pageID]
	);
};
//End of Page Object

module.exports = PageObject;
