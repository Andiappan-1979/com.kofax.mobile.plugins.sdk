//
// Logging.js
//
//  Copyright (c) 2012 - 2021 Kofax. Use of this code is with permission pursuant to Kofax license terms.

var ActionUtils = require("./ActionUtils");

//Logging constructor and corresponding methods
/**
 * @class
 * @alias Logging
 * @constructor
 */
var Logging = function () {};

/// Enables SDK logging to console
/**
 * Calling this method will start SDK logging to a console.
 * Logging is disabled by default.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS    if logging started successfully.
 * errorCallback -    error message would contain the error description. Possible error objects are KmcRuntimeException,Exception.
 *
 * @example
 * var Logging = kfxCordova.kfxUtilities.createLogging();
 * Logging.enableMobileSDKLogging(function(enableLoggingSuccess){
 *       alert(JSON.stringify(enableLoggingSuccess));
 * },function(enableLoggingError){
 *       alert(JSON.stringify(enableLoggingError));
 * });
 */

Logging.prototype.enableMobileSDKLogging = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kutEnableLogging,
		[]
	);
};

/// Disables SDK logging to console
/**
 * Calling this method will stop SDK logging to a console.
 * Logging is disabled by default.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS    if logging started successfully.
 * errorCallback -    error message would contain the error description. Possible error objects are KmcRuntimeException,Exception.
 *
 * @code
 * var Logging = kfxCordova.kfxUtilities.createLogging();
 * Logging.disableMobileSDKLogging(function(disableLoggingSuccess){
 *       alert(JSON.stringify(disableLoggingSuccess));
 * },function(disableLoggingError){
 *       alert(JSON.stringify(disableLoggingError));
 * });
 */

Logging.prototype.disableMobileSDKLogging = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kutDisableLogging,
		[]
	);
};

//End of Logging Methods

module.exports = Logging;
