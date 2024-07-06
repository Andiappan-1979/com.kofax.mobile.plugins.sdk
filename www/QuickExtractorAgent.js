//
// QuickExtractorAgent.js
//
//  Copyright (c) 2012 - 2021 Kofax. Use of this code is with permission pursuant to Kofax license terms.

var ActionUtils = require("./ActionUtils");
var ImageObject = require("./ImageObject");

/// A variable/Object to access the native SDK methods of QuickExtractorAgent class(es)
/**
 * This extractor processes preview frames from image capture control and calls the listener when a barcode or MRZ is detected, read and parsed successfully or a face image is extracted.
 * Note: In order to successfully extract data with QuickExtractAgent, the identification document being captured must be in the same orientation as the QuickExtractAgent capture experience.
 * @see Also see {@link QuickExtractor} which privides similar functionality, but works with static images.
 * @class
 * @alias QuickExtractorAgent
 * @constructor
 */
//QuickExtractor constructor and corresponding methods
var QuickExtractorAgent = function () {};

/// A getter  method of properties of the 'QuickExtractorAgent' class
/**
 * Method returning the QuickExtractor agent settings properties that can be set by the user. Use this object as an input parameter to set the
 * properties of the QuickExtractorAgent.
 *
 * @example
 *  var quickExtractorAgent = kfxCordova.kfxUicontrols.createQuickExtractorAgent();
 *  var parameters = quickExtractorAgent.getQuickExtractorAgentSettings();
 */
QuickExtractorAgent.prototype.getQuickExtractorAgentSettings = function () {
	var settings = {
		/**Capture Experience type to which extractor will be binded.
        Here are the values can be passed as capture experience type "CheckExperience", "PassportExperience", "FixedAspectRatioExperience" and "DocumentExperience". The default option is "FixedAspectRatioExperience".
        */

		captureExperinceType: "FixedAspectRatioExperience",

		/// Quick extractor setttings

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

//Method to bind captueExperienceType and QuickExtractionSettings.
/**
 *This method binds captueExperienceType and quickExtractionSettings to quickExtractorAgent.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Object}   quickExtractionAgentsettings -  A JSON object contains the options to be set to  QuickExtractorAgent object.The options consists of captureExperience, BarCodeType and paddings for face to be set to QucikExtractor to perform extraction.
 *
 * @param {String} [quickExtractionAgentsettings.captureExperinceType = "FixedAspectRatioExperience"] - Pass the capture experience type. If wrong capture experience type is passed an error is received in the error callback.
 * Here are the values can be passed as capture experience type "CheckExperience", "PassportExperience", "FixedAspectRatioExperience" and "DocumentExperience".
 * Captue experience must be created before calling this method otherwise error will be received in error callback.
 *
 * @param {Object} [quickExtractionAgentsettings.quickExtractionSettings]
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
 *  var quickExtractorAgent = kfxCordova.kfxUicontrols.createQuickExtractorAgent();
 *  var quickExtractionAgentsettings = quickExtractorAgent.getQuickExtractorAgentSettings();
 *  var imageCaptureControl =  kfxCordova.kfxUicontrols.createImageCaptureControl();
 *  var fixedAspectRatioCaptureExperience =  kfxCordova.kfxUicontrols.createFixedAspectRatioCaptureExperience();
 *  var imageCaptureControlID = null;
 *  imageCaptureControl.getId(function(captureControlID){
 *       imageCaptureControlID = captureControlID;
 *  },function(error){
 *       alert(JSON.stringify(error));
 *  });
 *  fixedAspectRatioCaptureExperience.bindCaptureControl(function(success){alert(JSON.stringify(success));},function(error){alert(JSON.stringify(error));},imageCaptureControlID);
 *
 *  quickExtractorAgent.bindCaputureExperienceWithSettings(function(success){
 *    alert(JSON.stringify(success));
 *  },function(error){
 *      alert(JSON.stringify(error));
 *  },quickExtractionAgentsettings);
 */
QuickExtractorAgent.prototype.bindCaputureExperienceWithSettings = function (
	successCallback,
	errorCallback,
	quickExtractionAgentsettings
) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.setCEAndQEASettings,
		[quickExtractionAgentsettings]
	);
};

/// Method to add the event listener to the 'on quick extraction' of QuickExtractorAgent
/**
 * This method would receive the preview image and fields at the QuickExtractorAgent and the new corresponding details
 * are captured in success call back.
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error Call back function name
 * @param {Function} extractionResultsCallback - the fields and face image properties are returned in this variable in the form a JSOn object
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS success call back.
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are KmcRuntimeException & Exception.
 * extractionResultsCallback - Extraction results are returned in this variable in the form a JSON object.This json object contains data as mentioned below.
 *               -> It would also contain preview Image and fields based on the returned results
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
 *   var extractionResultsCallback = function(result){
 *   var dataFields = result.extractionResults.fields;
 *   var previewImageObject = result.extractionResults.previewImage;
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
 *  var quickExtractorAgent = kfxCordova.kfxUicontrols.createQuickExtractorAgent();
 *
 *   quickExtractorAgent.addQuickExtractionAgentFieldsEventListener(function(success){
 *      alert(JSON.stringify(success));
 *   },function(error){
 *      if(!error.hasOwnProperty('extractionError')){
 *                    alert("error in addQuickExtractionListener :" + JSON.stringify(error));
 *      }else{
 *            if(error.hasOwnProperty('extractionError')){
 *              alert(" error:: " + error.extractionError);
 *              }
 *      }
 *   }, extractionResultsCallback);
 */
QuickExtractorAgent.prototype.addQuickExtractionAgentFieldsEventListener = function (
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
		ActionUtils.addQEAFieldsListener,
		[]
	);
};

/// Method to remove the event listener to the  QuickExtractorAgent
/**
 * The method would remove the listener and would not receive the preview image and fields events. After removing the listener,
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
 * var quickExtractorAgent = kfxCordova.kfxUicontrols.createQuickExtractorAgent();
 * quickExtractorAgent.removeQuickExtractionAgentFieldsEventListener(successCallback,errorCallback);
 */
QuickExtractorAgent.prototype.removeQuickExtractionAgentFieldsEventListener = function (
	successCallback,
	errorCallback
) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.removeQEAFieldsListener,
		[]
	);
};

/// Method to add the event listener to the 'on quick extraction  ' of QuickExtractorAgent
/**
 * This method would receive the face image and preview image at the QuickExtractor and the new corresponding details
 * are captured in success call back.
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error Call back function name
 * @param {Function} extractionResultsCallback - the fields and face image properties are returned in this variable in the form a JSOn object
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS success call back.
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are KmcRuntimeException & Exception.
 * extractionResultsCallback - Extraction results are returned in this variable in the form a JSON object.This json object contains data as mentioned below.
 *               -> It would also contain Face Image and preview image
 *
 * @example
 *
 *
 *
 *
 * var extractionResultsCallback = function(result){
 *   var faceImageObject = result.extractionResults.faceImage;
 *   var previewImageObject = result.extractionResults.previewImage;
 *
 *            if(result.hasOwnProperty('extractionError')){
 *              alert("error:: " + result.extractionError);
 *              }
 *
 *      var error = result.extractionError;
 * }
 *
 * var quickExtractorAgent = kfxCordova.kfxUicontrols.createQuickExtractorAgent();
 *
 * quickExtractorAgent.addQuickExtractionAgentFaceEventListener(function(success){
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
QuickExtractorAgent.prototype.addQuickExtractionAgentFaceEventListener = function (
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
		ActionUtils.addQEAFaceListener,
		[]
	);
};

/// Method to remove the event listener to the  QuickExtractorAgent
/**
 * The method would remove the listener and would not receive the face image and preview image. After removing the listener,
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
 * var quickExtractorAgent = kfxCordova.kfxUicontrols.createQuickExtractorAgent();
 * quickExtractorAgent.removeQuickExtractionAgentFaceEventListener(successCallback,errorCallback);
 */
QuickExtractorAgent.prototype.removeQuickExtractionAgentFaceEventListener = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.removeQEAFaceListener,
		[]
	);
};

/**
 * Method to clear QuickExtractorAgent memory.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  success string indicating the method has been invoked
 * errorCallback -    error in case any error occurs
 *
 * @example
 *  var quickExtractorAgent = kfxCordova.kfxUicontrols.createQuickExtractorAgent();
 *  var quickExtractionAgentsettings = quickExtractorAgent.getQuickExtractorAgentSettings();
 *  var imageCaptureControl =  kfxCordova.kfxUicontrols.createImageCaptureControl();
 *  var fixedAspectRatioCaptureExperience =  kfxCordova.kfxUicontrols.createFixedAspectRatioCaptureExperience();
 *  var imageCaptureControlID = null;
 *  imageCaptureControl.getId(function(captureControlID){
 *       imageCaptureControlID = captureControlID;
 *  },function(error){
 *       alert(JSON.stringify(error));
 *  });
 *  fixedAspectRatioCaptureExperience.bindCaptureControl(function(success){alert(JSON.stringify(success));},function(error){alert(JSON.stringify(error));},imageCaptureControlID);
 *
 *  quickExtractorAgent.bindCaputureExperienceWithSettings(function(success){
 *    alert(JSON.stringify(success));
 *  },function(error){
 *      alert(JSON.stringify(error));
 *  },quickExtractionAgentsettings);
 *
 *
 *  function successCallback(response){
 *       alert(JSON.stringify(response));
 *  }
 *  function errorCallback(error){
 *       alert(JSON.stringify(error));
 *  }
 *  quickExtractorAgent.destroy(successCallback,errorCallback);
 */
QuickExtractorAgent.prototype.destroy = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.qeaDestroy,
		[]
	);
};

//End of QuickExtractor methods
module.exports = QuickExtractorAgent;
