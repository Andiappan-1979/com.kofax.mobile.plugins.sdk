//
// CheckCaptureExperience.js
//
//  Copyright (c) 2012 - 2021 Kofax. Use of this code is with permission pursuant to Kofax license terms.

var ActionUtils = require("./ActionUtils");
var ImageObject = require("./ImageObject");

/// The Plugin object for the native ImageCaptureControl class
/**  This ImageCaptureControl class is responsible for handling the corresponding plugin js to interact with the native ImageCaptureControl
 * class. To set and get the properties, and to access the instance methods, corresponding JS methods are written under this class which
 * are used by the  end user in application script.
 *
 * @class
 * @alias CheckCaptureExperience
 * @constructor
 */

//Check Capture Experience methods

//CheckCaptureExperience constructor and corresponding methods
var CheckCaptureExperience = function () {};
/// To bind  the created ImageCapture Control with the CheckCaptureExperience class .
/**
 * Method to bind  the created ImageCapture Control with the CheckCaptureExperience class .
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {String} imageCaptureControlID - Pass the ID retrieved for the Image Capture Control If a wrong ID is passed an error is received in the error callback
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCB :  KMC_SUCCESS    success call back.
 * errorCB :    error message would contain the appropriate error description.Possible error objects are Invalid Capture Control ID, KmcRuntimeException & Exception.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var imageCaptureControl =  kfxCordova.kfxUicontrols.createImageCaptureControl();
 * var imageCaptureControlID = null;
 * var checkCaptureExperience =  kfxCordova.kfxUicontrols.createCheckCaptureExperience();
 * imageCaptureControl.getId(function(captureControlID){
 *       imageCaptureControlID = captureControlID;
 * },function(error){
 *       alert(JSON.stringify(error));
 * });
 *
 * checkCaptureExperience.bindCaptureControl(successCallback,errorCallback,imageCaptureControlID);
 */
CheckCaptureExperience.prototype.bindCaptureControl = function (successCallback, errorCallback, imageCaptureControlID) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.bindCheckCaptureControl,
		[imageCaptureControlID]
	);
};

/// Binds the created ImageCapture Control with the CheckCaptureExperience class and also sets options.
/**
 * Method to bind the created ImageCapture Control with the CheckCaptureExperience class and also to set options. This method is a combination of bindCaptureControl API and setOptions API.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Object} options : A JSON object containing the ID retrieved for the Image Capture Control and the properties to be set to the CheckCaptureExperience. If a wrong ID is passed an error is received in the error callback
 * @param {String} [options.ImageCaptureControlID] :  Pass the ID retrieved for the Image Capture Control. If a wrong ID is passed an error is received in the error callback.
 * @param {Object} [options.CaptureExperienceOptions] :  a 'checkCaptureExperienceOptions'  variable containing the properties to be set to the CheckCaptureExperience.
 * @see Also see {@link CheckCaptureExperience#setOptions setOptions} for detailed description of parameters what we have to pass.
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCB :  KMC_SUCCESS    success call back.
 * errorCB :    error message would contain the appropriate error description.Possible error objects are Invalid Capture Control ID, KmcRuntimeException & Exception.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var imageCaptureControl =  kfxCordova.kfxUicontrols.createImageCaptureControl();
 * var imageCaptureControlID = null;
 * var checkCaptureExperienceOptions = null;
 * var checkCaptureExperience =  kfxCordova.kfxUicontrols.createCheckCaptureExperience();
 * checkCaptureExperience.getOptions(function(success){checkCaptureExperienceOptions = success},function(error){alert(JSON.stringify(error));});
 * imageCaptureControl.getId(function(captureControlID){
 *       imageCaptureControlID = captureControlID;
 * },function(error){
 *       alert(JSON.stringify(error));
 * });
 *
 * checkCaptureExperience.bindCaptureControlWithOptions(successCallback,errorCallback,{"ImageCaptureControlID":imageCaptureControlId,"CaptureExperienceOptions":checkCaptureExperienceOptions});
 */
CheckCaptureExperience.prototype.bindCaptureControlWithOptions = function (successCallback, errorCallback, parameters) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.bindCheckCaptureControlWithOptions,
		[parameters]
	);
};

/// Begins the image capture process.
/**
 * Calling this method will start the process of monitoring the various constraints passed to determine when a level, focused, and non-blurry shot of the document can be taken. The default level indicator will not be rendered unless the levelIndicator property is set to true.
 * The event listener  "addImageCapturedListener" will receive the delegate call back message and will have the corresponding capture image details.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS    success call back.
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are KmcRuntimeException & Exception
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var imageCaptureControl =  kfxCordova.kfxUicontrols.createImageCaptureControl();
 * var imageCaptureControlID = null;
 * var checkCaptureExperience =  kfxCordova.kfxUicontrols.createCheckCaptureExperience();
 * imageCaptureControl.getId(function(captureControlID){
 *       imageCaptureControlID = captureControlID;
 * },function(error){
 *       alert(JSON.stringify(error));
 * });
 * checkCaptureExperience.bindCaptureControl(successCallback,errorCallback,imageCaptureControlID);
 * checkCaptureExperience.takePicture(successCallback,errorCallback);
 */

CheckCaptureExperience.prototype.takePicture = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.cheTakePicture,
		[]
	);
};

// Begins the continuous image capture process.
/**
 * Calling this method will start the process of monitoring the various constraints passed to determine when a level, focused, and non-blurry shot of the document can be taken. The default level indicator will not be rendered unless the levelIndicator property is set to true.
 * The event listener  "addImageCapturedListener" will receive the delegate call back message and will have the corresponding capture image details.
 * This method will take pictures continuously. The pitch or roll of the device has to be changed from the set device declination values between each capture
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS    success call back.
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are KmcRuntimeException & Exception.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var imageCaptureControl =  kfxCordova.kfxUicontrols.createImageCaptureControl();
 * var imageCaptureControlID = null;
 * var checkCaptureExperience =  kfxCordova.kfxUicontrols.createCheckCaptureExperience();
 * imageCaptureControl.getId(function(captureControlID){
 *       imageCaptureControlID = captureControlID;
 * },function(error){
 *       alert(JSON.stringify(error));
 * });
 *
 * checkCaptureExperience.bindCaptureControl(successCallback,errorCallback,imageCaptureControlID);
 * checkCaptureExperience.takePictureContinually(successCallback,errorCallback);
 */
CheckCaptureExperience.prototype.takePictureContinually = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.cheTakePictureContinually,
		[]
	);
};

/// This method will add an event listener which will be triggered whenever a picture is taken.
/**
 * A listener that will be called when an image was captured. This will only be sent after the experience receives a takePicture message.
 * The experience will wait until the desired stability, levelness, and camera adjustments are met and then capture an image. It would then send the
 * primary image, glare free image and error info to image captured event call back method. Primary image will be considered as the captured image.
 * If glare detection enabled then either glare free image or error info also come. If every thing goes well then glare free image will come and error info will be null.
 * If any error occurs then error info will come and glare free image will be null.
 * Add this event listener before calling the 'takePicture' method.
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error Call back function name
 * @param {Function} imageCaptureEventCallback - A JSON object containing the primary image, glare free image and error info. If glare detection is enabled then either glare free image or error info will come.
 * If everything goes well then glare free image will come and error info will be null. If any error occurs then error info will come and glare gree image will be null.
 *
 * @return The return value is captured in the 'successCallback' function and will have a zero(0) for successful operation.
 * The 'imageCaptureCallback' will have the JSON object of the captured image, glare free image and error info. The captured images will be stored in ImageArray.
 * The image can be retrieved using methods on ImageArray.
 *
 * @see Check the 'errorCallback' method for any failures in case of unexpected behaviour of the method. By Default,  the error call back
 * would return a JSON object giving ErrMsg & ErrDesc  giving the description of the error.
 *
 * @example
 * function imageCaptureEventCallback(jsonObject)
 * {
 *      var primaryImage = jsonObject.primaryImage;
 *      var glareFreeImage = jsonObject.glareFreeImage;
 *      var errorInfo =   jsonObject.errorInfo;
 *       alert(JSON.stringify(jsonObject));
 * }
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var checkCaptureExperience = kfxCordova.kfxUicontrols.createCheckCaptureExperience();
 * checkCaptureExperience.addImageCapturedEventListener(successCallback, errorCallback, imageCaptureEventCallback);
 */
CheckCaptureExperience.prototype.addImageCapturedEventListener = function (
	successCallback,
	errorCallback,
	imageCaptureEventCallback
) {
	ActionUtils.exec(
		function (result) {
			if (result.eventType === "eventRegistered") {
				if (successCallback) successCallback(result);
			} else if (result.eventType === "eventRaised") {
				var primaryImage = new ImageObject(result.primaryImage);
				var glareFreeImage = null,
					errorInfo = null;
				if (result.glareFreeImage && result.glareFreeImage != null)
					glareFreeImage = new ImageObject(result.glareFreeImage);
				if (result.errorInfo && result.errorInfo != null) errorInfo = result.errorInfo;
				if (imageCaptureEventCallback)
					imageCaptureEventCallback({
						primaryImage: primaryImage,
						glareFreeImage: glareFreeImage,
						errorInfo: errorInfo,
					});
			}
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.cheaddImageCapturedEventListener,
		[]
	);
};

/// Method to remove the event listener to the 'takePicture' method of the CheckCaptureExperience
/**
 * The method would remove the listener to the delegate call back of the takePicture method.
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error Call back function name
 *
 * @return The return value is captured in the 'successCallback' function and will have a zero(0) for successful operation.
 *
 * @see Check the 'errorCallback' method for any failures in case of unexpected behaviour of the method. Generally the error call back
 * would return a JSON object with 'ErrorMs' & 'ErrorDesc' giving the description of the error.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var checkCaptureExperience = kfxCordova.kfxUicontrols.createCheckCaptureExperience();
 * // after taking picture
 * checkCaptureExperience.removeImageCapturedEventListener(successCallback,errorCallback);
 */
CheckCaptureExperience.prototype.removeImageCapturedEventListener = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.cheremoveImageCapturedEventListener,
		[]
	);
};

/// This method will add an event listener which will be triggered whenever a picture is taken.
/**
 * @deprecated since version 3.6, use addImageCapturedEventListener
 * A listener that will be called when an image was captured. This will only be sent after the experience receives a takePicture message.
 * The experience will wait until the desired stability, levelness, and camera adjustments are met and then capture an image. It would then send the
 * imageObject of the captured image to success call back method.
 *
 * Add this event listener before calling the 'takePicture' method.
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error Call back function name
 * @param {Function} imageCaptureCallback - A JSON object containing the properties of the captured image object. Check the 'Image'  object for its properties.
 *
 * @return The return value is captured in the 'successCallback' function and will have a zero(0) for successful operation.
 * The 'imageCaptureCallback' will have the JSON object of the captured KfxKEDImage properties. The captured KEDImage is stored in ImageArray.
 * The image can be retrieved using methods on ImageArray.
 *
 * @see Check the 'errorCallback' method for any failures in case of unexpected behaviour of the method. By Default,  the error call back
 * would return a JSON object giving ErrMsg & ErrDesc  giving the description of the error.
 *
 * @example
 * function imageCaptureCallback(imageObject)
 * {
 *       alert(JSON.stringify(imageObject));
 * }
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var checkCaptureExperience = kfxCordova.kfxUicontrols.createCheckCaptureExperience();
 * checkCaptureExperience.addImageCapturedListener(successCallback, errorCallback, imageCaptureCallback);
 */
CheckCaptureExperience.prototype.addImageCapturedListener = function (
	successCallback,
	errorCallback,
	imageCaptureCallback
) {
	ActionUtils.exec(
		function (result) {
			if (result.eventType === "eventRegistered") {
				if (successCallback) successCallback(result);
			} else if (result.eventType === "eventRaised") {
				var imgObject = new ImageObject(result);
				if (imageCaptureCallback) imageCaptureCallback(imgObject);
			}
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.cheaddImageCapturedListener,
		[]
	);
};

/// This method will add an event listener which will be triggered whenever a picture is about to be taken.
/**
 * A listener that will be called when an image is about to capture. This will only be sent after the experience receives a takePicture message.
 * The experience will wait until the desired stability, levelness, and camera adjustments are met and then capture an image.
 *
 * Add this event listener before calling the 'takePicture' method.
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error Call back function name
 * @param {Function} imageAboutToCaptureCallback - Call back for event
 *
 * @return The return value is captured in the 'successCallback' function for successful operation.
 * The 'imageAboutToCaptureCallback' will have return value in this callback
 *
 * @see Check the 'errorCallback' method for any failures in case of unexpected behaviour of the method. By Default,  the error call back
 * would return a JSON object giving ErrMsg & ErrDesc  giving the description of the error.
 *
 * @example
 * function imageAboutToCaptureCallback(response)
 * {
 *       alert(JSON.stringify(response));
 * }
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var checkCaptureExperience = kfxCordova.kfxUicontrols.createCheckCaptureExperience();
 * checkCaptureExperience.addImageAboutToCaptureListener(successCallback, errorCallback, imageCaptureCallback);
 */
CheckCaptureExperience.prototype.addImageAboutToCaptureListener = function (
	successCallback,
	errorCallback,
	imageAboutToCaptureCallback
) {
	ActionUtils.exec(
		function (result) {
			if (result.eventType === "eventRegistered") {
				if (successCallback) successCallback(result);
			} else if (result.eventType === "eventRaised") {
				if (imageAboutToCaptureCallback) imageAboutToCaptureCallback(result);
			}
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.cheaddImageAboutToCaptureListener,
		[]
	);
};

/// This method will add an event listener which will be triggered after a picture is taken and just before done message is shown.
/**
 * A listener that will be called when an image is captured and just before done message is shown. This will only be sent after the experience receives a takePicture message.
 * The experience will wait until the desired stability, levelness, and camera adjustments are met and then capture an image. It would then send the
 * imageObject of the captured image to success call back method.
 *
 * Add this event listener before calling the 'takePicture' method.
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error Call back function name
 * @param {Function} imageJustCapturedCallback - A JSON object containing the properties of the captured image object. Check the 'Image'  object for its properties.
 *
 * @return The return value is captured in the 'successCallback' function for successful operation.
 * The 'imageJustCapturedCallback' will have the JSON object of the captured KfxKEDImage properties. The captured KEDImage is stored in ImageArray.
 * The image can be retrieved using methods on ImageArray.
 *
 * @see Check the 'errorCallback' method for any failures in case of unexpected behaviour of the method. By Default,  the error call back
 * would return a JSON object giving ErrMsg & ErrDesc  giving the description of the error.
 *
 * @example
 * function imageJustCapturedCallback(imageObject)
 * {
 *       alert(JSON.stringify(imageObject));
 * }
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var checkCaptureExperience = kfxCordova.kfxUicontrols.createCheckCaptureExperience();
 * checkCaptureExperience.addImageJustCapturedListener(successCallback, errorCallback, imageJustCapturedCallback);
 */
CheckCaptureExperience.prototype.addImageJustCapturedListener = function (
	successCallback,
	errorCallback,
	imageJustCapturedCallback
) {
	ActionUtils.exec(
		function (result) {
			if (result.eventType === "eventRegistered") {
				if (successCallback) successCallback(result);
			} else if (result.eventType === "eventRaised") {
				var imgObject = new ImageObject(result);
				if (imageJustCapturedCallback) imageJustCapturedCallback(imgObject);
			}
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.cheaddImageJustCapturedListener,
		[]
	);
};

/// Method to remove the event listener to the 'takePicture' method of the CheckCaptureExperience
/**
 * @deprecated since version 3.6, use removeImageCapturedEventListener
 * The method would remove the listener to the delegate call back of the takePicture method.
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error Call back function name
 *
 * @return The return value is captured in the 'successCallback' function and will have a zero(0) for successful operation.
 *
 * @see Check the 'errorCallback' method for any failures in case of unexpected behaviour of the method. Generally the error call back
 * would return a JSON object with 'ErrorMs' & 'ErrorDesc' giving the description of the error.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var checkCaptureExperience = kfxCordova.kfxUicontrols.createCheckCaptureExperience();
 * // after taking picture
 * checkCaptureExperience.removeImageCapturedListener(successCallback,errorCallback);
 */
CheckCaptureExperience.prototype.removeImageCapturedListener = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.cheremoveImageCapturedListener,
		[]
	);
};

/// Method to remove the event listener to the 'takePicture' method of the CheckCaptureExperience
/**
 * The method would remove the listener to the delegate call back of the takePicture method.
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error Call back function name
 *
 * @return The return value is captured in the 'successCallback' function for successful operation.
 *
 * @see Check the 'errorCallback' method for any failures in case of unexpected behaviour of the method. Generally the error call back
 * would return a JSON object with 'ErrorMs' & 'ErrorDesc' giving the description of the error.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var checkCaptureExperience = kfxCordova.kfxUicontrols.createCheckCaptureExperience();
 * // after taking picture
 * checkCaptureExperience.removeImageAboutToCaptureListener(successCallback,errorCallback);
 */
CheckCaptureExperience.prototype.removeImageAboutToCaptureListener = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.cheremoveImageAboutToCaptureListener,
		[]
	);
};

/// Method to remove the event listener to the 'takePicture' method of the CheckCaptureExperience
/**
 * The method would remove the listener to the delegate call back of the takePicture method.
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error Call back function name
 *
 * @return The return value is captured in the 'successCallback' function for successful operation.
 *
 * @see Check the 'errorCallback' method for any failures in case of unexpected behaviour of the method. Generally the error call back
 * would return a JSON object with 'ErrorMs' & 'ErrorDesc' giving the description of the error.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var checkCaptureExperience = kfxCordova.kfxUicontrols.createCheckCaptureExperience();
 * // after taking picture
 * checkCaptureExperience.removeImageJustCapturedListener(successCallback,errorCallback);
 */
CheckCaptureExperience.prototype.removeImageJustCapturedListener = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.cheremoveImageJustCapturedListener,
		[]
	);
};

/// Stops the  image capture process.
/**
 * Calling this method will stop the image capture process. In case of continuous capture also no further images would be captured after this API is called even if the device declination is changed
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS    success call back.
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are KmcRuntimeException & Exception.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var imageCaptureControl =  kfxCordova.kfxUicontrols.createImageCaptureControl();
 * var imageCaptureControlID = null;
 * var checkCaptureExperience =  kfxCordova.kfxUicontrols.createCheckCaptureExperience();
 * imageCaptureControl.getId(function(captureControlID){
 *       imageCaptureControlID = captureControlID;
 * },function(error){
 *       alert(JSON.stringify(error));
 * });
 *
 * checkCaptureExperience.bindCaptureControl(successCallback,errorCallback,imageCaptureControlID);
 * checkCaptureExperience.stopCapture(successCallback,errorCallback);
 */
CheckCaptureExperience.prototype.stopCapture = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.cheStopCapture,
		[]
	);
};

/// To set the Options/properties of the CheckCaptureExperience class .
/**
 * Method to set the properties of the native CheckCaptureExperience class.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Object} parameters -  a 'checkCaptureExperienceOptions'  variable containing the properties  to be set to the CheckCaptureExperience
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS success call back
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Wrong Parameters, KmcRuntimeException & Exception.
 *
 * @see see {@link CheckCaptureExperience#getCheckCaptureOptions getCheckCaptureOptions} for detailed description of parameters what we have to pass.
 *
 * @param {Object} options.LookAndFeel Look and Feel options
 *
 * @param {String} [options.LookAndFeel.outerViewFinderColor = "#B2000000"]
 *    This value specifies the outer view finder color
 *
 * @param {Boolean} [options.LookAndFeel.enableAnimationTutor = false]
 *    This value specifies the animation tutor is enable or not. If user faces any difficulty while capturing a document then he need to enable the animation tutor.
 *
 * @param {Boolean} [options.LookAndFeel.diagnosticsViewEnabled = false]
 *    This value specifies to turn ON/OFF diagnostic information view
 *
 * @param {Boolean} [options.LookAndFeel.vibrationEnabled = true]
 *    This value specifies the device vibration is enable or not when image capture happens
 *
 * @param {Number} [options.LookAndFeel.guidanceFrameThickness = 8]
 *    This value specifies the thickness that will be used for the guidance frame. Valid values are in the range [1, 100]. Values outside this range will be interpreted as 8.
 *    The default thickness is 8.
 *
 * @param {String} [options.LookAndFeel.tutorialSampleImagePath = '']
 *    This value specifies the tutorial image path to display custom tutorial image, this path should be relative to www root folder of the application. It is set only property and getOptions will always return this property with empty value.
 *    The images cannot be of very high resolution and size.The sample image is stretched if necessary to fill the entire frame area.
 *
 * @param {Boolean} [options.LookAndFeel.guidanceFrameColor = "#00FF00"]
 *    This value specifies the color that will be used for the guidance frame.
 *
 *
 * @param {Object} [options.CheckDetectionSettings] Check detection settings
 *
 * @param {String} [options.CheckDetectionSettings.checkSide = "FRONT"]
 *    A property to get or set checkSide, with two values: FRONT and BACK.
 *
 * @param {Object} [options.CheckDetectionSettings.DetectionSettings] detection settings
 *
 * @param {Object} [options.CheckDetectionSettings.DetectionSettings.centerPoint] center point of the document. Should just be a point with in the bounds of the image height and width.
 *
 * @param {Number} [options.CheckDetectionSettings.DetectionSettings.centerPoint.x] x value of the center. Should just be with in the bounds of the image of the target frame.
 *
 * @param {Number} [options.CheckDetectionSettings.DetectionSettings.centerPoint.y] y value of the center. Should just be with in the bounds of the image of the target frame.
 *
 * @param {Number} [options.CheckDetectionSettings.DetectionSettings.aspectRatio = 0] aspect ratio of the document. Aspect ratio between 0 and 1 or negative is not recommended. It can result in erroneous detection of target frame. The aspect ratio is presented in the format of longEdge/shortEdge, and is used to construct the largest target frame. If the targetFrameAspectRatio is set to 0, then it will be automatically reset to an image aspect ratio.
 *
 * @param {Number} [options.CheckDetectionSettings.DetectionSettings.padding = 5] padding percent value. Values will be clamped to the range [0-50]. The default value is 5.
 *
 * @param {Number} [options.CheckDetectionSettings.DetectionSettings.minFillFraction = 0.65] minimum fill fraction value. Setting a negative number is ignored.
 *
 * @param {Number} [options.CheckDetectionSettings.DetectionSettings.maxFillFraction = 1.3] maximum fill fraction value. Setting a negative number is ignored.
 *
 * @param {Number} [options.CheckDetectionSettings.DetectionSettings.maxSkewAngle = 10] maximum skew angle value. The default value is 10, specified in degrees. Setting a negative number is ignored.
 *
 * @param {Number} [options.CheckDetectionSettings.DetectionSettings.toleranceFraction = 0.15] tolerance fraction value. Setting a negative number is ignored.
 *
 * @see Also see {@link DocumentCaptureExperience#setOptions  DocumentCaptureExperience's setOptions API} for more.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var imageCaptureControl =  kfxCordova.kfxUicontrols.createImageCaptureControl();
 * var imageCaptureControlID = null, checkCaptureExperienceOptions = null;
 * var checkCaptureExperience =  kfxCordova.kfxUicontrols.createCheckCaptureExperience();
 * imageCaptureControl.getId(function(captureControlID){
 *       imageCaptureControlID = captureControlID;
 * },function(error){
 *       alert(JSON.stringify(error));
 * });
 *
 * checkCaptureExperience.bindCaptureControl(successCallback,errorCallback,imageCaptureControlID);
 * //get the options
 * checkCaptureExperience.getOptions(function(options){checkCaptureExperienceOptions = options;},errorCallback);
 * //specify the path for tutorial sample image, which is relative to www folder.
 * checkCaptureExperience.LookAndFeel.tutorialSampleImagePath = 'www/images/custom_tutorialimage.png';
 * // set the options to capture view
 * checkCaptureExperience.setOptions(successCallback,errorCallback,checkCaptureExperienceOptions)
 */

CheckCaptureExperience.prototype.setOptions = function (successCallback, errorCallback, parameters) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.cheSetOptions,
		[parameters]
	);
};

/// To get the Options/properties of the CheckCaptureExperience class .
/**
 * Method to get the properties of the native CheckCaptureExperience class.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback :  JSONObject representing CheckCaptureExperience Options. JSONObject structure can also be known from getCheckCaptureOptions() method.
 * errorCallback :    error message would contain the appropriate error description.Possible error objects are KmcRuntimeException,JSONException & Exception.
 * @see {@link CheckCaptureExperience#getCheckCaptureOptions getCheckCaptureOptions}
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var imageCaptureControl =  kfxCordova.kfxUicontrols.createImageCaptureControl();
 * var imageCaptureControlID = null;
 * var checkCaptureExperience =  kfxCordova.kfxUicontrols.createCheckCaptureExperience();
 * imageCaptureControl.getId(function(captureControlID){
 *       imageCaptureControlID = captureControlID;
 * },function(error){
 *       alert(JSON.stringify(error));
 * });
 *
 * checkCaptureExperience.bindCaptureControl(successCallback,errorCallback,imageCaptureControlID);
 * checkCaptureExperience.getOptions(successCallback,errorCallback);
 */

CheckCaptureExperience.prototype.getOptions = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.cheGetOptions,
		[]
	);
};
/**
 * Method to clear CheckCaptureExperience memory.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  success string indicating the method has been invoked
 * errorCallback -    error in case any error occurs
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var imageCaptureControl =  kfxCordova.kfxUicontrols.createImageCaptureControl();
 * var imageCaptureControlID = null;
 * var checkCaptureExperience =  kfxCordova.kfxUicontrols.createCheckCaptureExperience();
 * imageCaptureControl.getId(function(captureControlID){
 *       imageCaptureControlID = captureControlID;
 * },function(error){
 *       alert(JSON.stringify(error));
 * });
 *
 * checkCaptureExperience.bindCaptureControl(successCallback,errorCallback,imageCaptureControlID);
 * checkCaptureExperience.takePictureContinually(successCallback,errorCallback);
 * checkCaptureExperience.destroy(successCallback,errorCallback);
 */
CheckCaptureExperience.prototype.destroy = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.cheDestroy,
		[]
	);
};
///A getter  method of properties of the 'CheckCaptureExperience' class
/**
 * Method returning the 'CheckCaptureExperience'  class properties that can be set by the user. Use this object as an input
 * parameter to set the properties of the CheckCaptureExperience class. The parameters are grouped, and has the below mentioned
 * default values.
 *
 * CheckSide options are :
 * FRONT
 * BACK
 *
 * @example
 * var checkCaptureExperience =  kfxCordova.kfxUicontrols.createCheckCaptureExperience();
 * var checkCaptureOptions = checkCaptureExperience.getCheckCaptureOptions();
 * checkCaptureOptions should be like below {
 *    LookAndFeel: {
 *         enableAnimationTutor: false,
 *         outerViewFinderColor : "#B2000000",
 *         vibrationEnabled : true,
 *		   diagnosticsViewEnabled : false,
 *         guidanceFrameThickness : 8,
 *    tutorialSampleImagePath : '',
 *           guidanceFrameColor : "#00FF00"
 *    },
 *    CaptureCriteria: {
 *         stabilityThresholdEnabled: true,
 *         stabilityThreshold: 95,
 *         focusEnabled: true,
 *         rollThresholdEnabled: true,
 *         rollThreshold: 15,
 *         pitchThreshold: 15,
 *         pitchThresholdEnabled: true,
 *         CheckDetectionSettings:{
 *            checkSide : "FRONT",
 *            DetectionSettings:{
 *               centerPoint:{
 *                  x: null,
 *                  y: null
 *               },
 *               aspectRatio: 2.18,
 *               padding: 5.0,
 *               minFillFraction: 0.65,
 *               maxFillFraction: 1.3,
 *               maxSkewAngle: 10.0,
 *               toleranceFraction: 0.15
 *            }
 *         }
 *    },
 *    UserInstructionMessage: {
 *         backgroundColor: "#00000000",
 *         textColor: "#FFFFFFFF",
 *         message: "Fill viewable area with check",
 *         visible: true,
 *         orientation: "LANDSCAPE",
 *         fontAndroid: {
 *           textSize : -1
 *         },
 *         fontiOS:{
 *           fontSize : -1,
 *           fontName : "HelveticaNeue"
 *         },
 *         position :{
 *            x : -1,
 *            y : -1
 *         },
 *         size:{
 *            width: -1,
 *            height: -1
 *         }
 *    },
 *    HoldSteadyMessage: {
 *         backgroundColor: "#B2000000",
 *         textColor: "#FFFF0000",
 *         message: "Hold Steady",
 *         visible: true,
 *        orientation: "LANDSCAPE",
 *         fontAndroid: {
 *           textSize : -1
 *         },
 *         fontiOS:{
 *           fontSize : -1,
 *           fontName : "HelveticaNeue"
 *         },
 *         position :{
 *            x : -1,
 *            y : -1
 *         },
 *         size:{
 *            width: -1,
 *            height: -1
 *         }
 *    },
 *    CapturedMessage: {
 *         backgroundColor: "#B2000000",
 *         textColor: "#00F900",
 *         message: "Done!",
 *         visible: true,
 *         orientation: "LANDSCAPE",
 *         fontAndroid: {
 *           textSize : -1
 *         },
 *         fontiOS:{
 *           fontSize : -1,
 *           fontName : "HelveticaNeue"
 *         },
 *         position :{
 *            x : -1,
 *            y : -1
 *         },
 *         size:{
 *            width: -1,
 *            height: -1
 *         }
 *    },
 *    CenterMessage: {
 *         backgroundColor: "#B2000000",
 *         textColor: "#FFFFFFFF",
 *         message: "Center Check",
 *         visible: true,
 *         orientation: "LANDSCAPE",
 *         fontAndroid: {
 *           textSize : -1
 *         },
 *         fontiOS:{
 *           fontSize : -1,
 *           fontName : "HelveticaNeue"
 *         },
 *         position :{
 *            x : -1,
 *            y : -1
 *         },
 *         size:{
 *            width: -1,
 *            height: -1
 *         }
 *    },
 *    ZoomInMessage: {
 *         backgroundColor: "#B2000000",
 *         textColor: "#FFFFFFFF",
 *         message: "Move Closer",
 *         visible: true,
 *         orientation: "LANDSCAPE",
 *         fontAndroid: {
 *           textSize : -1
 *         },
 *         fontiOS:{
 *           fontSize : -1,
 *           fontName : "HelveticaNeue"
 *         },
 *         position :{
 *            x : -1,
 *            y : -1
 *         },
 *         size:{
 *            width: -1,
 *            height: -1
 *         }
 *    },
 *    ZoomOutMessage: {
 *         backgroundColor: "#B2000000",
 *         textColor: "#FFFFFFFF",
 *         message: "Move Back",
 *         visible: true,
 *        orientation: "LANDSCAPE",
 *        fontAndroid: {
 *           textSize : -1
 *         },
 *         fontiOS:{
 *           fontSize : -1,
 *           fontName : "HelveticaNeue"
 *         },
 *         position :{
 *            x : -1,
 *            y : -1
 *         },
 *         size:{
 *            width: -1,
 *            height: -1
 *         }
 *    },
 *   RotateMessage: {
 *            backgroundColor: "#B2000000",
 *             textColor: "#FFFFFFFF",
 *            message: "Rotate Device",
 *            visible: true,
 *                orientation: "LANDSCAPE",
 *            fontAndroid: {
 *              textSize : -1
 *           },
 *           fontiOS:{
 *              fontSize : -1,
 *              fontName : "HelveticaNeue"
 *            },
 *           position :{
 *               x : -1,
 *               y : -1
 *            },
 *            size:{
 *               width: -1,
 *               height: -1
 *            }
 *        },
 *    HoldParallelMessage: {
 *            backgroundColor: "#B2000000",
 *            textColor: "#FFFFFFFF",
 *            message: "Hold Device Level",
 *            visible: true,
 *                orientation: "LANDSCAPE",
 *            fontAndroid: {
 *              textSize : -1
 *           },
 *           fontiOS:{
 *              fontSize : -1,
 *              fontName : "HelveticaNeue"
 *            },
 *            position :{
 *               x : -1,
 *               y : -1
 *            },
 *            size:{
 *               width: -1,
 *               height: -1
 *            }
 * },
 * TutorialDismissMessage: {
 *   backgroundColor: "#B2000000",
 *   textColor: "#FFFFFFFF",
 *   message: "Tap to dismiss",
 *        visible: true,
 *   orientation: "LANDSCAPE",
 *   fontAndroid: {
 *     textSize : -1
 *  },
 *  fontiOS:{
 *     fontSize : -1,
 *     fontName : "HelveticaNeue"
 *   },
 *   position :{
 *      x : -1,
 *      y : -1
 *   },
 *   size:{
 *      width: -1,
 *     height: -1
 *   }
 * }
 * };
 */
CheckCaptureExperience.prototype.getCheckCaptureOptions = function () {
	var object = {
		//LookAndFeel options
		LookAndFeel: {
			/**
			 * This value specifies the animation tutor is enable or not. If user faces any difficulty while capturing a check then he need to enable the animation tutor.
			 */
			enableAnimationTutor: false,
			/**
			 * This value specifies the outer view finder color
			 */
			outerViewFinderColor: "#B2000000",
			/**
			 * This value specifies to turn ON/OFF diagnostic information view
			 */
			diagnosticsViewEnabled: false,
			/**
			 * This value specifies the device vibration is enable or not when image capture happens
			 */
			vibrationEnabled: true,
			/**
			 * This value specifies the thickness that will be used for the guidance frame
			 */
			guidanceFrameThickness: 8,
			/**
			 * This value specifies the tutorial image path to display custom tutorial image, this path should be relative to www root folder of the application. It is set only property and getOptions will always return this property with empty value.
			 * The images cannot be of very high resolution and size.The sample image is stretched if necessary to fill the entire frame area.
			 */
			tutorialSampleImagePath: "",
			/**
			 * This value specifies the color that will be used for the guidance frame.
			 */
			guidanceFrameColor: "#00FF00",
		},
		//capture criteria options
		CaptureCriteria: {
			/**
			 *    Whether the stability threshold is enabled.
			 *    A boolean that indicates whether the stability threshold is enabled.If enabled this criteria is checked before taking a picture.
			 */
			stabilityThresholdEnabled: true,
			/*
			 *    The stability threshold value
			 *    Stability Value which needs to be met before taking a picture. It is a number from 0 to 100, where 100 indicates that the device must be near perfectly still to take a picture and 0 indicates that stability checking is turned off.
			 *    Default value is 95
			 */
			stabilityThreshold: 95,
			/*
			 *    Whether the Focus constraint is enabled.
			 *    A boolean that indicates whether the Focus constraint is enabled. If enabled this criteria is checked before taking a picture.
			 *    Making it enabled is advisable. Otherwise it is highly likely that images out of focus are captured. Default value is enabled.
			 */
			focusEnabled: true,
			/*
			 *    Whether the Roll threshold is enabled.
			 *    A boolean that indicates whether the Roll threshold is enabled. If enabled this criteria is checked before taking a picture.
			 */
			rollThresholdEnabled: true,
			/**
			 *    The Roll threshold value
			 *    Roll Value which needs to be met before taking a picture. The default value is 15.
			 *    Valid values are in the range [0, 45].  Values outside this range will be interpreted as 0 or 45.  A value
			 *    of 45 disables level checking for roll.
			 */
			rollThreshold: 15,
			/**
			 *    The Pitch threshold value
			 *    Pitch Value which needs to be met before taking a picture.
			 *    The default value is 15.
			 *    Valid values are in the range [0, 45].  Values outside this range will be interpreted as 0 or 45.  A value
			 *    of 45 disables level checking for pitch.
			 */
			pitchThreshold: 15,
			/**
			 *    Whether the Pitch threshold is enabled.
			 *    A boolean that indicates whether the Pitch threshold is enabled. If enabled this criteria is checked before taking a picture.
			 */
			pitchThresholdEnabled: true,
			// Document detection settings
			CheckDetectionSettings: {
				/**
				 * Which side of the check you have to detect
				 */
				checkSide: "FRONT",
				//detection settings
				DetectionSettings: {
					//center point of the check
					centerPoint: {
						//x position
						x: null,
						//y position
						y: null,
					},
					//aspect ratio of the check
					aspectRatio: 2.18,
					//padding percent value
					padding: 5.0,
					//min fill fraction value
					minFillFraction: 0.65,
					// max fill fraction value
					maxFillFraction: 1.3,
					//max skew angle value
					maxSkewAngle: 10.0,
					//tolerance fraction value
					toleranceFraction: 0.15,
				},
			},
		},
		//user instruction message options
		UserInstructionMessage: {
			/**
			 *    The color used to display the background of the message
			 *    Specifies the color that the message's background are will be rendered with.  The full area specified by the size property will be filled with the background color, excluding areas clipped outside of view bounds.
			 *    The default background color is transparent.
			 */
			backgroundColor: "#00000000",
			/**
			 *    The color used to display the text
			 *    Specifies the color that the message's text will be rendered with.
			 *    The default color is white.
			 */
			textColor: "#FFFFFFFF",
			/**
			 *    The text of the message
			 *    Specifies the text of the message.
			 *    The default message is the empty string.  You must set a message for anything to be displayed.
			 */
			message: "Fill viewable area with check",
			/**
			 *     The visibility of the message
			 *     Specifies whether the message is visible or not.  A value of "false" will prevent the message from appearing.  A value of "true" will show the message, if there is nothing else to prevent it from appearing.
			 *     The default value is true.  Some objects that use messages, like the capture experience objects, will automatically manage and update this state.
			 */
			visible: true,
			/**
			 *     The orientation of the message
			 *     Use one of the allowed values to set the orientation of the messages being displayed. Once a orientation is set, message stays in that orientation even if the device rotates.In other words this is sticky.
			 *     If you want to handle the rotation when device rotates, orientation has to be explicitly set again on the message.
			 *     The default value is LANDSCAPE. Allowable values are PORTRAIT, LANDSCAPE, REVERSEPORTRAIT, REVERSELANDSCAPE.
			 *     If you modify the orientation of the message, plugin (underlying SDK) tries to optimally display the message however it may not always get displayed with appropriate size and font. It is recommended to set the size or font appropriately if needed.
			 */
			orientation: "LANDSCAPE",
			/*
			 * The font used to display the text of the message on Android platform. This will not have any impact if set on iOS platform.
			 * fontAndroid only supports size of the text.
			 */
			fontAndroid: {
				/**
				 *     The text font size of the message.
				 *     The default is -1, which causes the message text font size to be determined as the SDK sees fit.
				 */
				textSize: -1,
			},
			/*
			 * The font used to display the text of the message on iOS platform. This will not have any impact if set on Android platform.
			 * font respects the platform font capabilities (UIFont class in native iOS SDK).
			 * fontName and fontSize should be changed together. If you change the fontName you should also set the appropriate fontSize otherwise a value (depending on the capture control or capture experience) is calculated and displayed.
			 * If the fontiOS (either fontSize or fontName or both) is changed it cannot be reset to default in the current instance. The object has to be recreated and set (typically an experience object has to be recreated).
			 * Whenever the orientation of the message has been changed, the fontiOS may have to be updated.
			 */
			fontiOS: {
				/**
				 *  fontSize the size of the text in the message.
				 *  fontSize by default is -1 which means an optimal size is calculated and displayed.
				 *  fontSize generally accepts positive numbers.
				 *  Setting arbitrarily large values to fontSize may not render the font and behavior is not defined.
				 */
				fontSize: -1,

				/**
				 *  fontName is the name of the font to be used for the message.
				 *  fontName by default is "HelveticalNeue" .
				 *  fontName complies to the iOS font family names (refer to iOS SDK native documentation to know about supported font families).
				 */
				fontName: "HelveticaNeue",
			},

			/*
			 *  The position (center) of the text message. Applicable only on iOS platform. This will not have any impact on Android platform.
			 *  The message object will be overlay on top of an Image Capture Control with the center of the message being located at this coordinate.
			 *  Changes in the size of the capture control will usually require updating the position of the message as well.
			 *  position by default is "auto" position and is set appropriately which is suitable to the parent view.
			 *  once a new value for position is set (other than default) the "auto" quality is lost and the new value is used. If the value is changed it cannot be reset to default in the current instance. The object has to be recreated and set (typically an experience object has to be recreated).
			 *  position complies to the co-ordinate system in iOS. Setting arbitrarily large values is not recommended and behavior is not defined.
			 */

			position: {
				/**
				 * x co-ordinate of the position
				 */
				x: -1,
				/**
				 * y co-ordinate of the position
				 */
				y: -1,
			},

			/*
			 *  The Size of the text message. Applicable for iOS and Android.
			 *  The message object will be rendered with dimensions specified by this property.  Text will be contained within this boundary, and any set background color will completely cover this area.
			 *  The default size has width -1 and height -1 which means an appropriate size is calculated and rendered.
			 *  If the value is changed it cannot be reset to default in the current instance.
			 *  In Android, rendering might differ based on device being used.
			 *  If the value is changed it cannot be reset to default in the current instance. The object on which this is applied has to be recreated and set (typically an experience object has to be recreated).
			 *  Whenever the orientation of the message has been changed, the size may have to be updated.
			 */
			size: {
				/**
				 * width of the message
				 */
				width: -1,
				/**
				 * height of the message
				 */
				height: -1,
			},
		},
		//hold steady message options
		HoldSteadyMessage: {
			/**
			 *    The color used to display the background of the message
			 *    Specifies the color that the message's background are will be rendered with.  The full area specified by the size property will be filled with the background color, excluding areas clipped outside of view bounds.
			 *    The default background color is transparent.
			 */
			backgroundColor: "#B2000000",
			/**
			 *    The color used to display the text
			 *    Specifies the color that the message's text will be rendered with.
			 *    The default color is white.
			 */
			textColor: "#FFFF0000",
			/**
			 *    The text of the message
			 *    Specifies the text of the message.
			 *    The default message is the empty string.  You must set a message for anything to be displayed.
			 */
			message: "Hold Steady",
			/**
			 *     The visibility of the message
			 *     Specifies whether the message is visible or not.  A value of "false" will prevent the message from appearing.  A value of "true" will show the message, if there is nothing else to prevent it from appearing.
			 *     The default value is true.  Some objects that use messages, like the capture experience objects, will automatically manage and update this state.
			 */
			visible: true,
			/**
			 *     The orientation of the message.
			 *     Use one of the allowed values to set the orientation of the messages being displayed. Once a orientation is set, message stays in that orientation even if the device rotates.In other words this is sticky.
			 *     If you want to handle the rotation when device rotates, orientation has to be explicitly set again on the message.
			 *     The default value is LANDSCAPE. Allowable values are PORTRAIT, LANDSCAPE, REVERSEPORTRAIT, REVERSELANDSCAPE.
			 *     If you modify the orientation of the message, plugin (underlying SDK) tries to optimally display the message however it may not always get displayed with appropriate size and font. It is recommended to set the size or font appropriately if needed.
			 */
			orientation: "LANDSCAPE",
			/*
			 * The font used to display the text of the message on Android platform. This will not have any impact if set on iOS platform.
			 * fontAndroid only supports size of the text.
			 */
			fontAndroid: {
				/**
				 *     The text font size of the message.
				 *     The default is -1, which causes the message text font size to be determined as the SDK sees fit.
				 */
				textSize: -1,
			},
			/*
			 * The font used to display the text of the message on iOS platform. This will not have any impact if set on Android platform.
			 * font respects the platform font capabilities (UIFont class in native iOS SDK).
			 * fontName and fontSize should be changed together. If you change the fontName you should also set the appropriate fontSize otherwise a value (depending on the capture control or capture experience) is calculated and displayed.
			 * If the fontiOS (either fontSize or fontName or both) is changed it cannot be reset to default in the current instance. The object has to be recreated and set (typically an experience object has to be recreated).
			 * Whenever the orientation of the message has been changed, the fontiOS may have to be updated.
			 */
			fontiOS: {
				/**
				 *  fontSize the size of the text in the message.
				 *  fontSize by default is -1 which means an optimal size is calculated and displayed.
				 *  fontSize generally accepts positive numbers.
				 *  Setting arbitrarily large values to fontSize may not render the font and behavior is not defined.
				 */
				fontSize: -1,

				/**
				 *  fontName is the name of the font to be used for the message.
				 *  fontName by default is "HelveticalNeue" .
				 *  fontName complies to the iOS font family names (refer to iOS SDK native documentation to know about supported font families).
				 */
				fontName: "HelveticaNeue",
			},

			/*
			 *  The position (center) of the text message. Applicable only on iOS platform. This will not have any impact on Android platform.
			 *  The message object will be overlay on top of an Image Capture Control with the center of the message being located at this coordinate.
			 *  Changes in the size of the capture control will usually require updating the position of the message as well.
			 *  position by default is "auto" position and is set appropriately which is suitable to the parent view.
			 *  once a new value for position is set (other than default) the "auto" quality is lost and the new value is used. If the value is changed it cannot be reset to default in the current instance. The object has to be recreated and set (typically an experience object has to be recreated).
			 *  position complies to the co-ordinate system in iOS. Setting arbitrarily large values is not recommended and behavior is not defined.
			 */

			position: {
				/**
				 * x co-ordinate of the position
				 */
				x: -1,
				/**
				 * y co-ordinate of the position
				 */
				y: -1,
			},

			/*
			 *  The Size of the text message. Applicable for iOS and Android.
			 *  The message object will be rendered with dimensions specified by this property.  Text will be contained within this boundary, and any set background color will completely cover this area.
			 *  The default size has width -1 and height -1 which means an appropriate size is calculated and rendered.
			 *  If the value is changed it cannot be reset to default in the current instance.
			 *  In Android, rendering might differ based on device being used.
			 *  If the value is changed it cannot be reset to default in the current instance. The object on which this is applied has to be recreated and set (typically an experience object has to be recreated).
			 *  Whenever the orientation of the message has been changed, the size may have to be updated.
			 */
			size: {
				/**
				 * width of the message
				 */
				width: -1,
				/**
				 * height of the message
				 */
				height: -1,
			},
		},
		//captured image options
		CapturedMessage: {
			/**
			 *    The color used to display the background of the message
			 *    Specifies the color that the message's background are will be rendered with.  The full area specified by the size property will be filled with the background color, excluding areas clipped outside of view bounds.
			 *    The default background color is transparent.
			 */
			backgroundColor: "#B2000000",
			/**
			 *    The color used to display the text
			 *    Specifies the color that the message's text will be rendered with.
			 *    The default color is white.
			 */
			textColor: "#00F900",
			/**
			 *    The text of the message
			 *    Specifies the text of the message.
			 *    The default message is the empty string.  You must set a message for anything to be displayed.
			 */
			message: "Done!",
			/**
			 *     The visibility of the message
			 *     Specifies whether the message is visible or not.  A value of "false" will prevent the message from appearing.  A value of "true" will show the message, if there is nothing else to prevent it from appearing.
			 *     The default value is true.  Some objects that use messages, like the capture experience objects, will automatically manage and update this state.
			 */
			visible: true,
			/**
			 *     The orientation of the message.
			 *     Use one of the allowed values to set the orientation of the messages being displayed. Once a orientation is set, message stays in that orientation even if the device rotates.In other words this is sticky.
			 *     If you want to handle the rotation when device rotates, orientation has to be explicitly set again on the message.
			 *     The default value is LANDSCAPE. Allowable values are PORTRAIT, LANDSCAPE, REVERSEPORTRAIT, REVERSELANDSCAPE.
			 *     If you modify the orientation of the message, plugin (underlying SDK) tries to optimally display the message however it may not always get displayed with appropriate size and font. It is recommended to set the size or font appropriately if needed.
			 */
			orientation: "LANDSCAPE",
			/*
			 * The font used to display the text of the message on Android platform. This will not have any impact if set on iOS platform.
			 * fontAndroid only supports size of the text.
			 */
			fontAndroid: {
				/**
				 *     The text font size of the message.
				 *     The default is -1, which causes the message text font size to be determined as the SDK sees fit.
				 */
				textSize: -1,
			},
			/*
			 * The font used to display the text of the message on iOS platform. This will not have any impact if set on Android platform.
			 * font respects the platform font capabilities (UIFont class in native iOS SDK).
			 * fontName and fontSize should be changed together. If you change the fontName you should also set the appropriate fontSize otherwise a value (depending on the capture control or capture experience) is calculated and displayed.
			 * If the fontiOS (either fontSize or fontName or both) is changed it cannot be reset to default in the current instance. The object has to be recreated and set (typically an experience object has to be recreated).
			 * Whenever the orientation of the message has been changed, the fontiOS may have to be updated.
			 */
			fontiOS: {
				/**
				 *  fontSize the size of the text in the message.
				 *  fontSize by default is -1 which means an optimal size is calculated and displayed.
				 *  fontSize generally accepts positive numbers.
				 *  Setting arbitrarily large values to fontSize may not render the font and behavior is not defined.
				 */
				fontSize: -1,

				/**
				 *  fontName is the name of the font to be used for the message.
				 *  fontName by default is "HelveticalNeue" .
				 *  fontName complies to the iOS font family names (refer to iOS SDK native documentation to know about supported font families).
				 */
				fontName: "HelveticaNeue",
			},

			/*
			 *  The position (center) of the text message. Applicable only on iOS platform. This will not have any impact on Android platform.
			 *  The message object will be overlay on top of an Image Capture Control with the center of the message being located at this coordinate.
			 *  Changes in the size of the capture control will usually require updating the position of the message as well.
			 *  position by default is "auto" position and is set appropriately which is suitable to the parent view.
			 *  once a new value for position is set (other than default) the "auto" quality is lost and the new value is used. If the value is changed it cannot be reset to default in the current instance. The object has to be recreated and set (typically an experience object has to be recreated).
			 *  position complies to the co-ordinate system in iOS. Setting arbitrarily large values is not recommended and behavior is not defined.
			 */

			position: {
				/**
				 * x co-ordinate of the position
				 */
				x: -1,
				/**
				 * y co-ordinate of the position
				 */
				y: -1,
			},

			/*
			 *  The Size of the text message. Applicable for iOS and Android.
			 *  The message object will be rendered with dimensions specified by this property.  Text will be contained within this boundary, and any set background color will completely cover this area.
			 *  The default size has width -1 and height -1 which means an appropriate size is calculated and rendered.
			 *  If the value is changed it cannot be reset to default in the current instance.
			 *  In Android, rendering might differ based on device being used.
			 *  If the value is changed it cannot be reset to default in the current instance. The object on which this is applied has to be recreated and set (typically an experience object has to be recreated).
			 *  Whenever the orientation of the message has been changed, the size may have to be updated.
			 */
			size: {
				/**
				 * width of the message
				 */
				width: -1,
				/**
				 * height of the message
				 */
				height: -1,
			},
		},
		//center message options
		CenterMessage: {
			/**
			 *    The color used to display the background of the message
			 *    Specifies the color that the message's background are will be rendered with.  The full area specified by the size property will be filled with the background color, excluding areas clipped outside of view bounds.
			 *    The default background color is transparent.
			 */
			backgroundColor: "#B2000000",
			/**
			 *    The color used to display the text
			 *    Specifies the color that the message's text will be rendered with.
			 *    The default color is white.
			 */
			textColor: "#FFFFFFFF",
			/**
			 *    The text of the message
			 *    Specifies the text of the message.
			 *    The default message is the empty string.  You must set a message for anything to be displayed.
			 */
			message: "Center Check",
			/**
			 *     The visibility of the message
			 *     Specifies whether the message is visible or not.  A value of "false" will prevent the message from appearing.  A value of "true" will show the message, if there is nothing else to prevent it from appearing.
			 *     The default value is true.  Some objects that use messages, like the capture experience objects, will automatically manage and update this state.
			 */
			visible: true,
			/**
			 *     The orientation of the message.
			 *     Use one of the allowed values to set the orientation of the messages being displayed. Once a orientation is set, message stays in that orientation even if the device rotates.In other words this is sticky.
			 *     If you want to handle the rotation when device rotates, orientation has to be explicitly set again on the message.
			 *     The default value is LANDSCAPE. Allowable values are PORTRAIT, LANDSCAPE, REVERSEPORTRAIT, REVERSELANDSCAPE.
			 *     If you modify the orientation of the message, plugin (underlying SDK) tries to optimally display the message however it may not always get displayed with appropriate size and font. It is recommended to set the size or font appropriately if needed.
			 */
			orientation: "LANDSCAPE",
			/*
			 * The font used to display the text of the message on Android platform. This will not have any impact if set on iOS platform.
			 * fontAndroid only supports size of the text.
			 */
			fontAndroid: {
				/**
				 *     The text font size of the message.
				 *     The default is -1, which causes the message text font size to be determined as the SDK sees fit.
				 */
				textSize: -1,
			},
			/*
			 * The font used to display the text of the message on iOS platform. This will not have any impact if set on Android platform.
			 * font respects the platform font capabilities (UIFont class in native iOS SDK).
			 * fontName and fontSize should be changed together. If you change the fontName you should also set the appropriate fontSize otherwise a value (depending on the capture control or capture experience) is calculated and displayed.
			 * If the fontiOS (either fontSize or fontName or both) is changed it cannot be reset to default in the current instance. The object has to be recreated and set (typically an experience object has to be recreated).
			 * Whenever the orientation of the message has been changed, the fontiOS may have to be updated.
			 */
			fontiOS: {
				/**
				 *  fontSize the size of the text in the message.
				 *  fontSize by default is -1 which means an optimal size is calculated and displayed.
				 *  fontSize generally accepts positive numbers.
				 *  Setting arbitrarily large values to fontSize may not render the font and behavior is not defined.
				 */
				fontSize: -1,

				/**
				 *  fontName is the name of the font to be used for the message.
				 *  fontName by default is "HelveticalNeue" .
				 *  fontName complies to the iOS font family names (refer to iOS SDK native documentation to know about supported font families).
				 */
				fontName: "HelveticaNeue",
			},

			/*
			 *  The position (center) of the text message. Applicable only on iOS platform. This will not have any impact on Android platform.
			 *  The message object will be overlay on top of an Image Capture Control with the center of the message being located at this coordinate.
			 *  Changes in the size of the capture control will usually require updating the position of the message as well.
			 *  position by default is "auto" position and is set appropriately which is suitable to the parent view.
			 *  once a new value for position is set (other than default) the "auto" quality is lost and the new value is used. If the value is changed it cannot be reset to default in the current instance. The object has to be recreated and set (typically an experience object has to be recreated).
			 *  position complies to the co-ordinate system in iOS. Setting arbitrarily large values is not recommended and behavior is not defined.
			 */

			position: {
				/**
				 * x co-ordinate of the position
				 */
				x: -1,
				/**
				 * y co-ordinate of the position
				 */
				y: -1,
			},

			/*
			 *  The Size of the text message. Applicable for iOS and Android.
			 *  The message object will be rendered with dimensions specified by this property.  Text will be contained within this boundary, and any set background color will completely cover this area.
			 *  The default size has width -1 and height -1 which means an appropriate size is calculated and rendered.
			 *  If the value is changed it cannot be reset to default in the current instance.
			 *  In Android, rendering might differ based on device being used.
			 *  If the value is changed it cannot be reset to default in the current instance. The object on which this is applied has to be recreated and set (typically an experience object has to be recreated).
			 *  Whenever the orientation of the message has been changed, the size may have to be updated.
			 */
			size: {
				/**
				 * width of the message
				 */
				width: -1,
				/**
				 * height of the message
				 */
				height: -1,
			},
		},
		//zoom in message options
		ZoomInMessage: {
			/**
			 *    The color used to display the background of the message
			 *    Specifies the color that the message's background are will be rendered with.  The full area specified by the size property will be filled with the background color, excluding areas clipped outside of view bounds.
			 *    The default background color is transparent.
			 */
			backgroundColor: "#B2000000",
			/**
			 *    The color used to display the text
			 *    Specifies the color that the message's text will be rendered with.
			 *    The default color is white.
			 */
			textColor: "#FFFFFFFF",
			/**
			 *    The text of the message
			 *    Specifies the text of the message.
			 *    The default message is the empty string.  You must set a message for anything to be displayed.
			 */
			message: "Move Closer",
			/**
			 *     The visibility of the message
			 *     Specifies whether the message is visible or not.  A value of "false" will prevent the message from appearing.  A value of "true" will show the message, if there is nothing else to prevent it from appearing.
			 *     The default value is true.  Some objects that use messages, like the capture experience objects, will automatically manage and update this state.
			 */
			visible: true,
			/**
			 *     The orientation of the message
			 *     Use one of the allowed values to set the orientation of the messages being displayed. Once a orientation is set, message stays in that orientation even if the device rotates.In other words this is sticky.
			 *     If you want to handle the rotation when device rotates, orientation has to be explicitly set again on the message.
			 *     The default value is LANDSCAPE. Allowable values are PORTRAIT, LANDSCAPE, REVERSEPORTRAIT, REVERSELANDSCAPE.
			 *     If you modify the orientation of the message, plugin (underlying SDK) tries to optimally display the message however it may not always get displayed with appropriate size and font. It is recommended to set the size or font appropriately if needed.
			 */
			orientation: "LANDSCAPE",
			/*
			 * The font used to display the text of the message on Android platform. This will not have any impact if set on iOS platform.
			 * fontAndroid only supports size of the text.
			 */
			fontAndroid: {
				/**
				 *     The text font size of the message.
				 *     The default is -1, which causes the message text font size to be determined as the SDK sees fit.
				 */
				textSize: -1,
			},
			/*
			 * The font used to display the text of the message on iOS platform. This will not have any impact if set on Android platform.
			 * font respects the platform font capabilities (UIFont class in native iOS SDK).
			 * fontName and fontSize should be changed together. If you change the fontName you should also set the appropriate fontSize otherwise a value (depending on the capture control or capture experience) is calculated and displayed.
			 * If the fontiOS (either fontSize or fontName or both) is changed it cannot be reset to default in the current instance. The object has to be recreated and set (typically an experience object has to be recreated).
			 * Whenever the orientation of the message has been changed, the fontiOS may have to be updated.
			 */
			fontiOS: {
				/**
				 *  fontSize the size of the text in the message.
				 *  fontSize by default is -1 which means an optimal size is calculated and displayed.
				 *  fontSize generally accepts positive numbers.
				 *  Setting arbitrarily large values to fontSize may not render the font and behavior is not defined.
				 */
				fontSize: -1,

				/**
				 *  fontName is the name of the font to be used for the message.
				 *  fontName by default is "HelveticalNeue" .
				 *  fontName complies to the iOS font family names (refer to iOS SDK native documentation to know about supported font families).
				 */
				fontName: "HelveticaNeue",
			},

			/*
			 *  The position (center) of the text message. Applicable only on iOS platform. This will not have any impact on Android platform.
			 *  The message object will be overlay on top of an Image Capture Control with the center of the message being located at this coordinate.
			 *  Changes in the size of the capture control will usually require updating the position of the message as well.
			 *  position by default is "auto" position and is set appropriately which is suitable to the parent view.
			 *  once a new value for position is set (other than default) the "auto" quality is lost and the new value is used. If the value is changed it cannot be reset to default in the current instance. The object has to be recreated and set (typically an experience object has to be recreated).
			 *  position complies to the co-ordinate system in iOS. Setting arbitrarily large values is not recommended and behavior is not defined.
			 */

			position: {
				/**
				 * x co-ordinate of the position
				 */
				x: -1,
				/**
				 * y co-ordinate of the position
				 */
				y: -1,
			},

			/*
			 *  The Size of the text message. Applicable for iOS and Android.
			 *  The message object will be rendered with dimensions specified by this property.  Text will be contained within this boundary, and any set background color will completely cover this area.
			 *  The default size has width -1 and height -1 which means an appropriate size is calculated and rendered.
			 *  If the value is changed it cannot be reset to default in the current instance.
			 *  In Android, rendering might differ based on device being used.
			 *  If the value is changed it cannot be reset to default in the current instance. The object on which this is applied has to be recreated and set (typically an experience object has to be recreated).
			 *  Whenever the orientation of the message has been changed, the size may have to be updated.
			 */
			size: {
				/**
				 * width of the message
				 */
				width: -1,
				/**
				 * height of the message
				 */
				height: -1,
			},
		},
		//zoom out message options
		ZoomOutMessage: {
			/**
			 *    The color used to display the background of the message.
			 *    Specifies the color that the message's background are will be rendered with.  The full area specified by the size property will be filled with the background color, excluding areas clipped outside of view bounds.
			 *    The default background color is transparent.
			 */
			backgroundColor: "#B2000000",
			/**
			 *    The color used to display the text
			 *    Specifies the color that the message's text will be rendered with.
			 *    The default color is white.
			 */
			textColor: "#FFFFFFFF",
			/**
			 *    The text of the message
			 *    Specifies the text of the message.
			 *    The default message is the empty string.  You must set a message for anything to be displayed.
			 */
			message: "Move Back",
			/**
			 *     The visibility of the message
			 *     Specifies whether the message is visible or not.  A value of "false" will prevent the message from appearing.  A value of "true" will show the message, if there is nothing else to prevent it from appearing.
			 *     The default value is true.  Some objects that use messages, like the capture experience objects, will automatically manage and update this state.
			 */
			visible: true,
			/**
			 *     The orientation of the message
			 *     Use one of the allowed values to set the orientation of the messages being displayed. Once a orientation is set, message stays in that orientation even if the device rotates.In other words this is sticky.
			 *     If you want to handle the rotation when device rotates, orientation has to be explicitly set again on the message.
			 *     The default value is LANDSCAPE. Allowable values are PORTRAIT, LANDSCAPE, REVERSEPORTRAIT, REVERSELANDSCAPE.
			 *     If you modify the orientation of the message, plugin (underlying SDK) tries to optimally display the message however it may not always get displayed with appropriate size and font. It is recommended to set the size or font appropriately if needed.
			 */
			orientation: "LANDSCAPE",
			/*
			 * The font used to display the text of the message on Android platform. This will not have any impact if set on iOS platform.
			 * fontAndroid only supports size of the text.
			 */
			fontAndroid: {
				/**
				 *     The text font size of the message.
				 *     The default is -1, which causes the message text font size to be determined as the SDK sees fit.
				 */
				textSize: -1,
			},
			/*
			 * The font used to display the text of the message on iOS platform. This will not have any impact if set on Android platform.
			 * font respects the platform font capabilities (UIFont class in native iOS SDK).
			 * fontName and fontSize should be changed together. If you change the fontName you should also set the appropriate fontSize otherwise a value (depending on the capture control or capture experience) is calculated and displayed.
			 * If the fontiOS (either fontSize or fontName or both) is changed it cannot be reset to default in the current instance. The object has to be recreated and set (typically an experience object has to be recreated).
			 * Whenever the orientation of the message has been changed, the fontiOS may have to be updated.
			 */
			fontiOS: {
				/**
				 *  fontSize the size of the text in the message.
				 *  fontSize by default is -1 which means an optimal size is calculated and displayed.
				 *  fontSize generally accepts positive numbers.
				 *  Setting arbitrarily large values to fontSize may not render the font and behavior is not defined.
				 */
				fontSize: -1,

				/**
				 *  fontName is the name of the font to be used for the message.
				 *  fontName by default is "HelveticalNeue" .
				 *  fontName complies to the iOS font family names (refer to iOS SDK native documentation to know about supported font families).
				 */
				fontName: "HelveticaNeue",
			},

			/*
			 *  The position (center) of the text message. Applicable only on iOS platform. This will not have any impact on Android platform.
			 *  The message object will be overlay on top of an Image Capture Control with the center of the message being located at this coordinate.
			 *  Changes in the size of the capture control will usually require updating the position of the message as well.
			 *  position by default is "auto" position and is set appropriately which is suitable to the parent view.
			 *  once a new value for position is set (other than default) the "auto" quality is lost and the new value is used. If the value is changed it cannot be reset to default in the current instance. The object has to be recreated and set (typically an experience object has to be recreated).
			 *  position complies to the co-ordinate system in iOS. Setting arbitrarily large values is not recommended and behavior is not defined.
			 */

			position: {
				/**
				 * x co-ordinate of the position
				 */
				x: -1,
				/**
				 * y co-ordinate of the position
				 */
				y: -1,
			},

			/*
			 *  The Size of the text message. Applicable for iOS and Android.
			 *  The message object will be rendered with dimensions specified by this property.  Text will be contained within this boundary, and any set background color will completely cover this area.
			 *  The default size has width -1 and height -1 which means an appropriate size is calculated and rendered.
			 *  If the value is changed it cannot be reset to default in the current instance.
			 *  In Android, rendering might differ based on device being used.
			 *  If the value is changed it cannot be reset to default in the current instance. The object on which this is applied has to be recreated and set (typically an experience object has to be recreated).
			 *  Whenever the orientation of the message has been changed, the size may have to be updated.
			 */
			size: {
				/**
				 * width of the message
				 */
				width: -1,
				/**
				 * height of the message
				 */
				height: -1,
			},
		},
		//Rotate Message options
		RotateMessage: {
			/**
			 *    The color used to display the background of the message.
			 *    Specifies the color that the message's background are will be rendered with.  The full area specified by the size property will be filled with the background color, excluding areas clipped outside of view bounds.
			 *    The default background color is transparent.
			 */
			backgroundColor: "#B2000000",
			/**
			 *    The color used to display the text
			 *    Specifies the color that the message's text will be rendered with.
			 *    The default color is white.
			 */
			textColor: "#FFFFFFFF",
			/**
			 *    The text of the message
			 *    Specifies the text of the message.
			 *    The default message is the empty string.  You must set a message for anything to be displayed.
			 */
			message: "Rotate Device",
			/**
			 *     The visibility of the message
			 *     Specifies whether the message is visible or not.  A value of "false" will prevent the message from appearing.  A value of "true" will show the message, if there is nothing else to prevent it from appearing.
			 *     The default value is true.  Some objects that use messages, like the capture experience objects, will automatically manage and update this state.
			 */
			visible: true,
			/**
			 *     The orientation of the message
			 *     Use one of the allowed values to set the orientation of the messages being displayed. Once a orientation is set, message stays in that orientation even if the device rotates.In other words this is sticky.
			 *     If you want to handle the rotation when device rotates, orientation has to be explicitly set again on the message.
			 *     The default value is LANDSCAPE. Allowable values are PORTRAIT, LANDSCAPE, REVERSEPORTRAIT, REVERSELANDSCAPE.
			 *     If you modify the orientation of the message, plugin (underlying SDK) tries to optimally display the message however it may not always get displayed with appropriate size and font. It is recommended to set the size or font appropriately if needed.
			 */
			orientation: "LANDSCAPE",
			/*
			 * The font used to display the text of the message on Android platform. This will not have any impact if set on iOS platform.
			 * fontAndroid only supports size of the text.
			 */
			fontAndroid: {
				/**
				 *     The text font size of the message.
				 *     The default is -1, which causes the message text font size to be determined as the SDK sees fit.
				 */
				textSize: -1,
			},
			/*
			 * The font used to display the text of the message on iOS platform. This will not have any impact if set on Android platform.
			 * font respects the platform font capabilities (UIFont class in native iOS SDK).
			 * fontName and fontSize should be changed together. If you change the fontName you should also set the appropriate fontSize otherwise a value (depending on the capture control or capture experience) is calculated and displayed.
			 * If the fontiOS (either fontSize or fontName or both) is changed it cannot be reset to default in the current instance. The object has to be recreated and set (typically an experience object has to be recreated).
			 * Whenever the orientation of the message has been changed, the fontiOS may have to be updated.
			 */
			fontiOS: {
				/**
				 *  fontSize the size of the text in the message.
				 *  fontSize by default is -1 which means an optimal size is calculated and displayed.
				 *  fontSize generally accepts positive numbers.
				 *  Setting arbitrarily large values to fontSize may not render the font and behavior is not defined.
				 */
				fontSize: -1,

				/**
				 *  fontName is the name of the font to be used for the message.
				 *  fontName by default is "HelveticalNeue" .
				 *  fontName complies to the iOS font family names (refer to iOS SDK native documentation to know about supported font families).
				 */
				fontName: "HelveticaNeue",
			},

			/*
			 *  The position (center) of the text message. Applicable only on iOS platform. This will not have any impact on Android platform.
			 *  The message object will be overlay on top of an Image Capture Control with the center of the message being located at this coordinate.
			 *  Changes in the size of the capture control will usually require updating the position of the message as well.
			 *  position by default is "auto" position and is set appropriately which is suitable to the parent view.
			 *  once a new value for position is set (other than default) the "auto" quality is lost and the new value is used. If the value is changed it cannot be reset to default in the current instance. The object has to be recreated and set (typically an experience object has to be recreated).
			 *  position complies to the co-ordinate system in iOS. Setting arbitrarily large values is not recommended and behavior is not defined.
			 */

			position: {
				/**
				 * x co-ordinate of the position
				 */
				x: -1,
				/**
				 * y co-ordinate of the position
				 */
				y: -1,
			},

			/*
			 *  The Size of the text message. Applicable for iOS and Android.
			 *  The message object will be rendered with dimensions specified by this property.  Text will be contained within this boundary, and any set background color will completely cover this area.
			 *  The default size has width -1 and height -1 which means an appropriate size is calculated and rendered.
			 *  If the value is changed it cannot be reset to default in the current instance.
			 *  In Android, rendering might differ based on device being used.
			 *  If the value is changed it cannot be reset to default in the current instance. The object on which this is applied has to be recreated and set (typically an experience object has to be recreated).
			 *  Whenever the orientation of the message has been changed, the size may have to be updated.
			 */
			size: {
				/**
				 * width of the message
				 */
				width: -1,
				/**
				 * height of the message
				 */
				height: -1,
			},
		},
		//Hold Parallel Message options
		HoldParallelMessage: {
			/**
			 *    The color used to display the background of the message.
			 *    Specifies the color that the message's background are will be rendered with.  The full area specified by the size property will be filled with the background color, excluding areas clipped outside of view bounds.
			 *    The default background color is transparent.
			 */
			backgroundColor: "#B2000000",
			/**
			 *    The color used to display the text
			 *    Specifies the color that the message's text will be rendered with.
			 *    The default color is white.
			 */
			textColor: "#FFFFFFFF",
			/**
			 *    The text of the message
			 *    Specifies the text of the message.
			 *    The default message is the empty string.  You must set a message for anything to be displayed.
			 */
			message: "Hold Device Level",
			/**
			 *     The visibility of the message
			 *     Specifies whether the message is visible or not.  A value of "false" will prevent the message from appearing.  A value of "true" will show the message, if there is nothing else to prevent it from appearing.
			 *     The default value is true.  Some objects that use messages, like the capture experience objects, will automatically manage and update this state.
			 */
			visible: true,
			/**
			 *     The orientation of the message
			 *     Use one of the allowed values to set the orientation of the messages being displayed. Once a orientation is set, message stays in that orientation even if the device rotates.In other words this is sticky.
			 *     If you want to handle the rotation when device rotates, orientation has to be explicitly set again on the message.
			 *     The default value is LANDSCAPE. Allowable values are PORTRAIT, LANDSCAPE, REVERSEPORTRAIT, REVERSELANDSCAPE.
			 *     If you modify the orientation of the message, plugin (underlying SDK) tries to optimally display the message however it may not always get displayed with appropriate size and font. It is recommended to set the size or font appropriately if needed.
			 */
			orientation: "LANDSCAPE",
			/*
			 * The font used to display the text of the message on Android platform. This will not have any impact if set on iOS platform.
			 * fontAndroid only supports size of the text.
			 */
			fontAndroid: {
				/**
				 *     The text font size of the message.
				 *     The default is -1, which causes the message text font size to be determined as the SDK sees fit.
				 */
				textSize: -1,
			},
			/*
			 * The font used to display the text of the message on iOS platform. This will not have any impact if set on Android platform.
			 * font respects the platform font capabilities (UIFont class in native iOS SDK).
			 * fontName and fontSize should be changed together. If you change the fontName you should also set the appropriate fontSize otherwise a value (depending on the capture control or capture experience) is calculated and displayed.
			 * If the fontiOS (either fontSize or fontName or both) is changed it cannot be reset to default in the current instance. The object has to be recreated and set (typically an experience object has to be recreated).
			 * Whenever the orientation of the message has been changed, the fontiOS may have to be updated.
			 */
			fontiOS: {
				/**
				 *  fontSize the size of the text in the message.
				 *  fontSize by default is -1 which means an optimal size is calculated and displayed.
				 *  fontSize generally accepts positive numbers.
				 *  Setting arbitrarily large values to fontSize may not render the font and behavior is not defined.
				 */
				fontSize: -1,

				/**
				 *  fontName is the name of the font to be used for the message.
				 *  fontName by default is "HelveticalNeue" .
				 *  fontName complies to the iOS font family names (refer to iOS SDK native documentation to know about supported font families).
				 */
				fontName: "HelveticaNeue",
			},

			/*
			 *  The position (center) of the text message. Applicable only on iOS platform. This will not have any impact on Android platform.
			 *  The message object will be overlay on top of an Image Capture Control with the center of the message being located at this coordinate.
			 *  Changes in the size of the capture control will usually require updating the position of the message as well.
			 *  position by default is "auto" position and is set appropriately which is suitable to the parent view.
			 *  once a new value for position is set (other than default) the "auto" quality is lost and the new value is used. If the value is changed it cannot be reset to default in the current instance. The object has to be recreated and set (typically an experience object has to be recreated).
			 *  position complies to the co-ordinate system in iOS. Setting arbitrarily large values is not recommended and behavior is not defined.
			 */

			position: {
				/**
				 * x co-ordinate of the position
				 */
				x: -1,
				/**
				 * y co-ordinate of the position
				 */
				y: -1,
			},

			/*
			 *  The Size of the text message. Applicable for iOS and Android.
			 *  The message object will be rendered with dimensions specified by this property.  Text will be contained within this boundary, and any set background color will completely cover this area.
			 *  The default size has width -1 and height -1 which means an appropriate size is calculated and rendered.
			 *  If the value is changed it cannot be reset to default in the current instance.
			 *  In Android, rendering might differ based on device being used.
			 *  If the value is changed it cannot be reset to default in the current instance. The object on which this is applied has to be recreated and set (typically an experience object has to be recreated).
			 *  Whenever the orientation of the message has been changed, the size may have to be updated.
			 */
			size: {
				/**
				 * width of the message
				 */
				width: -1,
				/**
				 * height of the message
				 */
				height: -1,
			},
		},
		//Tutorial Dismiss Message options
		TutorialDismissMessage: {
			/**
			 *    The color used to display the background of the message.
			 *    Specifies the color that the message's background are will be rendered with.  The full area specified by the size property will be filled with the background color, excluding areas clipped outside of view bounds.
			 *    The default background color is transparent.
			 */
			backgroundColor: "#00000000",
			/**
			 *    The color used to display the text
			 *    Specifies the color that the message's text will be rendered with.
			 *    The default color is white.
			 */
			textColor: "#FFFFFFFF",
			/**
			 *    The text of the message
			 *    Specifies the text of the message.
			 *    The default message is the empty string.  You must set a message for anything to be displayed.
			 */
			message: "Tap to dismiss",
			/**
			 *     The visibility of the message
			 *     Specifies whether the message is visible or not.  A value of "false" will prevent the message from appearing.  A value of "true" will show the message, if there is nothing else to prevent it from appearing.
			 *     The default value is true.  Some objects that use messages, like the capture experience objects, will automatically manage and update this state.
			 */
			visible: true,
			/**
			 *     The orientation of the message
			 *     Use one of the allowed values to set the orientation of the messages being displayed. Once a orientation is set, message stays in that orientation even if the device rotates.In other words this is sticky.
			 *     If you want to handle the rotation when device rotates, orientation has to be explicitly set again on the message.
			 *     The default value is LANDSCAPE. Allowable values are PORTRAIT, LANDSCAPE, REVERSEPORTRAIT, REVERSELANDSCAPE.
			 *     If you modify the orientation of the message, plugin (underlying SDK) tries to optimally display the message however it may not always get displayed with appropriate size and font. It is recommended to set the size or font appropriately if needed.
			 */
			orientation: "LANDSCAPE",
			/*
			 * The font used to display the text of the message on Android platform. This will not have any impact if set on iOS platform.
			 * fontAndroid only supports size of the text.
			 */
			fontAndroid: {
				/**
				 *     The text font size of the message.
				 *     The default is -1, which causes the message text font size to be determined as the SDK sees fit.
				 */
				textSize: -1,
			},
			/*
			 * The font used to display the text of the message on iOS platform. This will not have any impact if set on Android platform.
			 * font respects the platform font capabilities (UIFont class in native iOS SDK).
			 * fontName and fontSize should be changed together. If you change the fontName you should also set the appropriate fontSize otherwise a value (depending on the capture control or capture experience) is calculated and displayed.
			 * If the fontiOS (either fontSize or fontName or both) is changed it cannot be reset to default in the current instance. The object has to be recreated and set (typically an experience object has to be recreated).
			 * Whenever the orientation of the message has been changed, the fontiOS may have to be updated.
			 */
			fontiOS: {
				/**
				 *  fontSize the size of the text in the message.
				 *  fontSize by default is -1 which means an optimal size is calculated and displayed.
				 *  fontSize generally accepts positive numbers.
				 *  Setting arbitrarily large values to fontSize may not render the font and behavior is not defined.
				 */
				fontSize: -1,

				/**
				 *  fontName is the name of the font to be used for the message.
				 *  fontName by default is "HelveticalNeue" .
				 *  fontName complies to the iOS font family names (refer to iOS SDK native documentation to know about supported font families).
				 */
				fontName: "HelveticaNeue",
			},

			/*
			 *  The position (center) of the text message. Applicable only on iOS platform. This will not have any impact on Android platform.
			 *  The message object will be overlay on top of an Image Capture Control with the center of the message being located at this coordinate.
			 *  Changes in the size of the capture control will usually require updating the position of the message as well.
			 *  position by default is "auto" position and is set appropriately which is suitable to the parent view.
			 *  once a new value for position is set (other than default) the "auto" quality is lost and the new value is used. If the value is changed it cannot be reset to default in the current instance. The object has to be recreated and set (typically an experience object has to be recreated).
			 *  position complies to the co-ordinate system in iOS. Setting arbitrarily large values is not recommended and behavior is not defined.
			 */

			position: {
				/**
				 * x co-ordinate of the position
				 */
				x: -1,
				/**
				 * y co-ordinate of the position
				 */
				y: -1,
			},

			/*
			 *  The Size of the text message. Applicable for iOS and Android.
			 *  The message object will be rendered with dimensions specified by this property.  Text will be contained within this boundary, and any set background color will completely cover this area.
			 *  The default size has width -1 and height -1 which means an appropriate size is calculated and rendered.
			 *  If the value is changed it cannot be reset to default in the current instance.
			 *  In Android, rendering might differ based on device being used.
			 *  If the value is changed it cannot be reset to default in the current instance. The object on which this is applied has to be recreated and set (typically an experience object has to be recreated).
			 *  Whenever the orientation of the message has been changed, the size may have to be updated.
			 */
			size: {
				/**
				 * width of the message
				 */
				width: -1,
				/**
				 * height of the message
				 */
				height: -1,
			},
		},
	};
	return object;
};
//End of Check Capture Experience methods

module.exports = CheckCaptureExperience;
