//
// PagesArray.js
//
//  Copyright (c) 2012 - 2021 Kofax. Use of this code is with permission pursuant to Kofax license terms.

var ActionUtils = require("./ActionUtils");
var PageObject = require("./PageObject");

//Start of PagesArray
/**
 * @class
 * @alias PagesArray
 * @constructor
 */

var PagesArray = function () {};

/// Create new page object
/**
 * Method to Create new page object
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Object} pageproperties - A JSON object contains the properties of the page object.
 *
 * @param {String} {pageproperties.side = "FRONT"}
 *       what type of page you want to create i.e, front or back
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  Gets the created pageObject.
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Exception,KmcException,JSONException.
 *
 * @example
 * var pageObject = null;
 * var pagearray = kfxCordova.kfxLibLogistics.createPagesArray();
 * pagearray.createPageObject(function(pageObj){
 *       pageObject = pageObj;
 * },function(error){
 *       alert(JSON.stringify(error));
 * },{side:"FRONT"});// use side:"BACK" to create back side image
 */
PagesArray.prototype.createPageObject = function (successCallback, errorCallback, pageproperties) {
	ActionUtils.exec(
		function (result) {
			var pageObj = new PageObject(result);
			if (successCallback) successCallback(pageObj);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kloCreatePageObject,
		[pageproperties]
	);
};

/// Get all page ids from pageArray
/**
 * Method to get all page ids from pageArray
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCB :   KMC_SUCCESS success call back jsonArray of page ids.
 * errorCB :    error message would contain the appropriate error description.Possible error objects are Exception,KmcException,JSONException.
 *
 * @example
 * var pageIDArray = null;
 * var pagearray = kfxCordova.kfxLibLogistics.createPagesArray();
 * pagearray.getPageIds(function(pageIdArrays){
 *       pageIDArray = pageIdArrays;
 * },function(error){
 *       alert(JSON.stringify(error));
 * });
 */
PagesArray.prototype.getPageIds = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kloGetPageIds,
		[]
	);
};

/// Remove all pages from pageArray
/**
 * Method to remove all pages from pageArray
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  The library returns KMC_SUCCESS.
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Exception,KmcException,JSONException.
 *
 * @example
 * var pagearray = kfxCordova.kfxLibLogistics.createPagesArray();
 * pagearray.removeAllPages(function(success){
 *        alert(JSON.stringify(success));
 * },function(error){
 *        alert(JSON.stringify(error));
 * });
 */
PagesArray.prototype.removeAllPages = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kloRemoveAllPages,
		[]
	);
};
/// Delete pages from pageArray
/**
 * Method to delete pages from pageArray which you wants to delete.
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Array} pageIdArray - A JSON array contains the ids of the pages.
 *
 * @return The return value is captured in the 'successCB' for a successful operation, and might return in 'errorCB' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCB :  The library returns KMC_SUCCESS.
 * errorCB :    error message would contain the appropriate error description.Possible error objects are Exception,KmcException,JSONException.
 *
 * @see you can get the page ids by using {@link PagesArray#getPageIds getPageIds}
 *
 * @example
 * var pageIDArray = null;
 * var pagearray = kfxCordova.kfxLibLogistics.createPagesArray();
 * pagearray.deletePages(function(success){
 *        alert(JSON.stringify(success));
 * },function(error){
 *        alert(JSON.stringify(error));
 * },pageIDArray); //pageIDArray contains the pageids which you wants to delete.
 */
PagesArray.prototype.deletePages = function (successCallback, errorCallback, pageIdArray) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kloDeletePages,
		[pageIdArray]
	);
};
/// Add image to page from pageArray
/**
 * Method to Add image to page.After the image is added, the currentImageIndex is updated to indicate that the most recent image is current.
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
 * successCallback -   KMC_SUCCESS success call back with page Object properties.
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Exception,KmcException,JSONException.
 *
 * @see you can create page object by using {@link PagesArray#createPageObject createPageObject}
 * You can create the imageObject by using {@link ImageArray#getImageFromBase64 getImageFromBase64} or {@link ImageArray#getImageFromFilePath getImageFromFilePath}
 *
 * @example
 * var pageObject = null, imageObject = null;
 * var pagearray = kfxCordova.kfxLibLogistics.createPagesArray();
 * pagearray.addImageToPage(function(success){
 *        alert(JSON.stringify(success));
 * },function(error){
 *        alert(JSON.stringify(error));
 * },{pageID:pageObject.pageID,imageID:imageObject.imgID});
 */

PagesArray.prototype.addImageToPage = function (successCallback, errorCallback, parameters) {
	ActionUtils.exec(
		function (result) {
			var pageObj = new PageObject(result);
			if (successCallback) successCallback(pageObj);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kloAddImageToPage,
		[parameters]
	);
};
/// Remove image from page using pageArray
/**
 * Method to Remove image from page.The image to be removed is determined by matching the supplied imageID string to the contents of the images in the array.
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
 * successCallback -   KMC_SUCCESS success call back with page Object properties.
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Exception,KmcException,JSONException.
 *
 * @see you can create page object by using {@link PagesArray#createPageObject createPageObject}
 * You can create the imageObject by using {@link ImageArray#getImageFromBase64 getImageFromBase64} or {@link ImageArray#getImageFromFilePath getImageFromFilePath}
 *
 * @example
 * var pageObject = null, imageObject = null;
 * var pagearray = kfxCordova.kfxLibLogistics.createPagesArray();
 * pagearray.removeImageFromPage(function(success){
 *        alert(JSON.stringify(success));
 * },function(error){
 *        alert(JSON.stringify(error));
 * },{pageID:pageObject.pageID,imageID:imgObj.imgID});
 */
PagesArray.prototype.removeImageFromPage = function (successCallback, errorCallback, parameters) {
	ActionUtils.exec(
		function (result) {
			var pageObj = new PageObject(result);
			if (successCallback) successCallback(pageObj);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kloRemoveImageFromPage,
		[parameters]
	);
};
/// Get the properties of the page from PageArray
/**
 * Get the properties of the page from PageArray
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Object} pageproperties - A JSON object contains the properties of the page object.
 *
 * @param {String} [pageproperties.pageID = null]
 *       unique id which is used to get the page and perform the corresponding operations
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS success call back with page Object properties.
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are KmcRuntimeException,Exception.
 *
 * @example
 * var pagearray = kfxCordova.kfxLibLogistics.createPagesArray();
 * pagearray.getPropertiesOfPage(function(properties){
 *       alert(JSON.stringify(properties));
 * },function(error){
 *        alert(JSON.stringify(error));
 * },{pageID:pageObject.pageID});
 */
PagesArray.prototype.getPropertiesOfPage = function (successCallback, errorCallback, pageproperties) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kloGetPageProperties,
		[pageproperties]
	);
};
/// Set the properties of the page from PageArray
/**
 * Set the properties of the page from PageArray
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
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS success call back
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are KmcRuntimeException,Exception.
 *
 * @see you can create page object by using {@link PagesArray#createPageObject createPageObject}
 *
 * @example
 * var pageObject = null;
 * var pagearray = kfxCordova.kfxLibLogistics.createPagesArray();
 * pagearray.setPageProperties(function(success){
 *        alert(JSON.stringify(success));
 * },function(error){
 *        alert(JSON.stringify(error));
 * },{pageID:pageObject.pageID,side:"FRONT"}); // use side:"BACK" to set back side pageobject properties.
 */
PagesArray.prototype.setPageProperties = function (successCallback, errorCallback, pageproperties) {
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

//End of PagesArray

module.exports = PagesArray;
