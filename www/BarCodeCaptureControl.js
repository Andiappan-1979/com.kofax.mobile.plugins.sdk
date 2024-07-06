//
// BarCodeCaptureControl.js
//
//  Copyright (c) 2012 - 2021 Kofax. Use of this code is with permission pursuant to Kofax license terms.

var ActionUtils = require("./ActionUtils");

/// The Plugin object for the native BarCodeCapture Control
/**  This BarCodeview is responsible for handling the corresponding plugin js to interact with the native BarCodeCaptureControl
 * To set and get the properties, and to access the instance methods, corresponding JS methods are written under this class which
 * are used by the  end user in application script.
 *
 * @class
 * @alias BarcodeCaptureControl
 * @constructor
 */
var BarcodeCaptureControl = function () {};

/// To set the Options/properties of the BarCodeCaptureControl class .
/**
 * Method to set the properties of the native BarCodeCaptureControl class.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Object} properties -  a 'barcodeCaptureControlParams'  variable containing the properties  to be set to the BarCodeCaptureControl
 *
 * @param {Array} [properties.searchDirection]
 *       Searching multiple directions slows down the speed of barcode recognition. If you expect barcodes to only be oriented in certain directions, you should specify only those directions. By default, all directions will be searched,
 *         represented by the array ["HORIZONTAL", "VERTICAL"].Acceptable values are: "HORIZONTAL", "VERTICAL", and "ALL".
 *
 * @param {Array} [properties.symbologies]
 *       Searching for multiple symbologies slows down the speed of barcode recognition. You should only specify the symbologies that you are interested in reading. The set of selected symbologies is empty by default.
 *         Acceptable values are: "CODE39", "PDF417", "QR", "DATAMATRIX", "CODE128", "CODE25", "EAN", "UPC", "CODABAR", "AZTEC" and "CODE93".
 *
 * @param {String} [properties.guidingLine]
 *       The guiding line is a visual aid for aligning barcodes within the preview. A guiding line is rendered as a straight line splitting the preview into two equal parts. The intention is for the line to cross through all the bars of a barcode, like the laser of a linear scanner.
 *         The guiding line is turned off by default.
 *         Acceptable values are: "OFF", "LANDSCAPE", and "PORTRAIT".
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS success call back
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Wrong Parameters, KmcRuntimeException & Exception.
 * @see see {@link BarcodeCaptureControl#getBarcodeCaptureControlparameters getBarcodeCaptureControlparameters} for detailed description of parameters what we have to pass.
 *
 * @see Check the 'errorCallback' method for any failures in case of unexpected behaviour of the method. Generally the error call back
 * would return a JSON object with ErrorMsg & ErrorDesc' giving the description of the error.
 *
 * @example
 * var barCodeCaptureControl = kfxCordova.kfxUicontrols.createBarcodeCaptureControl();
 *
 * var  barcodeCaptureControlParams =  barCodeCaptureControl.getBarcodeCaptureControlparameters();
 * barcodeCaptureControlParams.searchDirection = ["VERTICAL"];
 * barcodeCaptureControlParams.symbologies = ["CODE39", "PDF147"];
 * barcodeCaptureControlParams.guidingLine = "LANDSCAPE";
 *
 * barCodeCaptureControl.setOptions(function(success){alert(JSON.stringify(success));},function(error){alert(JSON.stringify(error));},barcodeCaptureControlParams);
 */
BarcodeCaptureControl.prototype.setOptions = function (successCallback, errorCallback, parameters) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.setBarcodeOptions,
		[parameters]
	);
};

/// To get the Options/properties of the BarCodeCaptureControl class .
/**
 * Method to get the properties of the native BarCodeCaptureControl class.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  JSONObject representing BarcodeCaptureControl Options. JSONObject structure can also be known from getBarcodeCaptureControlparameters() method.
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are KmcRuntimeException,JSONException & Exception.
 *
 * @see {@link BarcodeCaptureControl#getBarcodeCaptureControlparameters getBarcodeCaptureControlparameters}
 *
 * @example
 *
 * function mySuccessCB(options){
 *       alert(JSON.stringify(options));
 *       // Optionally you can get the properties and map to the application UI to show the user
 * }
 *
 * var barCodeCaptureControl = kfxCordova.kfxUicontrols.createBarcodeCaptureControl();
 *
 * barCodeCaptureControl.getOptions(mySuccessCB, function(error){alert(JSON.stringify(error));});
 *
 */
BarcodeCaptureControl.prototype.getOptions = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.getBarcodeOptions,
		[]
	);
};

///  Reads a single barcode from the camera preview.
/**
 * This call returns immediately and starts asynchronously searching for a barcode with the current camera and barcode parameters. The search will continue indefinitely until a barcode is found, allowing time for the device to further stabilize and focus if necessary.
 *
 * Once a barcode is positively read, the event listener "addEventListener" will be invoked and the results are in the event listener success call back.
 * License Required: This is a licensed method. You cannot use this method until you have set a valid SDK license.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS    The bar code was successfully read.
 * errorCallback -    KMC_EV_LICENSING The bar code was not set successfully read, and returned the licensing error code..Possible error objects are KmcRuntimeException,JSONException & Exception.
 *
 *
 *
 * @example
 *
 * var barCodeCaptureControl = kfxCordova.kfxUicontrols.createBarcodeCaptureControl();
 * barCodeCaptureControl.readBarcode(function(success){alert(JSON.stringify(success));},function(error){alert(JSON.stringify(error));});
 */
BarcodeCaptureControl.prototype.readBarcode = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.readBarcode,
		[]
	);
};

/// Method to add the   BarCodeReader view to the screen method
/**
 * Method to add the BarCodeReader view to the screen. This method is responsible for adding the view on the visible screen
 * with the specified Layout values.
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Object} layoutObject - a 'Layout' object mentioning the Frame values for the BarCodeReader object. Refer to 'Layout' object for
 * containing values.
 *
 * @param {Number} [layoutObject.x]
 *       x position of the barcode capture control
 *
 * @param {Number} [layoutObject.y]
 *       y position of the barcode capture control
 *
 * @param {Number} [layoutObject.width]
 *       barcode capture control width
 *
 * @param {Number} [layoutObject.height]
 *       barcode capture control height
 *
 * @param {Boolean} [layoutObject.visibility]
 *       visibility of the barcode capture control
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS    success call back.
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Wrong Parameters, KmcRuntimeException & Exception.
 *
 * @example
 * var Layout = kfxCordova.getLayoutProperties();
 * Layout.x = 10;
 * Layout.y =10;
 * Layout.width= 300;
 * Layout.height = 400;
 * Layout.visibility = true; // By default visibility is 'true'
 *
 * var barCodeCaptureControl = kfxCordova.kfxUicontrols.createBarcodeCaptureControl();
 *
 * barCodeCaptureControl.addView(function(success){alert(JSON.stringify(success));},function(error){alert(JSON.stringify(error));}, Layout);
 *
 */
BarcodeCaptureControl.prototype.addView = function (successCallback, errorCallback, parameters) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.addBarcodeView,
		[parameters]
	);
};

/// Method to remove the   BarCodeReader view off the screen
/**
 * Method to remove  the BarCodeReader view off the screen. This method is responsible for removing and making it nil.
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS success call back
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are KmcRuntimeException,Exception.
 *
 * @example
 * var barCodeCaptureControl = kfxCordova.kfxUicontrols.createBarcodeCaptureControl();
 * barCodeCaptureControl.removeView(function(success){alert(JSON.stringify(success));},function(error){alert(JSON.stringify(error));});
 */
BarcodeCaptureControl.prototype.removeView = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.removeBarcodeView,
		[]
	);
};

/// Method to add the event listener to the 'readBarcode' method of the   BarCodeReader
/**
 * To get the result back from the 'readBarcode' method's delegate, this method would be added as listener
 * And the corresponding result from the delegate are returned in the  success call back.
 *
 * @param {Function} successCallback - Default Success Call back function name, called when the event is registered successfully
 * @param {Function} errorCallback - Default Error Call back function name
 * @param {Function} barcodeCallback - function variable to hold the return value once the event is triggered
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS success call back
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are KmcRuntimeException,Exception.
 * barcodeCallback - will have the barcode data read from the barcode.
 * @see The following is the format of the result.
 * JSON object:
 * {
 * boundingBox =     {
 * bottomLeft =         {
 * x = "279.0027";
 * y = "238.6505";
 * };
 * bottomRight =         {
 * x = "285.7726";
 * y = "813.2451";
 * };
 * topLeft =         {
 * x = "348.4976";
 * y = "232.2123";
 * };
 * topRight =         {
 * x = "355.2836";
 * y = "832.2803";
 * };
 * };
 * dataFormat = "BASE_64";
 * direction = "TOP_DOWN";
 * imageID = "A1315979-F12F-4A0B-B9C7-3B12086EAB7C";
 * type = PDF417;
 * value = "barcoderesultstring";
 * }
 *
 *
 * @example
 * var barCodeCaptureControl = kfxCordova.kfxUicontrols.createBarcodeCaptureControl();
 *
 * barCodeCaptureControl.addEventListener(function(success){alert(JSON.stringify(success));},function(error){alert(JSON.stringify(error));},function(jsonObject){alert(JSON.stringify(jsonObject));});
 */
BarcodeCaptureControl.prototype.addEventListener = function (successCallback, errorCallback, barcodeCallback) {
	ActionUtils.exec(
		function (result) {
			if (result.eventType === "eventRegistered") {
				if (successCallback) successCallback(result);
			} else if (result.eventType === "eventRaised") {
				if (barcodeCallback) barcodeCallback(result);
			}
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kbcAddEventListener,
		[]
	);
};

/// Method to remove the event listener to the 'readBarcode' method of the   BarCodeReader
/**
 * The method would remove the listener to the delegate call back of the readbarcode method. After removing the listener,
 * there will not be any call backs from native from the 'readbarcode' delegate methods though it is being called at native.
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error Call back function name
 *
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS success call back
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are KmcRuntimeException,Exception.
 *
 * @example
 *
 * // create your bar code object
 * var barCodeCaptureControl = kfxCordova.kfxUicontrols.createBarcodeCaptureControl();
 *
 * // read your bar code..
 *
 * //to remove the barcodereader listener
 *
 * barCodeCaptureControl.removeEventListener(function(success){alert(JSON.stringify(success));},function(error){alert(JSON.stringify(error));});
 */
BarcodeCaptureControl.prototype.removeEventListener = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kbcRemoveEventListener,
		[]
	);
};
/// A getter  method of properties of the 'BarCodeCaptureControl' class
/**
 * Method returning the BarCode properties that can be set by the user. Use this object as an input parameter to set the
 * properties of the BarCodeCaptureControl.
 *
 * @example
 *  var barCodeControl =  kfxCordova.kfxUicontrols.createBarcodeCaptureControl();
 *  var barcodeParameters = barCodeControl.getBarcodeCaptureControlparameters();
 */
BarcodeCaptureControl.prototype.getBarcodeCaptureControlparameters = function () {
	var barcodeCaptureControlparameters = {
		/// The set of directions currently being searched for barcodes
		/**  Searching multiple directions slows down the speed of barcode recognition. If you expect barcodes to only be oriented in certain directions, you should specify only those directions. By default, all directions will be searched,
         represented by the array ["HORIZONTAL", "VERTICAL"].
         Acceptable values are: "HORIZONTAL", "VERTICAL", and "ALL".
         */
		searchDirection: [],

		/// The set of symbologies currently being searched for.
		/**  Searching for multiple symbologies slows down the speed of barcode recognition. You should only specify the symbologies that you are interested in reading. The set of selected symbologies is empty by default.
         Acceptable values are: "CODE39", "PDF417", "QR", "DATAMATRIX", "CODE128", "CODE25", "EAN", "UPC", "CODABAR", "AZTEC" and "CODE93".
         */
		symbologies: [],

		/// A Guiding line to align the barcode(s)
		/**  The guiding line is a visual aid for aligning barcodes within the preview. A guiding line is rendered as a straight line splitting the preview into two equal parts. The intention is for the line to cross through all the bars of a barcode, like the laser of a linear scanner.
         The guiding line is turned off by default.
         Acceptable values are: "OFF", "LANDSCAPE", and "PORTRAIT".
         */
		guidingLine: "OFF",
	};
	return barcodeCaptureControlparameters;
};

/// Method to remove the event listener when  'BarCode Camera Initialisation Failed'
/**
 * This method would receive the events related to the bar code camera initialization
 *
 * @param {Function} successCallback - Default Success Call back function name when the event is registered
 * @param {Function} errorCallback - Default Error Call back function name
 * @param {Function} barCodeInitializationFailedhandler - a var to hold the bar code camera initialization failed event when it is actually raised
 *
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS    success call back.
 * errorCallback -    error message would contain the appropriate error description.
 *
 * @example
 * var barCodeControl =  kfxCordova.kfxUicontrols.createBarcodeCaptureControl();
 * function barCodeInitializationFailedhandler(){
 *   alert('barCodeCameraInitializationFailed');
 * }
 * barCodeControl.addBarCodeInitializationFailedListener(function(success){alert(JSON.stringify(success));},function(error){alert(JSON.stringify(error));},barCodeInitializationFailedhandler);
 */

BarcodeCaptureControl.prototype.addBarCodeInitializationFailedListener = function (
	successCallback,
	errorCallback,
	barCodeInitializationFailedhandler
) {
	ActionUtils.exec(
		function (result) {
			if (result.eventType === "eventRegistered") {
				if (successCallback) successCallback(result);
			} else if (result.eventType === "eventRaised") {
				if (barCodeInitializationFailedhandler) barCodeInitializationFailedhandler(result);
			}
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kbcAddInitializationFailedListener,
		[]
	);
};

/// Method to remove the event listener when  'BarCode Camera Initialisation Failed'
/**
 * The method would remove the listener and would not receive any bar code camera initialization failed events
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error Call back function name
 *
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS success call back
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are KmcRuntimeException,Exception.
 *
 * @example
 * var barCodeControl =  kfxCordova.kfxUicontrols.createBarcodeCaptureControl();
 * barCodeControl.removeBarCodeInitializationFailedListener(function(success){alert(JSON.stringify(success));},function(error){alert(JSON.stringify(error));});
 */

BarcodeCaptureControl.prototype.removeBarCodeInitializationFailedListener = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kbcRemoveInitializationFailedListener,
		[]
	);
};
//End of BarcodeCaptureControl methods

module.exports = BarcodeCaptureControl;
