//
// License.js
//
//  Copyright (c) 2012 - 2021 Kofax. Use of this code is with permission pursuant to Kofax license terms.

var ActionUtils = require("./ActionUtils");

//License constructor and corresponding methods
/**
 * @class
 * @alias License
 * @constructor
 */
var License = function () {};

//Get the License supported ServerTypes.
/**
 * Get the License supported ServerTypes
 *
 *  
 * @example
 *  var LicObj = kfxCordova.kfxUtilities.createLicense();
 *  var serverTypes = LicObj.getServerTypes();
 *  serverTypes should be like below {
 *       RTTI            :  "RTTI",
 *       TOTALAGILITY    :  "TotalAgility"
 *   };
 */
License.prototype.getServerTypes = function () {
	var serverTypes = {
		RTTI: "RTTI",
		TOTALAGILITY: "TotalAgility",
	};
	return serverTypes;
};

//Get the License supported LicenseType.
/**
 * Get the License supported LicenseTypes
 *
 * @example
 * var LicObj = kfxCordova.kfxUtilities.createLicense();
 * var licenseTypes = LicObj.getLicenseTypes();
 * licenseTypes should be like below {
 *           IMAGE_CAPTURE       :  "IMAGE_CAPTURE",
 *           IMAGE_PROCESSING    :  "IMAGE_PROCESSING",
 *           BARCODE_CAPTURE     :   "BARCODE_CAPTURE",
 *           LOGISTICS           :  "LOGISTICS",
 *           ID_EXTRACTION       :  "ID_EXTRACTION"
 *   };
 */
License.prototype.getLicenseTypes = function () {
	var licenseTypes = {
		IMAGE_CAPTURE: "IMAGE_CAPTURE",
		IMAGE_PROCESSING: "IMAGE_PROCESSING",
		BARCODE_CAPTURE: "BARCODE_CAPTURE",
		LOGISTICS: "LOGISTICS",
		ID_EXTRACTION: "ID_EXTRACTION",
	};
	return licenseTypes;
};

/// To set the License of the native SDK.
/**
 * Method to set the License of the native SDK.
 *
 * The input to this method is the VRS license string. If the license string is valid and days remain in the license, this method returns KMC_SUCCESS .
 * If the license string is valid but no days remain in the license, this method returns KMC_IP_LICENSE_EXPIRED. If the license string is not valid, this method returns KMC_IP_LICENSE_INVALID.
 * Any failure to set the license would automatically set the daysRemaining to zero.The license can only be set once.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {String} licenseString - is the valid license string that was contained in a distributed header file that you received from Kofax.
 *
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS    The license string was set successfully .
 * errorCallback -    KMC_IP_LICENSE_INVALID if the license string used is nil.
 * KMC_IP_LICENSE_ALREADY_SET if you have already set the license.
 * EVRS_IP_LICENSING_FAILURE if the license string is invalid for setting a license.
 * EVRS_IP_LICENSE_EXPIRATION_ERROR if the time limit of your license has expired.
 *
 * Example code follows showing how to set your license.
 *
 * @example
 * var licenseString = 'pasteyourlicensestringhere!';
 *
 * function successCallback(result){
 *       alert(JSON.stringify(result));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 *
 * var LicObj = kfxCordova.kfxUtilities.createLicense();
 * LicObj.setMobileSDKLicense(successCallback,errorCallback,licenseString);
 */
License.prototype.setMobileSDKLicense = function (successCallback, errorCallback, licenseString) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.setSDKLicense,
		[licenseString]
	);
};

/// To get  the number of days the License of the SDK is valid
/**
 * Method to get the remaining  days that the SDK license would be valid to use.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 *
 * @return The return value is captured in the 'successCallback' function and will be having the number of days remaining in the current license for a valid license.
 *
 * @see Check the 'errorCallback' method for any failures in case of unexpected behaviour of the method. Generally the error call back
 * would return a JSON object with ErrorMsg & ErrorDesc' giving the description of the error.
 *
 * @example
 * function successCallback(result){
 *    alert(JSON.stringify(result));
 * }
 * function errorCallback(error){
 *    alert(JSON.stringify(error));
 * }
 *
 * var LicObj = kfxCordova.kfxUtilities.createLicense();
 * var licenseString = 'pasteyourlicensestringhere!';
 * LicObj.setMobileSDKLicense(successCallback,errorCallback,licenseString);
 * LicObj.getDaysRemaining(successCallback,errorCallback);
 */
License.prototype.getDaysRemaining = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.getDaysRemaining,
		[]
	);
};

/// To get access to version information for the Kofax Mobile SDK
/**
 * Method to get version string for the Kofax Mobile SDK as a whole.
 * It also provides access to the version information of the Utility package and the Kofax Image Processor and Classifier libraries
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return JSON object representing version string is returned in the 'successCallback' function.
 *
 * @see Check the 'errorCallback' method for any failures in case of unexpected behaviour of the method. Generally the error call back
 * would return a JSON object with ErrorMsg & ErrorDesc' giving the description of the error.
 *
 * @example
 * function successCallback(result){
 *       alert(JSON.stringify(result));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var LicObj = kfxCordova.kfxUtilities.createLicense();
 * var licenseString = 'pasteyourlicensestringhere!';
 * LicObj.setMobileSDKLicense(successCallback,errorCallback,licenseString);
 * LicObj.getSDKVersions(successCallback,errorCallback);
 */
License.prototype.getSDKVersions = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.getSDKVersions,
		[]
	);
};

// ===================================================
//! Set up the SDK license server
/**
 *
 * The function is used to setup the url string of license server used for on device operation licensing. Application must call this function before any on device operation that requires license
 *
 *  
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Object} licenseParameters - should be a valid url string of the on device operation licensing server and the server type.
 *
 * @param {String} [licenseParameters.serverUrl] a valid url string of the on device operation licensing server
 *
 * @param {String} [licenseParameters.serverType] type of the server
 *
 * @example
 *  var LicObj = kfxCordova.kfxUtilities.createLicense();
 *
 *  var serverType = LicObj.getServerTypes();
 *   var licenseParameters={
 *       serverUrl  : 'http://mobile-rtti/mobilesdk',
 *       serverType : serverType.RTTI
 *   }
 *
 * function successCallback(result){
 *   alert(JSON.stringify(result));
 * }
 * function errorCallback(error){
 *   alert(JSON.stringify(error));
 * }
 *
 * LicObj.setMobileSDKLicenseServer(successCallback,errorCallback,licenseParameters);
 */
License.prototype.setMobileSDKLicenseServer = function (successCallback, errorCallback, licenseParameters) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.setMobileSDKLicenseServer,
		[licenseParameters]
	);
};

// ===================================================
//! Get remaining license count
/**
 * The function will return available license count for the offline operation, application should
 *
 * @param {Function} successCallback Default Success call back function name
 * @param {Function} errorCallback Default Error call back function name
 * @param {String} licenseType - for which the remaining license count is needed.
 *
 *  
 *
 * @example
 * var LicObj = kfxCordova.kfxUtilities.createLicense();
 * var licenseType = LicObj.getLicenseTypes();
 * var licenseString = 'pasteyourlicensestringhere!';
 * function successCallback(result){
 *   alert(JSON.stringify(result));
 * }
 * function errorCallback(error){
 *   alert(JSON.stringify(error));
 * }
 * LicObj.setMobileSDKLicenseServer(successCallback,errorCallback,licenseString);
 * LicObj.getRemainingVolumeCount(successCallback,errorCallback,licenseType.ID_EXTRACTION);
 */
License.prototype.getRemainingVolumeCount = function (successCallback, errorCallback, licenseType) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.getRemainingVolumeCount,
		[licenseType]
	);
};

// ===================================================
//! Update the custom acquire license volume count
/**
 *
 * The function will update the custom acquire license volume count. Before calling this function user has to make a web service call by using request body which is coming in addCustomAcquireVolumeLicenseListener{@link License#addCustomAcquireVolumeLicenseListener addCustomAcquireVolumeLicenseListener}.
 * User has to pass the response which is coming from web service call to this function.
 * User will get the notification to addAcquireVolumeLicenseListener{@link License#addAcquireVolumeLicenseListener addAcquireVolumeLicenseListener} weather count has been updated successfully or anything goes wrong.
 *
 *  
 * @param {Function} successCallback Default Success call back function name
 * @param {Function} errorCallback Default Error call back function name
 * @param {Object} responseFromServer - Response which is coming from server.
 * @param {String} [responseFromServer.result] Which is coming from server if everything goes well
 * @param {Number} [responseFromServer.statusCode] Status code from the server
 * @param {String} [responseFromServer.error] Which is coming from server if anything goes wrong
 *
 * @example
 * var LicObj = kfxCordova.kfxUtilities.createLicense();
 * function successCallback(result){
 *   alert(JSON.stringify(result));
 * }
 * function errorCallback(error){
 *   alert(JSON.stringify(error));
 * }
 * var responseFromServer = {
 *      result: "Which is coming from server if everything goes well",
 *      statusCode: 200,//"Which is coming from server",
 *      error: "Which is coming from server if anything goes wrong"
 * };
 * LicObj.updateCustomAcquireLicenseVolumeCount(successCallback,errorCallback,responseFromServer);
 */
License.prototype.updateCustomAcquireLicenseVolumeCount = function (
	successCallback,
	errorCallback,
	responseFromServer
) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.updateCustomAcquireLicenseVolumeCount,
		[responseFromServer]
	);
};

/// Method to add the event listener to the 'AcquireVolumeLicense' changed delegate method of the License
/**
 *
 * This method would receive the volume of license allowed for offline operation and are captured in success call back.
 *
 *  
 * @param {Function} successCallback Default Success Call back function name
 * @param {Function} errorCallback - Default Error Call back function name
 * @param {Function} acquireVolumeListenerCallBack - a var to hold the licAcquired value returned from License
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS    success call back.
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Wrong Parameters, KmcRuntimeException & Exception.
 * acquireVolumeListenerCallBack - will have the JSON object giving the volume of license allowed when the call is returned with no error.
 *
 * @see Check the 'errorCallback' method for any failures in case of unexpected behaviour of the method. By Default,  the error call back
 * would return a JSON object with ErrorMsg & ErrorDesc' giving the description of the error.
 *
 * @example
 * var LicObj = kfxCordova.kfxUtilities.createLicense();
 * function acquireVolumeListenerCallBack(licAcquired){
 *    alert(licAcquired);
 * }
 * function successCallback(result){
 *   alert(JSON.stringify(result));
 * }
 * function errorCallback(error){
 *   alert(JSON.stringify(error));
 * }
 * LicObj.addAcquireVolumeLicenseListener(successCallback,errorCallback,acquireVolumeListenerCallBack);
 */
License.prototype.addAcquireVolumeLicenseListener = function (
	successCallback,
	errorCallback,
	acquireVolumeListenerCallBack
) {
	ActionUtils.exec(
		function (result) {
			if (result.eventType === "eventRegistered") {
				if (successCallback) successCallback(result);
			} else if (result.eventType === "eventRaised") {
				acquireVolumeListenerCallBack(result);
			}
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.addAcquireVolumeLicenseListener,
		[]
	);
};

/// Method to remove the event listener to the 'acquireVolumeLicenses' method of the   License
/**
 *
 * The method would remove the listener to the delegate call back of the acquireVolumeLicenses method. After removing the listener,
 * there will not be any call backs from native from the 'acquireVolumeLicenses' delegate methods even when  it is being called in native.
 *
 *  
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error Call back function name
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS success call back
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are KmcRuntimeException,Exception.
 *
 * @example
 * function successCallback(result){
 *   alert(JSON.stringify(result));
 * }
 * function errorCallback(error){
 *   alert(JSON.stringify(error));
 * }
 * var LicObj = kfxCordova.kfxUtilities.createLicense();
 * LicObj.removeAcquireVolumeLicenseListener(successCallback,errorCallback);
 */
License.prototype.removeAcquireVolumeLicenseListener = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.removeAcquireVolumeLicenseListener,
		[]
	);
};

/// Method to add the event listener to the 'CustomAcquireVolumeLicense' delegate method of the License
/**
 *
 * This method would receive the request body. User has to make a web service call by using the request body and call updateCustomAcquireLicenseVolumeCount{@link License#updateCustomAcquireLicenseVolumeCount updateCustomAcquireLicenseVolumeCount} API for sending the response (which is coming from server) back.
 * For adding your own custom server to fetch licenses, you have to call setMobileSDKLicenseServer{@link License#setMobileSDKLicenseServer setMobileSDKLicenseServer} API. After setting the custom server you must add this listener.
 *
 *  
 * @param {Function} successCallback Default Success Call back function name
 * @param {Function} errorCallback - Default Error Call back function name
 * @param {Function} customAcquireVolumeListenerCallBack - Request body would receive in this call back.
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS    success call back.
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Wrong Parameters, KmcRuntimeException & Exception.
 * customAcquireVolumeListenerCallBack - will have the request body JSON object. User has to make a web service call by using this request body and call updateCustomAcquireLicenseVolumeCount{@link License#updateCustomAcquireLicenseVolumeCount updateCustomAcquireLicenseVolumeCount} API for sending the response back.
 *
 * @see Check the 'errorCallback' method for any failures in case of unexpected behaviour of the method. By Default,  the error call back
 * would return a JSON object with ErrorMsg & ErrorDesc' giving the description of the error.
 *
 * @example
 * var LicObj = kfxCordova.kfxUtilities.createLicense();
 * function customAcquireVolumeListenerCallBack(requstBody){
 *    alert(requestBody);
 *    //Make a web serivce call here and after getting the response from the server, send the response back by using updateCustomAcquireLicenseVolumeCount API.
 * }
 * function successCallback(result){
 *   alert(JSON.stringify(result));
 * }
 * function errorCallback(error){
 *   alert(JSON.stringify(error));
 * }
 * LicObj.addCustomAcquireVolumeLicenseListener(successCallback,errorCallback,customAcquireVolumeListenerCallBack);
 */
License.prototype.addCustomAcquireVolumeLicenseListener = function (
	successCallback,
	errorCallback,
	customAcquireVolumeListenerCallBack
) {
	ActionUtils.exec(
		function (result) {
			if (result.eventType === "eventRegistered") {
				if (successCallback) successCallback(result);
			} else if (result.eventType === "eventRaised") {
				customAcquireVolumeListenerCallBack(result.requestBody);
			}
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.addCustomAcquireVolumeLicenseListener,
		[]
	);
};

/// Method to remove the event listener to the 'customAcquireVolumeLicense' delegate method of the License.
/**
 *
 * The method would remove the listener to the delegate call back of the customAcquireVolumeLicenses method. After removing the listener,
 * there will not be any call backs from native from the 'customAcquireVolumeLicenses' delegate methods even when  it is being called in native.
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error Call back function name
 *
 *  
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS success call back
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are KmcRuntimeException,Exception.
 *
 * @example
 * function successCallback(result){
 *   alert(JSON.stringify(result));
 * }
 * function errorCallback(error){
 *   alert(JSON.stringify(error));
 * }
 * var LicObj = kfxCordova.kfxUtilities.createLicense();
 * LicObj.removeCustomAcquireVolumeLicenseListener(successCallback,errorCallback);
 */
License.prototype.removeCustomAcquireVolumeLicenseListener = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.removeCustomAcquireVolumeLicenseListener,
		[]
	);
};

// ===================================================
//! Preallocate volume licenses for offline operation
/**
 *
 * The function is used to preallocate volume licenses for offline operation
 *
 *  
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Object} parameters - JSON object which contains license type, Number of volume license requested
 *
 * @param {String} [parameters.licenseFeatureType] license type
 *
 * @param {Number} [parameters.licenseVolume] Number of licenses required
 *
 * @example
 * var licenseType = LicObj.getLicenseTypes();
 * function successCallback(result){
 *   alert(JSON.stringify(result));
 * }
 * function errorCallback(error){
 *   alert(JSON.stringify(error));
 * }
 * var parameters = {
 *   licenseFeatureType: licenseType.ID_EXTRACTION,
 *   licenseVolume: 20
 * };
 *
 * var LicObj = kfxCordova.kfxUtilities.createLicense();
 * LicObj.setMobileSDKLicenseServer(successCallback,errorCallback,LicenseStr);
 * LicObj.acquireVolumeLicenses(successCallback,errorCallback,parameters);
 */

License.prototype.acquireVolumeLicenses = function (successCallback, errorCallback, parameters) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.acquireVolumeLicenses,
		[parameters]
	);
};
//End of License Methods
module.exports = License;
