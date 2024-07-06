//
// ImageArray.js
//
//  Copyright (c) 2012 - 2021 Kofax. Use of this code is with permission pursuant to Kofax license terms.

var ActionUtils = require("./ActionUtils");
var ImageObject = require("./ImageObject");

/// An User defined  class  to handle the image conversion operation.
/**
 * This class is defined to handle the Image related operations. As native SDK expected inputs for all of the classes as KEDImages,
 * we had to define a mechanism to convert the Images to KEDImages and also to show a preview we need a format that can understood
 * by the top level (HTML) code. This class defines methods to convert image from base64 string to KEDImage, vice versa and other
 * supporting methods.
 *
 * The Image Array class maintains the Array of image objects and indexing on the image id of the KEDImage. When a base64 is sent
 * as input, a KEDImage is created and the imageid along with the KEDImage is added to the ImageArray class.
 *
 * For retrieving the KEDImage, please provide the imageid as input.
 *
 * Due to memory constraints, there is limitation on the number of Images that can be stored on the ImageArray object.
 * Limiting to 3/4 images is advised. This is a singleton class in native. Listed below are the plugin js methods to access the
 * methods of the ImageArray class.
 *
 * @class
 * @alias ImageArray
 * @constructor
 */
//ImageArray constructor and corresponding methods
var ImageArray = function () {};

/// To get the total number of images  stored in ImageArray.
/**
 * Method to get the number of images  stored in the ImageArray
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS success call back will have the count of the total images stored in the ImageArray.
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are KmcRuntimeException,Exception.
 *
 * @see Check the 'errorCallback' method for any failures in case of unexpected behaviour of the method. Generally the error call back
 * would return a string giving the description of the error.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var imageArray = kfxCordova.kfxEngine.createImageArray();
 * imageArray.getTotalImages(successCallback,errorCallback);
 */
ImageArray.prototype.getTotalImages = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.getTotalImages,
		[]
	);
};
/// To get the raw binary data buffer of the KEDImage.
/**
 * Method to get the raw binary data buffer of the KEDImage.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {String} imageID - image ID you would like to get the bytes array
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS success call back will have ArrayBuffer of the image i.e byte[] of image.
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Wrong ImageID, Blob conversion failed, KmcRuntimeException & Exception.
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
 * var imageArray = kfxCordova.kfxEngine.createImageArray();
 * imageArray.getImageAsBlob(successCallback,errorCallback,"imageID");
 */
ImageArray.prototype.getImageAsBlob = function (successCallback, errorCallback, imageID) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.getImageAsBlob,
		[imageID]
	);
};

/// To get the ids of the  images stored in ImageArray.
/**
 * Method to get the image IDs of the images stored in ImageArray
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS success call back will have the array of the Imageids from the image array.
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are KmcRuntimeException,Exception.
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
 * var imageArray = kfxCordova.kfxEngine.createImageArray();
 * imageArray.getImageIDs(successCallback,errorCallback);
 */
ImageArray.prototype.getImageIDs = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.getImageIds,
		[]
	);
};

/// To get the properties of an image  in ImageArray.
/**
 * Method to get the properties of an image in ImageArray.
 *
 * This method would get all the properties of an image which is stored in the ImageArray.
 * This would take the imageID as the input and send back all the properties of that image in the success call back, if that exists. Otherwise,
 * it would call the error call back method
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {String} ImageID - ID of the image of which you want to get the properties.
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS success call back will have the the properties of the 'Image' object in the form of JSON.
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Wrong Parameters,KmcRuntimeException,Exception.
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
 * var imageArray = kfxCordova.kfxEngine.createImageArray();
 * imageArray.getImageProperties(successCallback,errorCallback,"ImageID");
 */
ImageArray.prototype.getImageProperties = function (successCallback, errorCallback, parameters) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.getImagePropertiesWithId,
		[parameters]
	);
};

/// To convert a base64 string (of an image) to KEDImage
/**
 * Method to convert an image in the form of base64string to a KEDImage. The KEDImage is stored in the ImageArray and the
 * corresponding id is returned in the call back.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {String} base64String - an input image in the form of base64 string to be converted to KEDImage
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS success call back will have the image id of the converted KEDImage(from input base64 string).
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Wrong Parameters,KmcRuntimeException,Exception.
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
 * var imageArray = kfxCordova.kfxEngine.createImageArray();
 * imageArray.getImageFromBase64(successCallback,errorCallback, 'base64string');
 */
ImageArray.prototype.getImageFromBase64 = function (successCallback, errorCallback, base64String) {
	ActionUtils.exec(
		function (result) {
			var imgObject = new ImageObject(result);
			if (successCallback) successCallback(imgObject);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.getImageFromBase64,
		[base64String]
	);
};

/// To create a KEDImage from a specified file location
/**
 * Method to create and store a KEDImage in the ImageArray. The KEDImage is created from the image specified in the input
 * file location.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {String} filePath - String variable representing a physical location of an image which need to be converted to a KEDImage
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS success call back will have the image id of the converted KEDImage(from input image mentioned in the file path )
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Wrong Parameters,KmcRuntimeException,Exception.
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
 * var imageArray = kfxCordova.kfxEngine.createImageArray();
 * imageArray.getImageFromFilePath(successCallback,errorCallback, 'filepath of any image');
 */
ImageArray.prototype.getImageFromFilePath = function (successCallback, errorCallback, filePath) {
	ActionUtils.exec(
		function (result) {
			var imgObject = new ImageObject(result);
			if (successCallback) successCallback(imgObject);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.getImageFromFilepath,
		[filePath]
	);
};

/// To get the base64 string (of an image) from a KEDImage in the ImageArray
/**
 * Method to get a base64 string of KEDImage which is already present in the ImageArray. If no KEDImage is found fro the
 * provided input image id, error will be returned
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {String} ImageID - ID of the image of which you want to get the base64 string.
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS success call back will have the base64 string of the input image id.
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Wrong Parameters,KmcRuntimeException,Exception.
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
 * var imageArray = kfxCordova.kfxEngine.createImageArray();
 * imageArray.getImageToBase64(successCallback,errorCallback);
 */
ImageArray.prototype.getImageToBase64 = function (successCallback, errorCallback, parameters) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.getBase64ImageWithId,
		[parameters]
	);
};

/// To remove all the images  in the ImageArray.
/**
 * Method to remove all the KEDImages in the Image Array. After this operation none of the images will be accessed with any
 * reference.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Array} imageIDs - list if image IDs you would like to remove
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS success call back.
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Wrong Parameters,KmcRuntimeException,Exception.
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
 * var imageArray = kfxCordova.kfxEngine.createImageArray();
 * imageArray.removeImages(successCallback,errorCallback,["ImageID1","ImageID2"]);
 */
ImageArray.prototype.removeImages = function (successCallback, errorCallback, imageIDs) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.removeImages,
		[imageIDs]
	);
};

/// To remove all the images at a time in the ImageArray.
/**
 * Method to remove all the KEDImages at a time in the Image Array. After this operation none of the images will be accessed with any
 * reference.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS success call back.
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are KmcRuntimeException,Exception.
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
 * var imageArray = kfxCordova.kfxEngine.createImageArray();
 * imageArray.removeAllImages(successCallback,errorCallback);
 */
ImageArray.prototype.removeAllImages = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.removeAllImages,
		[]
	);
};

/// To write the image to the disk.
/**
 * Method to write the KEDImages to a disk. SpecifyFilePath and imageWriteToFile methods of KEDImage are used here.
 *
 * @param successCB: Default Success call back function name
 * @param errorCB: Default Error call back function name
 * @param parameters - image Id you would like to write and File Path where you want to write.
 *
 * @param {String} [parameters.imageID] image id you would like to write
 *
 * @param {String} [parameters.filePath] filepath where you want to write. The filepath needs to include imageName with extension(ex:imageName.png).
 * In iOS, it is not required to pass the documents directory path because internally MobileSDK is getting the documents directory path and appending the file path which is coming from the user.
 * In Android, if we pass imageName with extension then the image will write to phone internal storage. If we pass SD card full path (ex:/storage/emulated/0/imageName.png) then the image will write to SD card.
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS success call back.
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Wrong Parameters,KmcRuntimeException,Exception.
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
 * var imageArray = kfxCordova.kfxEngine.createImageArray();
 * imageArray.imageWriteToFile(successCallback,errorCallback,{
 *   imageID:"imageID value",
 *   filePath:"imageName.png"
 * });
 */
ImageArray.prototype.imageWriteToFile = function (successCallback, errorCallback, parameters) {
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
 * Method to get the image bitmap of the KEDImage from disk. imageReadFromFile method of KEDImage is used here.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {String} imageID - image Id you would like to read.
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
 * var imageArray = kfxCordova.kfxEngine.createImageArray();
 * imageArray.imageReadFromFile(successCallback,errorCallback,"imageID");
 */
ImageArray.prototype.imageReadFromFile = function (successCallback, errorCallback, imageID) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.imageReadFromFile,
		[imageID]
	);
};

/// To clear image bitmap of KEDImage.
/**
 * Method to clear the image bitmap of the KEDImage. clearImageBitmap method of KEDImage is used here.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {String} imageID - image Id you would like to clear the image bitmap.
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
 * var imageArray = kfxCordova.kfxEngine.createImageArray();
 * imageArray.clearImageBitmap(successCallback,errorCallback,"imageID");
 */
ImageArray.prototype.clearImageBitmap = function (successCallback, errorCallback, imageID) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.clearImageBitMap,
		[imageID]
	);
};

/// To delete the image from disk.
/**
 * Method to delete the image from disk. deleteFile method of KEDImage is used here.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {String} imageID - image Id you would like to delete from disk.
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
 * var imageArray = kfxCordova.kfxEngine.createImageArray();
 * imageArray.deleteFileFromDisk(successCallback,errorCallback,"imageID");
 */
ImageArray.prototype.deleteFileFromDisk = function (successCallback, errorCallback, imageID) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.deleteFileFromDisk,
		[imageID]
	);
};

/// To set properties of the KedImage class .
/**
 * Method to set the properties of the native Image class.
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
 * @param {String} [parameters.filePath] filepath where you want to write or read the image. The filepath needs to include imageName with extension(ex:imageName.png).
 * In iOS, it is not required to pass the documents directory path because internally MobileSDK is getting the documents directory path and appending the file path which is coming from the user.
 * In Android, if we pass imageName with extension then the image will write to phone internal storage. If we pass SD card full path (ex:/storage/emulated/0/imageName.png) then the image will write to SD card.
 *
 * @param {Number} [parameters.jpegQuality] hou much jpeg quality you want to set for an image. this property is applied when user write the image into a specific filepath
 *
 * @param {String} [parameters.createDateTime] what time and date you want to set for an image. you have to give ISO 8601 date format string.
 *
 * @return
 * The return value is captured in the 'successCB' for a successful operation, and might return in 'errorCB' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCB :  KMC_SUCCESS success call back.
 * errorCB :    Error message would contain the appropriate error description.Possible error objects are Wrong Parameters, KmcRuntimeException,Exception.
 *
 * @see Check the 'errorCB' method for any failures in case of unexpected behaviour of the method. Generally the error call back
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
 * var imageArray = kfxCordova.kfxEngine.createImageArray();
 * imageArray.setImageProperties(successCallback,errorCallback,{
 *        imageID: "Give imageID Here",
 *        mimeType: "MIMETYPE_JPG",
 *        dpi: 75,
 *        tag: 1,
 *        filePath: "imageName.png",
 *        createDateTime: "Give ISO 8601 Date Format String Here",
 *        jpegQuality: 75
 * });
 */
ImageArray.prototype.setImageProperties = function (successCallback, errorCallback, parameters) {
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

/// To get properties of the KedImage class .
/**
 * Method to get the default properties
 *
 * @example
 * var imageArray = kfxCordova.kfxEngine.createImageArray();
 * var imageProperties = imageArray.imageProperties();
 * imageProperties should be like below {
 *        imageID: "",
 *        filePath:"",
 *        mimeType:"",
 *        bitmapScaling:0,
 *        tag:"",
 *        createDateTime:"",
 *        dpi:0,
 *        jpegQuality:0
 *    };
 */
ImageArray.prototype.imageProperties = function () {
	var imageProperties = {
		imageID: "",
		filePath: "",
		mimeType: "",
		bitmapScaling: 0,
		tag: "",
		createDateTime: "",
		dpi: 0,
		jpegQuality: 0,
	};
	return imageProperties;
};

/// To get the image size of an image.
/**
 * Method to get the image size for an Image.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {String} imageID - image Id you would like to get the size.
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
 * var imageArray = kfxCordova.kfxEngine.createImageArray();
 * imageArray.getImageSize(successCallback,errorCallback,"imageID");
 */

ImageArray.prototype.getImageSize = function (successCallback, errorCallback, imageID) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.getImageSize,
		[imageID]
	);
};

//End of ImageArray methods
module.exports = ImageArray;
