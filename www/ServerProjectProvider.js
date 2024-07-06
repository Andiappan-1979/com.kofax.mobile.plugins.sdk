//
// ServerProjectProvider.js
//
//  Copyright (c) 2012 - 2021 Kofax. Use of this code is with permission pursuant to Kofax license terms.
var ActionUtils = require("./ActionUtils");

/// The Plugin object to access the native SDK methods of ServerProjectProvider class

/**
 * This ServerProjectProvider class is responsible for handling the corresponding plugin js to interact with the native
 * ServerProjectProvider class.corresponding JS methods are written under this class which are used by the end user in application script.
 * This ServerProjectProvider downloads assets from the given server url. Project and variant data are first looked in the cache.
 * If the specified version is found, the cached data will be returned without reaching the server.
 *
 * If download assets needs to be stored in the customised path,You should call useCacheProvider() method.
 *
 * @class
 * @alias ServerProjectProvider
 * @constructor
 *
 */
//ServerProjectProvider constructor and corresponding methods
var ServerProjectProvider = function () {};

///Use bundleCacheProvider to creates the serverProjectProvider.
/**
 * Use this method to creates serverProjectProvider object using bundleCacheProvider,
 * before calling this method you must create bundleCacheProvider object otherwise it will returns error callback.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  It will returns success call back.
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are KmcRuntimeException,Exception and if bundleCacheProvider has not been created before calling this method then will gets callback error.
 *
 * @example
 *
 *  var mBundleCacheProvider;
 *  var serverUrl = "";  //Initializes the serverProjectProvider object with server URL.
 * kfxCordova.kfxEngine.createBundleCacheProvider(function(provider){
 *                  mBundleCacheProvider = provider;
 *                 kfxCordova.kfxEngine.createServerProjectProvider(function(provider){
 *                             provider.useCacheProvider(function(result){
 *                             },function(error){
 *                                 alert("useCacheProvider error:: "+JSON.stringify(error));
 *                             });
 *                 },function(error){
 *                         alert("createServerProjectProvider error::"+JSON.stringify(error));
 *                 },serverUrl);
 *            },function(error){
 *                          alert("createBundleCacheProvider error::"+JSON.stringify(error));
 *            });
 *
 *
 *
 */

ServerProjectProvider.prototype.useCacheProvider = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kenServerProjectProviderUseCacheProvider,
		[]
	);
};

///Set request timeout
/**
 * Allows to customize request timeout for HTTP server requests.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Object}   timeoutOptions -  A JSON object contains the options to set the timeout to the server request.
 *
 * @param {int} [highestVersionOptions.duration]
 *     duration which is used to set the timeout for server requests.The default timeout value is 10 secs.
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  It will returns success call back.
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Wrong Parameters, KmcRuntimeException & Exception.
 *
 * @example
 *  var timeoutOptions={
 *     duration:10
 * };
 *
 *
 * var serverUrl = "";  //Initializes the serverProjectProvider object with server URL.
 *                 kfxCordova.kfxEngine.createServerProjectProvider(function(provider){
 *                             provider.setRequestTimeout(function(result){
 *                             },function(error){
 *                                 alert("setRequestTimeout error:: "+JSON.stringify(error));
 *                             },timeoutOptions);
 *                 },function(error){
 *                         alert("createServerProjectProvider error::"+JSON.stringify(error));
 *                 },serverUrl);
 *
 */

ServerProjectProvider.prototype.setRequestTimeout = function (successCallback, errorCallback, parameters) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kenServerProjectProviderSetRequestTimeOut,
		[parameters]
	);
};

///Get highest version of project
/**
 *To get the highest version for the given project in server.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Function} completeListener - CallBack consists of highest server project version available for a given projectName.
 * @param {Object}   highestVersionOptions -  A JSON object contains the options to get the highest server version for the given project.
 *
 * @param {String} [highestVersionOptions.projectName]
 *      Name of the project.
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  It will returns success call back.
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Wrong Parameters, KmcRuntimeException & Exception.
 * completeListener - It will returns highest server project version for a given projectName.
 * @example
 *  var OnDeviceExtraction = kfxCordova.kfxEngine.createOnDeviceExtraction();
 *
 * var serverUrl = "";  //Initializes the serverProjectProvider object with server URL.
 *   var region = OnDeviceExtraction.getRegions();
 *   var idType = OnDeviceExtraction.getIDTypes();
 *   var parameters = {
 *            region: region.US,    //region.ASIA,region.CANADA,etc.
 *            IDType: idType.ID
 *   };
 *   OnDeviceExtraction.getProjectName(function(projectName){
 *                 kfxCordova.kfxEngine.createServerProjectProvider(function(provider){
 *                             provider.getHighestVersion(function(result){
 *                             },function(error){
 *                                 alert("getHighestVersion error:: "+JSON.stringify(error));
 *                             },getHighestVersionCallback,{projectName:projectName});
 *                 },function(error){
 *                         alert("createServerProjectProvider error::"+JSON.stringify(error));
 *                 },serverUrl);
 *                                     },function(error){
 *                                       alert(JSON.stringify(error));
 *                                     }, parameters);
 *
 * getHighestVersionCallback = function(result){
 *                alert("get Highest Version:: "+result.version);
 * };
 */

ServerProjectProvider.prototype.getHighestVersion = function (
	successCallback,
	errorCallback,
	completeListener,
	parameters
) {
	ActionUtils.exec(
		function (result) {
			if (result.eventType === "eventRegistered") {
				if (successCallback) successCallback(result);
			} else if (result.eventType === "eventRaised") {
				if (completeListener) completeListener(result);
			}
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kenServerProjectProviderGetHighestVersion,
		[parameters]
	);
};

///To get project path
/**
 * To get path to the project data for the given project and version.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Function} completeListener - The callBack consists of path to specified project files.
 * @param {Object} getProjectOptions -  A JSON object contains the options of the ServerProjectProvider.
 *
 * @param {String} [getProjectOptions.projectName]
 *      Name of the project.
 *
 * @param {Number} [getProjectOptions.version]
 *     The version of the project to retrieve
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  It will returns success call back.
 * errorCallback -    Error message would contain the appropriate error description.Possible error objects are Wrong Parameters, KmcRuntimeException & Exception.
 * completeListener - It will returns specified project file path.
 * @example
 *  var OnDeviceExtraction = kfxCordova.kfxEngine.createOnDeviceExtraction();
 * var serverUrl = "";  //Initializes the serverProjectProvider object with server URL.
 *   var region = OnDeviceExtraction.getRegions();
 *   var idType = OnDeviceExtraction.getIDTypes();
 *   var parameters = {
 *            region: region.US,    //region.ASIA,region.CANADA,etc.
 *            IDType: idType.ID
 *   };
 *   OnDeviceExtraction.getProjectName(function(projectName){
 *    var getProjectOptions={
 *      projectName:projectName,
 *      version:1
 *    };
 *                 kfxCordova.kfxEngine.createServerProjectProvider(function(provider){
 *                             provider.getProject(function(result){
 *                             },function(error){
 *                                 alert("getProject error:: "+JSON.stringify(error));
 *                             },getProjectCallback,getProjectOptions);
 *                 },function(error){
 *                         alert("createServerProjectProvider error::"+JSON.stringify(error));
 *                 },serverUrl);
 *                                     },function(error){
 *                                       alert(JSON.stringify(error));
 *                                     }, parameters);
 *
 *     getProjectCallback = function(result){
 *           alert("get Project path:: "+result.path);
 *     };
 *
 */

ServerProjectProvider.prototype.getProject = function (successCallback, errorCallback, completeListener, parameters) {
	ActionUtils.exec(
		function (result) {
			if (result.eventType === "eventRegistered") {
				if (successCallback) successCallback(result);
			} else if (result.eventType === "eventRaised") {
				if (completeListener) completeListener(result);
			}
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kenServerProjectProviderGetProject,
		[parameters]
	);
};

///To get the variant path
/**
 *To get the path to specified variant files.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Function} completeListener - The callBack consists of path to specified variant files.
 * @param {Object} getVariantOptions -  A JSON object contains the options of the ServerProjectProvider.
 *
 * @param {String} [getVariantOptions.projectName]
 *      Name of the project.
 *
 * @param {String} [getVariantOptions.variantName]
 *     VariantFileName for which the path has to be retrieved.
 *
 * @param {Number} [getProjectOptions.version]
 *     The version of the project to retrieve
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  It will returns success call back.
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Wrong Parameters, KmcRuntimeException & Exception.
 * completeListener - It will returns specified variant file path.
 * @example
 *  var OnDeviceExtraction = kfxCordova.kfxEngine.createOnDeviceExtraction();
 *
 *
 * var serverUrl = "";  //Initializes the serverProjectProvider object with server URL.
 *   var region = OnDeviceExtraction.getRegions();
 *   var idType = OnDeviceExtraction.getIDTypes();
 *   var parameters = {
 *            region: region.US,    //region.ASIA,region.CANADA,etc.
 *            IDType: idType.ID
 *   };
 *   OnDeviceExtraction.getProjectName(function(projectName){
 *    var getVariantOptions={
 *      projectName:projectName,
 *      variantName:'variantName',  // CA3
 *      version:'versionNumber'     // 1
 *    };
 *                 kfxCordova.kfxEngine.createServerProjectProvider(function(provider){
 *                             provider.getVariant(function(result){
 *                             },function(error){
 *                                 alert("getVariant error:: "+JSON.stringify(error));
 *                             },getVariantCallback,getVariantOptions);
 *                 },function(error){
 *                         alert("createServerProjectProvider error::"+JSON.stringify(error));
 *                 },serverUrl);
 *                                     },function(error){
 *                                       alert(JSON.stringify(error));
 *                                     }, parameters);
 *
 * getVariantCallback = function(result){
 *                alert("get Variant path:: "+result.path);
 * };
 */

ServerProjectProvider.prototype.getVariant = function (successCallback, errorCallback, completeListener, parameters) {
	ActionUtils.exec(
		function (result) {
			if (result.eventType === "eventRegistered") {
				if (successCallback) successCallback(result);
			} else if (result.eventType === "eventRaised") {
				if (completeListener) completeListener(result);
			}
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kenServerProjectProviderGetVariant,
		[parameters]
	);
};

///To download all variants for the given project.
/**
 * Use this method to Download all variants for given project.It checks the latest available version on server.
 * If the latest server and cached version are the same, it will go through variant list and download only missing variants.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Function} completeListener - The callBack consists of path to specified variant files.
 * @param {Object} getVariantOptions -  A JSON object contains the options of the ServerProjectProvider.
 *
 * @param {String} [getVariantOptions.projectName]
 *      Name of the project.
 *
 * @param {String} [getVariantOptions.variantName]
 *     VariantFileName for which the path has to be retrieved.
 *
 * @param {Number} [getProjectOptions.version]
 *     The version of the project to retrieve
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  It will returns success call back.
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Wrong Parameters, KmcRuntimeException and Exception.If cancels the operation then it will returns the operation cancel error.
 * completeListener - After completes the downloaded then this method will returns success callback.
 * @example
 *  var OnDeviceExtraction = kfxCordova.kfxEngine.createOnDeviceExtraction();
 *
 * var serverUrl = "";  //Initializes the serverProjectProvider object with server URL.
 *   var region = OnDeviceExtraction.getRegions();
 *   var idType = OnDeviceExtraction.getIDTypes();
 *   var parameters = {
 *            region: region.US,    //region.ASIA,region.CANADA,etc.
 *            IDType: idType.ID
 *   };
 *   OnDeviceExtraction.getProjectName(function(projectName){
 *   var loadAllVariantsOptions={
 *     projectName:projectName
 *   };
 *                 kfxCordova.kfxEngine.createServerProjectProvider(function(provider){
 *                             provider.loadAllVariantsForProject(function(result){
 *                             },function(error){
 *                                 alert("loadAllVariantsForProject error:: "+JSON.stringify(error));
 *                             },loadAllVariantsCallback,getVariantOptions);
 *                 },function(error){
 *                         alert("createServerProjectProvider error::"+JSON.stringify(error));
 *                 },serverUrl);
 *                                     },function(error){
 *                                       alert(JSON.stringify(error));
 *                                     }, parameters);
 *
 *
 * loadAllVariantsCallback = function(result){
 *                alert("Download completed");
 * };
 */
ServerProjectProvider.prototype.loadAllVariantsForProject = function (
	successCallback,
	errorCallback,
	completeListener,
	parameters
) {
	ActionUtils.exec(
		function (result) {
			if (result.eventType === "eventRegistered") {
				if (successCallback) successCallback(result);
			} else if (result.eventType === "eventRaised") {
				if (completeListener) completeListener(result);
			}
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kenServerProjectProviderLoadAllVariantsForProject,
		[parameters]
	);
};

///Cancel load all variants
/**
 * This method cancels loadAllVariants for all projects. Already downloaded data will not be deleted.
 * Cancel is not an immediate operation. When cancel is complete, loadAllVariantsForProject of the errorCallback will be fired with operation cancel error.
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  It will returns success call back.
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Wrong Parameters, KmcRuntimeException & Exception.
 *
 * @example
 *
 * var mServerProjectProvider;
 * var serverUrl = "";  //Initializes the serverProjectProvider object with server URL.
 *                 kfxCordova.kfxEngine.createServerProjectProvider(function(provider){
 *                          mServerProjectProvider = provider;
 *                             mServerProjectProvider.loadAllVariantsForProject(function(result){
 *                             },function(error){
 *                                 alert("loadAllVariantsForProject error:: "+JSON.stringify(error));
 *                             },loadAllVariantsCallback,getVariantOptions);
 *                 },function(error){
 *                         alert("createServerProjectProvider error::"+JSON.stringify(error));
 *                 },serverUrl);
 *
 * loadAllVariantsCallback = function(){
 * };
 *
 * var cancelAllVariants = function(){
 * mServerProjectProvider.cancelLoadAllVariants(function(result){
 *                             },function(error){
 *                                 alert("cancelLoadAllVariants error:: "+JSON.stringify(error));
 *      });
 *};
 *
 */

ServerProjectProvider.prototype.cancelLoadAllVariants = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kenServerProjectProviderCancelLoadAllVariants,
		[]
	);
};

//End of ServerProjectProvider methods
module.exports = ServerProjectProvider;
