//
// ImageReviewControl.js
//
//  Copyright (c) 2012 - 2021 Kofax. Use of this code is with permission pursuant to Kofax license terms.

var ActionUtils = require("./ActionUtils");

/// The Plugin object for the native ImageReviewEditView class
/**  This ImageReviewEditViewControl class is responsible for handling the corresponding plugin js to interact with the native ImageCaptureControl
 * class. To set and get the properties, and to access the instance methods, corresponding JS methods are written under this class which
 * are used by the  end user in application script.
 *
 * @class
 * @alias ImageReviewControl
 * @constructor
 */
//ImageReviewControl constructor and corresponding methods
var ImageReviewControl = function () {};
/// Method to add the   ImageReviewEditControl view to the screen
/**
 * This method is to create and show the "KfxKUIImageReviewEditControl" object on the web view. This would create
 * a "KfxKUIImageReviewEditControl" object in the native and will add the object to the web view.
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Object} layoutObject - a 'Layout' object mentioning the Frame values for the ImageCaptureControl object. Refer to 'Layout' object for
 * containing values.
 *
 * @param {Number} [layoutObject.x] x position of the image review control
 *
 * @param {Number} [layoutObject.y] y position of the image review control
 *
 * @param {Number} [layoutObject.width] width of the image review control
 *
 * @param {Number} [layoutObject.height] height of the image review control
 *
 * @param {Boolean} [layoutObject.visibility] image review control is visible or not
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS    success call back.
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Wrong Parameters, KmcRuntimeException & Exception.
 *
 * @see Check the 'errorCallback' method for any failures in case of unexpected behaviour of the method. Generally the error call back
 * would return a JSON object with ErrorMsg & ErrorDesc' giving the description of the error.
 *
 * @example
 * var Layout = kfxCordova.getLayoutProperties();
 * Layout.x = 10;
 * Layout.y =10;
 * Layout.width= 300;
 * Layout.height = 400;
 * Layout.visibility = true; // By default visibility is 'true'
 * function successCallback(result){
 *    alert(JSON.stringify(result));
 * }
 * function errorCallback(error){
 *    alert(JSON.stringify(error));
 * }
 * var imgReviewControl =  kfxCordova.kfxUicontrols.createImageReviewControl();
 * imgReviewControl.addImageReviewEditView(successCallback,errorCallback, Layout);
 */
ImageReviewControl.prototype.addImageReviewEditView = function (successCallback, errorCallback, layoutObject) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.addImageReviewEditView,
		[layoutObject]
	);
};

/// Method to remove the   ImageReviewEditControl view off the screen
/**
 * Method to remove  the ImageReviewEditControl view off the screen. This method is responsible for removing and making it nil.
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS success call back
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are KmcRuntimeException,Exception.
 *
 * @see Check the 'errorCB' method for any failures in case of unexpected behaviour of the method. Generally the error call back
 * would return a JSON object with ErrorMsg & ErrorDesc' giving the description of the error.
 *
 * @example
 * function successCallback(result){
 *    alert(JSON.stringify(result));
 * }
 * function errorCallback(error){
 *    alert(JSON.stringify(error));
 * }
 * var imgReviewControl =  kfxCordova.kfxUicontrols.createImageReviewControl();
 * imgReviewControl.removeView(successCallback,errorCallback);
 */
ImageReviewControl.prototype.removeView = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.removeImageReviewEditView,
		[]
	);
};

/// To set image to review.
/**
 * This method call is used to load the image object to be reviewed.
 * It also calculates a default crop rectangle (tetragon) based on the size and layout of the imageObjectToReview.
 * If you want to override the default crop rectangle, change the cropTetragon property prior to calling showCropRectangle.
 * This method will not succeed if a valid image processing license is not set.
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {String} imageID - an imageID(string) in the imagearray class, to be set for review
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS success call back
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are  KMC_IP_LICENSE_INVALID: no license found, KMC_IP_NO_REPRESENTATION: not bitmap or file based, or buffered image, KmcRuntimeException,Exception.
 *
 * @example
 * function successCallback(result){
 *    alert(JSON.stringify(result));
 * }
 * function errorCallback(error){
 *    alert(JSON.stringify(error));
 * }
 * var imageid = 'imageid of the kedImage image from ImageArray class';
 * var imgReviewControl =  kfxCordova.kfxUicontrols.createImageReviewControl();
 * imgReviewControl.setImage(successCallback,errorCallback,imageid);
 */
ImageReviewControl.prototype.setImage = function (successCallback, errorCallback, imageID) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.setImage,
		[imageID]
	);
};

/// Method to get the  image being set for review/edit to  the   ImageReviewEditControl class
/**
 * This method would get the imageid of the KEDImage set for review. As the native SDK(for ios) do not provide any method to
 * get the already set image, it is necessary to store the id of the image for reference. This method would return the store
 * imageid.
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS success call back
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are KmcRuntimeException,Exception.
 *
 * @example
 * function successCallback(result){
 *    alert(JSON.stringify(result));
 * }
 * function errorCallback(error){
 *    alert(JSON.stringify(error));
 * }
 * var imgReviewControl =  kfxCordova.kfxUicontrols.createImageReviewControl();
 * imgReviewControl.getImage(successCallback,errorCallback);
 */
ImageReviewControl.prototype.getImage = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (result) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.getImage,
		[]
	);
};

/// To set the Options/properties of the ImageReviewEditControl class .
/**
 * Method to set the properties of the native ImageReviewEditControl class.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Object} imageReviewEditViewOptions It is containing the properties  to be set to the ImageReviewEditControl
 * @param {Object} imageReviewEditViewOptions.Tetragon  The crop tetragon specified during edit operations.Developer can set the tetragon
 *       coordinates to initialize the control before displaying bounding tetragon (crop rectangle), or allow the control to set it to a default.
 *       The library returns this crop tetragon while edit is in progress. After the user closes the view, this object contains the users final
 *       corner points after editing is complete.
 *
 * @param {Boolean} [imageReviewEditViewOptions.Tetragon.show = true] Whether to show tetragon.A boolean that indicates whether the level indicator is enabled.
 *
 * @param {Object} imageReviewEditViewOptions.Tetragon.TopLeft  Represents the coordinates of the top left corner.
 * @param {Number} [imageReviewEditViewOptions.Tetragon.TopLeft.x = 0]  Top left x coordinate of the tetragon point in pixels.It is less than or
 *       greater than the bottom right x coordinate.To avoid fractions, The library converts to whole integers in use.
 * @param {Number} [imageReviewEditViewOptions.Tetragon.TopLeft.y = 0]  Top left y coordinate of the tetragon point in pixels.
 *
 * @param {Object} imageReviewEditViewOptions.Tetragon.TopRight  Represents the coordinates of the top right corner.
 * @param {Number} [imageReviewEditViewOptions.Tetragon.TopRight.x = 0] Top right x coordinate of the tetragon point in pixels.It is always be greater than top left x coordinate.
 *       To avoid fractions, The library converts to whole integers in use.
 * @param {Number} [imageReviewEditViewOptions.Tetragon.TopRight.y = 0] Top right y coordinate of the tetragon point in pixels.
 *
 * @param {Object} imageReviewEditViewOptions.Tetragon.BottomLeft  Represents the coordinates of the bottom left corner.
 * @param {Number} [imageReviewEditViewOptions.Tetragon.BottomLeft.x = 0] Bottom left x coordinate of the tetragon point in pixels.It is always be
 *       less than the bottom right x coordinate.To avoid fractions, The library converts to whole integers in use.
 * @param {Number} [imageReviewEditViewOptions.Tetragon.BottomLeft.y = 0] Bottom left y coordinate of the tetragon point in pixels.
 *
 * @param {Object} imageReviewEditViewOptions.Tetragon.BottomRight  Represents the coordinates of the bottom right corner.
 * @param {Number} [imageReviewEditViewOptions.Tetragon.BottomRight.x = 0] Bottom right x coordinate of the tetragon point in pixels.It is always be
 *       greater than the bottom left x coordinate.To avoid fractions, The library converts to whole integers in use.
 * @param {Number} [imageReviewEditViewOptions.Tetragon.BottomRight.y = 0] Bottom right y coordinate of the tetragon point in pixels.
 *
 * @param {Object} imageReviewEditViewOptions.Crop Represents the behavior of cropping tetragon
 *
 * @param {String} [imageReviewEditViewOptions.Crop.lineColor = "#AABBCCDD"] Color of lines in cropping rectangle/tetragon.
 *
 * @param {String} [imageReviewEditViewOptions.Crop.cornerColor = "#AABBCCDD"] Color of corner handles (circles) in cropping rectangle/tetragon.
 *
 * @param {String} [imageReviewEditViewOptions.Crop.lineStyle = "LINE_STYLE_SOLID"] Crop rectangle lines should be solid or dashed. Acceptable parameters are "LINE_STYLE_SOLID" or "LINE_STYLE_DOTTED".
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS success call back
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Wrong Parameters, KmcRuntimeException & Exception.
 *
 * @see Check the 'errorCallback' method for any failures in case of unexpected behaviour of the method. Generally the error call back
 * would return a JSON object with ErrorMsg & ErrorDesc' giving the description of the error.
 *
 * @example
 * var imgReviewControl =  kfxCordova.kfxUicontrols.createImageReviewControl();
 * var  imageReviewEditViewOptions =  imgReviewControl.getImageReviewEditViewOptions();
 * var point1 = kfxCordova.getPointProperties();
 * point1.x = 10; point1.y=10;
 * var point2 = kfxCordova.getPointProperties();
 * point2.x=20; point2.y=200;
 * var point3 = kfxCordova.getPointProperties();
 * point3.x=200; point3.y=20;
 * var point4 = kfxCordova.getPointProperties();
 * point4.x=250; point4.y=320;
 *
 * imageReviewEditViewOptions.Tetragon.TopLeft=point1;
 * imageReviewEditViewOptions.Tetragon.TopRight=point2;
 * imageReviewEditViewOptions.Tetragon.BottomLeft=point3;
 * imageReviewEditViewOptions.Tetragon.BottomRight=point4;
 *
 * imageReviewEditViewOptions.Crop.lineColor = 'hexvalueof a color';
 * imageReviewEditViewOptions.Crop.cornerColor= 'hex value of a color';
 * imageReviewEditViewOptions.Crop.lineStyle= kfxCordova.LineStyle.SOLID;
 *
 * function successCallback(result){
 *    alert(JSON.stringify(result));
 * }
 * function errorCallback(error){
 *    alert(JSON.stringify(error));
 * }
 * imgReviewControl.setOptions(successCallback,errorCallback,imageReviewEditViewOptions)
 */
ImageReviewControl.prototype.setOptions = function (successCallback, errorCallback, imageReviewEditViewOptions) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.setImageReviewEditOptions,
		[imageReviewEditViewOptions]
	);
};

/// To get the Options/properties of the ImageReviewEditControl class .
/**
 * Method to get the properties of the native ImageReviewEditControl class.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  JSONObject representing ImageReviewControl Options. JSONObject structure can also be known from getImageReviewEditViewOptions() method.
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are KmcRuntimeException,JSONException & Exception.
 *
 * @see {@link ImageReviewControl#getImageReviewEditViewOptions getImageReviewEditViewOptions}
 *
 * @example
 * function successCallback(result){
 *    alert(JSON.stringify(result));
 * }
 * function errorCallback(error){
 *    alert(JSON.stringify(error));
 * }
 * var imgReviewControl =  kfxCordova.kfxUicontrols.createImageReviewControl();
 * imgReviewControl.getOptions(successCallback,errorCallback);
 */
ImageReviewControl.prototype.getOptions = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.getImageReviewEditOptions,
		[]
	);
};

/**
 * Method to Clear the image object out of review control
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @example
 * function successCallback(result){
 *    alert(JSON.stringify(result));
 * }
 * function errorCallback(error){
 *    alert(JSON.stringify(error));
 * }
 * var imgReviewControl =  kfxCordova.kfxUicontrols.createImageReviewControl();
 * imgReviewControl.clearImage(successCallback,errorCallback);
 */

ImageReviewControl.prototype.clearImage = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.clearImage,
		[]
	);
};

/**
 * Highlights all the rectangles in the array with the value set for highlightColor. setImage method needs to be called before calling this method.
 * Input parameter is an array of bounding rectangle objects which needs to be highlighted
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Array} parameters - Parameters contain array of BoundingRectangle objects which need to be highlighted.
 *
 * @see you can understand how to pass parameters by go through the below example
 *
 * @example
 * Parameters consists of array of bounding rectangles which need to be highlighted.
 * var parameters=[{
 *                 "left": 635,
 *                 "top": 418,
 *                 "height": 19,
 *                 "width": 786
 *                 },
 *                 {
 *                 "left": 304,
 *                 "top": 418,
 *                 "height": 19,
 *                 "width": 786
 *                 },
 *                 {
 *                 "left": 304,
 *                 "top": 213,
 *                 "height": 24,
 *                 "width": 786
 *                 }];
 * function successCallback(result){
 *    alert(JSON.stringify(result));
 * }
 * function errorCallback(error){
 *    alert(JSON.stringify(error));
 * }
 * var imgReviewControl =  kfxCordova.kfxUicontrols.createImageReviewControl();
 * imgReviewControl.showHighlights(successCallback,errorCallback,parameters);
 */
ImageReviewControl.prototype.showHighlights = function (successCallback, errorCallback, parameters) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.showHighlights,
		[parameters]
	);
};

/**
 * Clears all the areas highlighted by the method showHighlights.
 * This method would clear all the rectangles previously highlighted by the method showHighlights
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @example
 * function successCallback(result){
 *    alert(JSON.stringify(result));
 * }
 * function errorCallback(error){
 *    alert(JSON.stringify(error));
 * }
 * var imgReviewControl =  kfxCordova.kfxUicontrols.createImageReviewControl();
 * imgReviewControl.clearHighlights(successCallback,errorCallback);
 */

ImageReviewControl.prototype.clearHighlights = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.clearHighlights,
		[]
	);
};

/// A getter  method of properties of the 'ImageReviewEditControl' class
/**
 * Method returning the 'ImageReviewEditControl'  class properties that can be set by the user. Use this object as an input
 * parameter to set the properties of the ImageReviewEditControl class. The parameters are grouped, and has the below mentioned
 * default values.
 *
 * @example
 * var imgReviewControl =  kfxCordova.kfxUicontrols.createImageReviewControl();
 * var imageReviewOptions = imgReviewControl.getImageReviewEditViewOptions();
 * imageReviewOptions should be like below {
 *        Tetragon : {
 *            show : true,
 *            TopLeft :{
 *                x : 0,
 *                y : 0
 *            },
 *            TopRight :{
 *                x : 0,
 *                y : 0
 *            },
 *            BottomLeft : {
 *                x : 0,
 *                y : 0
 *            },
 *            BottomRight : {
 *                x : 0,
 *                y : 0
 *            }
 *        },
 *        Crop :{
 *            lineColor : "#AABBCCDD",
 *            cornerColor : "#AABBCCDD",
 *            lineStyle : "LINE_STYLE_SOLID",
 *        }
 *    };
 *
 */
ImageReviewControl.prototype.getImageReviewEditViewOptions = function () {
	var imageReviewEditViewOptions = {
		/// The crop tetragon specified during edit operations.
		/**  Developer can set the tetragon coordinates to initialize the control before displaying bounding tetragon (crop rectangle), or allow the control to set it to a default. The library returns this crop tetragon while edit is in progress. After the user closes the view,
         this object contains the users final corner points after editing is complete..
         */
		Tetragon: {
			/// Whether to show tetragon.
			/**  A boolean that indicates whether the level indicator is enabled.
			 */
			show: true,

			/// Represents the coordinates of the top left corner.
			/**  This CGPoint structure holds the the top left X and Y coordinates of the tetragon point in pixels. The X coordinate may be less than or greater than the bottomRight the X coordinate.
             Avoid fractions. The library converts to whole integers in use. Default: 0,0
             */
			TopLeft: {
				x: 0,
				y: 0,
			},

			/// Represents the coordinates of the top right corner.
			/**  This CGPoint structure holds the top right X and Y coordinates of the tetragon, and the X value must always be greater than top left X.
             Avoid fractions. The library converts to whole integers in use. Default: 0,0
             */
			TopRight: {
				x: 0,
				y: 0,
			},

			/// Represents the coordinates of the bottom left corner.
			/**  This CGPoint structure holds the bottom left X and Y coordinates of the tetragon, and the X value must always be less than the bottom right X.
             Avoid fractions. The library converts to whole integers in use. Default: 0,0
             */
			BottomLeft: {
				x: 0,
				y: 0,
			},

			/// Represents the coordinates of the bottom right corner.
			/**  This CGPoint structure holds the bottom right X and Y coordinates of the tetragon, and the X value must always be greater than the bottom left X.
             Avoid fractions. The library converts to whole integers in use. Default: 0,0
             */
			BottomRight: {
				x: 0,
				y: 0,
			},
		},
		Crop: {
			/// Color of lines in cropping rectangle/tetragon.
			lineColor: "#AABBCCDD",

			/// Color of corner handles (circles) in cropping rectangle/tetragon.
			cornerColor: "#AABBCCDD",

			/// Whether crop rectangle lines should be solid or dashed.
			lineStyle: "LINE_STYLE_SOLID",
		},
	};
	return imageReviewEditViewOptions;
};
//End of ImageReviewControl methods
module.exports = ImageReviewControl;
