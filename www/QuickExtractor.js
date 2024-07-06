//
// QuickExtractor.js
//
//  Copyright (c) 2012 - 2021 Kofax. Use of this code is with permission pursuant to Kofax license terms.

var ActionUtils = require("./ActionUtils");
var ImageObject = require("./ImageObject");

/// A variable/Object to access the native SDK methods of QuickExtractor class(es)
/**
 * An instance of this class contains methods to process images. An extractor that extracts either a barcode or MRZ data and a face image from a static source image.
 * This extractor works with static images, see KFXQuickExtractorAgent for a version that processes preview frames during image capture.
 * Use the methods on this object to do quick extraction to find a face in the image and also fields.
 * Note: For proper face extraction, document on image should be straight oriented.
 * @class
 * @alias QuickExtractor
 * @constructor
 */
//QuickExtractor constructor and corresponding methods
var QuickExtractor = function () {};

/// To process the specified image.
/**
 * Use this method when you want to perform quick extraction on the static image supplied with the method.
 * License Required: this is a licensed method. You cannot use this method until you have set a valid license.
 * This method generates a brand new image object and fields, if the quick extraction completes without error. if the extraction completes without error then extractionResultsCallback(passed in addQuickExtractionEventListener api) Callback will get the extraction results otherwise will get an errors.
 *
 * "processImage" of QuickExtractor should be called after calling "addQuickExtractionEventListener".
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Object}  imageID -the actual input image object that you want to process. An image id in the ImageArray is to be passes as argument
 *
 * @return
 *    The return value is captured in the 'successCallback' function. This method returns KMC_SUCCESS when the quick extraction is done successfully.
 *    Several error codes are returned for this method when the quick extraction request could not be started, due to such things as memory limitations. In these cases, the method
 *    generates no final completion notification by calling your imageOut delegate. But, if the library returns KMC_SUCCESS, then quick extraction has started successfully.
 *    One of these error codes may be returned immediately, in which case the
 *    background processing is not started.
 *
 *    The possible error codes are:
 *    KMC_IP_LICENSE_INVALID if you have not set a valid license yet.
 *    KMC_ED_NOIMAGE if you did not include an image in the input image object.
 *
 *    //ANDROID ERROR CODES
 *    NullPointerException    ('image' parameter is null).
 *    KmcRuntimeException (KMC_EV_PROCESS_PAGE_BUSY).
 *
 *
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var quickExtractor = kfxCordova.kfxEngine.createQuickExtractor();
 * quickExtractor.processImage(successCallback,errorCallback, 'imageid');
 */
QuickExtractor.prototype.processImage = function (successCallback, errorCallback, imageID) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kenQEQuickExtract,
		[imageID]
	);
};

/// A getter  method of properties of the 'QuickExtractor' class
/**
 * Method returning the QuickExtractor settings properties that can be set by the user. Use this object as an input parameter to set the
 * properties of the QuickExtractor.
 *
 * @example
 *  var quickExtractor = kfxCordova.kfxEngine.createQuickExtractor();
 *  var parameters = quickExtractor.getQuickExtractorSettings();
 */
QuickExtractor.prototype.getQuickExtractorSettings = function () {
	var settings = {
		quickExtractionSettings: {
			/// The set of symbologies currently being searched for.
			/**  Searching for multiple symbologies slows down the speed of barcode recognition. You should only specify the symbologies that you are interested in reading. The set of selected symbologies is empty by default.
         Acceptable values are: "CODE39", "PDF417", "QR".
         */
			barcodes: ["PDF417", "QR"],

			/// Face left padding controls the amount of background returned on left face side.
			/**
        Left padding in percent of found face width to control how much extra space needs to be added on left side.
        The valid values are in range 0 - 50. Values will be clamped to the valid range.
        By default is 0.
        */
			faceLeftPadding: 0,
			/// Face right padding controls the amount of background returned on right face side.
			/**
        Right padding in percent of found face width to control how much extra space needs to be added on right side.
        The valid values are in range 0 - 50. Values will be clamped to the valid range.
        By default is 0.
        */
			faceRightPadding: 0,

			/// Face top padding controls the amount of background returned on top face side.
			/**
        Top padding in percent of found face height to control how much extra space needs to be added from top side.
        The valid values are in range 0 - 50. Values will be clamped to the valid range.
        By default is 0.
        */
			faceTopPadding: 0,

			/// Face bottom padding controls the amount of background returned on bottom face side.
			/**
        Bottom padding in percent of found face height to control how much extra space needs to be added from bottom side.
        The valid values are in range 0 - 50. Values will be clamped to the valid range.
        By default is 0.
         */

			faceBottomPadding: 0,
		},
	};
	return settings;
};

//Method to set QuickExtractionSettings.
/**
 *This method sets quickExtractionSettings to quickExtractor.
 *
 * QuickExtractionSettingsOptions will be set only after adding the camera view.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Object}   setQuickExtractionSettingsOptions -  A JSON object contains the options to be set to  QuickExtractor object.The options consists of BarCodeType and paddings for face to be set to QucikExtractor to perform extraction.
 *
 * @param {Object} [setQuickExtractionSettingsOptions.quickExtractionSettings]
 *
 * @param {Array} [quickExtractionSettings.barcodes = ["PDF417", "QR"]]
 *       Searching for multiple barcodes slows down the speed of barcode recognition. You should only specify the barcodes that you are interested in reading. The set of selected barcodes is PDF417, QR by default.
 *         Acceptable values are: "CODE39", "PDF417", "QR".
 * @param {Number} [quickExtractionSettings.faceLeftPadding = 0]
 *    faceLeftPadding which is used for Quick extraction.
 * @param {Number} [quickExtractionSettings.faceRightPadding = 0]
 *    faceRightPadding which is used for Quick extraction.
 * @param {Number} [quickExtractionSettings.faceTopPadding = 0]
 *    faceTopPadding which is used for Quick extraction.
 * @param {Number} [quickExtractionSettings.faceBottomPadding = 0]
 *    faceBottomPadding which is used for Quick extraction.
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS success call back.The successCallBack consists of path to specified project files
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Wrong Parameters, KmcRuntimeException & Exception.
 *
 * @example
 *  var QuickExtractor = kfxCordova.kfxEngine.createQuickExtractor();
 *  QuickExtractor.setQuickExtractionSettings(function(success){
 *    alert(JSON.stringify(success));
 * },function(error){
 *      alert(JSON.stringify(error));
 * },setQuickExtractionSettingsOptions);
 */
QuickExtractor.prototype.setQuickExtractionSettings = function (
	successCallback,
	errorCallback,
	setQuickExtractionSettingsOptions
) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kenQESetQuickExtractionSettings,
		[setQuickExtractionSettingsOptions]
	);
};

/// Method to add the event listener to the 'on quick extraction  ' of QuickExtractor
/**
 * This method would receive the face image and fields at the QuickExtractor and the new corresponding details
 * are captured in success call back.
 *
 * A listener will be called when an image was captured. The extraction result callback would be containing face image and fields.
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error Call back function name
 * @param {Function} extractionResultsCallback - the fields and face image properties are returned in this variable in the form a JSOn object. If one of these fields or image are not present, then an empty array/empty string are sent respectively
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS success call back.
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are KmcRuntimeException & Exception.
 * extractionResultsCallback - Extraction results are returned in this variable in the form a JSON object.This json object contains data as mentioned below.
 *               -> It would also contain Face Image and fields based on the returned results
 *
 * @example
 * dataField object is mentioned as below.
 *  ex:  var dataField ={
 *        fieldName:"name",
 *        fieldValue:"value",
 *        fieldConfidence:0.0,
 *        fieldLocation : {
 *                  x     : 0.0,
 *                  y     : 0.0,
 *                  width : 0.0,
 *                  height: 0.0
 *                }
 *      };
 *
 *
 *
 * var extractionResultsCallback = function(result){
 *   var dataFields = result.extractionResults.fields;
 *   var faceImageObject = result.extractionResults.faceImage;
 *            if(result.hasOwnProperty('extractionError')){
 *              alert("error:: " + result.extractionError);
 *              }
 *
 *
 *   console.log("Extraction Result: ");
 *   for(var i = 0; i < dataFields.length; i++){
 *      var name = dataFields[i].fieldName;
 *      var value = dataFields[i].fieldValue;
 *      var confidence = dataFields[i].fieldConfidence;
 *      var fieldLocation_x =  dataFields[i].fieldLocation.x;
 *      var fieldLocation_y =  dataFields[i].fieldLocation.y;
 *      var fieldLocation_width =  dataFields[i].fieldLocation.width;
 *      var fieldLocation_height =  dataFields[i].fieldLocation.height;
 *      console.log("Field Name:"+ name +" Field Value: "+value+" confidence:"+confidence+" fieldLocation_x:"+fieldLocation_x+" fieldLocation_y:"+fieldLocation_y+" fieldLocation_width:"+fieldLocation_width+" fieldLocation_height:"+fieldLocation_height);
 *   }
 *
 *   var error = result.extractionError;
 * }
 *
 * var QuickExtractor = kfxCordova.kfxEngine.createQuickExtractor();
 *
 * QuickExtractor.addQuickExtractionEventListener(function(success){
 *    alert(JSON.stringify(success));
 * },function(error){
 *    if(!error.hasOwnProperty('extractionError')){
 *                    alert("error in addQuickExtractionListener :" + JSON.stringify(error));
 *    }else{
 *            if(error.hasOwnProperty('extractionError')){
 *              alert(" error:: " + error.extractionError);
 *              }
 *    }
 * }, extractionResultsCallback);
 */
QuickExtractor.prototype.addQuickExtractionEventListener = function (
	successCallback,
	errorCallback,
	extractionResultsCallback
) {
	ActionUtils.exec(
		function (result) {
			if (result.eventType === "eventRegistered") {
				if (successCallback) successCallback(result);
			} else if (result.eventType === "eventRaised") {
				if (extractionResultsCallback) extractionResultsCallback(result);
			}
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kenQEAddQuickExtractionListener,
		[]
	);
};

/// Method to remove the event listener to the  QuickExtractor
/**
 * The method would remove the listener and would not receive the face image and fields events. After removing the listener,
 * there will not be any call backs from native .
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error Call back function name
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS success call back
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are KmcRuntimeException,Exception.
 *
 * @code
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var quickExtractor = kfxCordova.kfxEngine.createQuickExtractor();
 * quickExtractor.removeQuickExtractionEventListener(successCallback,errorCallback);
 */
QuickExtractor.prototype.removeQuickExtractionEventListener = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kenQERemoveQuickExtractionListener,
		[]
	);
};

/// Method to destroy the QuickExtractor
/**
 * The method would destroy the QuickExtractor and wouldn't receive any callbacks further
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error Call back function name
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS success call back
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are KmcRuntimeException,Exception.
 *
 * @code
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var quickExtractor = kfxCordova.kfxEngine.createQuickExtractor();
 * quickExtractor.destroy(successCallback,errorCallback);
 */
QuickExtractor.prototype.destroy = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kenQEDestroy,
		[]
	);
};

//End of QuickExtractor methods
module.exports = QuickExtractor;
