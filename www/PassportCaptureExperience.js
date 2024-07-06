//
// PassportCaptureExperience.js
//
//  Copyright (c) 2012 - 2021 Kofax. Use of this code is with permission pursuant to Kofax license terms.

var ActionUtils = require("./ActionUtils");
var ImageObject = require("./ImageObject");

//Start of Passport Capture Experience methods
//PassportCaptureExperience constructor and corresponding methods
/**
 * @class
 * @alias PassportCaptureExperience
 * @constructor
 */
var PassportCaptureExperience = function () {};

/// To bind  the created ImageCapture Control with the PassportCaptureExperience class .
/**
 * Method to bind  the created ImageCapture Control with the PassportCaptureExperience class .
 *
 * @param {Function} successCallback: Default Success call back function name
 * @param {Function} errorCallback: Default Error call back function name
 * @param {String} imageCaptureControlID : Pass the ID retrieved for the Image Capture Control If a wrong ID is passed an error is received in the error callback
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  success string indicating the method has been invoked
 * errorCallback -    error in case any error occurs
 *
 * @example
 * var imageCaptureControl =  kfxCordova.kfxUicontrols.createImageCaptureControl();
 * var passportCaptureExperience =  kfxCordova.kfxUicontrols.createPassportCaptureExperience();
 * var imageCaptureControlID = null;
 * imageCaptureControl.getId(function(captureControlID){
 *       imageCaptureControlID = captureControlID;
 * },function(error){
 *       alert(JSON.stringify(error));
 * });
 * passportCaptureExperience.bindCaptureControl(function(success){alert(JSON.stringify(success));},function(error){alert(JSON.stringify(error));},imageCaptureControlID);
 */

PassportCaptureExperience.prototype.bindCaptureControl = function (
	successCallback,
	errorCallback,
	imageCaptureControlID
) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.bindPassportCaptureControl,
		[imageCaptureControlID]
	);
};

/// Binds the created ImageCapture Control with the PassportCaptureExperience class and also sets options.
/**
 * Method to bind the created ImageCapture Control with the PassportCaptureExperience class and also to set options. This method is a combination of bindCaptureControl API and setOptions API.
 *
 * @param {Function} successCallback: Default Success call back function name
 * @param {Function} errorCallback: Default Error call back function name
 * @param {Object} options : A JSON object containing the ID retrieved for the Image Capture Control and the properties to be set to the PassportCaptureExperience. If a wrong ID is passed an error is received in the error callback
 *
 * @param {String} [options.ImageCaptureControlID] :  Pass the ID retrieved for the Image Capture Control. If a wrong ID is passed an error is received in the error callback
 * @param {Object} [options.CaptureExperienceOptions] :  a 'passportCaptureExperienceOptions'  variable containing the properties to be set to the PassportCaptureExperience
 * @see Also see {@link PassportCaptureExperience#setOptions setOptions} for detailed description of parameters what we have to pass.
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  success string indicating the method has been invoked
 * errorCallback -    error in case any error occurs
 *
 * @example
 * var imageCaptureControl =  kfxCordova.kfxUicontrols.createImageCaptureControl();
 * var passportCaptureExperience =  kfxCordova.kfxUicontrols.createPassportCaptureExperience();
 * var imageCaptureControlID = null;
 * var passportCaptureExperienceOptions = null;
 * passportCaptureExperience.getOptions(function(success){passportCaptureExperienceOptions = success},function(error){alert(JSON.stringify(error));});
 * imageCaptureControl.getId(function(captureControlID){
 *       imageCaptureControlID = captureControlID;
 * },function(error){
 *       alert(JSON.stringify(error));
 * });
 * passportCaptureExperience.bindCaptureControlWithOptions(function(success){alert(JSON.stringify(success));},function(error){alert(JSON.stringify(error));},{"ImageCaptureControlID":imageCaptureControlId,"CaptureExperienceOptions":passportCaptureExperienceOptions});
 */
PassportCaptureExperience.prototype.bindCaptureControlWithOptions = function (
	successCallback,
	errorCallback,
	parameters
) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.bindPassportCaptureControlWithOptions,
		[parameters]
	);
};

/// Begins the passport capture process.
/**
 * Calling this method will start the process of monitoring the various constraints passed to determine when a level, focused, and non-blurry shot of the passport can be taken.
 * The event listener  "addImageCapturedListener" will receive the delegate call back message and will have the corresponding capture image details.
 *
 * @param successCB: Default Success call back function name
 * @param errorCB: Default Error call back function name
 * @return The return value is captured in the 'successCB' for a successful operation, and might return in 'errorCB' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCB :  success string indicating the method has been invoked
 * errorCB :    error in case any error occurs
 *
 *
 * @example
 * var imageCaptureControl =  kfxCordova.kfxUicontrols.createImageCaptureControl();
 * var passportCaptureExperience =  kfxCordova.kfxUicontrols.createPassportCaptureExperience();
 * var imageCaptureControlID = null;
 * imageCaptureControl.getId(function(captureControlID){
 *       imageCaptureControlID = captureControlID;
 * },function(error){
 *       alert(JSON.stringify(error));
 * });
 * passportCaptureExperience.bindCaptureControl(function(success){alert(JSON.stringify(success));},function(error){alert(JSON.stringify(error));},imageCaptureControlID);
 * passportCaptureExperience.takePicture(function(success){alert(JSON.stringify(success));},function(error){alert(JSON.stringify(error));});
 */
PassportCaptureExperience.prototype.takePicture = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.pcTakePicture,
		[]
	);
};

//Begins the continuous passport capture process.
/**
 * Calling this method will start the process of monitoring the various constraints passed to determine when a level, focused, and non-blurry shot of the Passport can be taken.
 * The event listener  "addImageCapturedListener" will receive the delegate call back message and will have the corresponding capture image details.
 * This method will take pictures continuously. The pitch or roll of the device has to be changed from the set device declination values between each capture.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  success string indicating the method has been invoked
 * errorCallback -    error in case any error occurs
 *
 * @example
 * var imageCaptureControl =  kfxCordova.kfxUicontrols.createImageCaptureControl();
 * var passportCaptureExperience =  kfxCordova.kfxUicontrols.createPassportCaptureExperience();
 * var imageCaptureControlID = null;
 * imageCaptureControl.getId(function(captureControlID){
 *       imageCaptureControlID = captureControlID;
 * },function(error){
 *       alert(JSON.stringify(error));
 * });
 * passportCaptureExperience.bindCaptureControl(function(success){alert(JSON.stringify(success));},function(error){alert(JSON.stringify(error));},imageCaptureControlID);
 * passportCaptureExperience.takePictureContinually(function(success){alert(JSON.stringify(success));},function(error){alert(JSON.stringify(error));});
 */
PassportCaptureExperience.prototype.takePictureContinually = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.pcTakePictureContinually,
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
 * var passportCaptureExperience = kfxCordova.kfxUicontrols.createPassportCaptureExperience();
 * passportCaptureExperience.addImageCapturedEventListener(successCallback, errorCallback, imageCaptureEventCallback);
 */
PassportCaptureExperience.prototype.addImageCapturedEventListener = function (
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
		ActionUtils.pcaddImageCapturedEventListener,
		[]
	);
};

/// Method to remove the event listener to the 'takePicture' method of the PassportCaptureExperience
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
 * var passportCaptureExperience = kfxCordova.kfxUicontrols.createPassportCaptureExperience();
 * // after taking picture
 * passportCaptureExperience.removeImageCapturedEventListener(successCallback,errorCallback);
 */
PassportCaptureExperience.prototype.removeImageCapturedEventListener = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.pcremoveImageCapturedEventListener,
		[]
	);
};

/// This method will add an event listener which will be triggered whenever a picture is taken.
/**
 * @deprecated since version 3.6, use addImageCapturedEventListener
 * A listener that will be called when an passport image was captured. This will only be sent after the experience receives a takePicture message.
 * The experience will wait until the desired stability, levelness, and camera adjustments are met and then capture an image. It would then send the
 * imageObject of the captured image to success call back method.
 * Add this event listener before calling the 'takePicture' method.
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error Call back function name
 * @param {Function} imageCaptureCallback - A JSON object containing the properties of the captured image object. Check the 'Image'  object for its properties.
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  success string indicating the method has been invoked
 * errorCallback -    error in case any error occurs
 *
 * @example
 * function imageCaptureCallback(image){
 *       alert(image.imageid);
 * }
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var passportCaptureExperience = kfxCordova.kfxUicontrols.createPassportCaptureExperience();
 * passportCaptureExperience.addImageCapturedListener(successCallback, errorCallback, imageCaptureCallback);
 */
PassportCaptureExperience.prototype.addImageCapturedListener = function (
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
		ActionUtils.pcaddImageCapturedListener,
		[]
	);
};

// This method will add an event listener which will be triggered whenever a picture is about to be taken.
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
 * var passportCaptureExperience = kfxCordova.kfxUicontrols.createPassportCaptureExperience();
 * passportCaptureExperience.addImageAboutToCaptureListener(successCallback, errorCallback, imageAboutToCaptureCallback);
 */
PassportCaptureExperience.prototype.addImageAboutToCaptureListener = function (
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
		ActionUtils.pcaddImageAboutToCaptureListener,
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
 * var passportCaptureExperience = kfxCordova.kfxUicontrols.createPassportCaptureExperience();
 * passportCaptureExperience.addImageJustCapturedListener(successCallback, errorCallback, imageJustCapturedCallback);
 */
PassportCaptureExperience.prototype.addImageJustCapturedListener = function (
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
		ActionUtils.pcaddImageJustCapturedListener,
		[]
	);
};

/// Method to remove the event listener to the 'takePicture' method of the PassportCaptureExperience
/**
 * @deprecated since version 3.6, use removeImageCapturedEventListener
 * The method would remove the listener to the delegate call back of the takePicture method.
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error Call back function name
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  success string indicating the method has been invoked
 * errorCallback -    error in case any error occurs
 *
 * @example
 * function successCallback(response){
 *   alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *   alert(JSON.stringify(error));
 * }
 * var passportCaptureExperience = kfxCordova.kfxUicontrols.createPassportCaptureExperience();
 * //after taking picture
 * passportCaptureExperience.removeImageCapturedListener(successCallback,errorCallback);
 */
PassportCaptureExperience.prototype.removeImageCapturedListener = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.pcremoveImageCapturedListener,
		[]
	);
};

/// Method to remove the event listener to the 'takePicture' method of the PassportCaptureExperience
/**
 * The method would remove the listener to the delegate call back of the takePicture method.
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error Call back function name
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  success string indicating the method has been invoked
 * errorCallback -    error in case any error occurs
 *
 * @example
 * function successCallback(response){
 *   alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *   alert(JSON.stringify(error));
 * }
 * var passportCaptureExperience = kfxCordova.kfxUicontrols.createPassportCaptureExperience();
 * //after taking picture
 * passportCaptureExperience.removeImageAboutToCapturedListener(successCallback,errorCallback);
 */
PassportCaptureExperience.prototype.removeImageAboutToCapturedListener = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.pcremoveImageAboutToCaptureListener,
		[]
	);
};

/// Method to remove the event listener to the 'takePicture' method of the PassportCaptureExperience
/**
 * The method would remove the listener to the delegate call back of the takePicture method.
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error Call back function name
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  success string indicating the method has been invoked
 * errorCallback -    error in case any error occurs
 *
 * @example
 * function successCallback(response){
 *   alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *   alert(JSON.stringify(error));
 * }
 * var passportCaptureExperience = kfxCordova.kfxUicontrols.createPassportCaptureExperience();
 * //after taking picture
 * passportCaptureExperience.removeImageJustCapturedListener(successCallback,errorCallback);
 */
PassportCaptureExperience.prototype.removeImageJustCapturedListener = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.pcremoveImageJustCapturedListener,
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
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  success string indicating the method has been invoked
 * errorCallback -    error in case any error occurs
 *
 * @example
 * function successCallback(response){
 *   alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *   alert(JSON.stringify(error));
 * }
 * var imageCaptureControl =  kfxCordova.kfxUicontrols.createImageCaptureControl();
 * var passportCaptureExperience =  kfxCordova.kfxUicontrols.createPassportCaptureExperience();
 * var imageCaptureControlID = null;
 * imageCaptureControl.getId(function(captureControlID){
 *       imageCaptureControlID = captureControlID;
 * },function(error){
 *       alert(JSON.stringify(error));
 * });
 * passportCaptureExperience.bindCaptureControl(function(success){alert(JSON.stringify(success));},function(error){alert(JSON.stringify(error));},imageCaptureControlID);
 * passportCaptureExperience.takePictureContinually(function(success){alert(JSON.stringify(success));},function(error){alert(JSON.stringify(error));});
 * passportCaptureExperience.stopCapture(successCallback,errorCallback);
 */
PassportCaptureExperience.prototype.stopCapture = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.pcStopCapture,
		[]
	);
};

/// To set the Options/properties of the PassportCaptureExperience class .
/**
 * Method to set the properties of the native PassportCaptureExperience class.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Object} options -  a 'passportCaptureExperienceOptions'  variable containing the properties to be set to the PassportCaptureExperience
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
 * @see see {@link PassportCaptureExperience#getPassportCaptureOptions getPassportCaptureOptions} for detailed description of parameters what we have to pass.
 *
 * @param {Object} [options.PassportDetectionSettings] passport detection settings
 *
 * @param {Object} [options.PassportDetectionSettings.DetectionSettings] detection settings
 *
 * @param {Object} [options.PassportDetectionSettings.DetectionSettings.centerPoint] center point of the document. Should just be a point with in the bounds of the image height and width.
 *
 * @param {Number} [options.PassportDetectionSettings.DetectionSettings.centerPoint.x] x value of the center. Should just be with in the bounds of the image of the target frame.
 *
 * @param {Number} [options.PassportDetectionSettings.DetectionSettings.centerPoint.y] y value of the center. Should just be with in the bounds of the image of the target frame.
 *
 * @param {Number} [options.PassportDetectionSettings.DetectionSettings.aspectRatio = 0] aspect ratio of the document. Aspect ratio between 0 and 1 or negative is not recommended. It can result in erroneous detection of target frame. The aspect ratio is presented in the format of longEdge/shortEdge, and is used to construct the largest target frame. If the targetFrameAspectRatio is set to 0, then it will be automatically reset to an image aspect ratio.
 *
 * @param {Number} [options.PassportDetectionSettings.DetectionSettings.padding = 5] padding percent value. Values will be clamped to the range [0-50]. The default value is 5.
 *
 * @param {Number} [options.PassportDetectionSettings.DetectionSettings.minFillFraction = 0.65] minimum fill fraction value. Setting a negative number is ignored.
 *
 * @param {Number} [options.PassportDetectionSettings.DetectionSettings.maxFillFraction = 1.3] maximum fill fraction value. Setting a negative number is ignored.
 *
 * @param {Number} [options.PassportDetectionSettings.DetectionSettings.maxSkewAngle = 10] maximum skew angle value. The default value is 10, specified in degrees. Setting a negative number is ignored.
 *
 * @param {Number} [options.PassportDetectionSettings.DetectionSettings.toleranceFraction = 0.15] tolerance fraction value. Setting a negative number is ignored.
 *
 * @see Also see {@link PassportCaptureExperience#setOptions  PassportCaptureExperience's setOptions API} for more.
 *
 * @example
 * function successCallback(response){
 *   alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *   alert(JSON.stringify(error));
 * }
 * var imageCaptureControl =  kfxCordova.kfxUicontrols.createImageCaptureControl();
 * var passportCaptureExperience =  kfxCordova.kfxUicontrols.createPassportCaptureExperience();
 * var imageCaptureControlID = null;
 * imageCaptureControl.getId(function(captureControlID){
 *       imageCaptureControlID = captureControlID;
 * },function(error){
 *       alert(JSON.stringify(error));
 * });
 * passportCaptureExperience.bindCaptureControl(function(success){alert(JSON.stringify(success));},function(error){alert(JSON.stringify(error));},imageCaptureControlID);
 * //get the options
 * passportCaptureExperience.getOptions(function(success){passportCaptureExperienceOptions = success},myerrorCB);
 * //specify the values for the Passport Capture Experience
 * passportCaptureExperienceOptions.CaptureCriteria.focusEnabled = false;
 * //specify the path for tutorial sample image, which is relative to www folder.
 * passportCaptureExperienceOptions.LookAndFeel.tutorialSampleImagePath = 'www/images/custom_tutorialimage.png';
 * //set the options to capture view
 * passportCaptureExperience.setOptions(successCallback,errorCallback,passportCaptureExperienceOptions)
 */
PassportCaptureExperience.prototype.setOptions = function (successCallback, errorCallback, parameters) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.pcSetOptions,
		[parameters]
	);
};

/// To get the Options/properties of the PassportCaptureExperience class .
/**
 * Method to get the properties of the native PassportCaptureExperience class.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  success string indicating the method has been invoked
 * errorCallback -    error in case any error occurs
 *
 * @example
 *
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * function successCallback(options){
 *       alert(JSON.stringify(options));
 *       // Optionally you can get the properties and map to the application UI to show the user
 * }
 *
 * var imageCaptureControl =  kfxCordova.kfxUicontrols.createImageCaptureControl();
 * var passportCaptureExperience =  kfxCordova.kfxUicontrols.createPassportCaptureExperience();
 * var imageCaptureControlID = null;
 *
 *
 * imageCaptureControl.getId(function(captureControlID){
 *       imageCaptureControlID = captureControlID;
 * },function(error){
 *       alert(JSON.stringify(error));
 * });
 *
 * passportCaptureExperience.bindCaptureControl(function(success){alert(JSON.stringify(success));},function(error){alert(JSON.stringify(error));},imageCaptureControlID);
 * passportCaptureExperience.getOptions(successCallback,errorCallback);
 */
PassportCaptureExperience.prototype.getOptions = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.pcGetOptions,
		[]
	);
};

/// Method to clear Passport CaptureExperience memory.
/**
 * Method to clear native Passport CaptureExperience object and its properties.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  success string indicating the method has been invoked
 * errorCallback -    error in case any error occurs
 *
 * @example
 *
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * function successCallback(options){
 *       alert(JSON.stringify(options));
 * }
 *
 * var imageCaptureControl =  kfxCordova.kfxUicontrols.createImageCaptureControl();
 * var passportCaptureExperience =  kfxCordova.kfxUicontrols.createPassportCaptureExperience();
 * var imageCaptureControlID = null;
 *
 * imageCaptureControl.getId(function(captureControlID){
 *       imageCaptureControlID = captureControlID;
 * },function(error){
 *       alert(JSON.stringify(error));
 * });
 *
 * passportCaptureExperience.bindCaptureControl(function(success){alert(JSON.stringify(success));},function(error){alert(JSON.stringify(error));},imageCaptureControlID);
 * passportCaptureExperience.takePictureContinually(successCallback,errorCallback);
 * passportCaptureExperience.destroy(successCallback,errorCallback);
 */
PassportCaptureExperience.prototype.destroy = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.pcDestroy,
		[]
	);
};

///A getter method of properties of the 'PassportCaptureExperience' class
/**
 * Method returning the 'PassportCaptureExperience'  class properties that can be set by the user. Use this object as an input
 * parameter to set the properties of the PassportCaptureExperience class. The parameters are grouped, and has default values.
 *
 * @example
 * var passportCaptureExperience =  kfxCordova.kfxUicontrols.createPassportCaptureExperience();
 * var passportCaptureOptions = passportCaptureExperience.getPassportCaptureOptions();
 * passportCaptureOptions should be like below {
 *    LookAndFeel: {
 *         enableAnimationTutor: false,
 *         outerViewFinderColor : "#B2000000",
 *         vibrationEnabled : true,
 *         diagnosticsViewEnabled : false,
 *         guidanceFrameThickness : 8,
 *         tutorialSampleImagePath : '',
 *         guidanceFrameColor : "#00FF00"
 *    },
 *    CaptureCriteria: {
 *         stabilityThresholdEnabled: true,
 *         stabilityThreshold: 95,
 *         focusEnabled: true,
 *         rollThresholdEnabled: true,
 *         rollThreshold: 15,
 *         pitchThreshold: 15,
 *         pitchThresholdEnabled: true,
 *         PassportDetectionSettings:{
 *            DetectionSettings:{
 *               centerPoint:{
 *                  x: null,
 *                  y: null
 *               },
 *               aspectRatio: 1.45,
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
 *         message: "Fill viewable area with passport",
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
 *         message: "Center Passport",
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
 *    RotateMessage: {
 *            backgroundColor: "#B2000000",
 *            textColor: "#FFFFFFFF",
 *            message: "Rotate Device",
 *            visible: true,
 *            orientation: "LANDSCAPE",
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
 *            orientation: "LANDSCAPE",
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
 *        },
 *    TutorialDismissMessage: {
 *                backgroundColor: "#B2000000",
 *                textColor: "#FFFFFFFF",
 *                message: "Tap to dismiss",
 *                visible: true,
 *                orientation: "LANDSCAPE",
 *                fontAndroid: {
 *                  textSize : -1
 *               },
 *               fontiOS:{
 *                  fontSize : -1,
 *                  fontName : "HelveticaNeue"
 *                },
 *                position :{
 *                   x : -1,
 *                   y : -1
 *                },
 *                size:{
 *                   width: -1,
 *                   height: -1
 *                }
 *            }
 *
 *    };
 */
PassportCaptureExperience.prototype.getPassportCaptureOptions = function () {
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
			 * This value specifies the device vibration is enable or not when image capture happens
			 */
			vibrationEnabled: true,
			/**
			 * This value specifies to turn ON/OFF diagnostic information view
			 */
			diagnosticsViewEnabled: false,
			/**
			 * This value specifies the thickness that will be used for the guidance frame. Valid values are in the range [1, 100]. Values outside this range will be interpreted as 8.
			 * The default thickness is 8.
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
			//Passport detection settings
			PassportDetectionSettings: {
				//detection settings
				DetectionSettings: {
					//center point of the check
					centerPoint: {
						//x position
						x: null,
						//y position
						y: null,
					},
					//aspect ratio of the passport
					aspectRatio: 1.45,
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
			message: "Fill viewable area with passport",
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
			message: "Center Passport",
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
//End of Passport Capture Experience methods

module.exports = PassportCaptureExperience;
