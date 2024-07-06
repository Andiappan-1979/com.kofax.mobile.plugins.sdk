//
// BundleCacheProvider.js
//
//  Copyright (c) 2012 - 2021 Kofax. Use of this code is with permission pursuant to Kofax license terms.

var ActionUtils = require("./ActionUtils");
/// The Plugin object to access the native SDK methods of BundleCacheProvider class
/**
 * This BundleCacheProvider class is responsible for handling the corresponding plugin js to interact with the native
 * BundleCacheProvider class.corresponding JS methods are written under this class which are used by the end user in application script.
 * This BundleCacheProvider handles extracting/copying entries from a bundle into a cache folder.
 * @class
 * @alias BundleCacheProvider
 * @constructor
 *
 */
//BundleCacheProvider constructor and corresponding methods
var BundleCacheProvider = function () {};

///To get project path
/**
 *To get the path to specified project files.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Object} parameters -  A JSON object contains the options of the BundleCacheProvider.
 *
 * @param {String} [parameters.projectName]
 *     Name of the project.
 *
 * @param {Number} [parameters.version]
 *     The version of the project to retrieve.
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  The successCallBack consists of path to specified project files
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Wrong Parameters, KmcRuntimeException & Exception.
 *
 * @example
 *  var OnDeviceExtraction = kfxCordova.kfxEngine.createOnDeviceExtraction();
 *
 *   var region = OnDeviceExtraction.getRegions();
 *   var idType = OnDeviceExtraction.getIDTypes();
 *   var parameters = {
 *            region: region.US,    //region.ASIA,region.CANADA,etc.
 *            IDType: idType.ID
 *   };
 *   OnDeviceExtraction.getProjectName(function(projectName){
 *                                      var getProjectOptions={
 *                                                  projectName:projectName,
 *                                                  version:20
 *                                      };
 *                                      kfxCordova.kfxEngine.createBundleCacheProvider(function(provider){
 *                                                                                          provider.getProject(function(success){
 *                                                                                                                  alert(JSON.stringify(success));
 *                                                                                                              },function(error){
 *                                                                                                                     alert(JSON.stringify(error));
 *                                                                                                              },getProjectOptions);
 *                                                                                          },function(error){
 *                                                                                              alert("createBundleCacheProvider error:: "+JSON.stringify(error));
 *                                                                                          });
 *                                      },function(error){
 *                                          alert(JSON.stringify(error));
 *                                      }, parameters);
 *
 */
BundleCacheProvider.prototype.getProject = function (successCallback, errorCallback, parameters) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kenBundleCacheProviderGetProject,
		[parameters]
	);
};

///To get the variant path
/**
 *To get the path to specified variant files.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Object} parameters -  A JSON object contains the options of the BundleCacheProvider.
 *
 * @param {String} [parameters.projectName]
 *      Name of the project.
 *
 * @param {String} [parameters.variantName]
 *     VariantFileName for which the path has to be retrieved.
 *
 * @param {Number} [parameters.version]
 *     The version of the project to retrieve
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  The successCallBack consists of path to specified variant files
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Wrong Parameters, KmcRuntimeException & Exception.
 *
 * @example
 *  var OnDeviceExtraction = kfxCordova.kfxEngine.createOnDeviceExtraction();
 *   var region = OnDeviceExtraction.getRegions();
 *   var idType = OnDeviceExtraction.getIDTypes();
 *   var parameters = {
 *            region: region.US,    //region.ASIA,region.CANADA,etc.
 *            IDType: idType.ID
 *   };
 *   OnDeviceExtraction.getProjectName(function(projectName){
 *   var getVariantOptions={
 *     projectName:projectName,
 *     variantName:'variantName',
 *     version:'versionNumber'
 *  };
 *  kfxCordova.kfxEngine.createBundleCacheProvider(function(provider){
 *      provider.getVariant(function(success){
 *          alert(JSON.stringify(success));
 *      },function(error){
 *              alert(JSON.stringify(error));
 *      },getVariantOptions);
 *      },function(error){
 *              alert("createBundleCacheProvider error:: "+JSON.stringify(error));
 *      });
 *                                     },function(error){
 *                                       alert(JSON.stringify(error));
 *                                     }, parameters);
 *
 */

BundleCacheProvider.prototype.getVariant = function (successCallback, errorCallback, parameters) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kenBundleCacheProviderGetVariant,
		[parameters]
	);
};

///Cache project
/**
 *To cache the project data.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Object} cacheProjectOptions -  A JSON object contains the options of the BundleCacheProvider.
 *
 * @param {String} [cacheProjectOptions.projectName]
 *     Name of the project.
 *
 * @param {String} [cacheProjectOptions.path]
 *     Zip bundle file path
 *
 * @param {Number} [cacheProjectOptions.version]
 *     The version of the project data
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  The successCallBack consists of path to to folder containing cached project files.
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Wrong Parameters, KmcRuntimeException & Exception.
 *
 * @example
 *  var OnDeviceExtraction = kfxCordova.kfxEngine.createOnDeviceExtraction();
 *   var region = OnDeviceExtraction.getRegions();
 *   var idType = OnDeviceExtraction.getIDTypes();
 *   var parameters = {
 *            region: region.US,    //region.ASIA,region.CANADA,etc.
 *            IDType: idType.ID
 *   };
 *   OnDeviceExtraction.getProjectName(function(projectName){
 *  var cacheProjectOptions={
 *     projectName:projectName,
 *     path:'zipBundlePath',
 *     version:'versionNumber'
 * };
 * kfxCordova.kfxEngine.createBundleCacheProvider(function(provider){
 *  provider.cacheProject(function(success){
 *    alert(JSON.stringify(success));
 *  },function(error){
 *      alert("cacheProject:: "+JSON.stringify(error));
 *  },cacheProjectOptions);
 *     },function(error){
 *             alert("createBundleCacheProvider error:: "+JSON.stringify(error));
 *     });
 *                                     },function(error){
 *                                       alert(JSON.stringify(error));
 *                                     }, parameters);
 *
 *
 */

BundleCacheProvider.prototype.cacheProject = function (successCallback, errorCallback, parameters) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kenBundleCacheProviderCacheProject,
		[parameters]
	);
};

///Cache variant
/**
 *To cache the variant data.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Object}   cacheVariantOptions -  A JSON object contains the options of the BundleCacheProvider.
 *
 * @param {String} [cacheVariantOptions.projectName]
 *      Name of the project.
 *
 * @param {String} [cacheVariantOptions.path]
 *     Zip bundle file path
 *
 * @param {Number} [cacheVariantOptions.version]
 *     The version of the project data
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  The successCallBack consists of path to to folder containing cached variant files.
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Wrong Parameters, KmcRuntimeException & Exception.
 *
 * @example
 *  var OnDeviceExtraction = kfxCordova.kfxEngine.createOnDeviceExtraction();
 *   var region = OnDeviceExtraction.getRegions();
 *   var idType = OnDeviceExtraction.getIDTypes();
 *   var parameters = {
 *            region: region.US,    //region.ASIA,region.CANADA,etc.
 *            IDType: idType.ID
 *   };
 *   OnDeviceExtraction.getProjectName(function(projectName){
 *   var cacheVariantOptions={
 *     projectName:projectName,
 *     path:'zipBundlePath',
 *     version:'versionNumber'
 *  };
 *  kfxCordova.kfxEngine.createBundleCacheProvider(function(provider){
 *    provider.cacheVariant(function(success){
 *            alert(JSON.stringify(success));
 *    },function(error){
 *        alert(JSON.stringify(error));
 *    },cacheVariantOptions);
 *        },function(error){
 *                alert("createBundleCacheProvider error:: "+JSON.stringify(error));
 *        });
 *                                     },function(error){
 *                                       alert(JSON.stringify(error));
 *                                     }, parameters);
 */

BundleCacheProvider.prototype.cacheVariant = function (successCallback, errorCallback, parameters) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kenBundleCacheProviderCacheVariant,
		[parameters]
	);
};

///Get latest project version
/**
 *To get the latest cached version for the given project.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Object}   parameters -  A JSON object contains the options to get get the latest cached version for the given project.
 *
 * @param {String} [parameters.projectName]
 *      Name of the project.
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  The successCallBack consists of latest cached version for a given projectName.
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Wrong Parameters, KmcRuntimeException & Exception.
 *
 * @example
 *  var OnDeviceExtraction = kfxCordova.kfxEngine.createOnDeviceExtraction();
 *   var region = OnDeviceExtraction.getRegions();
 *   var idType = OnDeviceExtraction.getIDTypes();
 *   var parameters = {
 *            region: region.US,    //region.ASIA,region.CANADA,etc.
 *            IDType: idType.ID
 *   };
 *   OnDeviceExtraction.getProjectName(function(projectName){
 *   var latestVersionOptions={
 *     projectName:projectName
 *  };
 *  kfxCordova.kfxEngine.createBundleCacheProvider(function(provider){
 *   provider.getLatestVersionForProject(function(success){
 *    alert(JSON.stringify(success));
 *    },function(error){
 *      alert(JSON.stringify(error));
 *    },latestVersionOptions);
 *        },function(error){
 *                alert("createBundleCacheProvider error:: "+JSON.stringify(error));
 *        });
 *                                     },function(error){
 *                                       alert(JSON.stringify(error));
 *                                     }, parameters);
 *
 */

BundleCacheProvider.prototype.getLatestVersionForProject = function (successCallback, errorCallback, parameters) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kenBundleCacheProviderGetLatestVersionForProject,
		[parameters]
	);
};

//End of BundleCacheProvider methods
module.exports = BundleCacheProvider;
