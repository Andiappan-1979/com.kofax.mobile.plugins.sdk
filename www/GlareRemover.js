//
// GlareRemover.js
//
//  Copyright (c) 2021 Kofax. Use of this code is with permission pursuant to Kofax license terms.

var ActionUtils = require("./ActionUtils");
var ImageObject = require("./ImageObject");

//Start of App Stats Methods
/// The Plugin object for the native Glare Remover class
/**
 * This GlareRemover class is responsible for handling the corresponding plugin js to interact with the native Glare Remover
 * class. To set and get the properties, and to access the instance methods, corresponding JS methods are written under this class which
 * are used by the end user in application script.
 * Use the Glare Remover object for removing the glare from images.
 *
 * @class
 * @alias GlareRemover
 * @constructor
 */
var GlareRemover = function () {};

/// Get the glare fraction for a given image.
/**
 * User calls this method to get the amount of glare on an image.
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Array} imageID: image ID that should be passed to get the glare fraction.
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  The library returns glare fraction.
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Exception,KmcException,JSONException.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var glareRemover = kfxCordova.kfxEngine.createGlareRemover();
 * glareRemover.getGlareFraction(successCallback,errorCallback,"ImageID");
 */
GlareRemover.prototype.getGlareFraction = function (successCallback, errorCallback, imageID) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kenGRGetGlareFraction,
		[imageID]
	);
};

/// Remove glare on the iamges which are passed in.
/**
 * User calls this method to remove glare using the passed in images.
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Array} imageIDs: A List of image IDs you would like to remove the glare. Should pass in two of these objects captured at different angles so that glare would be distributed at different places. Of these, the reference image that user wants to perform glare removal should be passed as the first object of the array.
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  The library returns glare free image.
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Exception,KmcException,JSONException.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var glareRemover = kfxCordova.kfxEngine.createGlareRemover();
 * glareRemover.removeGlare(successCallback,errorCallback,["ImageID1","ImageID2"]);
 */
GlareRemover.prototype.removeGlare = function (successCallback, errorCallback, imageIDs) {
	ActionUtils.exec(
		function (result) {
			var glareFreeImage = new ImageObject(result);
			if (successCallback) successCallback(glareFreeImage);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kenGRRemoveGlare,
		[imageIDs]
	);
};

//End of Glare Remover methods
module.exports = GlareRemover;
