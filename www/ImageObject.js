//
// ImageObject.js
//
//  Copyright (c) 2012 - 2021 Kofax. Use of this code is with permission pursuant to Kofax license terms.

var ActionUtils = require("./ActionUtils");
/**
 * @class
 * @alias ImageObject
 * @constructor
 * @param image - image properties which are used to create the image object
 */

var ImageObject = function (image) {
	this.imgID = image.ID;
	this.imgBitmapWidth = image.width;
	this.imgBitmapHeight = image.height;
	this.imgBitmapScaling = image.bitmapScaling;
	this.imgTag = image.tag;
	this.imgSrcID = image.srcID;
	this.imgMetaData = image.metaData;
	this.imgLatitude = image.latitude;
	this.imgLongitude = image.longitude;
	this.imgPitch = image.pitch;
	this.imgRoll = image.roll;
	this.imgCreateDateTime = image.createDateTime;
	this.imgDPI = image.dpi;
	this.imgJpegQuality = image.jpegQuality;
	this.imageFilePath = image.filePath;
	this.imageMimeType = image.mimeType;
	this.imageRepresentation = image.representation;
	this.imageFileWidth = image.fileWidth;
	this.imageFileHeight = image.fileHeight;
	this.imageFileRep = image.fileRep;
	this.imagePerfectProfileUsed = image.perfectProfileUsed;
	this.basicSettingsProfileUsed = image.basicSettingsProfileUsed;
	this.imageQuickAnalysisFeedBack = image.QuickAnalysisFeedback;
	this.imageOutputColor = image.outputColor;
	this.barcodes = image.barcodes;
	this.classificationResults = image.classificationResults;
};

/// To generate a base64 string (of an ImageObject)
/**
 * Method to convert an image to the form of base64string from a Image.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return The return value is captured in the 'successCallback' function and will have the base64 string of the image
 * successCallback -  Get the base 64 string.
 * errorCallback -    Error message would contain the appropriate error description.Possible error is Wrong ImageID.
 *
 * @see Check the 'errorCallback' method for any failures in case of unexpected behaviour of the method. Generally the error call back
 * would return a JSON object with ErrorMsg & ErrorDesc' giving the description of the error.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var imageObj =  kfxCordova.kfxEngine.createImageObject();
 * imageObj.base64Image(successCallback,errorCallback);
 */

ImageObject.prototype.base64Image = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.getBase64ImageWithId,
		[this.imgID]
	);
};
/// To get the raw binary data buffer of the Image.
/**
 * Method to get raw binary data buffer of the Image.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return The return value is captured in the 'successCallback' function and will have ArrayBuffer of the image.
 * successCallback -  Get the image ArrayBuffer.
 * errorCallback -    Error message would contain the appropriate error description.Possible errors are Wrong ImageID, ArrayBuffer conversion failed.
 *
 * @see Check the 'errorCallback' method for any failures in case of unexpected behaviour of the method. Generally the error call back
 * would return a JSON object with ErrorMsg & ErrorDesc' giving the description of the error.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var imageObj =  kfxCordova.kfxEngine.createImageObject();
 * imageObj.getBlob(successCallback,errorCallback);
 */
ImageObject.prototype.getBlob = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.getImageAsBlob,
		[this.imgID]
	);
};

/// To write the image to the disk.
/**
 * Method to write the Images to a disk. SpecifyFilePath and imageWriteToFile methods of Image are used here.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Object} parameters - image Id you would like to write and File Path where you want to write.
 *
 * @param {String} [parameters.imageID] image id you would like to write
 *
 * @param {String} [parameters.filePath] filepath where you want to write. The filepath needs to include imageName with extension(ex:imageName.png).
 * In iOS, it is not required to pass the documents directory path because internally MobileSDK is getting the documents directory path and appending the file path which is coming from the user.
 * In Android, if we pass imageName with extension then the image will write to phone internal storage. If we pass SD card full path (ex:/storage/emulated/0/imageName.png) then the image will write to SD card.
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions.
 * successCallback -  KMC_SUCCESS success call back.
 *   errorCallback -    Error message would contain the appropriate error description.Possible errors are Failed to complete Action - check parameters passed,Failed to write Image to File - Given Image already in File format.,
 *   Given File extension is different from Image Mime Type,File path is Invalid,KmcRuntimeException,KmcException.
 *
 * @see Check the 'errorCallback' method for any failures in case of unexpected behaviour of the method. Generally the error call back
 * would return a JSON object with 'ErrorMsg' & 'ErrorDesc' giving the description of the error.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var imageObj =  kfxCordova.kfxEngine.createImageObject();
 * imageObj.imageWriteToFile(successCallback,errorCallback,{
 *   imageID:"imageID value",
 *   filePath:"imageName.png"
 * });
 */
ImageObject.prototype.imageWriteToFile = function (successCallback, errorCallback, parameters) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.imageWriteToFile,
		[parameters]
	);
};

/// To get the image bit map from the file.
/**
 * Method to get the image bitmap of the Image from disk. imageReadFromFile method of Image is used here.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCB' for an incomplete/invalid operation. Returns the following values in the corresponding functions.
 * successCallback :  KMC_SUCCESS success call back.
 *   errorCallback   :  Error message would contain the appropriate error description.Possible errors are Failed to complete Action - check parameters passed,KmcRuntimeException,KmcException.
 *
 * @see Check the 'errorCallback' method for any failures in case of unexpected behaviour of the method. Generally the error call back
 * would return a JSON object with 'ErrorMsg' & 'ErrorDesc' giving the description of the error.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var imageObj =  kfxCordova.kfxEngine.createImageObject();
 * imageObj.imageReadFromFile(successCallback,errorCallback);
 */
ImageObject.prototype.imageReadFromFile = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.imageReadFromFile,
		[this.imgID]
	);
};

/// To clear image bitmap of Image.
/**
 * Method to clear the image bitmap of the KEDImage. clearImageBitmap method of Image is used here.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions.
 *   successCallback :  KMC_SUCCESS success call back.
 *   errorCallback   :  Error message would contain the appropriate error description.Possible errors are Failed to complete Action - check parameters passed,KmcRuntimeException,KmcException.
 *
 * @see Check the 'errorCallback' method for any failures in case of unexpected behaviour of the method. Generally the error call back
 * would return a JSON object with 'ErrorMsg' & 'ErrorDesc' giving the description of the error.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var imageObj =  kfxCordova.kfxEngine.createImageObject();
 * imageObj.clearImageBitmap(successCallback,errorCallback);
 */
ImageObject.prototype.clearImageBitmap = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.clearImageBitMap,
		[this.imgID]
	);
};

/// To delete the image from disk.
/**
 * Method to delete the image from disk. deleteFile method of Image is used here.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions.
 *   successCallback :  KMC_SUCCESS success call back.
 *   errorCallback   :  Error message would contain the appropriate error description.Possible errors are Failed to complete Action - check parameters passed,KmcRuntimeException,KmcException.
 *
 * @see Check the 'errorCallback' method for any failures in case of unexpected behaviour of the method. Generally the error call back
 * would return a JSON object with 'ErrorMsg' & 'ErrorDesc' giving the description of the error.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var imageObj =  kfxCordova.kfxEngine.createImageObject();
 * imageObj.deleteFileFromDisk(successCallback,errorCallback);
 */
ImageObject.prototype.deleteFileFromDisk = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.deleteFileFromDisk,
		[this.imgID]
	);
};

/// To delete  the imageObject
/**
 * Method to delete the imageObject (Image).
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions.
 *   successCallback -  KMC_SUCCESS success call back.
 *   errorCallback   -  Error message would contain the appropriate error description.Possible error is KmcException.
 *
 * @see Check the 'errorCallback' method for any failures in case of unexpected behaviour of the method. Generally the error call back
 * would return a JSON object with ErrorMsg & ErrorDesc' giving the description of the error.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var imageObj =  kfxCordova.kfxEngine.createImageObject();
 * // do operations with the created image, then to remove the image use
 * imageObj.deleteImage(successCallback,errorCallback);
 */
ImageObject.prototype.deleteImage = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.removeImages,
		[[this.imgID]]
	);
};

/// To set properties of the Image class .
/**
 * Method to set the properties of the native Image class. This method will intern call the ImageArray.prototype.setImageProperties to set the properties for a particular image object in the array
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Object} parameters -  An 'ImageObject'  variable containing the properties  to be set to the Image object. The image is uniquely identified by its 'id' property.
 *
 * @param {String} [parameters.imageID] image object is identified by using this property
 *
 * @param {String} [parameters.mimeType] what mime type you want to set for an image. MIMETYPE_JPG or MIMETYPE_PNG or MIMETYPE_TIF
 *
 * @param {Number} [parameters.dpi] how much dpi you want to set for an image
 *
 * @param {Number} [parameters.tag] what tag you want to set for an image
 *
 * @param {String} [parameters.filePath] filepath you want to write or read the image. The filepath needs to include imageName with extension(ex:imageName.png).
 * In iOS, it is not required to pass the documents directory path because internally MobileSDK is getting the documents directory path and appending the file path which is coming from the user.
 * In Android, if we pass imageName with extension then the image will write to phone internal storage. If we pass SD card full path (ex:/storage/emulated/0/imageName.png) then the image will write to SD card.
 *
 * @param {Number} [parameters.jpegQuality] hou much jpeg quality you want to set for an image. this property is applied when user write the image into a specific filepath
 *
 * @param {String} [parameters.createDateTime] what time and date you want to set for an image. you have to give ISO 8601 date format string.
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions.
 *   successCallback -  KMC_SUCCESS success call back.
 *   errorCallback   -  Error message would contain the appropriate error description.Possible errors are Failed to complete Action - check parameters passed,KmcRuntimeException,JSONException.
 *
 * @see Check the 'errorCallback' method for any failures in case of unexpected behaviour of the method. Generally the error call back
 * would return a JSON object with ErrorMsg & ErrorDesc' giving the description of the error.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var imageObj =  kfxCordova.kfxEngine.createImageObject();
 * //Set the properties for the image object
 * imageObj.setOptions(successCallback,errorCallback,{
 *    imageID: "Give imageID Here",
 *    mimeType: "MIMETYPE_JPG",
 *    dpi: 75,
 *    tag: 1,
 *    filePath: "imageName.png",
 *    createDateTime: "Give ISO 8601 Date Format String Here",
 *    jpegQuality: 75
 * });
 */

ImageObject.prototype.setOptions = function (successCallback, errorCallback, parameters) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.setImagePropertiesWithId,
		[parameters]
	);
};

/// To get the image size of an Image.
/**
 * Method to get the image size for an Image.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS success call back.
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Wrong Parameters, KmcRuntimeException,Exception.
 *
 * @see Check the 'errorCallback' method for any failures in case of unexpected behaviour of the method. Generally the error call back
 * would return a JSON object with 'ErrorMsg' & 'ErrorDesc' giving the description of the error.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var imageObj =  kfxCordova.kfxEngine.createImageObject();
 * imageObj.getImageSize(successCallback,errorCallback);
 */

ImageObject.prototype.getImageSize = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.getImageSize,
		[this.imgID]
	);
};

//End of Image Object
module.exports = ImageObject;
