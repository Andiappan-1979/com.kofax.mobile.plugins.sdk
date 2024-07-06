//
// SelfieCaptureExperience.js
//
//  Copyright (c) 2012 - 2021 Kofax. Use of this code is with permission pursuant to Kofax license terms.

var ActionUtils = require("./ActionUtils");
var ImageObject = require("./ImageObject");

//Start of Selfie Capture Experience methods
//SelfieCaptureExperience constructor and corresponding methods
/**
 * @class
 * @alias SelfieCaptureExperience
 * @constructor
 */
var SelfieCaptureExperience = function () {};

/// To bind the created ImageCapture Control with the SelfieCaptureExperience class .
/**
 * Method to bind  the created ImageCapture Control with the SelfieCaptureExperience class .
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
 * var selfieCaptureExperience =  kfxCordova.kfxUicontrols.createSelfieCaptureExperience();
 * var imageCaptureControlID = null;
 * imageCaptureControl.getId(function(captureControlID){
 *       imageCaptureControlID = captureControlID;
 * },function(error){
 *       alert(JSON.stringify(error));
 * });
 * selfieCaptureExperience.bindCaptureControl(function(success){alert(JSON.stringify(success));},function(error){alert(JSON.stringify(error));},imageCaptureControlID);
 */
SelfieCaptureExperience.prototype.bindCaptureControl = function (
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
		ActionUtils.bindSelfieCaptureControl,
		[imageCaptureControlID]
	);
};

/// Binds the created ImageCapture Control with the SelfieCaptureExperience class and also sets options.
/**
 * Method to bind the created ImageCapture Control with the SelfieCaptureExperience class and also to set options. This method is a combination of bindCaptureControl API and setOptions API.
 *
 * @param {Function} successCallback: Default Success call back function name
 * @param {Function} errorCallback: Default Error call back function name
 * @param {Object} options : A JSON object containing the ID retrieved for the Image Capture Control and the properties to be set to the SelfieCaptureExperience. If a wrong ID is passed an error is received in the error callback
 *
 * @param {String} [options.ImageCaptureControlID] :  Pass the ID retrieved for the Image Capture Control. If a wrong ID is passed an error is received in the error callback
 * @param {Object} [options.CaptureExperienceOptions] :  a 'selfieCaptureExperienceOptions'  variable containing the properties to be set to the SelfieCaptureExperience
 * @see Also see {@link SelfieCaptureExperience#setOptions setOptions} for detailed description of parameters what we have to pass.
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  success string indicating the method has been invoked
 * errorCallback -    error in case any error occurs
 *
 * @example
 * var imageCaptureControl =  kfxCordova.kfxUicontrols.createImageCaptureControl();
 * var selfieCaptureExperience =  kfxCordova.kfxUicontrols.createSelfieCaptureExperience();
 * var imageCaptureControlID = null;
 * var selfieCaptureExperienceOptions = null;
 * selfieCaptureExperience.getOptions(function(success){selfieCaptureExperienceOptions = success},function(error){alert(JSON.stringify(error));});
 * imageCaptureControl.getId(function(captureControlID){
 *       imageCaptureControlID = captureControlID;
 * },function(error){
 *       alert(JSON.stringify(error));
 * });
 * selfieCaptureExperience.bindCaptureControlWithOptions(function(success){alert(JSON.stringify(success));},function(error){alert(JSON.stringify(error));},{"ImageCaptureControlID":imageCaptureControlId,"CaptureExperienceOptions":selfieCaptureExperienceOptions});
 */
SelfieCaptureExperience.prototype.bindCaptureControlWithOptions = function (
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
		ActionUtils.bindSelfieCaptureControlWithOptions,
		[parameters]
	);
};

/// Begins the image capture process.
/**
 * Calling this method will start the process of monitoring the various constraints passed to determine when a level, focused, and non-blurry shot of the face can be taken.
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
 * var selfieCaptureExperience =  kfxCordova.kfxUicontrols.createSelfieCaptureExperience();
 * var imageCaptureControlID = null;
 * imageCaptureControl.getId(function(captureControlID){
 *       imageCaptureControlID = captureControlID;
 * },function(error){
 *       alert(JSON.stringify(error));
 * });
 * selfieCaptureExperience.bindCaptureControl(function(success){alert(JSON.stringify(success));},function(error){alert(JSON.stringify(error));},imageCaptureControlID);
 * selfieCaptureExperience.takePicture(function(success){alert(JSON.stringify(success));},function(error){alert(JSON.stringify(error));});
 */
SelfieCaptureExperience.prototype.takePicture = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.scTakePicture,
		[]
	);
};

/// This method will add an event listener which will be triggered whenever a picture is taken.
/**
 * A listener that will be called when an image was captured. This will only be sent after the experience receives a takePicture message.
 * The experience will wait until the desired minimumFaceSize, faceAngleTolerance and camera adjustments are met and then capture an image. It would then send the
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
 *       alert(image.imageObject);
 * }
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var selfieCaptureExperience = kfxCordova.kfxUicontrols.createSelfieCaptureExperience();
 * selfieCaptureExperience.addImageCapturedListener(successCallback, errorCallback, imageCaptureCallback);
 */
SelfieCaptureExperience.prototype.addImageCapturedListener = function (
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
		ActionUtils.scaddImageCapturedListener,
		[]
	);
};

/// Method to remove the event listener to the 'takePicture' method of the selfieCaptureExperience
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
 * var selfieCaptureExperience = kfxCordova.kfxUicontrols.createSelfieCaptureExperience();
 * //after taking picture
 * selfieCaptureExperience.removeImageCapturedListener(successCallback,errorCallback);
 */
SelfieCaptureExperience.prototype.removeImageCapturedListener = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.scremoveImageCapturedListener,
		[]
	);
};

/// Stops the  image capture process.
/**
 * Calling this method will stop the image capture process.
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
 * var selfieCaptureExperience =  kfxCordova.kfxUicontrols.createSelfieCaptureExperience();
 * var imageCaptureControlID = null;
 * imageCaptureControl.getId(function(captureControlID){
 *       imageCaptureControlID = captureControlID;
 *       selfieCaptureExperience.bindCaptureControl(function(success){alert(JSON.stringify(success));},function(error){alert(JSON.stringify(error));},imageCaptureControlID);
 * },function(error){
 *       alert(JSON.stringify(error));
 * });
 *
 * selfieCaptureExperience.stopCapture(successCallback,errorCallback);
 */
SelfieCaptureExperience.prototype.stopCapture = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.scStopCapture,
		[]
	);
};

/// To set the Options/properties of the SelfieCaptureExperience class .
/**
 * Method to set the properties of the native SelfieCaptureExperience class.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Object} options -  a 'selfieCaptureExperienceOptions'  variable containing the properties to be set to the SelfieCaptureExperience
 *
 * @param {Object} options.LookAndFeel Look and Feel options
 *
 * @param {String} [options.LookAndFeel.outerViewFinderColor = "#FFFFFF"]
 *    This value specifies the outer view finder color
 *
 * @param {Boolean} [options.LookAndFeel.vibrationEnabled = true]
 *    This value specifies the device vibration is enable or not when image capture happens
 *
 * @param {Boolean} [options.LookAndFeel.guidanceFrameColor = "#000000"]
 *    This value specifies the color that will be used for the guidance frame.
 *
 * @param {Object} options.CaptureCriteria capture criteria options
 *
 *
 * @param {Object} [options.CaptureCriteria.SelfieDetectionSettings] Selfie detection settings
 *
 * @param {Number} [options.CaptureCriteria.SelfieDetectionSettings.minimumFaceSize = 0.25]
 *    Percentage of face fits in the target frame while captureing the selfie. range is (0.25 to 1).
 *
 * @param {Number} [options.CaptureCriteria.SelfieDetectionSettings.faceAngleTolerance = 15]
 *    The face angle to detect the face. The valid range is [0 - 60].
 *
 * @param {Object} [options.CaptureCriteria.SelfieDetectionSettings.centerPoint] center point of the ellipse. Should just be a point with in the bounds of the image height and width.
 *
 * @param {Number} [options.CaptureCriteria.SelfieDetectionSettings.centerPoint.x] x value of the center. Should just be with in the bounds of the image of the target frame.
 *
 * @param {Number} [options.CaptureCriteria.SelfieDetectionSettings.centerPoint.y] y value of the center. Should just be with in the bounds of the image of the target frame.
 *
 * @param {Number} [options.CaptureCriteria.SelfieDetectionSettings.aspectRatio = 0] aspect ratio of the ellipse. The aspect ratio of the ellipse  that should match the face being searched.The aspect ratio is used to construct the target ellispe that should match the face being searched. If targetFrameAspectRatio > 1, the long edge of the target ellipse will align with the long edge of the camera preview. If 0 < targetFrameAspectRatio < 1, the long edge of the target ellipse will align with the short edge of the camera preview.
 * If the targetEllipseAspectRatio is set to 0, then it will be automatically reset to an image aspect ratio.
 * Setting negative values has the same effect as if 0 was set.
 *
 * @param {Number} [options.CaptureCriteria.SelfieDetectionSettings.padding = 10] padding percent value. Given a center point and aspect ratio, a ellipse frame will be constructed to cover as much of the image as possible without any the distances between a frame edge and image edge falling below the padding distance, calculated as percent of the perpendicular image edge length.  Values will be clamped to the range [1-50].  The default value is 10.
 * For example:
 * - Given detection settings with a frame center at the center of the image, and a personal check aspect ratio, the constructed frame will fill the width of the image, leaving a space on the left and right equal to the padding percent of the image width.
 * - Given detection settings with a frame center shifted to the left of the image center, the gap on the right side of the constructed frame will exceed the gap on the left.
 *
 *
 * @param {Object} options.CapturedMessage captured indication message options
 *
 * @param {String} [options.CapturedMessage.message = "Done!"]
 *    The text of the message
 *    Specifies the text of the message.
 *    The default message is "Done!".  You must set a message for anything to be displayed.
 *
 * @param {String} [options.CapturedMessage.textColor = "#00F900"]
 *    The color used to display the text
 *    Specifies the color that the message's text will be rendered with.
 *    The default color is green.
 *
 * @param {String} [options.CapturedMessage.backgroundColor = "#B2000000"]
 *    The color used to display the background of the message
 *    Specifies the color that the message's background are will be rendered with.  The full area specified by the size property will be filled with the background color, excluding areas clipped outside of view bounds.
 *    The default background color is 0.7 transparent black.
 *
 * @param {Boolean} [options.CapturedMessage.visible = True]
 *     The visibility of the message
 *     Specifies whether the message is visible or not.  A value of "false" will prevent the message from appearing.  A value of "true" will show the message, if there is nothing else to prevent it from appearing.
 *     The default value is true.  Some objects that use messages, like the capture experience objects, will automatically manage and update this state.
 *
 * @param {String} [options.CapturedMessage.orientation = "PORTRAIT"]
 *     The orientation of the message
 *     Use one of the allowed values to set the orientation of the messages being displayed. Once a orientation is set, message stays in that orientation even if the device rotates.In other words this is sticky.
 *     If you want to handle the rotation when device rotates, orientation has to be explicitly set again on the message.
 *     The default value is PORTRAIT. Allowable values are PORTRAIT, LANDSCAPE, REVERSEPORTRAIT, REVERSELANDSCAPE
 *     If you modify the orientation of the message, plugin (underlying SDK) tries to optimally display the message however it may not always get displayed with appropriate size and font. It is recommended to set the size or font appropriately if needed.
 *
 * @param {Object} options.CapturedMessage.fontAndroid  The font used to display the text of the message on Android platform.
 *
 * @param {Number} [options.CapturedMessage.fontAndroid.textSize]
 *     The text font size of the message
 *     The default is -1, which causes the message text font size to be determined as the SDK sees fit.
 *
 * @param {Object} options.CapturedMessage.fontiOS  The font used to display the text of the message on iOS platform.
 *
 * @param {Number} [options.CapturedMessage.fontiOS.fontSize]
 *     fontSize the size of the text in the message
 *     fontSize by default is -1 which means an optimal size is calculated and displayed.
 *     fontSize generally accepts positive numbers.
 *     Setting arbitrarily large values to fontSize may not render the font and behavior is not defined.
 *
 * @param {String} [options.CapturedMessage.fontiOS.fontName]
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
 * @param {Number} [options.CapturedMessage.position.x] x co-ordinate of the position
 *
 * @param {Number} [options.CapturedMessage.position.y] y co-ordinate of the position
 *
 * @param {Object} options.CapturedMessage.size The Size of the text message. Applicable for iOS and Android.
 *	   40% of imageCaptureControl size
 *     The message object will be rendered with dimensions specified by this property.  Text will be contained within this boundary, and any set background color will completely cover this area.
 *     The default size has width -1 and height -1 which means an appropriate size is calculated and rendered.
 *     If the value is changed it cannot be reset to default in the current instance.
 *     In Android, rendering might differ based on device being used.
 *     If the value is changed it cannot be reset to default in the current instance. The object on which this is applied has to be recreated and set (typically an experience object has to be recreated).
 *     Whenever the orientation of the message has been changed, the size may have to be updated.
 *
 * @param {Number} [options.CapturedMessage.size.width] width of the message
 *
 * @param {Number} [options.CapturedMessage.size.height] height of the message
 *
 *
 *
 * @param {Object} options.UserInstructionMessage An instructional text box that is displayed to the user while trying to capture a selfie.
 * This instruction will be displayed during periods where other guidance is not available to correct a user. This may happen in particular when the user is holding a device far away from a user, preventing automated detection from recognizing the selfie.
 * The following kfxKUICaptureMessage properties are not supported for this message:
 * - messageIcons
 * - backGround
 *
 * @param {String} [options.UserInstructionMessage.message = "Center Face"]
 *    The text of the message
 *    Specifies the text of the message.
 *    The default message is "Center Face".  You must set a message for anything to be displayed.
 *
 * @param {String} [options.UserInstructionMessage.textColor = "#FF0000"]
 *    The color used to display the text
 *    Specifies the color that the message's text will be rendered with.
 *    The default color is red.
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
 * @param {String} [options.UserInstructionMessage.orientation = "PORTRAIT"]
 *     The orientation of the message
 *     Use one of the allowed values to set the orientation of the messages being displayed. Once a orientation is set, message stays in that orientation even if the device rotates.In other words this is sticky.
 *     If you want to handle the rotation when device rotates, orientation has to be explicitly set again on the message.
 *     The default value is PORTRAIT. Allowable values are PORTRAIT, LANDSCAPE, REVERSEPORTRAIT, REVERSELANDSCAPE
 *     If you modify the orientation of the message, plugin (underlying SDK) tries to optimally display the message however it may not always get displayed with appropriate size and font. It is recommended to set the size or font appropriately if needed.
 *
 * @param {Object} options.UserInstructionMessage.fontAndroid  The font used to display the text of the message on Android platform.
 *
 * @param {Number} [options.UserInstructionMessage.fontAndroid.textSize]
 *     The text font size of the message
 *     The default is -1, which causes the message text font size to be determined as the SDK sees fit.
 *
 * @param {Object} options.UserInstructionMessage.fontiOS  The font used to display the text of the message on iOS platform.
 *
 * @param {Number} [options.UserInstructionMessage.fontiOS.fontSize]
 *     fontSize the size of the text in the message
 *     fontSize by default is -1 which means an optimal size is calculated and displayed.
 *     fontSize generally accepts positive numbers.
 *     Setting arbitrarily large values to fontSize may not render the font and behavior is not defined.
 *
 * @param {String} [options.UserInstructionMessage.fontiOS.fontName]
 *     fontName is the name of the font to be used for the message
 *     fontName by default is "HelveticalNeue"
 *     fontName complies to the iOS font family names (refer to iOS SDK native documentation to know about supported font families).
 *
 * @param {Object} options.UserInstructionMessage.position The position (Top) of the text message. Applicable only on iOS platform. This will not have any impact on Android platform.
 *
 *     The message object will be overlay on top of an Image Capture Control with the center of the message being located at this coordinate.
 *     Changes in the size of the capture control will usually require updating the position of the message as well.
 *     position by default is "auto" position and is set appropriately which is suitable to the parent view.
 *     once a new value for position is set (other than default) the "auto" quality is lost and the new value is used. If the value is changed it cannot be reset to default in the current instance. The object has to be recreated and set (typically an experience object has to be recreated).
 *     position complies to the co-ordinate system in iOS. Setting arbitrarily large values is not recommended and behavior is not defined.
 *
 * @param {Number} [options.UserInstructionMessage.position.x] x co-ordinate of the position
 *
 * @param {Number} [options.UserInstructionMessage.position.y] y co-ordinate of the position
 *
 * @param {Object} options.UserInstructionMessage.size The Size of the text message. Applicable for iOS and Android.
 *	   Width is equal to the capture control width and height is 25 points
 *     The message object will be rendered with dimensions specified by this property.  Text will be contained within this boundary, and any set background color will completely cover this area.
 *     The default size has width -1 and height -1 which means an appropriate size is calculated and rendered.
 *     If the value is changed it cannot be reset to default in the current instance.
 *     In Android, rendering might differ based on device being used.
 *     If the value is changed it cannot be reset to default in the current instance. The object on which this is applied has to be recreated and set (typically an experience object has to be recreated).
 *     Whenever the orientation of the message has been changed, the size may have to be updated.
 *
 * @param {Number} [options.UserInstructionMessage.size.width] width of the message
 *
 * @param {Number} [options.UserInstructionMessage.size.height] height of the message
 * @param {Object} options.HoldSteadyMessage hold steady message options. This option is available only for Android. Setting this wouldn't work for iOS.
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
 * @param {String} [options.HoldSteadyMessage.backgroundColor = "#00FFFFFF"]
 *    The color used to display the background of the message
 *    Specifies the color that the message's background are will be rendered with.  The full area specified by the size property will be filled with the background color, excluding areas clipped outside of view bounds.
 *    The default background color is transparent.
 *
 * @param {Boolean} [options.HoldSteadyMessage.visible = true]
 *     The visibility of the message
 *     Specifies whether the message is visible or not.  A value of "false" will prevent the message from appearing.  A value of "true" will show the message, if there is nothing else to prevent it from appearing.
 *     The default value is true.  Some objects that use messages, like the capture experience objects, will automatically manage and update this state.
 *
 * @param {String} [options.HoldSteadyMessage.orientation = "PORTRAIT"]
 *     The orientation of the message
 *     Use one of the allowed values to set the orientation of the messages being displayed. Once a orientation is set, message stays in that orientation even if the device rotates.In other words this is sticky.
 *     If you want to handle the rotation when device rotates, orientation has to be explicitly set again on the message.
 *     The default value is PORTRAIT. Allowable values are PORTRAIT, LANDSCAPE, REVERSEPORTRAIT, REVERSELANDSCAPE
 *     If you modify the orientation of the message, plugin (underlying SDK) tries to optimally display the message however it may not always get displayed with appropriate size and font. It is recommended to set the size or font appropriately if needed.
 *
 * @param {Object} options.HoldSteadyMessage.fontAndroid  The font used to display the text of the message on Android platform.
 *
 * @param {Number} [options.HoldSteadyMessage.fontAndroid.textSize]
 *     The text font size of the message
 *     The default is -1, which causes the message text font size to be determined as the SDK sees fit.
 *
 *
 *
 * @param {Object} options.HoldSteadyMessage.position The position (center) of the text message. Applicable only on iOS platform. This will not have any impact on Android platform.
 *
 *     The message object will be overlay on top of an Image Capture Control with the center of the message being located at this coordinate.
 *     Changes in the size of the capture control will usually require updating the position of the message as well.
 *     position by default is "auto" position and is set appropriately which is suitable to the parent view.
 *     once a new value for position is set (other than default) the "auto" quality is lost and the new value is used. If the value is changed it cannot be reset to default in the current instance. The object has to be recreated and set (typically an experience object has to be recreated).
 *     position complies to the co-ordinate system in iOS. Setting arbitrarily large values is not recommended and behavior is not defined.
 *
 * @param {Number} [options.HoldSteadyMessage.position.x] x co-ordinate of the position
 *
 * @param {Number} [options.HoldSteadyMessage.position.y] y co-ordinate of the position
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
 *  @param {Number} [options.HoldSteadyMessage.size.width] width of the message
 *
 *  @param {Number} [options.HoldSteadyMessage.size.height] height of the message
 *
 * @param {Object} options.EyesBlinkInstructionMessage no face found message options
 *
 * @param {String} [options.EyesBlinkInstructionMessage.message = "Blink now"]
 *    The text of the message
 *    Specifies the text of the message.
 *    The default message is "Blink now".  You must set a message for anything to be displayed.
 *
 * @param {String} [options.EyesBlinkInstructionMessage.textColor = "#FF0000"]
 *    The color used to display the text
 *    Specifies the color that the message's text will be rendered with.
 *    The default color is red.
 *
 * @param {String} [options.EyesBlinkInstructionMessage.backgroundColor = "#00000000"]
 *    The color used to display the background of the message
 *    Specifies the color that the message's background are will be rendered with.  The full area specified by the size property will be filled with the background color, excluding areas clipped outside of view bounds.
 *    The default background color is transparent.
 *
 * @param {Boolean} [options.EyesBlinkInstructionMessage.visible = true]
 *     The visibility of the message
 *     Specifies whether the message is visible or not.  A value of "false" will prevent the message from appearing.  A value of "true" will show the message, if there is nothing else to prevent it from appearing.
 *     The default value is true.  Some objects that use messages, like the capture experience objects, will automatically manage and update this state.
 *
 * @param {String} [options.EyesBlinkInstructionMessage.orientation = "PORTRAIT"]
 *     The orientation of the message
 *     Use one of the allowed values to set the orientation of the messages being displayed. Once a orientation is set, message stays in that orientation even if the device rotates.In other words this is sticky.
 *     If you want to handle the rotation when device rotates, orientation has to be explicitly set again on the message.
 *     The default value is PORTRAIT. Allowable values are PORTRAIT, LANDSCAPE, REVERSEPORTRAIT, REVERSELANDSCAPE
 *     If you modify the orientation of the message, plugin (underlying SDK) tries to optimally display the message however it may not always get displayed with appropriate size and font. It is recommended to set the size or font appropriately if needed.
 *
 * @param {Object} options.EyesBlinkInstructionMessage.fontAndroid  The font used to display the text of the message on Android platform.
 *
 * @param {Number} [options.EyesBlinkInstructionMessage.fontAndroid.textSize]
 *     The text font size of the message
 *     The default is -1, which causes the message text font size to be determined as the SDK sees fit.
 *
 * @param {Object} options.EyesBlinkInstructionMessage.fontiOS  The font used to display the text of the message on iOS platform.
 *
 * @param {Number} [options.EyesBlinkInstructionMessage.fontiOS.fontSize]
 *     fontSize the size of the text in the message
 *     fontSize by default is -1 which means an optimal size is calculated and displayed.
 *     fontSize generally accepts positive numbers.
 *     Setting arbitrarily large values to fontSize may not render the font and behavior is not defined.
 *
 * @param {String} [options.EyesBlinkInstructionMessage.fontiOS.fontName]
 *     fontName is the name of the font to be used for the message
 *     fontName by default is "HelveticalNeue"
 *     fontName complies to the iOS font family names (refer to iOS SDK native documentation to know about supported font families).
 *
 * @param {Object} options.EyesBlinkInstructionMessage.position The position (Top) of the text message. Applicable only on iOS platform. This will not have any impact on Android platform.
 *
 *     The message object will be overlay on top of an Image Capture Control with the center of the message being located at this coordinate.
 *     Changes in the size of the capture control will usually require updating the position of the message as well.
 *     position by default is "auto" position and is set appropriately which is suitable to the parent view.
 *     once a new value for position is set (other than default) the "auto" quality is lost and the new value is used. If the value is changed it cannot be reset to default in the current instance. The object has to be recreated and set (typically an experience object has to be recreated).
 *     position complies to the co-ordinate system in iOS. Setting arbitrarily large values is not recommended and behavior is not defined.
 *
 * @param {Number} [options.EyesBlinkInstructionMessage.position.x] x co-ordinate of the position
 *
 * @param {Number} [options.EyesBlinkInstructionMessage.position.y] y co-ordinate of the position
 *
 * @param {Object} options.EyesBlinkInstructionMessage.size The Size of the text message. Applicable for iOS and Android.
 *	   Width is equal to the capture control width and height is 25 points
 *     The message object will be rendered with dimensions specified by this property.  Text will be contained within this boundary, and any set background color will completely cover this area.
 *     The default size has width -1 and height -1 which means an appropriate size is calculated and rendered.
 *     If the value is changed it cannot be reset to default in the current instance.
 *     In Android, rendering might differ based on device being used.
 *     If the value is changed it cannot be reset to default in the current instance. The object on which this is applied has to be recreated and set (typically an experience object has to be recreated).
 *     Whenever the orientation of the message has been changed, the size may have to be updated.
 *
 * @param {Number} [options.EyesBlinkInstructionMessage.size.width] width of the message
 *
 * @param {Number} [options.EyesBlinkInstructionMessage.size.height] height of the message
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
 * var selfieCaptureExperience =  kfxCordova.kfxUicontrols.createSelfieCaptureExperience();
 * var imageCaptureControlID = null;
 * imageCaptureControl.getId(function(captureControlID){
 *       imageCaptureControlID = captureControlID;
 * },function(error){
 *       alert(JSON.stringify(error));
 * });
 * selfieCaptureExperience.bindCaptureControl(function(success){alert(JSON.stringify(success));},function(error){alert(JSON.stringify(error));},imageCaptureControlID);
 * //get the options
 * selfieCaptureExperience.getOptions(function(success){selfieCaptureExperienceOptions = success},myerrorCB);
 * //specify the values for the Selfie Capture Experience
 * selfieCaptureExperienceOptions.CaptureCriteria.focusEnabled = false;
 * //set the options to capture view
 * selfieCaptureExperience.setOptions(successCallback,errorCallback,selfieCaptureExperienceOptions)
 */
SelfieCaptureExperience.prototype.setOptions = function (successCallback, errorCallback, parameters) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.scSetOptions,
		[parameters]
	);
};

/// To get the Options/properties of the SelfieCaptureExperience class .
/**
 * Method to get the properties of the native SelfieCaptureExperience class.
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
 * var selfieCaptureExperience =  kfxCordova.kfxUicontrols.createSelfieCaptureExperience();
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
 * selfieCaptureExperience.bindCaptureControl(function(success){alert(JSON.stringify(success));},function(error){alert(JSON.stringify(error));},imageCaptureControlID);
 *
 *
 *
 * selfieCaptureExperience.getOptions(successCallback,errorCallback);
 */
SelfieCaptureExperience.prototype.getOptions = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.scGetOptions,
		[]
	);
};

/**
 * Method to clear SelfieCaptureExperience memory.
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
 * var selfieCaptureExperience =  kfxCordova.kfxUicontrols.createSelfieCaptureExperience();
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
 * selfieCaptureExperience.bindCaptureControl(function(success){alert(JSON.stringify(success));},function(error){alert(JSON.stringify(error));},imageCaptureControlID);
 * selfieCaptureExperience.takePicture(successCallback,errorCallback);
 * selfieCaptureExperience.destroy(successCallback,errorCallback);
 */
SelfieCaptureExperience.prototype.destroy = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.scDestroy,
		[]
	);
};

///A getter  method of properties of the 'SelfieCaptureExperience' class
/**
 * Method returning the 'SelfieCaptureExperience'  class properties that can be set by the user. Use this object as an input
 * parameter to set the properties of the SelfieCaptureExperience class. The parameters are grouped, and has the below mentioned
 * default values.
 *
 * @example
 *  var selfieCaptureExperience =  kfxCordova.kfxUicontrols.createSelfieCaptureExperience();
 *  var selfieCaptureExperienceProperties = selfieCaptureExperience.getSelfieCaptureOptions();
 *  selfieCaptureExperienceProperties should be like below{
 *        LookAndFeel: {
 *            outerViewFinderColor : "#FFFFFF",
 *            vibrationEnabled : true,
 *            guidanceFrameColor : "#000000"
 *        },
 *        CaptureCriteria: {
 *            	SelfieDetectionSettings:{
 *                    centerPoint:{
 *                        x: 0,
 *                        y: 0
 *                    },
 *                    aspectRatio: 0,
 *                    padding: 10.0,
 *                    minimumFaceSize: 0.25,
 *                    faceAngleTolerance: 15
 *               }
 *
 *        },
 *        UserInstructionMessage: {
 *            backgroundColor: "#00000000",
 *            textColor: "#FF0000",
 *            message: "Center Face",
 *            visible: true,
 *               orientation: "PORTRAIT",
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
 *
 *        CapturedMessage: {
 *            backgroundColor: "#B2000000",
 *            textColor: "#00F900",
 *            message: "Done!",
 *            visible: true,
 *               orientation: "PORTRAIT",
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
 *            backgroundColor: "#00FFFFFF",
 *            textColor: "#FFFFFFFF",
 *            message: "Hold Steady",
 *            visible: true,
 *               orientation: "PORTRAIT",
 *            fontAndroid: {
 *              textSize : -1
 *           },
 *            position :{
 *               x : -1,
 *               y : -1
 *            },
 *            size:{
 *               width: -1,
 *               height: -1
 *            }
 *        },
 *		 EyesBlinkInstructionMessage: {
 *            backgroundColor: "#00000000",
 *            textColor: "#FF0000",
 *            message: "Blink now",
 *            visible: true,
 *               orientation: "PORTRAIT",
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
 *        }
 *
 *    };
 */
SelfieCaptureExperience.prototype.getSelfieCaptureOptions = function () {
	var object = {
		//LookAndFeel options
		LookAndFeel: {
			/**
			 * This value specifies the outer view finder color
			 */
			outerViewFinderColor: "#FFFFFF",
			/**
			 * This value specifies the device vibration is enable or not when image capture happens
			 */
			vibrationEnabled: true,
			/**
			 * This value specifies the color that will be used for the guidance frame.
			 */
			guidanceFrameColor: "#000000",
		},
		//capture criteria options
		CaptureCriteria: {
			SelfieDetectionSettings: {
				centerPoint: {
					x: 0,
					y: 0,
				},
				aspectRatio: 0,
				padding: 10.0,
				minimumFaceSize: 0.25,
				faceAngleTolerance: 15,
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
			 *    The default color is red.
			 */
			textColor: "#00FF0000",
			/**
			 *    The text of the message
			 *    Specifies the text of the message.
			 *    The default message is the "Center Face".  You must set a message for anything to be displayed.
			 */
			message: "Center Face",
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
			orientation: "PORTRAIT",
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
			 *    The default color is green.
			 */
			textColor: "#00F900",
			/**
			 *    The text of the message
			 *    Specifies the text of the message.
			 *    The default message is "Done!".  You must set a message for anything to be displayed.
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
			 *     The default value is PORTRAIT. Allowable values are PORTRAIT, LANDSCAPE, REVERSEPORTRAIT, REVERSELANDSCAPE.
			 *     If you modify the orientation of the message, plugin (underlying SDK) tries to optimally display the message however it may not always get displayed with appropriate size and font. It is recommended to set the size or font appropriately if needed.
			 */
			orientation: "PORTRAIT",
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
		//hold steady message options
		HoldSteadyMessage: {
			/**
			 *    The color used to display the background of the message
			 *    Specifies the color that the message's background are will be rendered with.  The full area specified by the size property will be filled with the background color, excluding areas clipped outside of view bounds.
			 *    The default background color is transparent.
			 */
			backgroundColor: "#00FFFFFF",
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
			 *     The default value is PORTRAIT. Allowable values are PORTRAIT, LANDSCAPE, REVERSEPORTRAIT, REVERSELANDSCAPE.
			 *     If you modify the orientation of the message, plugin (underlying SDK) tries to optimally display the message however it may not always get displayed with appropriate size and font. It is recommended to set the size or font appropriately if needed.
			 */
			orientation: "PORTRAIT",
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

		//EyeBlink instruction message options
		EyesBlinkInstructionMessage: {
			/**
			 *    The color used to display the background of the message
			 *    Specifies the color that the message's background are will be rendered with.  The full area specified by the size property will be filled with the background color, excluding areas clipped outside of view bounds.
			 *    The default background color is transparent.
			 */
			backgroundColor: "#00000000",
			/**
			 *    The color used to display the text
			 *    Specifies the color that the message's text will be rendered with.
			 *    The default color is red.
			 */
			textColor: "#FF0000",
			/**
			 *    The text of the message
			 *    Specifies the text of the message.
			 *    The default message is the "Blink now".  You must set a message for anything to be displayed.
			 */
			message: "Blink now",
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
			orientation: "PORTRAIT",
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
	};
	return object;
};
//End of Selfie Capture Experience methods
module.exports = SelfieCaptureExperience;
