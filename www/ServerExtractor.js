//
// ServerExtractor.js
//
//  Copyright (c) 2012 - 2021 Kofax. Use of this code is with permission pursuant to Kofax license terms.
var ActionUtils = require("./ActionUtils");

/// A variable/Object to access the native SDK methods of ServerExtractor class(es)
/**  An instance of this class contains methods to extract the images and gets the results.
 *
 *
 * @class
 * @alias ServerExtractor
 * @constructor
 *
 */
//ServerExtractor constructor and corresponding methods
var ServerExtractor = function () {};

///To login to the KTA Server.
/**
 * This method login to KTA server using given credentials and returns session id in success callback.Login is mandatory for KTA servers.
 * This session ID is included in extraction parameters for further extraction process.Login is not supported for RTTI server.
 *
 * @param {Function} successCallback -  CallBack consists of the session id for the given credentials.
 * @param {Function} errorCallback - Default Error call back function name.
 * @param {Object} parameters - parameters which are used to login.
 * @param {String} [parameters.username] -  User name.
 * @param {String} [parameters.password] -  User Password.
 *
 * @return
 *  successCallback -  It will returns the session id.
 *  errorCallback -    error message would contain the appropriate error description.Possible error objects are KmcRuntimeException,Exception.
 * @example
 *   var parameters = {username:"Enter user name",password:"Enter password"};
 *   var constructorOptions = {serverType:"SERVER_KTA",serverUrl:"Enter server url"};
 *   var extractor = null;
 *   kfxCordova.kfxLibLogistics.createServerExtractor(function(serverExtractor){
 *       extractor = serverExtractor;
 *
 *       extractor.login(function(result){
 *           alert(JSON.stringify(result));
 *       },function(error){
 *           alert(JSON.stringify(error));
 *       }, parameters);
 *
 *   },function(error){
 *       alert(JSON.stringify(error));
 *   },constructorOptions);
 *
 */

ServerExtractor.prototype.login = function (successCallback, errorCallback, parameters) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kloServerExtractorLogin,
		[parameters]
	);
};

/// To Extract images using servers(RTTI/KTA).
/**
 * This method invokes extraction process.Before extraction, login() method needs to be called for KTA servers.
 * ExtractData method would be expect valid documents (images) like MobileID , Checks and Bills. Documents can be sent in parameters as imageID array.
 * Extract API internally uses Image Process for some operations like reading from file or writing an image to file buffer.
 * During this time, the expectation is that ImageProcessor instance be not busy. If it is busy it throws back an error.
 *
 * @param {Function} successCallback -  Callback consists of extraction results or cancel error with empty results.The extraction results needs to be parse in application.
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Object} parameters - parameters which are used to extract the fields.
 * Parameters object contain appropriate x-parameters of the SMC projects i.e. MobileID and BillPay.
 * Documentation will explicitly indicate developers to refer to the SMC documentation.
 * Below are the mandatory parameters for serverExtractor.
 * @param {Array} [parameters.imageIDs] - The extraction can be done with given imageIDs.
 * @param {Object} [parameters.params] -  This parameters are depends on the server/requirement.For example below are the Parameters for KTA:
 * @param {String} [parameters.params.processIdentityName] - KTA Process name(eg:Check,Bill,etc).
 * @param {String} [parameters.params.sessionId]  - Get session Id from login successCallback and use it for extraction request.
 * @param {Boolean} [parameters.params.storeFolderAndDocuments = false]  - Store folder and documents after extraction complete. The default value is false.
 *
 * @return
 *    successCallback : The return value is captured in the 'successCallback' function. This Callback consists of extraction results or cancel error with empty results.
 *                      The extracted results are returned as a JSON string, so it needs to be parsed in Application.
 *    errorCallback : Several Server error codes are returned for this method when the extraction request could be started.
 *
 * @see
 *    Use - {@link ServerExtractor#cancelExtraction cancelExtraction} to cancel an extraction operation if necessary.
 *
 * @example
 *   var constructorOptions = {serverType:"SERVER_KTA",serverUrl:"Enter server url"};
 *   var parameters = {
 *       imageIDs:[],
 *       params:{
 *           processIdentityName:"",
 *           sessionId:"",
 *           storeFolderAndDocuments:false
 *       }
 *   };
 *   var extractor = null;
 *   kfxCordova.kfxLibLogistics.createServerExtractor(function(serverExtractor){
 *       extractor = serverExtractor;
 *
 *       extractor.extractData(function(result){
 *           var data =  JSON.parse(result);
 *           alert(JSON.stringify(data));
 *       },function(error){
 *           alert(JSON.stringify(error));
 *       }, parameters);
 *
 *   },function(error){
 *       alert(JSON.stringify(error));
 *   },constructorOptions);
 */
ServerExtractor.prototype.extractData = function (successCallback, errorCallback, parameters) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kloServerExtractorExtractData,
		[parameters]
	);
};

///To cancel the extraction process.
/**
 * It will cancel the extraction process. If cancellation was not possible, the extractData successCallback is called with results and/or Exception.
 *  If cancellation was successful, the extractData successCallback listener is called with null results.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return
 *  successCallback -  KMC_SUCCESS success call back
 *  errorCallback -    error message would contain the appropriate error description.Possible error objects are KmcRuntimeException,Exception.
 *
 * @example
 *   var constructorOptions = {serverType:"SERVER_KTA",serverUrl:"Enter server url"};
 *   var parameters = {
 *       imageIDs:[],
 *       params:{
 *           processIdentityName:"",
 *           sessionId:"",
 *           storeFolderAndDocuments:false
 *       }
 *   };
 *   var extractor = null;
 *   kfxCordova.kfxLibLogistics.createServerExtractor(function(serverExtractor){
 *       extractor = serverExtractor;
 *
 *       extractor.extractData(function(result){
 *           alert(JSON.stringify(result));
 *       },function(error){
 *           alert(JSON.stringify(error));
 *       }, parameters);
 *
 *       extractor.cancelExtraction(function(success){
 *           alert(JSON.stringify(success));
 *       },function(error){
 *           alert(JSON.stringify(error));
 *       });
 *
 *   },function(error){
 *       alert(JSON.stringify(error));
 *   },constructorOptions);
 */

ServerExtractor.prototype.cancelExtraction = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kloServerExtractorCancelExtraction,
		[]
	);
};

///Set the properties of the server extractor.
/**
 * Method to set the options of the server Extractor.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Object} options - A JSON object contains the options of the server extractor.
 *
 * @param {Number} [options.serverTimeout = 20]
 *     timeout for the server extractor
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions.
 *  successCallback -  The library returns KMC_SUCCESS.
 *  errorCallback   -  Error message would contain the appropriate error description. Possible error is KmcException,JSONException.
 *
 * @example
 *   var options={
 *     serverTimeout:20
 *   };
 *   var constructorOptions = {serverType:"SERVER_KTA",serverUrl:"Enter server url"};
 *   var extractor = null;
 *   kfxCordova.kfxLibLogistics.createServerExtractor(function(serverExtractor){
 *       extractor = serverExtractor;
 *
 *       extractor.setOptions(function(result){
 *           alert(JSON.stringify(result));
 *       },function(error){
 *           alert(JSON.stringify(error));
 *       }, options);
 *
 *   },function(error){
 *       alert(JSON.stringify(error));
 *   },constructorOptions);
 */
ServerExtractor.prototype.setOptions = function (successCallback, errorCallback, options) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kloServerExtractorSetOptions,
		[options]
	);
};

///Get the properties of the server extractor.
/**
 * Method to get the options of the server extractor.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions.
 *  successCallback -  The library returns the serverOptions.
 *  errorCallback   -  Error message would contain the appropriate error description. Possible error is KmcException,JSONException.
 *
 * @example
 *   var constructorOptions = {serverType:"SERVER_KTA",serverUrl:"Enter server url"};
 *   var extractor = null;
 *   kfxCordova.kfxLibLogistics.createServerExtractor(function(serverExtractor){
 *       extractor = serverExtractor;
 *
 *       extractor.getOptions(function(result){
 *           alert(JSON.stringify(result));
 *       },function(error){
 *           alert(JSON.stringify(error));
 *       });
 *
 *   },function(error){
 *       alert(JSON.stringify(error));
 *   },constructorOptions);
 */

ServerExtractor.prototype.getOptions = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kloServerExtractorGetOptions,
		[]
	);
};

/// Method to clear server extractor memory
/**
 * The method would clear server extractor memory
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error Call back function name
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  This library returns KMC_SUCCESS if server extractor memory cleared
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are KmcRuntimeException,Exception.
 *
 * @example
 *   var constructorOptions = {serverType:"SERVER_KTA",serverUrl:"Enter server url"};
 *   var extractor = null;
 *   kfxCordova.kfxLibLogistics.createServerExtractor(function(serverExtractor){
 *       extractor = serverExtractor;
 *
 *       extractor.clean(function(result){
 *           alert(JSON.stringify(result));
 *       },function(error){
 *           alert(JSON.stringify(error));
 *       });
 *
 *   },function(error){
 *       alert(JSON.stringify(error));
 *   },constructorOptions);
 */
ServerExtractor.prototype.clean = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kloServerExtractorClean,
		[]
	);
};

//End of ServerExtractor methods
module.exports = ServerExtractor;
