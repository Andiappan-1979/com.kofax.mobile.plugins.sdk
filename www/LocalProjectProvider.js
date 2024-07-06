//
// LocalProjectProvider.js
//
//  Copyright (c) 2012 - 2021 Kofax. Use of this code is with permission pursuant to Kofax license terms.

var ActionUtils = require("./ActionUtils");

/// The Plugin object to access the native SDK methods of LocalProjectProvider class

/**
 * This LocalProjectProvider class is responsible for handling the corresponding plugin js to interact with the native
 * LocalProjectProvider class.corresponding JS methods are written under this class which are used by the end user in application script.
 * This LocalProjectProvider allows to get assets from zip bundles stored in application resources.
 * By default it uses BundleCacheProvider object with default cache directory and main bundle root location for bundles.
 * Project zip bundles are expected to be named as %project_name%.zip (e.g. USIDs.zip).if Local assets needs to be stored in the customised path,
 * You should call useCacheProvider() method.
 * @class
 * @alias LocalProjectProvider
 * @constructor
 *
 */
//LocalProjectProvider constructor and corresponding methods

var LocalProjectProvider = function () {};

///Use bundleCacheProvider to creates the LocalProjectProvider.
/**
 * Use this method to creates LocalProjectProvider object using bundleCacheProvider,
 * before calling this method you must create bundleCacheProvider object otherwise it will get callback error.
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
 *                 kfxCordova.kfxEngine.createLocalProjectProvider(function(provider){
 *                             provider.useCacheProvider(function(result){
 *                             },function(error){
 *                                 alert("useCacheProvider error:: "+JSON.stringify(error));
 *                             });
 *                 },function(error){
 *                         alert("createLocalProjectProvider error::"+JSON.stringify(error));
 *                 },serverUrl);
 *            },function(error){
 *                          alert("createBundleCacheProvider error::"+JSON.stringify(error));
 *            });
 *
 *
 *
 */

LocalProjectProvider.prototype.useCacheProvider = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kenLocalProjectProviderUseCacheProvider,
		[]
	);
};

///Get highest version of project
/**
 *To get the highest version for the given project in LocalProjectPath.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Function} completeListener - CallBack consists of highest local project version for a given projectName.
 * @param {Object}   highestVersionOptions -  A JSON object contains the options to get the highest Local version for the given project.
 *
 * @param {String} [highestVersionOptions.projectName]
 *      Name of the project.
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  It will returns success call back.
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Wrong Parameters, KmcRuntimeException & Exception.
 * completeListener - It will returns highest local project version for a given projectName.
 * @example
 *  var OnDeviceExtraction = kfxCordova.kfxEngine.createOnDeviceExtraction();
 *
 *  var LocalPath = "";  //Path to the folder containing zip file.
 *  var region = OnDeviceExtraction.getRegions();
 *  var idType = OnDeviceExtraction.getIDTypes();
 *  var parameters = {
 *            region: region.US,    //region.ASIA,region.CANADA,etc.
 *            IDType: idType.ID
 *   };
 *   OnDeviceExtraction.getProjectName(function(projectName){
 *  var highestVersionOptions={
 *     projectName:projectName
 * };
 *                 kfxCordova.kfxEngine.createLocalProjectProvider(function(provider){
 *                             provider.getHighestVersion(function(result){
 *                             },function(error){
 *                                 alert("getHighestVersion error:: "+JSON.stringify(error));
 *                             },getHighestVersionCallback,highestVersionOptions);
 *                 },function(error){
 *                         alert("createLocalProjectProvider error::"+JSON.stringify(error));
 *                 },LocalPath);
 *                                     },function(error){
 *                                       alert(JSON.stringify(error));
 *                                     }, parameters);
 *
 * getHighestVersionCallback = function(result){
 *                alert("get Highest Version:: "+result.version);
 * };
 */

LocalProjectProvider.prototype.getHighestVersion = function (
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
		ActionUtils.kenLocalProjectProviderGetHighestVersion,
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
 * @param {Object} getProjectOptions -  A JSON object contains the options of the LocalProjectProvider.
 *
 * @param {String} [getProjectOptions.projectName]
 *     Name of the project.
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
 * var LocalPath = "";  //Path to the folder containing zip file.
 *   var region = OnDeviceExtraction.getRegions();
 *   var idType = OnDeviceExtraction.getIDTypes();
 *   var parameters = {
 *            region: region.US,    //region.ASIA,region.CANADA,etc.
 *            IDType: idType.ID
 *   };
 *   OnDeviceExtraction.getProjectName(function(projectName){
 *  var getProjectOptions={
 *     projectName:projectName,
 *     version:1
 * };
 *                 kfxCordova.kfxEngine.createLocalProjectProvider(function(provider){
 *                             provider.getProject(function(result){
 *                             },function(error){
 *                                 alert("getProject error:: "+JSON.stringify(error));
 *                             },getProjectCallback,getProjectOptions);
 *                 },function(error){
 *                         alert("createLocalProjectProvider error::"+JSON.stringify(error));
 *                 },LocalPath);
 *
 *     getProjectCallback = function(result){
 *           alert("get Project path:: "+result.path);
 *     };
 *                                     },function(error){
 *                                       alert(JSON.stringify(error));
 *                                     }, parameters);
 *
 */

LocalProjectProvider.prototype.getProject = function (successCallback, errorCallback, completeListener, parameters) {
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
		ActionUtils.kenLocalProjectProviderGetProject,
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
 * @param {Object} getVariantOptions -  A JSON object contains the options of the LocalProjectProvider.
 *
 * @param {String} [getVariantOptions.projectName]
 *     Name of the project.
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
 * var LocalPath = "";  //Path to the folder containing zip file.
 *   var region = OnDeviceExtraction.getRegions();
 *   var idType = OnDeviceExtraction.getIDTypes();
 *   var parameters = {
 *            region: region.US,    //region.ASIA,region.CANADA,etc.
 *            IDType: idType.ID
 *   };
 *   OnDeviceExtraction.getProjectName(function(projectName){
 *   var getVariantOptions={
 *          projectName:requiredProjectName,
 *          variantName:'variantName',  // CA3
 *          version:'versionNumber'     // 1
 *   };
 *                 kfxCordova.kfxEngine.createLocalProjectProvider(function(provider){
 *                             provider.getVariant(function(result){
 *                             },function(error){
 *                                 alert("getVariant error:: "+JSON.stringify(error));
 *                             },getVariantCallback,getVariantOptions);
 *                 },function(error){
 *                         alert("createLocalProjectProvider error::"+JSON.stringify(error));
 *                 },LocalPath);
 *                                     },function(error){
 *                                       alert(JSON.stringify(error));
 *                                     }, parameters);
 *
 * getVariantCallback = function(result){
 *                alert("get Variant path:: "+result.path);
 * };
 */

LocalProjectProvider.prototype.getVariant = function (successCallback, errorCallback, completeListener, parameters) {
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
		ActionUtils.kenLocalProjectProviderGetVariant,
		[parameters]
	);
};

//End of LocalProjectProvider methods
module.exports = LocalProjectProvider;
