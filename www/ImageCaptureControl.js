//
// ImageCaptureControl.js
//
//  Copyright (c) 2012 - 2021 Kofax. Use of this code is with permission pursuant to Kofax license terms.

var ActionUtils = require("./ActionUtils");
var ImageObject = require("./ImageObject");

//ImageCaptureControl constructor and corresponding methods
/**
 * @class
 * @alias ImageCaptureControl
 * @constructor
 */
var ImageCaptureControl = function () {};

/// To get the ID of created ImageCapture Control
/**
 * Method to get the ID of the created ImageCapture Control.
 * The retrieved ID can be  used to bind any capture experiences with the ImageCapture Control. This would enhance the way Image Capture Control appears
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions.<br/>
 * successCallback -  success call back with ImageCapture Control ID.<br/>
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are KmcRuntimeException,Exception.
 *
 * @example
 * var imageCaptureControl =  kfxCordova.kfxUicontrols.createImageCaptureControl();
 * var imageCaptureControlID = null;
 * imageCaptureControl.getId(function(success){
 *     imageCaptureControlID = success;
 * },function(error){
 *     alert(JSON.stringify(error));
 * });
 */

ImageCaptureControl.prototype.getId = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.getImageCaptureControlID,
		[]
	);
};

/// Method to add the   ImageCaptureControl view to the screen method
/**
 * Method to add the ImageCaptureControl view to the screen. This method is responsible for adding the view on the visible screen
 * with the specified Layout values.
 *
 * @param {Function} successCB: Default Success Call back function name
 * @param {Function} errorCB: Default Error call back function name
 * @param {Object} layoutObject - a 'Layout' object mentioning the Frame values for the ImageCaptureControl object. Refer to 'Layout' object for
 * containing values.
 *
 * @param {Number} [layoutObject.x] x position of the image capture control
 *
 * @param {Number} [layoutObject.y] y position of the image capture control
 *
 * @param {Number} [layoutObject.width] width of the image capture control
 *
 * @param {Number} [layoutObject.height] height of the image capture control
 *
 * @param {Boolean} [layoutObject.visibility] image capture control is visible or not
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions.<br/>
 * successCallback -  KMC_SUCCESS    success call back. <br/>
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Wrong Parameters, KmcRuntimeException & Exception.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var Layout = kfxCordova.getLayoutProperties();
 * Layout.x = 10;
 * Layout.y =10;
 * Layout.width= 300;
 * Layout.height = 400;
 * Layout.visibility = true; // By default visibility is 'true'
 *
 * var imgCaptureControl =  kfxCordova.kfxUicontrols.createImageCaptureControl();
 * imgCaptureControl.addCameraView(successCallback,errorCallback, Layout);
 */
ImageCaptureControl.prototype.addCameraView = function (successCallback, errorCallback, layoutObject) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.addCameraView,
		[layoutObject]
	);
};

/// Begins the image capture process and ignores all capture constraints.
/**
 * Calling this method will stat the image capture process, but constraints like levelness, stability, and page
 * detection will be ignored.  The control will attempt to take a picture as quickly as possible.  The event listener  "addImageCapturedListener" will receive the delegate call back message and will have the corresponding capture image details.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions. <br/>
 * successCallback -  KMC_SUCCESS    The picture was successfully captured for iOS and "OK" for Android. <br/>
 * errorCallback -    KMC_EV_LICENSING The picture was not successfully captured, and returns the licensing error code.Possible error objects are KmcRuntimeException,Exception.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var imgCaptureControl =  kfxCordova.kfxUicontrols.createImageCaptureControl();
 * imgCaptureControl.forceTakePicture(successCallback,errorCallback);
 */

ImageCaptureControl.prototype.forceTakePicture = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.forceTakePicture,
		[]
	);
};

/// Begins the image capture process and ignores all capture constraints,
/// takes focusAgain flag
/**
 * Calling this method will start the image capture process, but constraints like levelness, stability, and page
 * detection will be ignored.  The control will attempt to take a picture as quickly as possible.  The event listener  "addImageCapturedListener" will receive the delegate call back message and will have the corresponding capture image details.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Object} parameters -  focusAgain flag
 *
 * @param {Boolean} [parameters.focusAgain] if set Forces capturing an image after an optional additional autofocus cycle
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions. <br/>
 * successCallback -  KMC_SUCCESS    The picture was successfully captured for iOS and "OK" for Android. <br/>
 * errorCallback -    KMC_EV_LICENSING The picture was not successfully captured, and returns the licensing error code.Possible error objects are KmcRuntimeException,Exception.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var imgCaptureControl =  kfxCordova.kfxUicontrols.createImageCaptureControl();
 * imgCaptureControl.forceTakePictureFocusAgain(successCallback,errorCallback, { focusAgain:true });
 */

ImageCaptureControl.prototype.forceTakePictureFocusAgain = function (successCallback, errorCallback, parameters) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.forceTakePictureFocusAgain,
		[parameters]
	);
};

/// This method will add an event listener which will be triggered whenever a picture is taken.
/**
 * A listener that will be called when an image was captured. This will only be sent after the control receives a takePicture message.
 * The control will wait until the desired stability, levelness, and camera adjustments are met and then capture an image. It would then send the
 * imageID of the captured image to success call back method.
 *
 * Add this event listener before calling the 'takePicture' method.
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error Call back function name
 * @param {Function} imageCaptureCallback - A JSON object containing the properties of the captured image object. Check the 'Image'  object for its properties.
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions. <br/>
 * successCallback -  KMC_SUCCESS success call back. <br/>
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Wrong Parameters, KmcRuntimeException & Exception. <br/>
 * imageCaptureCallback - will have the JSON object of the captured KfxKEDImage properties. The captured Image is stored in ImageArray.
 * The image can be retrieved using methods on ImageArray.
 *
 * @example
 * function imageCaptureCallback(imageObject)
 * {
 *      alert(JSON.stringify(imageObject));
 * }
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var imgCaptureControl =  kfxCordova.kfxUicontrols.createImageCaptureControl();
 * imgCaptureControl.addImageCapturedListener(successCallback, errorCallback, imageCaptureCallback);
 */
ImageCaptureControl.prototype.addImageCapturedListener = function (
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
		ActionUtils.addImageCapturedListener,
		[]
	);
};

/// Method to remove the event listener to the 'takePicture' method of the ImageCaptureControl
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
 * var imgCaptureControl =  kfxCordova.kfxUicontrols.createImageCaptureControl();
 * // after taking picture
 * imgCaptureControl.removeImageCapturedListener(successCallback,errorCallback);
 */
ImageCaptureControl.prototype.removeImageCapturedListener = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.removeImageCapturedListener,
		[]
	);
};

/// Method to add the event listener to the 'Stabilitydelay' changed delegate method of the ImageCaptureControl
/**
 * This method would receive the Stability delay changed/updated at the ImageCaptureControl and the new corresponding details
 * are captured in success call back.
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error Call back function name
 * @param {Function} stabilityCallback - a JSON object returning the current stability od the device
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions. <br/>
 * successCallback -  KMC_SUCCESS    success call back. <br/>
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Wrong Parameters, KmcRuntimeException & Exception. <br/>
 * stabilityCallback - will have the current stability of the device.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var imgCaptureControl =  kfxCordova.kfxUicontrols.createImageCaptureControl();
 * function stabilityCallback(){
 *   alert('stabilityCallback');
 * }
 * imgCaptureControl.addStabilityDelayListener(successCallback,errorCallback,stabilityCallback);
 */
ImageCaptureControl.prototype.addStabilityDelayListener = function (successCallback, errorCallback, stabilityCallback) {
	ActionUtils.exec(
		function (result) {
			if (result.eventType === "eventRegistered") {
				if (successCallback) successCallback(result);
			} else if (result.eventType === "eventRaised") {
				if (stabilityCallback) stabilityCallback(result);
			}
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.addStabilityDelayListener,
		[]
	);
};

/// Method to remove the event listener to the  'Stabilitydelay' changed delegate method of the ImageCaptureControl
/**
 * The method would remove the listener and would not receive the Stability delay changed/updated. After removing the listener,
 * there will not be any call backs from native .
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error Call back function name
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions. <br/>
 * successCallback -  KMC_SUCCESS success call back. <br/>
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are KmcRuntimeException,Exception.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * // Create an ImageCaptureControl obj
 * var imgCaptureControl =  kfxCordova.kfxUicontrols.createImageCaptureControl();
 * // to remove the stability listener
 * imgCaptureControl.removeStabilityDelayListener(successCallback,errorCallback);
 */
ImageCaptureControl.prototype.removeStabilityDelayListener = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.removeStabilityDelayListener,
		[]
	);
};

/// Method to add the event listener to the 'Levelness' changed delegate method of the   ImageCaptureControl
/**
 * This method would receive the levelness at the ImageCaptureControl and the new corresponding details
 * are captured in success call back.
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error Call back function name
 * @param {Function} levelnessCallback - a JSON variable to hold the levelness of device
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions. <br/>
 * successCallback -  KMC_SUCCESS    success call back.
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Wrong Parameters, KmcRuntimeException & Exception. <br/>
 * levelnessCallback -  JSON object returned for every levelness  changed event, and contains the current levelness of the device.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var imgCaptureControl =  kfxCordova.kfxUicontrols.createImageCaptureControl();
 * function levelnessCallback(){
 *   alert('levelnessCallback');
 * }
 * imgCaptureControl.addLevelnessListener(successCallback,errorCallback,levelnessCallback);
 */
ImageCaptureControl.prototype.addLevelnessListener = function (successCallback, errorCallback, levelnessCallback) {
	ActionUtils.exec(
		function (result) {
			if (result.eventType === "eventRegistered") {
				if (successCallback) successCallback(result);
			} else if (result.eventType === "eventRaised") {
				if (levelnessCallback) levelnessCallback(result);
			}
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.addLevelnessListener,
		[]
	);
};

/// Method to remove the event listener to the  'Levelness' changed delegate method of the ImageCaptureControl
/**
 * The method would remove the listener and would not receive the Stability delay changed/updated. After removing the listener,
 * there will not be any call backs from native .
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error Call back function name
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions. <br/>
 * successCallback -  KMC_SUCCESS success call back. <br/>
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are KmcRuntimeException,Exception.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var imgCaptureControl =  kfxCordova.kfxUicontrols.createImageCaptureControl();
 * imgCaptureControl.removeLevelnessListener(successCallback,errorCallback);
 */
ImageCaptureControl.prototype.removeLevelnessListener = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.removeLevelnessListener,
		[]
	);
};

/// Method to add the event listener to the 'AutoFocus' changed delegate method of the   ImageCaptureControl
/**
 * This method would receive the AutoFocus at the ImageCaptureControl and the new corresponding details
 * are captured in success call back.
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error Call back function name
 * @param {Function} focusCallback - a var to hold the focus value returned from the ImageCaptureControl
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions. <br/>
 * successCallback -  KMC_SUCCESS    success call back. <br/>
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Wrong Parameters, KmcRuntimeException & Exception. <br/>
 * focusCallback - will have the JSON object giving the current focuslevel of the Camera, whenever focus changes the value will be changing.
 *
 * @see Check the 'errorCallback' method for any failures in case of unexpected behaviour of the method. By Default,  the error call back
 * would return a JSON object with ErrorMsg & ErrorDesc' giving the description of the error.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var imgCaptureControl =  kfxCordova.kfxUicontrols.createImageCaptureControl();
 * function focusCallback(){
 *   alert('focusCallback');
 * }
 * imgCaptureControl.addFocusListener(successCallback,errorCallback,focusCallback);
 */
ImageCaptureControl.prototype.addFocusListener = function (successCallback, errorCallback, focusCallback) {
	ActionUtils.exec(
		function (result) {
			if (result.eventType === "eventRegistered") {
				if (successCallback) successCallback(result);
			} else if (result.eventType === "eventRaised") {
				focusCallback(result);
			}
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.addFocusListener,
		[]
	);
};

/// Method to remove the event listener to the  'AutoFocus' changed delegate method of the ImageCaptureControl
/**
 * The method would remove the listener and would not receive the AutoFocus events.
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error Call back function name
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions. <br/>
 * successCallback -  KMC_SUCCESS success call back. <br/>
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are KmcRuntimeException,Exception.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var imgCaptureControl =  kfxCordova.kfxUicontrols.createImageCaptureControl();
 * imgCaptureControl.removeFocusListener(successCallback,errorCallback);
 */
ImageCaptureControl.prototype.removeFocusListener = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.removeFocusListener,
		[]
	);
};

/// Method to add the event listener to the 'Camera Initialization' changed delegate method of the  ImageCaptureControl
/**
 * This method would receive the events related to the camera initialization
 *
 * @param {Function} successCallback - Default Success Call back function name when the event is registered
 * @param {Function} errorCallback - Default Error Call back function name
 * @param {Function} cameraInitializationHandler - a var to hold the camera initialization event when it is actually raised
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions. <br/>
 * successCallback -  KMC_SUCCESS    success call back. <br/>
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Wrong Parameters, KmcRuntimeException & Exception. <br/>
 * cameraInitializationHandler - marker call back to be invoked after camera Initialization is done. It is recommended to use this callback as place for calling any UI operations on ImageCaptureControl.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var imgCaptureControl =  kfxCordova.kfxUicontrols.createImageCaptureControl();
 * function cameraInitializationCallback(){
 *   alert('cameraInitialization');
 * }
 * imgCaptureControl.addCameraInitializationListener(successCallback,errorCallback,cameraInitializationCallback);
 **/

ImageCaptureControl.prototype.addCameraInitializationListener = function (
	successCallback,
	errorCallback,
	cameraInitializationHandler
) {
	ActionUtils.exec(
		function (result) {
			if (result.eventType === "eventRegistered") {
				if (successCallback) successCallback(result);
			} else if (result.eventType === "eventRaised") {
				if (cameraInitializationHandler) cameraInitializationHandler(result);
			}
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.addCameraInitializationListener,
		[]
	);
};

/// Method to remove the event listener to the  'Camera Initialization'  changed delegate method of the ImageCaptureControl
/**
 * The method would remove the listener and would not receive any camera initialization events
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error Call back function name
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions. <br/>
 * successCallback -  KMC_SUCCESS success call back. <br/>
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are KmcRuntimeException,Exception.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var imgCaptureControl =  kfxCordova.kfxUicontrols.createImageCaptureControl();
 * imgCaptureControl.removeCameraInitializationListener(successCallback,errorCallback);
 */

ImageCaptureControl.prototype.removeCameraInitializationListener = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.removeCameraInitializationListener,
		[]
	);
};

// Method to add the event listener to the 'Camera Initialization Failed' changed delegate method of the  ImageCaptureControl
/**
 * This method would receive the events related to the camera initialization
 *
 * @param {Function} successCallback - Default Success Call back function name when the event is registered
 * @param {Function} errorCallback - Default Error Call back function name
 * @param {Function} cameraInitializationFailedHandler - a var to hold the camera initialization failed event when it is actually raised
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions. <br/>
 * successCallback -  KMC_SUCCESS    success call back. <br/>
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Wrong Parameters, KmcRuntimeException & Exception. <br/>
 * cameraInitializationfailedHandler : marker call back to be invoked if camera Initialization is failed. It is recommended to use this callback as place for calling any UI operations on ImageCaptureControl.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var imgCaptureControl =  kfxCordova.kfxUicontrols.createImageCaptureControl();
 * function cameraInitializationFailedCallback(){
 *    alert('cameraInitializationFailed');
 * }
 * imgCaptureControl.addCameraInitializationFailedListener(successCallback,errorCallback,cameraInitializationFailedCallback);
 */

ImageCaptureControl.prototype.addCameraInitializationFailedListener = function (
	successCallback,
	errorCallback,
	cameraInitializationFailedHandler
) {
	ActionUtils.exec(
		function (result) {
			if (result.eventType === "eventRegistered") {
				if (successCallback) successCallback(result);
			} else if (result.eventType === "eventRaised") {
				if (cameraInitializationFailedHandler) cameraInitializationFailedHandler(result);
			}
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.addCameraInitializationFailedListener,
		[]
	);
};

/// Method to remove the event listener to the  'Camera Initialization Failed'  changed delegate method of the ImageCaptureControl
/**
 * The method would remove the listener and would not receive any camera initialization failed events
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error Call back function name
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions. <br/>
 * successCallback -  KMC_SUCCESS success call back. <br/>
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are KmcRuntimeException,Exception.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var imgCaptureControl =  kfxCordova.kfxUicontrols.createImageCaptureControl();
 * imgCaptureControl.removeCameraInitializationFailedListener(successCallback,errorCallback);
 */

ImageCaptureControl.prototype.removeCameraInitializationFailedListener = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.removeCameraInitializationFailedListener,
		[]
	);
};

/// To set the Options/properties of the ImageCaptureControl class .
/**
 * Method to set the properties of the native ImageCaptureControl class.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Object} imageCaptureViewOptions  It is containing the properties  to be set to the ImageCaptureControl
 *
 * @param {Object} imageCaptureViewOptions.LevelingOptions Level indicator options of the ImageCaptureControl
 * @param {Boolean} [imageCaptureViewOptions.LevelingOptions.enabled = true]  Whether the level indicator is enabled.A boolean that indicates whether the level indicator is enabled.
 * @param {Number} [imageCaptureViewOptions.LevelingOptions.deviceDeclinationPitch = 0] The reference pitch that indicates what angle means that the device is level.
 *       A property to get or set an angle in degrees that will be used to determine that the device is level. The default value is 0, which indicates
 *       that the top and bottom of the device are in the same horizontal plane. A positive value indicates that the top of the device should be higher
 *       than the bottom for the device to be considered level,and a negative value means that the bottom should be higher.
 * @param {Number} [imageCaptureViewOptions.LevelingOptions.deviceDeclinationRoll = 0] The reference roll that indicates what angle means that the device is level.
 *       A property to get or set an angle in degrees that will be used to determine that the device is level. The default value is 0, which indicates
 *       that the left and right sides of the device are in the same horizontal plane. A positive value indicates that the left side of the device should
 *        be higher than the right for the device to be considered level,and a negative value means that the right side should be higher.
 *
 * @param {Object} imageCaptureViewOptions.CaptureOptions Capturing options of the ImageCaptureControl
 * @param {String} [imageCaptureViewOptions.CaptureOptions.FlashMode = "OFF"] The current camera flash mode.A property to get or set the flash mode, with three values: "ON", "OFF", "AUTO","TORCH" and "AUTOTORCH".
 * @param {Boolean} [imageCaptureViewOptions.CaptureOptions.videoFrame = false] Whether the video frame is returned, or a full-resolution image is captured.
 *       A boolean that indicates whether the video frame, or a full-resolution image is returned when capture is requested. Using the video frame may speed up image classification, but will result in less accurate results, as there is less image data to work with.
 *
 * @param {Boolean} [imageCaptureViewOptions.CaptureOptions.gpsUsage = true] Gets or sets GPS usage behavior of the control. Calling this with a value of true will cause the control to embed GPS coordinates in the captured image if Location Services are enabled. A value of false will prevent the inclusion of GPS coordinates in captured images, regardless of the availability of Location Services. Defaults to true.This param won't be effected for GPS as we have deprecated this feature because of Google policy.
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions. <br/>
 * successCallback -  KMC_SUCCESS success call back. <br/>
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Wrong Parameters, KmcRuntimeException & Exception.
 *
 * @see Check the 'errorCallback' method for any failures in case of unexpected behaviour of the method. Generally the error call back
 * would return a JSON object with ErrorMsg & ErrorDesc' giving the description of the error.
 * You can understand what parameters we have to pass by go through this options {@link ImageCaptureControl#getImageCaptureViewOptions getImageCaptureViewOptions}
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * // create the Capture Control Object
 * var imgCaptureControl =  kfxCordova.kfxUicontrols.createImageCaptureControl();
 * var  ImageCaptureViewOptions =  imgCaptureControl.getImageCaptureViewOptions();
 * // get default options object
 * var imgCaptureControl =  kfxCordova.kfxUicontrols.createImageCaptureControl();
 * var  ImageCaptureViewOptions =  imgCaptureControl.getImageCaptureViewOptions();
 * // specify the values for the Capture view settings/properties
 * ImageCaptureViewOptions.CaptureOptions.gpsUsage = true;
 * // set the options to capture view
 * imgCaptureControl.setOptions(successCallback,errorCallback,ImageCaptureViewOptions)
 */
ImageCaptureControl.prototype.setOptions = function (successCallback, errorCallback, imageCaptureViewOptions) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.setImageCaptureOptions,
		[imageCaptureViewOptions]
	);
};

/// To get the Options/properties of the ImageCaptureControl class .
/**
 * Method to get the properties of the native ImageCaptureControl class.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions. <br/>
 * successCallback -  JSONObject representing ImageCaptureControl Options. JSONObject structure can also be known from getImageCaptureViewOptions() method. <br/>
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are KmcRuntimeException,JSONException & Exception.
 *
 * @see {@link ImageCaptureControl#getImageCaptureViewOptions getImageCaptureViewOptions}
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 *
 * var imgCaptureControl =  kfxCordova.kfxUicontrols.createImageCaptureControl();
 * imgCaptureControl.getOptions(successCallback,errorCallback);
 */
ImageCaptureControl.prototype.getOptions = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.getImageCaptureOptions,
		[]
	);
};

// To get list of supported resolutions for image capture on Android platform. This will return empty list in iOS platform.
/**
 * Method to get list of resolutions returned, may differ depending on the value of videoFrame in CaptureOptions of ImageCaptureControl.
 * This method should not be called until after the CameraInitializationEvent is fired. Example list of return resolutions[{width:480, height:760}, {width:960, height:1280}].
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions. <br/>
 * successCallback -  JSONArray representing list of allowable image capture resolutions. <br/>
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are KmcRuntimeException,JSONException & Exception.
 *
 * @see {@link ImageCaptureControl#setImageResolution setImageResolution}
 *
 * @example
 * function successCallback(response){
 *       alert("Success ImageCaptureControl.getAllowableResolutions "+JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 *
 * var imgCaptureControl =  kfxCordova.kfxUicontrols.createImageCaptureControl();
 * imgCaptureControl.getAllowableResolutions(successCallback,errorCallback);
 */
ImageCaptureControl.prototype.getAllowableResolutions = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.getAllowableResolutions,
		[]
	);
};

/// Sets the focus areas for the ImageCaptureControl.
/**
 * Method to set the focus areas for the ImageCaptureControl. Before using this API, apps should first call getMaxFocusAreas to know the maximum number of focus areas on Android platform.
 * If the value returned is 0, focus areas is not supported. Focus area bounds have valid values (0,0) to a maximum of (viewWidth, viewHeight) which are then translated to valid Android/iOS focus area coordinates.
 * When a focus area is set that has bounds outside of the view bounds the focus area rectangle will be clamped to the nearest valid view bound.
 * The width and height of focus areas cannot be 0 or negative. Any Rect in the list passed in must follow the left < right, and top < bottom rule or a KmcRuntimeException will be thrown as this is an invalid focus area Rect.
 * A Rect in the list will also need to have a sufficient area to provide the underlying camera autofocus algorithm enough information to focus on that area.
 * Creating a Rect that has width and height that is between 5-10% of the width and height of the preview view size is recommended. When the Rect area is too small it is likely, but this is highly device dependent, that the camera will use the entire view as the focus area.
 *
 * This method should not be called until after the CameraInitializationEvent is fired
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Object} parameters -  one of the JSONObject representing desired Focus Areas.
 * @param {Object} parameters.focusAreasAndroid - JSONArray representing list of FocusAreas for ImageCaptureControlon Android platform will be neglected in iOS platform.
 * @param {Object} parameters.focusAreasiOS - It should be rect representing FocusArea input on iOS platform will be neglected in Android platform.
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions. <br/>
 * successCallback -  KMC_SUCCESS success call back. <br/>
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are KmcRuntimeException,JSONException & Exception.
 *
 * @see {@link ImageCaptureControl#getMaxFocusAreas getMaxFocusAreas}
 *
 * @example
 * function successCallback(response){
 *       alert("Success ImageCaptureControl.getMaxFocusAreas "+response);
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var focusAreaListAndroid = [{x:"10", y:"10", width:" 220", height:"120"}, {x:"160", y:"160", width:" 120", height:"180"}];
 * var params = {"focusAreasAndroid" : focusAreaListAndroid, "focusAreasiOS":{x:"10", y:"10", width:" 220", height:"120"}};
 *
 * var imgCaptureControl =  kfxCordova.kfxUicontrols.createImageCaptureControl();
 * imgCaptureControl.setFocusAreas(successCallback,errorCallback);
 */
ImageCaptureControl.prototype.setFocusAreas = function (successCallback, errorCallback, parameters) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.setFocusAreas,
		[parameters]
	);
};

/// To get device's maximum number of focusable areas for image capture on Android platform. This will return empty in iOS platform.
/**
 * Method to get device's maximum number of focusable areas.
 * This method should not be called until after the CameraInitializationEvent is fired
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions. <br/>
 * successCallback -  The maximum number of supported focus areas, or 0 if unsupported. <br/>
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are KmcRuntimeException,JSONException & Exception.
 *
 * @see {@link ImageCaptureControl#setFocusAreas setFocusAreas}
 *
 * @example
 * function successCallback(response){
 *       alert("Success ImageCaptureControl.getMaxFocusAreas "+response);
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 *
 * var imgCaptureControl =  kfxCordova.kfxUicontrols.createImageCaptureControl();
 * imgCaptureControl.getMaxFocusAreas(successCallback,errorCallback);
 */

ImageCaptureControl.prototype.getMaxFocusAreas = function (successCallback, errorCallback, parameters) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.getMaxFocusAreas,
		[parameters]
	);
};

/// To set the desired resolution for image capture.
/**
 * Method to set the desired resolution for image capture.
 * The actual resolution of a captured image may be reversed from what is given (e.g. a 960x1280 image may be returned for a 1280x960 request).
 * The resolution parameter must be one of the given resolutions returned from ImageCaptureControl#getAllowableResolutions() on Android platform.
 * The resolution parameter must be one of the AVCaptureSessionPreset(defined by Apple in AVFoundation) input on iOS platform\n.The supported AVCaptureSessionPresetValues are AVCaptureSessionPresetPhoto,AVCaptureSessionPresetHigh,
 *  AVCaptureSessionPresetMedium,AVCaptureSessionPresetLow,AVCaptureSessionPreset352x288,AVCaptureSessionPreset640x480,AVCaptureSessionPreset1280x720,AVCaptureSessionPreset1920x1080,AVCaptureSessionPresetiFrame960x540,
 *  AVCaptureSessionPresetiFrame1280x720.\n
 *  <b>Note:</b>AVCaptureSessionPresetInputPriority preset is not supported.
 * After calling this method, the ImageCaptureView instance may resize itself.
 * This method should not be called until after the CameraInitializationEvent is fired on Android platform.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Object} parameters -  one of the JSONObject representing desired resolution.
 * @param {Object} parameters.resolutionAndroid - It should be picked from JSONArray returned for ImageCaptureControl#getAllowableResolutions() on Android platform will be neglected in iOS platform.
 * @param {Object} parameters.resolutioniOS - It should be one of AVCaptureSessionPreset input on iOS platform will be neglected in Android platform.
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions. <br/>
 * successCallback -  KMC_SUCCESS success call back. <br/>
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Wrong Parameters, KmcRuntimeException & Exception.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * // create the Capture Control Object
 * var imgCaptureControl =  kfxCordova.kfxUicontrols.createImageCaptureControl();
 * imgCaptureControl.getAllowableResolutions(function(resolutionArray){
 *         // here we get all allowable resolutions
 *        console.log("Success ImageCaptureControl.getAllowableResolutions "+JSON.stringify(resolutionArray));
 *
 *          ImageCaptureControl.setImageResolution(function(sus){
 *             alert("Success ImageCaptureControl.setImageResolution "+JSON.stringify(sus));
 *          }, function(err){
 *            alert("Error! ImageCaptureControl.setImageResolution "+JSON.stringify(err));
 *          },{ "resolutionAndroid" : resolutionArray[3], "resolutioniOS":"AVCaptureSessionPresetHigh");
 *
 *       }, function(error){
 *        alert("Error! ImageCaptureControl.getAllowableResolutions "+JSON.stringify(error));
 *
 *        });
 */

ImageCaptureControl.prototype.setImageResolution = function (successCallback, errorCallback, parameters) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.setImageResolution,
		[parameters]
	);
};

/// To set the camera type for image capture.
/**
 * Method to set the camera type for image capture.
 * The resolution parameter must be one of the strings "FRONT_CAMERA" or "BACK_CAMERA"
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {String} cameraType -  one of the strings representing desired camera type.
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions. <br/>
 * successCallback -  KMC_SUCCESS success call back. <br/>
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Wrong Parameters, KmcRuntimeException & Exception.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * // create the Capture Control Object
 * var imgCaptureControl =  kfxCordova.kfxUicontrols.createImageCaptureControl();
 *          ImageCaptureControl.setCameraType(function(sus){
 *             alert("Success ImageCaptureControl.setCameraType "+JSON.stringify(sus));
 *          }, function(err){
 *            alert("Error! ImageCaptureControl.setCameraType "+JSON.stringify(err));
 *          },{"BACK_CAMERA");
 *
 *       }, function(error){
 *        alert("Error! ImageCaptureControl.setCameraType "+JSON.stringify(error));
 *
 *        });
 */

ImageCaptureControl.prototype.setCameraType = function (successCallback, errorCallback, cameraType) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.setCameraType,
		[cameraType]
	);
};

/// Method to add the event listener to the 'Torch Luminance level' changed delegate method of the  ImageCaptureControl
/**
 * This method would receive the events related to the Torch Luminance level.
 *
 * @param {Function} successCallback - Default Success Call back function name when the event is registered
 * @param {Function} errorCallback - Default Error Call back function name
 * @param {Function} torchLuminanceHandler - a var to hold the Torch Luminance event when it is actually raised
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions. <br/>
 * successCallback -  KMC_SUCCESS    success call back. <br/>
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Wrong Parameters, KmcRuntimeException & Exception.
 * torchLuminanceHandler - marker call back to be invoked when torch luminance level changes.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var imgCaptureControl =  kfxCordova.kfxUicontrols.createImageCaptureControl();
 * function torchLuminanceHandler(Luminance){
 *   alert('Torch Luminance level'+Luminance.TorchLuminance);
 * }
 * imgCaptureControl.addTorchLuminanceListener(successCallback,errorCallback,torchLuminanceHandler);
 **/
ImageCaptureControl.prototype.addTorchLuminanceListener = function (
	successCallback,
	errorCallback,
	torchLuminanceHandler
) {
	ActionUtils.exec(
		function (result) {
			if (result.eventType === "eventRegistered") {
				if (successCallback) successCallback(result);
			} else if (result.eventType === "eventRaised") {
				if (torchLuminanceHandler) torchLuminanceHandler(result);
			}
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.addTorchLuminanceListener,
		[]
	);
};

/// Method to remove the event listener to the  'Torch Luminance level'  changed delegate method of the ImageCaptureControl
/**
 * The method would remove the listener and would not receive any Torch Luminance level change events
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error Call back function name
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions. <br/>
 * successCallback -  KMC_SUCCESS success call back. <br/>
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are KmcRuntimeException,Exception.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var imgCaptureControl =  kfxCordova.kfxUicontrols.createImageCaptureControl();
 * imgCaptureControl.removeTorchLuminanceListener(successCallback,errorCallback);
 */
ImageCaptureControl.prototype.removeTorchLuminanceListener = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.removeTorchLuminanceListener,
		[]
	);
};

/// Method to remove the   ImageCaptureControl view off the screen
/**
 * Method to remove  the ImageCaptureControl view off the screen. This method is responsible for removing and making it nil.
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions. <br/>
 * successCallback -  KMC_SUCCESS success call back. <br/>
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are KmcRuntimeException,Exception.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * // Create a ImageCaptureControl object
 * var imgCaptureControl =  kfxCordova.kfxUicontrols.createImageCaptureControl();
 * imgCaptureControl.removeCameraView(successCallback,errorCallback);
 */
ImageCaptureControl.prototype.removeCameraView = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.removeCameraView,
		[]
	);
};
///A getter  method of properties of the 'ImageCaptureControl' class
/**
 * Method returning the 'ImageCaptureControl'  class properties that can be set by the user. Use this object as an input
 * parameter to set the properties of the ImageCaptureControl class. The parameters are grouped, and has the below mentioned
 * default values.
 *
 * @example
 * var imgCaptureControl =  kfxCordova.kfxUicontrols.createImageCaptureControl();
 * var  imageCaptureViewOptions =  imgCaptureControl.getImageCaptureViewOptions();
 * imageCaptureViewOptions should be like below {
 *    LevelingOptions: {
 *       enabled: true,
 *       deviceDeclinationPitch: 0,
 *       deviceDeclinationRoll: 0
 *    },
 *    CaptureOptions: {
 *       FlashMode: "OFF",
 *       videoFrame: false,
 *       gpsUsage: true
 *    }
 * };
 *
 */
ImageCaptureControl.prototype.getImageCaptureViewOptions = function () {
	var imageCaptureViewOptions = {
		LevelingOptions: {
			/// Whether the level indicator is enabled.
			/**  A boolean that indicates whether the level indicator is enabled.
			 */
			enabled: true,

			/// The reference pitch that indicates what angle means that the device is level.
			/**  A property to get or set an angle in degrees that will be used to determine that the device is level. The default value is 0, which indicates that the top and bottom of the device are in the same horizontal plane. A positive value indicates that the top of the device should be higher than the bottom for the device to be considered level,
             and a negative value means that the bottom should be higher.
             */
			deviceDeclinationPitch: 0,

			/// The reference roll that indicates what angle means that the device is level.
			/**  A property to get or set an angle in degrees that will be used to determine that the device is level. The default value is 0, which indicates that the left and right sides of the device are in the same horizontal plane. A positive value indicates that the left side of the device should be higher than the right for the device to be considered level,
             and a negative value means that the right side should be higher.
             */
			deviceDeclinationRoll: 0,
		},
		CaptureOptions: {
			/// The current camera flash mode.
			/**  A property to get or set the flash mode, with three values: "ON", "OFF", "AUTO" , "TORCH" and "AUTOTORCH".
			 */
			FlashMode: "OFF",

			/// Whether the video frame is returned, or a full-resolution image is captured.
			/**  A boolean that indicates whether the video frame, or a full-resolution image is returned when capture is requested. Using the video frame may speed up image classification, but will result in less accurate results, as there is less image data to work with.
			 */
			videoFrame: false,

            /// Gets or sets GPS usage behavior of the control.
            /**
             Calling this with a value of true will cause the control to embed GPS coordinates in the captured image if Location Services are enabled.
             A value of false will prevent the inclusion of GPS coordinates in captured images, regardless of the availability of Location Services.
             Defaults to true.This param won't be effected for GPS as we have deprecated this feature because of Google policy.
             */
            gpsUsage: true,

		},
	};
	return imageCaptureViewOptions;
};

//End of ImageCaptureControl Methods

module.exports = ImageCaptureControl;
