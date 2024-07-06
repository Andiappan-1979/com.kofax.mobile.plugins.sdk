//
// DocumentCaptureExperience.js
//
//  Copyright (c) 2012 - 2021 Kofax. Use of this code is with permission pursuant to Kofax license terms.

var ActionUtils = require("./ActionUtils");
var ImageObject = require("./ImageObject");

//Start of Document Capture Experience methods
//DocumentCaptureExperience constructor and corresponding methods
/**
 * @class
 * @alias DocumentCaptureExperience
 * @constructor
 */
var DocumentCaptureExperience = function () {};

/// To bind the created ImageCapture Control with the DocumentCaptureExperience class .
/**
 * Method to bind  the created ImageCapture Control with the DocumentCaptureExperience class .
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
 * var documentCaptureExperience =  kfxCordova.kfxUicontrols.createDocumentCaptureExperience();
 * var imageCaptureControlID = null;
 * imageCaptureControl.getId(function(captureControlID){
 *       imageCaptureControlID = captureControlID;
 * },function(error){
 *       alert(JSON.stringify(error));
 * });
 * documentCaptureExperience.bindCaptureControl(function(success){alert(JSON.stringify(success));},function(error){alert(JSON.stringify(error));},imageCaptureControlID);
 */
DocumentCaptureExperience.prototype.bindCaptureControl = function (
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
		ActionUtils.bindDocumentCaptureControl,
		[imageCaptureControlID]
	);
};

/// Binds the created ImageCapture Control with the DocumentCaptureExperience class and also sets options.
/**
 * Method to bind the created ImageCapture Control with the DocumentCaptureExperience class and also to set options. This method is a combination of bindCaptureControl API and setOptions API.
 *
 * @param {Function} successCallback: Default Success call back function name
 * @param {Function} errorCallback: Default Error call back function name
 * @param {Object} options : A JSON object containing the ID retrieved for the Image Capture Control and the properties to be set to the DocumentCaptureExperience. If a wrong ID is passed an error is received in the error callback
 *
 * @param {String} [options.ImageCaptureControlID] :  Pass the ID retrieved for the Image Capture Control. If a wrong ID is passed an error is received in the error callback
 * @param {Object} [options.CaptureExperienceOptions] :  a 'documentCaptureExperienceOptions'  variable containing the properties to be set to the DocumentCaptureExperience
 * @see Also see {@link DocumentCaptureExperience#setOptions setOptions} for detailed description of parameters what we have to pass.
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  success string indicating the method has been invoked
 * errorCallback -    error in case any error occurs
 *
 * @example
 * var imageCaptureControl =  kfxCordova.kfxUicontrols.createImageCaptureControl();
 * var documentCaptureExperience =  kfxCordova.kfxUicontrols.createDocumentCaptureExperience();
 * var imageCaptureControlID = null;
 * var documentCaptureExperienceOptions = null;
 * documentCaptureExperience.getOptions(function(success){documentCaptureExperienceOptions = success},function(error){alert(JSON.stringify(error));});
 * imageCaptureControl.getId(function(captureControlID){
 *       imageCaptureControlID = captureControlID;
 * },function(error){
 *       alert(JSON.stringify(error));
 * });
 * documentCaptureExperience.bindCaptureControlWithOptions(function(success){alert(JSON.stringify(success));},function(error){alert(JSON.stringify(error));},{"ImageCaptureControlID":imageCaptureControlId,"CaptureExperienceOptions":documentCaptureExperienceOptions});
 */
DocumentCaptureExperience.prototype.bindCaptureControlWithOptions = function (
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
		ActionUtils.bindDocumentCaptureControlWithOptions,
		[parameters]
	);
};

/// Begins the image capture process.
/**
 * Calling this method will start the process of monitoring the various constraints passed to determine when a level, focused, and non-blurry shot of the document can be taken.
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
 * var documentCaptureExperience =  kfxCordova.kfxUicontrols.createDocumentCaptureExperience();
 * var imageCaptureControlID = null;
 * imageCaptureControl.getId(function(captureControlID){
 *       imageCaptureControlID = captureControlID;
 * },function(error){
 *       alert(JSON.stringify(error));
 * });
 * documentCaptureExperience.bindCaptureControl(function(success){alert(JSON.stringify(success));},function(error){alert(JSON.stringify(error));},imageCaptureControlID);
 * documentCaptureExperience.takePicture(function(success){alert(JSON.stringify(success));},function(error){alert(JSON.stringify(error));});
 */
DocumentCaptureExperience.prototype.takePicture = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.dcTakePicture,
		[]
	);
};

//Begins the continuous image capture process.
/**
 * Calling this method will start the process of monitoring the various constraints passed to determine when a level, focused, and non-blurry shot of the document can be taken.
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
 * var documentCaptureExperience =  kfxCordova.kfxUicontrols.createDocumentCaptureExperience();
 * var imageCaptureControlID = null;
 * imageCaptureControl.getId(function(captureControlID){
 *       imageCaptureControlID = captureControlID;
 * },function(error){
 *       alert(JSON.stringify(error));
 * });
 * documentCaptureExperience.bindCaptureControl(function(success){alert(JSON.stringify(success));},function(error){alert(JSON.stringify(error));},imageCaptureControlID);
 * documentCaptureExperience.takePictureContinually(function(success){alert(JSON.stringify(success));},function(error){alert(JSON.stringify(error));});
 */
DocumentCaptureExperience.prototype.takePictureContinually = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.dcTakePictureContinually,
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
 * var documentCaptureExperience = kfxCordova.kfxUicontrols.createDocumentCaptureExperience();
 * documentCaptureExperience.addImageCapturedEventListener(successCallback, errorCallback, imageCaptureEventCallback);
 */
DocumentCaptureExperience.prototype.addImageCapturedEventListener = function (
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
		ActionUtils.dcaddImageCapturedEventListener,
		[]
	);
};

/// Method to remove the event listener to the 'takePicture' method of the DocumentCaptureExperience
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
 * var documentCaptureExperience = kfxCordova.kfxUicontrols.createDocumentCaptureExperience();
 * // after taking picture
 * documentCaptureExperience.removeImageCapturedEventListener(successCallback,errorCallback);
 */
DocumentCaptureExperience.prototype.removeImageCapturedEventListener = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.dcremoveImageCapturedEventListener,
		[]
	);
};

/// This method will add an event listener which will be triggered whenever a picture is taken.
/**
 * @deprecated since version 3.6, use addImageCapturedEventListener
 * A listener that will be called when an image was captured. This will only be sent after the experience receives a takePicture message.
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
 * var documentCaptureExperience = kfxCordova.kfxUicontrols.createDocumentCaptureExperience();
 * documentCaptureExperience.addImageCapturedListener(successCallback, errorCallback, imageCaptureCallback);
 */
DocumentCaptureExperience.prototype.addImageCapturedListener = function (
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
		ActionUtils.dcaddImageCapturedListener,
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
 * var documentCaptureExperience = kfxCordova.kfxUicontrols.createDocumentCaptureExperience();
 * documentCaptureExperience.addImageAboutToCaptureListener(successCallback, errorCallback, imageAboutToCaptureCallback);
 */
DocumentCaptureExperience.prototype.addImageAboutToCaptureListener = function (
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
		ActionUtils.dcaddImageAboutToCaptureListener,
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
 * var documentCaptureExperience = kfxCordova.kfxUicontrols.createDocumentCaptureExperience();
 * documentCaptureExperience.addImageJustCapturedListener(successCallback, errorCallback, imageJustCapturedCallback);
 */
DocumentCaptureExperience.prototype.addImageJustCapturedListener = function (
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
		ActionUtils.dcaddImageJustCapturedListener,
		[]
	);
};

/// Method to remove the event listener to the 'takePicture' method of the DocumentCaptureExperience
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
 * var documentCaptureExperience = kfxCordova.kfxUicontrols.createDocumentCaptureExperience();
 * //after taking picture
 * documentCaptureExperience.removeImageCapturedListener(successCallback,errorCallback);
 */
DocumentCaptureExperience.prototype.removeImageCapturedListener = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.dcremoveImageCapturedListener,
		[]
	);
};

/// Method to remove the event listener to the 'takePicture' method of the DocumentCaptureExperience
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
 * var documentCaptureExperience = kfxCordova.kfxUicontrols.createDocumentCaptureExperience();
 * // after taking picture
 * documentCaptureExperience.removeImageAboutToCaptureListener(successCallback,errorCallback);
 */
DocumentCaptureExperience.prototype.removeImageAboutToCaptureListener = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.dcremoveImageAboutToCaptureListener,
		[]
	);
};

/// Method to remove the event listener to the 'takePicture' method of the DocumentCaptureExperience
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
 * var documentCaptureExperience = kfxCordova.kfxUicontrols.createDocumentCaptureExperience();
 * // after taking picture
 * documentCaptureExperience.removeImageJustCapturedListener(successCallback,errorCallback);
 */
DocumentCaptureExperience.prototype.removeImageJustCapturedListener = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.dcremoveImageJustCapturedListener,
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
 * var documentCaptureExperience =  kfxCordova.kfxUicontrols.createDocumentCaptureExperience();
 * var imageCaptureControlID = null;
 * imageCaptureControl.getId(function(captureControlID){
 *       imageCaptureControlID = captureControlID;
 * },function(error){
 *       alert(JSON.stringify(error));
 * });
 * documentCaptureExperience.bindCaptureControl(function(success){alert(JSON.stringify(success));},function(error){alert(JSON.stringify(error));},imageCaptureControlID);
 * documentCaptureExperience.stopCapture(successCallback,errorCallback);
 */
DocumentCaptureExperience.prototype.stopCapture = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.dcStopCapture,
		[]
	);
};

/// Get the default glare threshold for document capture experience.
/**
 * This method will return the default glare threshold of document capture experience.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  default glare threshold value.
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
 * var documentCaptureExperience =  kfxCordova.kfxUicontrols.createDocumentCaptureExperience();
 * imageCaptureControl.getId(function(captureControlID){
 *       imageCaptureControlID = captureControlID;
 * },function(error){
 *       alert(JSON.stringify(error));
 * });
 *
 * documentCaptureExperience.bindCaptureControl(successCallback,errorCallback,imageCaptureControlID);
 * documentCaptureExperience.getDefaultGlareThreshold(successCallback,errorCallback);
 */
DocumentCaptureExperience.prototype.getDefaultGlareThreshold = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.dcGetDefaultGlareThreshold,
		[]
	);
};

/// To set the Options/properties of the DocumentCaptureExperience class .
/**
 * Method to set the properties of the native DocumentCaptureExperience class.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Object} options -  a 'documentCaptureExperienceOptions'  variable containing the properties to be set to the DocumentCaptureExperience
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
 * @param {Object} options.CaptureCriteria capture criteria options
 *
 * @param {Boolean} [options.CaptureCriteria.stabilityThresholdEnabled = true]
 *    Whether the stability threshold is enabled.
 *    A boolean that indicates whether the stability threshold is enabled.If enabled this criteria is checked before taking a picture.
 *
 * @param {Boolean} [options.CaptureCriteria.pitchThresholdEnabled = true]
 *    Whether the Pitch threshold is enabled.
 *    A boolean that indicates whether the Pitch threshold is enabled. If enabled this criteria is checked before taking a picture.
 *
 * @param {Boolean} [options.CaptureCriteria.rollThresholdEnabled = true]
 *    Whether the Roll threshold is enabled.
 *    A boolean that indicates whether the Roll threshold is enabled. If enabled this criteria is checked before taking a picture.
 *
 * @param {Boolean} [options.CaptureCriteria.focusEnabled = true]
 *    Whether the Focus constraint is enabled.
 *    A boolean that indicates whether the Focus constraint is enabled. If enabled this criteria is checked before taking a picture.
 *    Making it enabled is advisable. Otherwise it is highly likely that images out of focus are captured. Default value is enabled.
 *
 * @param {Number} [options.CaptureCriteria.stabilityThreshold = 95]
 *    The stability threshold value
 *    Stability Value which needs to be met before taking a picture. It is a number from 0 to 100, where 100 indicates that the device must be near perfectly still to take a picture and 0 indicates that stability checking is turned off.
 *    Default value is 95
 *
 * @param {Number} [options.CaptureCriteria.pitchThreshold = 15]
 *    The Pitch threshold value
 *    Pitch Value which needs to be met before taking a picture.
 *    The default value is 15.
 *    Valid values are in the range [0, 45].  Values outside this range will be interpreted as 0 or 45.  A value
 *    of 45 disables level checking for pitch.
 *
 * @param {Number} [options.CaptureCriteria.rollThreshold = 15]
 *    The Roll threshold value
 *    Roll Value which needs to be met before taking a picture. The default value is 15.
 *    Valid values are in the range [0, 45].  Values outside this range will be interpreted as 0 or 45.  A value
 *    of 45 disables level checking for roll.
 *
 * @param {Boolean} [options.CaptureCriteria.glareDetectionEnabled = false] A boolean that indicates whether the glare detection is enabled. If enabled, this criteria is checked aftert taking a picture and user would be asked to do one more capture by tilting the device if a glare is detected.
 * It is user responsibility to call takePictureContinually. After the final capture, further captures would be stopped and user would get the imageCapturedEvent: callback.
 *
 * @param {Boolean} [options.CaptureCriteria.launchGlareRemoverExperience = false] A boolean that indicates whether the glare detection is enabled. If enabled, this criteria is checked aftert taking a picture and user would be asked to do one more capture by tilting the device if a glare is detected.
 *
 * @param {Number} [options.CaptureCriteria.tiltAngle = 12] This will be used to determine the angle of tilt for the second capture.
 * Default value is 12, which indicates that the device's edge that is away from the user should stand higher than the device's edge that is closer to the user.
 * Valid values are in the range -20 to 20.
 *
 * @param {Number} [options.CaptureCriteria.glareThresholdiOS = 0.015] This will be used to indicate how much glare fraction should be configured on the captured image.This value will effect for iOS platform.This will not have any impact if set on Android platform.
 * Configuring the Glare Threshold value will control the launch of second capture experience(Tilt capture) when glareDetectionEnabled/launchGlareRemoverExperience is set to true.
 * Valid values are in the range 0 to 1.
 *
 * @param {Number} [options.CaptureCriteria.glareThresholdAndroid = null] This will be used to indicate how much glare fraction should be configured on the captured image.This value will effect for Android platform.This will not have any impact if set on iOS platform.
 * Configuring the Glare Threshold value will control the launch of second capture experience(Tilt capture) when glareDetectionEnabled/launchGlareRemoverExperience is set to true.
 * Valid values are in the range 0 to 1.
 *
 * @param {Object} [options.DocumentDetectionSettings] document detection settings
 *
 * @param {Number} [options.DocumentDetectionSettings.shortEdgeThreshold = 85]
 *    short edge threshold value used to detect the document. The valid range is [0 - 100].
 *
 * @param {Number} [options.DocumentDetectionSettings.longEdgeThreshold = 85]
 *    long edge threshold value used to detect the document. The valid range is [0 - 100].
 *
 * @param {String} [options.DocumentDetectionSettings.edgeDetection = "GPUBased"]
 *    A property to get or set the document edge detection algorithm, with two values: ISG and GPUBased.
 *
 * @param {Object} [options.DocumentDetectionSettings.DetectionSettings] detection settings
 *
 * @param {Object} [options.DocumentDetectionSettings.DetectionSettings.centerPoint] center point of the document. Should just be a point with in the bounds of the image height and width.
 *
 * @param {Number} [options.DocumentDetectionSettings.DetectionSettings.centerPoint.x] x value of the center. Should just be with in the bounds of the image of the target frame.
 *
 * @param {Number} [options.DocumentDetectionSettings.DetectionSettings.centerPoint.y] y value of the center. Should just be with in the bounds of the image of the target frame.
 *
 * @param {Number} [options.DocumentDetectionSettings.DetectionSettings.aspectRatio = 0] aspect ratio of the document. Aspect ratio between 0 and 1 or negative is not recommended. It can result in erroneous detection of target frame. The aspect ratio is presented in the format of longEdge/shortEdge, and is used to construct the largest target frame. If the targetFrameAspectRatio is set to 0, then it will be automatically reset to an image aspect ratio.
 *
 * @param {Number} [options.DocumentDetectionSettings.DetectionSettings.padding = 5] padding percent value. Values will be clamped to the range [0-50]. The default value is 5.
 *
 * @param {Number} [options.DocumentDetectionSettings.DetectionSettings.minFillFraction = 0.65] minimum fill fraction value. Setting a negative number is ignored.
 *
 * @param {Number} [options.DocumentDetectionSettings.DetectionSettings.maxFillFraction = 1.3] maximum fill fraction value. Setting a negative number is ignored.
 *
 * @param {Number} [options.DocumentDetectionSettings.DetectionSettings.maxSkewAngle = 10] maximum skew angle value. The default value is 10, specified in degrees. Setting a negative number is ignored.
 *
 * @param {Number} [options.DocumentDetectionSettings.DetectionSettings.toleranceFraction = 0.15] tolerance fraction value. Setting a negative number is ignored.
 *
 * @param {Object} options.CapturedMessage captured indication message options
 *
 * @param {String} [options.CapturedMessage.message = "Done!"]
 *    The text of the message
 *    Specifies the text of the message.
 *    The default message is the empty string.  You must set a message for anything to be displayed.
 *
 * @param {String} [options.CapturedMessage.textColor = "#FFFFFFFF"]
 *    The color used to display the text
 *    Specifies the color that the message's text will be rendered with.
 *    The default color is white.
 *
 * @param {String} [options.CapturedMessage.backgroundColor = "#B2000000"]
 *    The color used to display the background of the message
 *    Specifies the color that the message's background are will be rendered with.  The full area specified by the size property will be filled with the background color, excluding areas clipped outside of view bounds.
 *    The default background color is black with transparency.
 *
 * @param {Boolean} [options.CapturedMessage.visible = True]
 *     The visibility of the message
 *     Specifies whether the message is visible or not.  A value of "false" will prevent the message from appearing.  A value of "true" will show the message, if there is nothing else to prevent it from appearing.
 *     The default value is true.  Some objects that use messages, like the capture experience objects, will automatically manage and update this state.
 *
 * @param {String} [options.CapturedMessage.orientation = "LANDSCAPE"]
 *     The orientation of the message
 *     Use one of the allowed values to set the orientation of the messages being displayed. Once a orientation is set, message stays in that orientation even if the device rotates.In other words this is sticky.
 *     If you want to handle the rotation when device rotates, orientation has to be explicitly set again on the message.
 *     The default value is LANDSCAPE. Allowable values are PORTRAIT, LANDSCAPE, REVERSEPORTRAIT, REVERSELANDSCAPE
 *     If you modify the orientation of the message, plugin (underlying SDK) tries to optimally display the message however it may not always get displayed with appropriate size and font. It is recommended to set the size or font appropriately if needed.
 *
 * @param {Object} options.CapturedMessage.fontAndroid  The font used to display the text of the message on Android platform.
 *
 * @param {Number} [options.CapturedMessage.fontAndroid.textSize = -1]
 *     The text font size of the message
 *     The default is -1, which causes the message text font size to be determined as the SDK sees fit.
 *
 * @param {Object} options.CapturedMessage.fontiOS  The font used to display the text of the message on iOS platform.
 *
 * @param {Number} [options.CapturedMessage.fontiOS.fontSize = -1]
 *     fontSize the size of the text in the message
 *     fontSize by default is -1 which means an optimal size is calculated and displayed.
 *     fontSize generally accepts positive numbers.
 *     Setting arbitrarily large values to fontSize may not render the font and behavior is not defined.
 *
 * @param {String} [options.CapturedMessage.fontiOS.fontName = "HelveticaNeue"]
 *     fontName is the name of the font to be used for the message
 *     fontName by default is "HelveticalNeue"
 *     fontName complies to the iOS font family names (refer to iOS SDK native documentation to know about supported font families).
 *
 * @param {Object} options.CapturedMessage.position The position (center) of the text message. Applicable only on iOS platform. This will not have any impact on Android platform.
 *
 *     The message object will be overlay on top of an Image Capture Control with the center of the message being located at this coordinate.
 *     Changes in the size of the capture control will usually require updating the position of the message as well.
 *     position by default is "auto" position and is set appropriately which is suitable to the parent view.
 *     once a new value for position is set (other than default) the "auto" quality is lost and the new value is used. If the value is changed it cannot be reset to default in the current instance. The object has to be recreated and set (typically an experience object has to be recreated).
 *     position complies to the co-ordinate system in iOS. Setting arbitrarily large values is not recommended and behavior is not defined.
 *
 * @param {Number} [options.CapturedMessage.position.x = -1]
 *     x co-ordinate of the position.
 *     x co-ordinate by default is -1 which means SDK will be calculated the x co-ordinate of the message position.
 *
 * @param {Number} [options.CapturedMessage.position.y = -1]
 *     y co-ordinate of the position
 *     y co-ordinate by default is -1 which means SDK will be calculated the y co-ordinate of the message position.
 *
 * @param {Object} options.CapturedMessage.size The Size of the text message. Applicable for iOS and Android.
 *
 *     The message object will be rendered with dimensions specified by this property.  Text will be contained within this boundary, and any set background color will completely cover this area.
 *     The default size has width -1 and height -1 which means an appropriate size is calculated and rendered.
 *     If the value is changed it cannot be reset to default in the current instance.
 *     In Android, rendering might differ based on device being used.
 *     If the value is changed it cannot be reset to default in the current instance. The object on which this is applied has to be recreated and set (typically an experience object has to be recreated).
 *     Whenever the orientation of the message has been changed, the size may have to be updated.
 *
 *  @param {Number} [options.CapturedMessage.size.width = -1]
 *     width of the message.
 *     width by default is -1 which means SDK will be calculated the width of the message.
 *
 *  @param {Number} [options.CapturedMessage.size.height = -1]
 *     height of the message.
 *     height by default is -1 which means SDK will be calculated the height of the message.
 *
 * @param {Object} options.HoldSteadyMessage hold steady message options
 *
 * @param {String} [options.HoldSteadyMessage.message = "Hold Steady"]
 *    The text of the message
 *    Specifies the text of the message.
 *    The default message is the empty string.  You must set a message for anything to be displayed.
 *
 * @param {String} [options.HoldSteadyMessage.textColor = "#FFFFFFFF"]
 *    The color used to display the text
 *    Specifies the color that the message's text will be rendered with.
 *    The default color is white.
 *
 * @param {String} [options.HoldSteadyMessage.backgroundColor = "#B2000000"]
 *    The color used to display the background of the message
 *    Specifies the color that the message's background are will be rendered with.  The full area specified by the size property will be filled with the background color, excluding areas clipped outside of view bounds.
 *    The default background color is black with transparency.
 *
 * @param {Boolean} [options.HoldSteadyMessage.visible = true]
 *     The visibility of the message
 *     Specifies whether the message is visible or not.  A value of "false" will prevent the message from appearing.  A value of "true" will show the message, if there is nothing else to prevent it from appearing.
 *     The default value is true.  Some objects that use messages, like the capture experience objects, will automatically manage and update this state.
 *
 * @param {String} [options.HoldSteadyMessage.orientation = "LANDSCAPE"]
 *     The orientation of the message
 *     Use one of the allowed values to set the orientation of the messages being displayed. Once a orientation is set, message stays in that orientation even if the device rotates.In other words this is sticky.
 *     If you want to handle the rotation when device rotates, orientation has to be explicitly set again on the message.
 *     The default value is LANDSCAPE. Allowable values are PORTRAIT, LANDSCAPE, REVERSEPORTRAIT, REVERSELANDSCAPE
 *     If you modify the orientation of the message, plugin (underlying SDK) tries to optimally display the message however it may not always get displayed with appropriate size and font. It is recommended to set the size or font appropriately if needed.
 *
 * @param {Object} options.HoldSteadyMessage.fontAndroid  The font used to display the text of the message on Android platform.
 *
 * @param {Number} [options.HoldSteadyMessage.fontAndroid.textSize = -1]
 *     The text font size of the message
 *     The default is -1, which causes the message text font size to be determined as the SDK sees fit.
 *
 * @param {Object} options.HoldSteadyMessage.fontiOS  The font used to display the text of the message on iOS platform.
 *
 * @param {Number} [options.HoldSteadyMessage.fontiOS.fontSize = -1]
 *     fontSize the size of the text in the message
 *     fontSize by default is -1 which means an optimal size is calculated and displayed.
 *     fontSize generally accepts positive numbers.
 *     Setting arbitrarily large values to fontSize may not render the font and behavior is not defined.
 *
 * @param {String} [options.HoldSteadyMessage.fontiOS.fontName = "HelveticaNeue"]
 *     fontName is the name of the font to be used for the message
 *     fontName by default is "HelveticalNeue"
 *     fontName complies to the iOS font family names (refer to iOS SDK native documentation to know about supported font families).
 *
 * @param {Object} options.HoldSteadyMessage.position The position (center) of the text message. Applicable only on iOS platform. This will not have any impact on Android platform.
 *
 *     The message object will be overlay on top of an Image Capture Control with the center of the message being located at this coordinate.
 *     Changes in the size of the capture control will usually require updating the position of the message as well.
 *     position by default is "auto" position and is set appropriately which is suitable to the parent view.
 *     once a new value for position is set (other than default) the "auto" quality is lost and the new value is used. If the value is changed it cannot be reset to default in the current instance. The object has to be recreated and set (typically an experience object has to be recreated).
 *     position complies to the co-ordinate system in iOS. Setting arbitrarily large values is not recommended and behavior is not defined.
 *
 * @param {Number} [options.HoldSteadyMessage.position.x = -1]
 *     x co-ordinate of the position.
 *     x co-ordinate by default is -1 which means SDK will be calculated the x co-ordinate of the message position.
 *
 * @param {Number} [options.HoldSteadyMessage.position.y = -1]
 *     y co-ordinate of the position
 *     y co-ordinate by default is -1 which means SDK will be calculated the y co-ordinate of the message position.
 *
 * @param {Object} options.HoldSteadyMessage.size The Size of the text message. Applicable for iOS and Android.
 *
 *     The message object will be rendered with dimensions specified by this property.  Text will be contained within this boundary, and any set background color will completely cover this area.
 *     The default size has width -1 and height -1 which means an appropriate size is calculated and rendered.
 *     If the value is changed it cannot be reset to default in the current instance.
 *     In Android, rendering might differ based on device being used.
 *     If the value is changed it cannot be reset to default in the current instance. The object on which this is applied has to be recreated and set (typically an experience object has to be recreated).
 *     Whenever the orientation of the message has been changed, the size may have to be updated.
 *
 *  @param {Number} [options.HoldSteadyMessage.size.width = -1]
 *     width of the message.
 *     width by default is -1 which means SDK will be calculated the width of the message.
 *
 *  @param {Number} [options.HoldSteadyMessage.size.height = -1]
 *     height of the message.
 *     height by default is -1 which means SDK will be calculated the height of the message.
 *
 * @param {Object} options.CenterMessage page orientation message options
 *
 * @param {String} [options.CenterMessage.message = "Center Document"]
 *    The text of the message
 *    Specifies the text of the message.
 *    The default message is the empty string.  You must set a message for anything to be displayed.
 *
 * @param {String} [options.CenterMessage.textColor = "#FFFFFFFF"]
 *    The color used to display the text
 *    Specifies the color that the message's text will be rendered with.
 *    The default color is white.
 *
 * @param {String} [options.CenterMessage.backgroundColor = "#B2000000"]
 *    The color used to display the background of the message
 *    Specifies the color that the message's background are will be rendered with.  The full area specified by the size property will be filled with the background color, excluding areas clipped outside of view bounds.
 *    The default background color is black with transparency.
 *
 * @param {Boolean} [options.CenterMessage.visible = true]
 *     The visibility of the message
 *     Specifies whether the message is visible or not.  A value of "false" will prevent the message from appearing.  A value of "true" will show the message, if there is nothing else to prevent it from appearing.
 *     The default value is true.  Some objects that use messages, like the capture experience objects, will automatically manage and update this state.
 *
 * @param {String} [options.CenterMessage.orientation = "LANDSCAPE"]
 *     The orientation of the message
 *     Use one of the allowed values to set the orientation of the messages being displayed. Once a orientation is set, message stays in that orientation even if the device rotates.In other words this is sticky.
 *     If you want to handle the rotation when device rotates, orientation has to be explicitly set again on the message.
 *     The default value is LANDSCAPE. Allowable values are PORTRAIT, LANDSCAPE, REVERSEPORTRAIT, REVERSELANDSCAPE
 *     If you modify the orientation of the message, plugin (underlying SDK) tries to optimally display the message however it may not always get displayed with appropriate size and font. It is recommended to set the size or font appropriately if needed.
 *
 * @param {Object} options.CenterMessage.fontAndroid  The font used to display the text of the message on Android platform.
 *
 * @param {Number} [options.CenterMessage.fontAndroid.textSize = -1]
 *     The text font size of the message
 *     The default is -1, which causes the message text font size to be determined as the SDK sees fit.
 *
 * @param {Object} options.CenterMessage.fontiOS  The font used to display the text of the message on iOS platform.
 *
 * @param {Number} [options.CenterMessage.fontiOS.fontSize = -1]
 *     fontSize the size of the text in the message
 *     fontSize by default is -1 which means an optimal size is calculated and displayed.
 *     fontSize generally accepts positive numbers.
 *     Setting arbitrarily large values to fontSize may not render the font and behavior is not defined.
 *
 * @param {String} [options.CenterMessage.fontiOS.fontName = "HelveticaNeue"]
 *     fontName is the name of the font to be used for the message
 *     fontName by default is "HelveticalNeue"
 *     fontName complies to the iOS font family names (refer to iOS SDK native documentation to know about supported font families).
 *
 * @param {Object} options.CenterMessage.position The position (center) of the text message. Applicable only on iOS platform. This will not have any impact on Android platform.
 *
 *     The message object will be overlay on top of an Image Capture Control with the center of the message being located at this coordinate.
 *     Changes in the size of the capture control will usually require updating the position of the message as well.
 *     position by default is "auto" position and is set appropriately which is suitable to the parent view.
 *     once a new value for position is set (other than default) the "auto" quality is lost and the new value is used. If the value is changed it cannot be reset to default in the current instance. The object has to be recreated and set (typically an experience object has to be recreated).
 *     position complies to the co-ordinate system in iOS. Setting arbitrarily large values is not recommended and behavior is not defined.
 *
 * @param {Number} [options.CenterMessage.position.x = -1]
 *     x co-ordinate of the position.
 *     x co-ordinate by default is -1 which means SDK will be calculated the x co-ordinate of the message position.
 *
 * @param {Number} [options.CenterMessage.position.y = -1]
 *     y co-ordinate of the position
 *     y co-ordinate by default is -1 which means SDK will be calculated the y co-ordinate of the message position.
 *
 * @param {Object} options.CenterMessage.size The Size of the text message. Applicable for iOS and Android.
 *
 *     The message object will be rendered with dimensions specified by this property.  Text will be contained within this boundary, and any set background color will completely cover this area.
 *     The default size has width -1 and height -1 which means an appropriate size is calculated and rendered.
 *     If the value is changed it cannot be reset to default in the current instance.
 *     In Android, rendering might differ based on device being used.
 *     If the value is changed it cannot be reset to default in the current instance. The object on which this is applied has to be recreated and set (typically an experience object has to be recreated).
 *     Whenever the orientation of the message has been changed, the size may have to be updated.
 *
 *  @param {Number} [options.CenterMessage.size.width = -1]
 *     width of the message.
 *     width by default is -1 which means SDK will be calculated the width of the message.
 *
 *  @param {Number} [options.CenterMessage.size.height = -1]
 *     height of the message.
 *     height by default is -1 which means SDK will be calculated the height of the message.
 *
 * @param {Object} options.UserInstructionMessage no document found message options
 *
 * @param {String} [options.UserInstructionMessage.message = "Fill viewable area with document"]
 *    The text of the message
 *    Specifies the text of the message.
 *    The default message is the empty string.  You must set a message for anything to be displayed.
 *
 * @param {String} [options.UserInstructionMessage.textColor = "#FFFFFFFF"]
 *    The color used to display the text
 *    Specifies the color that the message's text will be rendered with.
 *    The default color is white.
 *
 * @param {String} [options.UserInstructionMessage.backgroundColor = "#00000000"]
 *    The color used to display the background of the message
 *    Specifies the color that the message's background are will be rendered with.  The full area specified by the size property will be filled with the background color, excluding areas clipped outside of view bounds.
 *    The default background color is transparent.
 *
 * @param {Boolean} [options.UserInstructionMessage.visible = true]
 *     The visibility of the message
 *     Specifies whether the message is visible or not.  A value of "false" will prevent the message from appearing.  A value of "true" will show the message, if there is nothing else to prevent it from appearing.
 *     The default value is true.  Some objects that use messages, like the capture experience objects, will automatically manage and update this state.
 *
 * @param {String} [options.UserInstructionMessage.orientation = "LANDSCAPE"]
 *     The orientation of the message
 *     Use one of the allowed values to set the orientation of the messages being displayed. Once a orientation is set, message stays in that orientation even if the device rotates.In other words this is sticky.
 *     If you want to handle the rotation when device rotates, orientation has to be explicitly set again on the message.
 *     The default value is LANDSCAPE. Allowable values are PORTRAIT, LANDSCAPE, REVERSEPORTRAIT, REVERSELANDSCAPE
 *     If you modify the orientation of the message, plugin (underlying SDK) tries to optimally display the message however it may not always get displayed with appropriate size and font. It is recommended to set the size or font appropriately if needed.
 *
 * @param {Object} options.UserInstructionMessage.fontAndroid  The font used to display the text of the message on Android platform.
 *
 * @param {Number} [options.UserInstructionMessage.fontAndroid.textSize = -1]
 *     The text font size of the message
 *     The default is -1, which causes the message text font size to be determined as the SDK sees fit.
 *
 * @param {Object} options.UserInstructionMessage.fontiOS  The font used to display the text of the message on iOS platform.
 *
 * @param {Number} [options.UserInstructionMessage.fontiOS.fontSize = -1]
 *     fontSize the size of the text in the message
 *     fontSize by default is -1 which means an optimal size is calculated and displayed.
 *     fontSize generally accepts positive numbers.
 *     Setting arbitrarily large values to fontSize may not render the font and behavior is not defined.
 *
 * @param {String} [options.UserInstructionMessage.fontiOS.fontName = "HelveticaNeue"]
 *     fontName is the name of the font to be used for the message
 *     fontName by default is "HelveticalNeue"
 *     fontName complies to the iOS font family names (refer to iOS SDK native documentation to know about supported font families).
 *
 * @param {Object} options.UserInstructionMessage.position The position (center) of the text message. Applicable only on iOS platform. This will not have any impact on Android platform.
 *
 *     The message object will be overlay on top of an Image Capture Control with the center of the message being located at this coordinate.
 *     Changes in the size of the capture control will usually require updating the position of the message as well.
 *     position by default is "auto" position and is set appropriately which is suitable to the parent view.
 *     once a new value for position is set (other than default) the "auto" quality is lost and the new value is used. If the value is changed it cannot be reset to default in the current instance. The object has to be recreated and set (typically an experience object has to be recreated).
 *     position complies to the co-ordinate system in iOS. Setting arbitrarily large values is not recommended and behavior is not defined.
 *
 * @param {Number} [options.UserInstructionMessage.position.x = -1]
 *     x co-ordinate of the position.
 *     x co-ordinate by default is -1 which means SDK will be calculated the x co-ordinate of the message position.
 *
 * @param {Number} [options.UserInstructionMessage.position.y = -1]
 *     y co-ordinate of the position
 *     y co-ordinate by default is -1 which means SDK will be calculated the y co-ordinate of the message position.
 *
 * @param {Object} options.UserInstructionMessage.size The Size of the text message. Applicable for iOS and Android.
 *
 *     The message object will be rendered with dimensions specified by this property.  Text will be contained within this boundary, and any set background color will completely cover this area.
 *     The default size has width -1 and height -1 which means an appropriate size is calculated and rendered.
 *     If the value is changed it cannot be reset to default in the current instance.
 *     In Android, rendering might differ based on device being used.
 *     If the value is changed it cannot be reset to default in the current instance. The object on which this is applied has to be recreated and set (typically an experience object has to be recreated).
 *     Whenever the orientation of the message has been changed, the size may have to be updated.
 *
 *  @param {Number} [options.UserInstructionMessage.size.width = -1]
 *     width of the message.
 *     width by default is -1 which means SDK will be calculated the width of the message.
 *
 *  @param {Number} [options.UserInstructionMessage.size.height = -1]
 *     height of the message.
 *     height by default is -1 which means SDK will be calculated the height of the message.
 *
 * @param {Object} options.ZoomInMessage zoom in message options
 *
 * @param {String} [options.ZoomInMessage.message = "Move Closer"]
 *    The text of the message
 *    Specifies the text of the message.
 *    The default message is the empty string.  You must set a message for anything to be displayed.
 *
 * @param {String} [options.ZoomInMessage.textColor = "#FFFFFFFF"]
 *    The color used to display the text
 *    Specifies the color that the message's text will be rendered with.
 *    The default color is white.
 *
 * @param {String} [options.ZoomInMessage.backgroundColor = "#B2000000"]
 *    The color used to display the background of the message
 *    Specifies the color that the message's background are will be rendered with.  The full area specified by the size property will be filled with the background color, excluding areas clipped outside of view bounds.
 *    The default background color is black with transparency.
 *
 * @param {Boolean} [options.ZoomInMessage.visible = true]
 *     The visibility of the message
 *     Specifies whether the message is visible or not.  A value of "false" will prevent the message from appearing.  A value of "true" will show the message, if there is nothing else to prevent it from appearing.
 *     The default value is true.  Some objects that use messages, like the capture experience objects, will automatically manage and update this state.
 *
 * @param {String} [options.ZoomInMessage.orientation = "LANDSCAPE"]
 *     The orientation of the message
 *     Use one of the allowed values to set the orientation of the messages being displayed. Once a orientation is set, message stays in that orientation even if the device rotates.In other words this is sticky.
 *     If you want to handle the rotation when device rotates, orientation has to be explicitly set again on the message.
 *     The default value is LANDSCAPE. Allowable values are PORTRAIT, LANDSCAPE, REVERSEPORTRAIT, REVERSELANDSCAPE
 *     If you modify the orientation of the message, plugin (underlying SDK) tries to optimally display the message however it may not always get displayed with appropriate size and font. It is recommended to set the size or font appropriately if needed.
 *
 * @param {Object} options.ZoomInMessage.fontAndroid  The font used to display the text of the message on Android platform.
 *
 * @param {Number} [options.ZoomInMessage.fontAndroid.textSize = -1]
 *     The text font size of the message
 *     The default is -1, which causes the message text font size to be determined as the SDK sees fit.
 *
 * @param {Object} options.ZoomInMessage.fontiOS  The font used to display the text of the message on iOS platform.
 *
 * @param {Number} [options.ZoomInMessage.fontiOS.fontSize = -1]
 *     fontSize the size of the text in the message
 *     fontSize by default is -1 which means an optimal size is calculated and displayed.
 *     fontSize generally accepts positive numbers.
 *     Setting arbitrarily large values to fontSize may not render the font and behavior is not defined.
 *
 * @param {String} [options.ZoomInMessage.fontiOS.fontName = "HelveticaNeue"]
 *     fontName is the name of the font to be used for the message
 *     fontName by default is "HelveticalNeue"
 *     fontName complies to the iOS font family names (refer to iOS SDK native documentation to know about supported font families).
 *
 * @param {Object} options.ZoomInMessage.position The position (center) of the text message. Applicable only on iOS platform. This will not have any impact on Android platform.
 *
 *     The message object will be overlay on top of an Image Capture Control with the center of the message being located at this coordinate.
 *     Changes in the size of the capture control will usually require updating the position of the message as well.
 *     position by default is "auto" position and is set appropriately which is suitable to the parent view.
 *     once a new value for position is set (other than default) the "auto" quality is lost and the new value is used. If the value is changed it cannot be reset to default in the current instance. The object has to be recreated and set (typically an experience object has to be recreated).
 *     position complies to the co-ordinate system in iOS. Setting arbitrarily large values is not recommended and behavior is not defined.
 *
 * @param {Number} [options.ZoomInMessage.position.x = -1]
 *     x co-ordinate of the position.
 *     x co-ordinate by default is -1 which means SDK will be calculated the x co-ordinate of the message position.
 *
 * @param {Number} [options.ZoomInMessage.position.y = -1]
 *     y co-ordinate of the position
 *     y co-ordinate by default is -1 which means SDK will be calculated the y co-ordinate of the message position.
 *
 * @param {Object} options.ZoomInMessage.size The Size of the text message. Applicable for iOS and Android.
 *
 *     The message object will be rendered with dimensions specified by this property.  Text will be contained within this boundary, and any set background color will completely cover this area.
 *     The default size has width -1 and height -1 which means an appropriate size is calculated and rendered.
 *     If the value is changed it cannot be reset to default in the current instance.
 *     In Android, rendering might differ based on device being used.
 *     If the value is changed it cannot be reset to default in the current instance. The object on which this is applied has to be recreated and set (typically an experience object has to be recreated).
 *     Whenever the orientation of the message has been changed, the size may have to be updated.
 *
 *  @param {Number} [options.ZoomInMessage.size.width = -1]
 *     width of the message.
 *     width by default is -1 which means SDK will be calculated the width of the message.
 *
 *
 *  @param {Number} [options.ZoomInMessage.size.height = -1]
 *     height of the message.
 *     height by default is -1 which means SDK will be calculated the height of the message.
 *
 * @param {Object} options.ZoomOutMessage zoom out message options
 *
 * @param {String} [options.ZoomOutMessage.message = "Move Back"]
 *    The text of the message
 *    Specifies the text of the message.
 *    The default message is the empty string.  You must set a message for anything to be displayed.
 *
 * @param {String} [options.ZoomOutMessage.textColor = "#FFFFFFFF"]
 *    The color used to display the text
 *    Specifies the color that the message's text will be rendered with.
 *    The default color is white.
 *
 * @param {String} [options.ZoomOutMessage.backgroundColor = "#B2000000"]
 *    The color used to display the background of the message
 *    Specifies the color that the message's background are will be rendered with.  The full area specified by the size property will be filled with the background color, excluding areas clipped outside of view bounds.
 *    The default background color is black with transparency.
 *
 * @param {Boolean} [options.ZoomOutMessage.visible = true]
 *     The visibility of the message
 *     Specifies whether the message is visible or not.  A value of "false" will prevent the message from appearing.  A value of "true" will show the message, if there is nothing else to prevent it from appearing.
 *     The default value is true.  Some objects that use messages, like the capture experience objects, will automatically manage and update this state.
 *
 * @param {String} [options.ZoomOutMessage.orientation = "LANDSCAPE"]
 *     The orientation of the message
 *     Use one of the allowed values to set the orientation of the messages being displayed. Once a orientation is set, message stays in that orientation even if the device rotates.In other words this is sticky.
 *     If you want to handle the rotation when device rotates, orientation has to be explicitly set again on the message.
 *     The default value is LANDSCAPE. Allowable values are PORTRAIT, LANDSCAPE, REVERSEPORTRAIT, REVERSELANDSCAPE
 *     If you modify the orientation of the message, plugin (underlying SDK) tries to optimally display the message however it may not always get displayed with appropriate size and font. It is recommended to set the size or font appropriately if needed.
 *
 * @param {Object} options.ZoomOutMessage.fontAndroid  The font used to display the text of the message on Android platform.
 *
 * @param {Number} [options.ZoomOutMessage.fontAndroid.textSize  = -1]
 *     The text font size of the message
 *     The default is -1, which causes the message text font size to be determined as the SDK sees fit.
 *
 * @param {Object} options.ZoomOutMessage.fontiOS  The font used to display the text of the message on iOS platform.
 *
 * @param {Number} [options.ZoomOutMessage.fontiOS.fontSize = -1]
 *     fontSize the size of the text in the message
 *     fontSize by default is -1 which means an optimal size is calculated and displayed.
 *     fontSize generally accepts positive numbers.
 *     Setting arbitrarily large values to fontSize may not render the font and behavior is not defined.
 *
 * @param {String} [options.ZoomOutMessage.fontiOS.fontName  = "HelveticaNeue"]
 *     fontName is the name of the font to be used for the message
 *     fontName by default is "HelveticalNeue"
 *     fontName complies to the iOS font family names (refer to iOS SDK native documentation to know about supported font families).
 *
 * @param {Object} options.ZoomOutMessage.position The position (center) of the text message. Applicable only on iOS platform. This will not have any impact on Android platform.
 *
 *     The message object will be overlay on top of an Image Capture Control with the center of the message being located at this coordinate.
 *     Changes in the size of the capture control will usually require updating the position of the message as well.
 *     position by default is "auto" position and is set appropriately which is suitable to the parent view.
 *     once a new value for position is set (other than default) the "auto" quality is lost and the new value is used. If the value is changed it cannot be reset to default in the current instance. The object has to be recreated and set (typically an experience object has to be recreated).
 *     position complies to the co-ordinate system in iOS. Setting arbitrarily large values is not recommended and behavior is not defined.
 *
 * @param {Number} [options.ZoomOutMessage.position.x = -1]
 *     x co-ordinate of the position.
 *     x co-ordinate by default is -1 which means SDK will be calculated the x co-ordinate of the message position.
 *
 * @param {Number} [options.ZoomOutMessage.position.y = -1]
 *     y co-ordinate of the position
 *     y co-ordinate by default is -1 which means SDK will be calculated the y co-ordinate of the message position.
 *
 * @param {Object} options.ZoomOutMessage.size The Size of the text message. Applicable for iOS and Android.
 *
 *     The message object will be rendered with dimensions specified by this property.  Text will be contained within this boundary, and any set background color will completely cover this area.
 *     The default size has width -1 and height -1 which means an appropriate size is calculated and rendered.
 *     If the value is changed it cannot be reset to default in the current instance.
 *     In Android, rendering might differ based on device being used.
 *     If the value is changed it cannot be reset to default in the current instance. The object on which this is applied has to be recreated and set (typically an experience object has to be recreated).
 *     Whenever the orientation of the message has been changed, the size may have to be updated.
 *
 *  @param {Number} [options.ZoomOutMessage.size.width = -1]
 *     width of the message.
 *     width by default is -1 which means SDK will be calculated the width of the message.
 *
 *  @param {Number} [options.ZoomOutMessage.size.height = -1]
 *     height of the message.
 *     height by default is -1 which means SDK will be calculated the height of the message.
 *
 * @param {Object} options.RotateMessage Rotate message options
 *
 * @param {String} [options.RotateMessage.message = "Rotate Device"]
 *    The text of the message
 *    Specifies the text of the message.
 *    You can customize a message for anything to be displayed.
 *
 * @param {String} [options.RotateMessage.textColor = "#FFFFFFFF"]
 *    The color used to display the text
 *    Specifies the color that the message's text will be rendered with.
 *    The default color is white.
 *
 * @param {String} [options.RotateMessage.backgroundColor = "#B2000000"]
 *    The color used to display the background of the message
 *    Specifies the color that the message's background are will be rendered with.  The full area specified by the size property will be filled with the background color, excluding areas clipped outside of view bounds.
 *    The default background color is black with transparency.
 *
 * @param {Boolean} [options.RotateMessage.visible = ture]
 *     The visibility of the message
 *     Specifies whether the message is visible or not.  A value of "false" will prevent the message from appearing.  A value of "true" will show the message, if there is nothing else to prevent it from appearing.
 *     The default value is true.  Some objects that use messages, like the capture experience objects, will automatically manage and update this state.
 *
 * @param {String} [options.RotateMessage.orientation = "LANDSCAPE"]
 *     The orientation of the message
 *     Use one of the allowed values to set the orientation of the messages being displayed. Once a orientation is set, message stays in that orientation even if the device rotates.In other words this is sticky.
 *     If you want to handle the rotation when device rotates, orientation has to be explicitly set again on the message.
 *     The default value is LANDSCAPE. Allowable values are PORTRAIT, LANDSCAPE, REVERSEPORTRAIT, REVERSELANDSCAPE
 *     If you modify the orientation of the message, plugin (underlying SDK) tries to optimally display the message however it may not always get displayed with appropriate size and font. It is recommended to set the size or font appropriately if needed.
 *
 * @param {Object} options.RotateMessage.fontAndroid  The font used to display the text of the message on Android platform.
 *
 * @param {Number} [options.RotateMessage.fontAndroid.textSize = -1]
 *     The text font size of the message
 *     The default is -1, which causes the message text font size to be determined as the SDK sees fit.
 *
 * @param {Object} options.RotateMessage.fontiOS  The font used to display the text of the message on iOS platform.
 *
 * @param {Number} [options.RotateMessage.fontiOS.fontSize = -1]
 *     fontSize the size of the text in the message
 *     fontSize by default is -1 which means an optimal size is calculated and displayed.
 *     fontSize generally accepts positive numbers.
 *     Setting arbitrarily large values to fontSize may not render the font and behavior is not defined.
 *
 * @param {String} [options.RotateMessage.fontiOS.fontName = "HelveticaNeue"]
 *     fontName is the name of the font to be used for the message
 *     fontName by default is "HelveticalNeue"
 *     fontName complies to the iOS font family names (refer to iOS SDK native documentation to know about supported font families).
 *
 * @param {Object} options.RotateMessage.position The position (center) of the text message. Applicable only on iOS platform. This will not have any impact on Android platform.
 *
 *     The message object will be overlay on top of an Image Capture Control with the center of the message being located at this coordinate.
 *     Changes in the size of the capture control will usually require updating the position of the message as well.
 *     position by default is "auto" position and is set appropriately which is suitable to the parent view.
 *     once a new value for position is set (other than default) the "auto" quality is lost and the new value is used. If the value is changed it cannot be reset to default in the current instance. The object has to be recreated and set (typically an experience object has to be recreated).
 *     position complies to the co-ordinate system in iOS. Setting arbitrarily large values is not recommended and behavior is not defined.
 *
 * @param {Number} [options.RotateMessage.position.x = -1]
 *     x co-ordinate of the position.
 *     x co-ordinate by default is -1 which means SDK will be calculated the x co-ordinate of the message position.
 *
 * @param {Number} [options.RotateMessage.position.y = -1]
 *     y co-ordinate of the position
 *     y co-ordinate by default is -1 which means SDK will be calculated the y co-ordinate of the message position.
 *
 * @param {Object} options.RotateMessage.size The Size of the text message. Applicable for iOS and Android.
 *
 *     The message object will be rendered with dimensions specified by this property.  Text will be contained within this boundary, and any set background color will completely cover this area.
 *     The default size has width -1 and height -1 which means an appropriate size is calculated and rendered.
 *     If the value is changed it cannot be reset to default in the current instance.
 *     In Android, rendering might differ based on device being used.
 *     If the value is changed it cannot be reset to default in the current instance. The object on which this is applied has to be recreated and set (typically an experience object has to be recreated).
 *     Whenever the orientation of the message has been changed, the size may have to be updated.
 *
 *  @param {Number} [options.RotateMessage.size.width = -1]
 *     width of the message.
 *     width by default is -1 which means SDK will be calculated the width of the message.
 *
 *  @param {Number} [options.RotateMessage.size.height = -1]
 *     height of the message.
 *     height by default is -1 which means SDK will be calculated the height of the message.
 *
 *  @param {Object} options.HoldParallelMessage Hold Parallel Message options
 *
 * @param {String} [options.HoldParallelMessage.message = "Hold Device Level"]
 *    The text of the message
 *    Specifies the text of the message.
 *    You can customize a message for anything to be displayed.
 *
 * @param {String} [options.HoldParallelMessage.textColor = "#FFFFFFFF"]
 *    The color used to display the text
 *    Specifies the color that the message's text will be rendered with.
 *    The default color is white.
 *
 * @param {String} [options.HoldParallelMessage.backgroundColor = "#B2000000"]
 *    The color used to display the background of the message
 *    Specifies the color that the message's background are will be rendered with.  The full area specified by the size property will be filled with the background color, excluding areas clipped outside of view bounds.
 *    The default background color is black with transparency.
 *
 * @param {Boolean} [options.HoldParallelMessage.visible = true]
 *     The visibility of the message
 *     Specifies whether the message is visible or not.  A value of "false" will prevent the message from appearing.  A value of "true" will show the message, if there is nothing else to prevent it from appearing.
 *     The default value is true.  Some objects that use messages, like the capture experience objects, will automatically manage and update this state.
 *
 * @param {String} [options.HoldParallelMessage.orientation = "LANDSCAPE"]
 *     The orientation of the message
 *     Use one of the allowed values to set the orientation of the messages being displayed. Once a orientation is set, message stays in that orientation even if the device rotates.In other words this is sticky.
 *     If you want to handle the rotation when device rotates, orientation has to be explicitly set again on the message.
 *     The default value is LANDSCAPE. Allowable values are PORTRAIT, LANDSCAPE, REVERSEPORTRAIT, REVERSELANDSCAPE
 *     If you modify the orientation of the message, plugin (underlying SDK) tries to optimally display the message however it may not always get displayed with appropriate size and font. It is recommended to set the size or font appropriately if needed.
 *
 * @param {Object} options.HoldParallelMessage.fontAndroid  The font used to display the text of the message on Android platform.
 *
 * @param {Number} [options.HoldParallelMessage.fontAndroid.textSize = -1]
 *     The text font size of the message
 *     The default is -1, which causes the message text font size to be determined as the SDK sees fit.
 *
 * @param {Object} options.HoldParallelMessage.fontiOS  The font used to display the text of the message on iOS platform.
 *
 * @param {Number} [options.HoldParallelMessage.fontiOS.fontSize = -1]
 *     fontSize the size of the text in the message
 *     fontSize by default is -1 which means an optimal size is calculated and displayed.
 *     fontSize generally accepts positive numbers.
 *     Setting arbitrarily large values to fontSize may not render the font and behavior is not defined.
 *
 * @param {String} [options.HoldParallelMessage.fontiOS.fontName = "HelveticaNeue"]
 *     fontName is the name of the font to be used for the message
 *     fontName by default is "HelveticalNeue"
 *     fontName complies to the iOS font family names (refer to iOS SDK native documentation to know about supported font families).
 *
 * @param {Object} options.HoldParallelMessage.position The position (center) of the text message. Applicable only on iOS platform. This will not have any impact on Android platform.
 *
 *     The message object will be overlay on top of an Image Capture Control with the center of the message being located at this coordinate.
 *     Changes in the size of the capture control will usually require updating the position of the message as well.
 *     position by default is "auto" position and is set appropriately which is suitable to the parent view.
 *     once a new value for position is set (other than default) the "auto" quality is lost and the new value is used. If the value is changed it cannot be reset to default in the current instance. The object has to be recreated and set (typically an experience object has to be recreated).
 *     position complies to the co-ordinate system in iOS. Setting arbitrarily large values is not recommended and behavior is not defined.
 *
 * @param {Number} [options.HoldParallelMessage.position.x = -1]
 *     x co-ordinate of the position.
 *     x co-ordinate by default is -1 which means SDK will be calculated the x co-ordinate of the message position.
 *
 * @param {Number} [options.HoldParallelMessage.position.y = -1]
 *     y co-ordinate of the position
 *     y co-ordinate by default is -1 which means SDK will be calculated the y co-ordinate of the message position.
 *
 * @param {Object} options.HoldParallelMessage.size The Size of the text message. Applicable for iOS and Android.
 *
 *     The message object will be rendered with dimensions specified by this property.  Text will be contained within this boundary, and any set background color will completely cover this area.
 *     The default size has width -1 and height -1 which means an appropriate size is calculated and rendered.
 *     If the value is changed it cannot be reset to default in the current instance.
 *     In Android, rendering might differ based on device being used.
 *     If the value is changed it cannot be reset to default in the current instance. The object on which this is applied has to be recreated and set (typically an experience object has to be recreated).
 *     Whenever the orientation of the message has been changed, the size may have to be updated.
 *
 *  @param {Number} [options.HoldParallelMessage.size.width = -1]
 *     width of the message.
 *     width by default is -1 which means SDK will be calculated the width of the message.
 *
 *  @param {Number} [options.HoldParallelMessage.size.height = -1]
 *     height of the message.
 *     height by default is -1 which means SDK will be calculated the height of the message.
 *
 * @param {Object} options.TutorialDismissMessage Tutorial Dismiss Message options
 *
 * @param {String} [options.TutorialDismissMessage.message = "Tap to dismiss"]
 *    The text of the message
 *    Specifies the text of the message.
 *    You can customize a message for anything to be displayed.
 *
 * @param {String} [options.TutorialDismissMessage.textColor = "#FFFFFFFF"]
 *    The color used to display the text
 *    Specifies the color that the message's text will be rendered with.
 *    The default color is white.
 *
 * @param {String} [options.TutorialDismissMessage.backgroundColor = "#00000000"]
 *    The color used to display the background of the message
 *    Specifies the color that the message's background are will be rendered with.  The full area specified by the size property will be filled with the background color, excluding areas clipped outside of view bounds.
 *    The default background color is transparent.
 *
 * @param {Boolean} [options.TutorialDismissMessage.visible = true]
 *     The visibility of the message
 *     Specifies whether the message is visible or not.  A value of "false" will prevent the message from appearing.  A value of "true" will show the message, if there is nothing else to prevent it from appearing.
 *     The default value is true.  Some objects that use messages, like the capture experience objects, will automatically manage and update this state.
 *
 * @param {String} [options.TutorialDismissMessage.orientation = "LANDSCAPE"]
 *     The orientation of the message
 *     Use one of the allowed values to set the orientation of the messages being displayed. Once a orientation is set, message stays in that orientation even if the device rotates.In other words this is sticky.
 *     If you want to handle the rotation when device rotates, orientation has to be explicitly set again on the message.
 *     The default value is LANDSCAPE. Allowable values are PORTRAIT, LANDSCAPE, REVERSEPORTRAIT, REVERSELANDSCAPE
 *     If you modify the orientation of the message, plugin (underlying SDK) tries to optimally display the message however it may not always get displayed with appropriate size and font. It is recommended to set the size or font appropriately if needed.
 *
 * @param {Object} options.TutorialDismissMessage.fontAndroid  The font used to display the text of the message on Android platform.
 *
 * @param {Number} [options.TutorialDismissMessage.fontAndroid.textSize = -1]
 *     The text font size of the message
 *     The default is -1, which causes the message text font size to be determined as the SDK sees fit.
 *
 * @param {Object} options.TutorialDismissMessage.fontiOS  The font used to display the text of the message on iOS platform.
 *
 * @param {Number} [options.TutorialDismissMessage.fontiOS.fontSize = -1]
 *     fontSize the size of the text in the message
 *     fontSize by default is -1 which means an optimal size is calculated and displayed.
 *     fontSize generally accepts positive numbers.
 *     Setting arbitrarily large values to fontSize may not render the font and behavior is not defined.
 *
 * @param {String} [options.TutorialDismissMessage.fontiOS.fontName = "HelveticaNeue"]
 *     fontName is the name of the font to be used for the message
 *     fontName by default is "HelveticalNeue"
 *     fontName complies to the iOS font family names (refer to iOS SDK native documentation to know about supported font families).
 *
 * @param {Object} options.TutorialDismissMessage.position The position (center) of the text message. Applicable only on iOS platform. This will not have any impact on Android platform.
 *
 *     The message object will be overlay on top of an Image Capture Control with the center of the message being located at this coordinate.
 *     Changes in the size of the capture control will usually require updating the position of the message as well.
 *     position by default is "auto" position and is set appropriately which is suitable to the parent view.
 *     once a new value for position is set (other than default) the "auto" quality is lost and the new value is used. If the value is changed it cannot be reset to default in the current instance. The object has to be recreated and set (typically an experience object has to be recreated).
 *     position complies to the co-ordinate system in iOS. Setting arbitrarily large values is not recommended and behavior is not defined.
 *
 * @param {Number} [options.TutorialDismissMessage.position.x = -1]
 *     x co-ordinate of the position.
 *     x co-ordinate by default is -1 which means SDK will be calculated the x co-ordinate of the message position.
 *
 * @param {Number} [options.TutorialDismissMessage.position.y = -1]
 *     y co-ordinate of the position
 *     y co-ordinate by default is -1 which means SDK will be calculated the y co-ordinate of the message position.
 *
 * @param {Object} options.TutorialDismissMessage.size The Size of the text message. Applicable for iOS and Android.
 *
 *     The message object will be rendered with dimensions specified by this property.  Text will be contained within this boundary, and any set background color will completely cover this area.
 *     The default size has width -1 and height -1 which means an appropriate size is calculated and rendered.
 *     If the value is changed it cannot be reset to default in the current instance.
 *     In Android, rendering might differ based on device being used.
 *     If the value is changed it cannot be reset to default in the current instance. The object on which this is applied has to be recreated and set (typically an experience object has to be recreated).
 *     Whenever the orientation of the message has been changed, the size may have to be updated.
 *
 *  @param {Number} [options.TutorialDismissMessage.size.width = -1]
 *     width of the message.
 *     width by default is -1 which means SDK will be calculated the width of the message.
 *
 *  @param {Number} [options.TutorialDismissMessage.size.height = -1]
 *     height of the message.
 *     height by default is -1 which means SDK will be calculated the height of the message.
 *
 * @param {Object} options.TiltForwardMessage Tilt Forward Message options
 *
 * @param {String} [options.TiltForwardMessage.message = "Tilt Forward"]
 *    The text of the message
 *    Specifies the text of the message.
 *    You can customize a message for anything to be displayed.
 *
 * @param {String} [options.TiltForwardMessage.textColor = "#FFFFFFFF"]
 *    The color used to display the text
 *    Specifies the color that the message's text will be rendered with.
 *    The default color is white.
 *
 * @param {String} [options.TiltForwardMessage.backgroundColor = "#B2000000"]
 *    The color used to display the background of the message
 *    Specifies the color that the message's background are will be rendered with.  The full area specified by the size property will be filled with the background color, excluding areas clipped outside of view bounds.
 *    The default background color is black with transparency.
 *
 * @param {Boolean} [options.TiltForwardMessage.visible = true]
 *     The visibility of the message
 *     Specifies whether the message is visible or not.  A value of "false" will prevent the message from appearing.  A value of "true" will show the message, if there is nothing else to prevent it from appearing.
 *     The default value is true.  Some objects that use messages, like the capture experience objects, will automatically manage and update this state.
 *
 * @param {String} [options.TiltForwardMessage.orientation = "LANDSCAPE"]
 *     The orientation of the message
 *     Use one of the allowed values to set the orientation of the messages being displayed. Once a orientation is set, message stays in that orientation even if the device rotates.In other words this is sticky.
 *     If you want to handle the rotation when device rotates, orientation has to be explicitly set again on the message.
 *     The default value is LANDSCAPE. Allowable values are PORTRAIT, LANDSCAPE, REVERSEPORTRAIT, REVERSELANDSCAPE
 *     If you modify the orientation of the message, plugin (underlying SDK) tries to optimally display the message however it may not always get displayed with appropriate size and font. It is recommended to set the size or font appropriately if needed.
 *
 * @param {Object} options.TiltForwardMessage.fontAndroid  The font used to display the text of the message on Android platform.
 *
 * @param {Number} [options.TiltForwardMessage.fontAndroid.textSize = -1]
 *     The text font size of the message
 *     The default is -1, which causes the message text font size to be determined as the SDK sees fit.
 *
 * @param {Object} options.TiltForwardMessage.fontiOS  The font used to display the text of the message on iOS platform.
 *
 * @param {Number} [options.TiltForwardMessage.fontiOS.fontSize = -1]
 *     fontSize the size of the text in the message
 *     fontSize by default is -1 which means an optimal size is calculated and displayed.
 *     fontSize generally accepts positive numbers.
 *     Setting arbitrarily large values to fontSize may not render the font and behavior is not defined.
 *
 * @param {String} [options.TiltForwardMessage.fontiOS.fontName = "HelveticaNeue"]
 *     fontName is the name of the font to be used for the message
 *     fontName by default is "HelveticalNeue"
 *     fontName complies to the iOS font family names (refer to iOS SDK native documentation to know about supported font families).
 *
 * @param {Object} options.TiltForwardMessage.position The position (center) of the text message. Applicable only on iOS platform. This will not have any impact on Android platform.
 *
 *     The message object will be overlay on top of an Image Capture Control with the center of the message being located at this coordinate.
 *     Changes in the size of the capture control will usually require updating the position of the message as well.
 *     position by default is "auto" position and is set appropriately which is suitable to the parent view.
 *     once a new value for position is set (other than default) the "auto" quality is lost and the new value is used. If the value is changed it cannot be reset to default in the current instance. The object has to be recreated and set (typically an experience object has to be recreated).
 *     position complies to the co-ordinate system in iOS. Setting arbitrarily large values is not recommended and behavior is not defined.
 *
 * @param {Number} [options.TiltForwardMessage.position.x = -1]
 *     x co-ordinate of the position.
 *     x co-ordinate by default is -1 which means SDK will be calculated the x co-ordinate of the message position.
 *
 * @param {Number} [options.TiltForwardMessage.position.y = -1]
 *     y co-ordinate of the position
 *     y co-ordinate by default is -1 which means SDK will be calculated the y co-ordinate of the message position.
 *
 * @param {Object} options.TiltForwardMessage.size The Size of the text message. Applicable for iOS and Android.
 *
 *     The message object will be rendered with dimensions specified by this property.  Text will be contained within this boundary, and any set background color will completely cover this area.
 *     The default size has width -1 and height -1 which means an appropriate size is calculated and rendered.
 *     If the value is changed it cannot be reset to default in the current instance.
 *     In Android, rendering might differ based on device being used.
 *     If the value is changed it cannot be reset to default in the current instance. The object on which this is applied has to be recreated and set (typically an experience object has to be recreated).
 *     Whenever the orientation of the message has been changed, the size may have to be updated.
 *
 *  @param {Number} [options.TiltForwardMessage.size.width = -1]
 *     width of the message.
 *     width by default is -1 which means SDK will be calculated the width of the message.
 *
 *  @param {Number} [options.TiltForwardMessage.size.height = -1]
 *     height of the message.
 *     height by default is -1 which means SDK will be calculated the height of the message.
 *
 * @param {Object} options.TiltUpMessage Tutorial Dismiss Message options
 *
 * @param {String} [options.TiltUpMessage.message = "Tilt Up"]
 *    The text of the message
 *    Specifies the text of the message.
 *    You can customize a message for anything to be displayed.
 *
 * @param {String} [options.TiltUpMessage.textColor = "#FFFFFFFF"]
 *    The color used to display the text
 *    Specifies the color that the message's text will be rendered with.
 *    The default color is white.
 *
 * @param {String} [options.TiltUpMessage.backgroundColor = "#B2000000"]
 *    The color used to display the background of the message
 *    Specifies the color that the message's background are will be rendered with.  The full area specified by the size property will be filled with the background color, excluding areas clipped outside of view bounds.
 *    The default background color is black with transparency.
 *
 * @param {Boolean} [options.TiltUpMessage.visible = true]
 *     The visibility of the message
 *     Specifies whether the message is visible or not.  A value of "false" will prevent the message from appearing.  A value of "true" will show the message, if there is nothing else to prevent it from appearing.
 *     The default value is true.  Some objects that use messages, like the capture experience objects, will automatically manage and update this state.
 *
 * @param {String} [options.TiltUpMessage.orientation = "LANDSCAPE"]
 *     The orientation of the message
 *     Use one of the allowed values to set the orientation of the messages being displayed. Once a orientation is set, message stays in that orientation even if the device rotates.In other words this is sticky.
 *     If you want to handle the rotation when device rotates, orientation has to be explicitly set again on the message.
 *     The default value is LANDSCAPE. Allowable values are PORTRAIT, LANDSCAPE, REVERSEPORTRAIT, REVERSELANDSCAPE
 *     If you modify the orientation of the message, plugin (underlying SDK) tries to optimally display the message however it may not always get displayed with appropriate size and font. It is recommended to set the size or font appropriately if needed.
 *
 * @param {Object} options.TiltUpMessage.fontAndroid  The font used to display the text of the message on Android platform.
 *
 * @param {Number} [options.TiltUpMessage.fontAndroid.textSize = -1]
 *     The text font size of the message
 *     The default is -1, which causes the message text font size to be determined as the SDK sees fit.
 *
 * @param {Object} options.TiltUpMessage.fontiOS  The font used to display the text of the message on iOS platform.
 *
 * @param {Number} [options.TiltUpMessage.fontiOS.fontSize = -1]
 *     fontSize the size of the text in the message
 *     fontSize by default is -1 which means an optimal size is calculated and displayed.
 *     fontSize generally accepts positive numbers.
 *     Setting arbitrarily large values to fontSize may not render the font and behavior is not defined.
 *
 * @param {String} [options.TiltUpMessage.fontiOS.fontName = "HelveticaNeue"]
 *     fontName is the name of the font to be used for the message
 *     fontName by default is "HelveticalNeue"
 *     fontName complies to the iOS font family names (refer to iOS SDK native documentation to know about supported font families).
 *
 * @param {Object} options.TiltUpMessage.position The position (center) of the text message. Applicable only on iOS platform. This will not have any impact on Android platform.
 *
 *     The message object will be overlay on top of an Image Capture Control with the center of the message being located at this coordinate.
 *     Changes in the size of the capture control will usually require updating the position of the message as well.
 *     position by default is "auto" position and is set appropriately which is suitable to the parent view.
 *     once a new value for position is set (other than default) the "auto" quality is lost and the new value is used. If the value is changed it cannot be reset to default in the current instance. The object has to be recreated and set (typically an experience object has to be recreated).
 *     position complies to the co-ordinate system in iOS. Setting arbitrarily large values is not recommended and behavior is not defined.
 *
 * @param {Number} [options.TiltUpMessage.position.x = -1]
 *     x co-ordinate of the position.
 *     x co-ordinate by default is -1 which means SDK will be calculated the x co-ordinate of the message position.
 *
 * @param {Number} [options.TiltUpMessage.position.y = -1]
 *     y co-ordinate of the position
 *     y co-ordinate by default is -1 which means SDK will be calculated the y co-ordinate of the message position.
 *
 * @param {Object} options.TiltUpMessage.size The Size of the text message. Applicable for iOS and Android.
 *
 *     The message object will be rendered with dimensions specified by this property.  Text will be contained within this boundary, and any set background color will completely cover this area.
 *     The default size has width -1 and height -1 which means an appropriate size is calculated and rendered.
 *     If the value is changed it cannot be reset to default in the current instance.
 *     In Android, rendering might differ based on device being used.
 *     If the value is changed it cannot be reset to default in the current instance. The object on which this is applied has to be recreated and set (typically an experience object has to be recreated).
 *     Whenever the orientation of the message has been changed, the size may have to be updated.
 *
 *  @param {Number} [options.TiltUpMessage.size.width = -1]
 *     width of the message.
 *     width by default is -1 which means SDK will be calculated the width of the message.
 *
 *  @param {Number} [options.TiltUpMessage.size.height = -1]
 *     height of the message.
 *     height by default is -1 which means SDK will be calculated the height of the message.
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
 * var documentCaptureExperience =  kfxCordova.kfxUicontrols.createDocumentCaptureExperience();
 * var imageCaptureControlID = null;
 * imageCaptureControl.getId(function(captureControlID){
 *       imageCaptureControlID = captureControlID;
 * },function(error){
 *       alert(JSON.stringify(error));
 * });
 * documentCaptureExperience.bindCaptureControl(function(success){alert(JSON.stringify(success));},function(error){alert(JSON.stringify(error));},imageCaptureControlID);
 * //get the options
 * documentCaptureExperience.getOptions(function(success){documentCaptureExperienceOptions = success},myerrorCB);
 * //specify the values for the Document Capture Experience
 * documentCaptureExperienceOptions.CaptureCriteria.focusEnabled = false;
 * //specify the path for tutorial sample image, which is relative to www folder.
 * documentCaptureExperienceOptions.LookAndFeel.tutorialSampleImagePath = 'www/images/custom_tutorialimage.png';
 * //set the options to capture view
 * documentCaptureExperience.setOptions(successCallback,errorCallback,documentCaptureExperienceOptions)
 */
DocumentCaptureExperience.prototype.setOptions = function (successCallback, errorCallback, parameters) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.dcSetOptions,
		[parameters]
	);
};

/// To get the Options/properties of the DocumentCaptureExperience class .
/**
 * Method to get the properties of the native DocumentCaptureExperience class.
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
 * var documentCaptureExperience =  kfxCordova.kfxUicontrols.createDocumentCaptureExperience();
 * var imageCaptureControlID = null;
 *
 *
 * imageCaptureControl.getId(function(captureControlID){
 *       imageCaptureControlID = captureControlID;
 * },function(error){
 *       alert(JSON.stringify(error));
 * });
 *
 *
 *
 * documentCaptureExperience.bindCaptureControl(function(success){alert(JSON.stringify(success));},function(error){alert(JSON.stringify(error));},imageCaptureControlID);
 *
 *
 *
 * documentCaptureExperience.getOptions(successCallback,errorCallback);
 */
DocumentCaptureExperience.prototype.getOptions = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.dcGetOptions,
		[]
	);
};

/**
 * Method to clear DocumentCaptureExperience memory.
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
 * var documentCaptureExperience =  kfxCordova.kfxUicontrols.createDocumentCaptureExperience();
 * var imageCaptureControlID = null;
 *
 *
 * imageCaptureControl.getId(function(captureControlID){
 *       imageCaptureControlID = captureControlID;
 * },function(error){
 *       alert(JSON.stringify(error));
 * });
 *
 *
 *
 * documentCaptureExperience.bindCaptureControl(function(success){alert(JSON.stringify(success));},function(error){alert(JSON.stringify(error));},imageCaptureControlID);
 * documentCaptureExperience.takePictureContinually(successCallback,errorCallback);
 * documentCaptureExperience.destroy(successCallback,errorCallback);
 */
DocumentCaptureExperience.prototype.destroy = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.dcDestroy,
		[]
	);
};

///A getter  method of properties of the 'DocumentCaptureExperience' class
/**
 * Method returning the 'DocumentCaptureExperience'  class properties that can be set by the user. Use this object as an input
 * parameter to set the properties of the DocumentCaptureExperience class. The parameters are grouped, and has the below mentioned
 * default values.
 *
 * @example
 *  var documentCaptureExperience =  kfxCordova.kfxUicontrols.createDocumentCaptureExperience();
 *  var documentCaptureExperienceProperties = documentCaptureExperience.getDocumentCaptureOptions();
 *  documentCaptureExperienceProperties should be like below{
 *        LookAndFeel: {
 *            enableAnimationTutor: false,
 *            outerViewFinderColor : "#B2000000",
 *            vibrationEnabled : true,
 *            diagnosticsViewEnabled : false,
 *            guidanceFrameThickness : 8,
 *            tutorialSampleImagePath : '',
 *            guidanceFrameColor : "#00FF00"
 *        },
 *        CaptureCriteria: {
 *            stabilityThresholdEnabled: true,
 *            stabilityThreshold: 95,
 *            focusEnabled: true,
 *            rollThresholdEnabled: true,
 *            rollThreshold: 15,
 *            pitchThreshold: 15,
 *            pitchThresholdEnabled: true,
 *            glareDetectionEnabled: false,
 *            launchGlareRemoverExperience: false,
 *            tiltAngle: 12,
 *            glareThresholdiOS: 0.015,
 *            glareThresholdAndroid: null,
 *            DocumentDetectionSettings:{
 *                shortEdgeThreshold: 85,
 *                longEdgeThreshold: 85,
 *                edgeDetection: "GPUBased",
 *                DetectionSettings:{
 *                    centerPoint:{
 *                        x: 0,
 *                        y: 0
 *                    },
 *                    aspectRatio: 0,
 *                    padding: 10.0,
 *                    minFillFraction: 0.2,
 *                    maxFillFraction: 1.5,
 *                    maxSkewAngle: 10.0,
 *                    toleranceFraction: 0.15
 *                }
 *            }
 *        },
 *        UserInstructionMessage: {
 *            backgroundColor: "#00000000",
 *            textColor: "#FFFFFFFF",
 *            message: "Fill viewable area with document",
 *            visible: true,
 *               orientation: "LANDSCAPE",
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
 *        HoldSteadyMessage: {
 *            backgroundColor: "#B2000000",
 *            textColor: "#FFFF0000",
 *            message: "Hold Steady",
 *            visible: true,
 *               orientation: "LANDSCAPE",
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
 *        CapturedMessage: {
 *            backgroundColor: "#B2000000",
 *            textColor: "#00F900",
 *            message: "Done!",
 *            visible: true,
 *               orientation: "LANDSCAPE",
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
 *        CenterMessage: {
 *            backgroundColor: "#B2000000",
 *            textColor: "#FFFFFFFF",
 *            message: "Center Document",
 *            visible: true,
 *               orientation: "LANDSCAPE",
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
 *        ZoomInMessage: {
 *            backgroundColor: "#B2000000",
 *            textColor: "#FFFFFFFF",
 *            message: "Move Closer",
 *            visible: true,
 *               orientation: "LANDSCAPE",
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
 *        ZoomOutMessage: {
 *            backgroundColor: "#B2000000",
 *            textColor: "#FFFFFFFF",
 *            message: "Move Back",
 *            visible: true,
 *               orientation: "LANDSCAPE",
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
 *        RotateMessage: {
 *            backgroundColor: "#B2000000",
 *            textColor: "#FFFFFFFF",
 *            message: "Rotate Device",
 *            visible: true,
 *               orientation: "LANDSCAPE",
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
 *        HoldParallelMessage: {
 *            backgroundColor: "#B2000000",
 *            textColor: "#FFFFFFFF",
 *            message: "Hold Device Level",
 *            visible: true,
 *               orientation: "LANDSCAPE",
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
 *       TutorialDismissMessage: {
 *           backgroundColor: "#00000000",
 *           textColor: "#FFFFFFFF",
 *           message: "Tap to dismiss",
 *           visible: true,
 *           orientation: "LANDSCAPE",
 *           fontAndroid: {
 *              textSize : -1
 *           },
 *           fontiOS:{
 *              fontSize : -1,
 *              fontName : "HelveticaNeue"
 *           },
 *           position :{
 *              x : -1,
 *              y : -1
 *           },
 *           size:{
 *             width: -1,
 *             height: -1
 *           }
 *         },
 *       TiltForwardMessage: {
 *           backgroundColor: "#B2000000",
 *           textColor: "#FFFFFFFF",
 *           message: "Tilt Forward",
 *           visible: true,
 *           orientation: "LANDSCAPE",
 *           fontAndroid: {
 *              textSize : -1
 *           },
 *           fontiOS:{
 *              fontSize : -1,
 *              fontName : "HelveticaNeue"
 *           },
 *           position :{
 *              x : -1,
 *              y : -1
 *           },
 *           size:{
 *             width: -1,
 *             height: -1
 *           }
 *         },
 *       TiltUpMessage: {
 *           backgroundColor: "#B2000000",
 *           textColor: "#FFFFFFFF",
 *           message: "Tilt Up",
 *           visible: true,
 *           orientation: "LANDSCAPE",
 *           fontAndroid: {
 *              textSize : -1
 *           },
 *           fontiOS:{
 *              fontSize : -1,
 *              fontName : "HelveticaNeue"
 *           },
 *           position :{
 *              x : -1,
 *              y : -1
 *           },
 *           size:{
 *             width: -1,
 *             height: -1
 *           }
 *         }
 *    };
 */
DocumentCaptureExperience.prototype.getDocumentCaptureOptions = function () {
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
			/**
			 * A boolean that indicates whether the glare detection is enabled. If enabled, this criteria is checked aftert taking a picture and user would be asked to do one more capture by tilting the device if a glare is detected.
			 * It is user responsibility to call takePictureContinually. After the final capture, further captures would be stopped and user would get the imageCapturedEvent: callback.
			 * Default value is false.
			 */
			glareDetectionEnabled: false,
			/**
			 * A boolean that indicates whether the glare experience is enabled. If enabled, user would be guided to capture two images of the document at different tilt angles.
			 * Default value is false.
			 *
			 */
			launchGlareRemoverExperience: false,
			/**
			 * The tilt angle value. This will be used to determine the angle of tilt for the second capture.
			 * Default value is 12, which indicates that the device's edge that is away from the user should stand higher than the device's edge that is closer to the user.
			 * Valid values are in the range -20 to 20.
			 */
			tiltAngle: 12,
			/**
			 * The glare threshold value.This will be used to indicate how much glare fraction should be configured on the captured image.This value will effect for iOS platform.This will not have any impact if set on Android platform.
			 * Configuring the Glare Threshold value will control the launch of second capture experience(Tilt capture) when glareDetectionEnabled/launchGlareRemoverExperience is set to true.
			 * Valid values are in the range 0 to 1.
			 */
			glareThresholdiOS: 0.015,
			/**
			 * The glare threshold value.This will be used to indicate how much glare fraction should be configured on the captured image.This value will effect for Android platform.This will not have any impact if set on iOS platform.
			 * Configuring the Glare Threshold value will control the launch of second capture experience(Tilt capture) when glareDetectionEnabled/launchGlareRemoverExperience is set to true.
			 * Valid values are in the range 0 to 1.
			 */
			glareThresholdAndroid: null,
			// Document detection settings
			DocumentDetectionSettings: {
				/**
				 * short edge threshold value used to detect the document
				 */
				shortEdgeThreshold: 85,
				/**
				 * long edge threshold value used to detect the document
				 */
				longEdgeThreshold: 85,

				/// The current document edge detection algorithm.
				/**  A property to get or set the document edge detection algorithm, with two values: ISG and GPUBased.
				 */
				edgeDetection: "GPUBased",
				//detection settings
				DetectionSettings: {
					//center point of the document
					centerPoint: {
						//x position
						x: 0,
						//y position
						y: 0,
					},
					//aspect ratio of the document
					aspectRatio: 0,
					//padding percent value
					padding: 10.0,
					//min fill fraction value
					minFillFraction: 0.2,
					// max fill fraction value
					maxFillFraction: 1.5,
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
			message: "Fill viewable area with document",
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
				 *  fontName is the name of the font to be used for the message
				 *  fontName by default is "HelveticalNeue".
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
				 *  fontSize the size of the text in the message
				 *  fontSize by default is -1 which means an optimal size is calculated and displayed.
				 *  fontSize generally accepts positive numbers.
				 *  Setting arbitrarily large values to fontSize may not render the font and behavior is not defined.
				 */
				fontSize: -1,

				/**
				 *  fontName is the name of the font to be used for the message.
				 *  fontName by default is "HelveticalNeue".
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
				 *  fontSize the size of the text in the message
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
			message: "Center Document",
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
				 *  fontSize the size of the text in the message
				 *  fontSize by default is -1 which means an optimal size is calculated and displayed.
				 *  fontSize generally accepts postive numbers.
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
		//Rotate message options
		RotateMessage: {
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
		//Hold Parallel  message options
		HoldParallelMessage: {
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
		//Tilt Forward Message options
		TiltForwardMessage: {
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
			message: "Tilt Forward",
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
		//Tilt Up Message options
		TiltUpMessage: {
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
			message: "Tilt Up",
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
//End of Document Capture Experience methods
module.exports = DocumentCaptureExperience;
