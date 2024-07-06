//
// AppStatsObject.js
//
//  Copyright (c) 2012 - 2021 Kofax. Use of this code is with permission pursuant to Kofax license terms.

var ActionUtils = require("./ActionUtils");

//Start of App Stats Methods
/// The Plugin object for the native App Statistics class
/**
 * This AppStatsObject class is responsible for handling the corresponding plugin js to interact with the native App Statistics
 * class. To set and get the properties, and to access the instance methods, corresponding JS methods are written under this class which
 * are used by the end user in application script.
 * Use the App Statistics object for creating, saving, and exporting statistics related to SDK framework usage.
 *
 * @class
 * @alias AppStatsObject
 * @constructor
 */
var AppStatsObject = function () {};

//! The startRecord method activates statistics recording.
/**
 * Use this method to start recording statistics during normal library operations. This will set the isRecording property to true, and open the SQLite database.\n
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return
 *    The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 *    successCallback -  KMC_SUCCESS    if recording started successfully.
 *    errorCallback -    error message would contain the error description. Possible error objects are KmcRuntimeException, Exception.
 *
 * @example
 * var appStats = kfxCordova.kfxUtilities.createAppStatsObject();
 * appStats.isRecording(function(isRecordingSuccess){
 *   if(!isRecordingSuccess){
 *       appStats.startRecord(function(startRecordSuccess){
 *               alert(JSON.stringify(startRecordSuccess));
 *       },function(startRecordError){
 *               alert(JSON.stringify(startRecordError));
 *       });
 *   }
 * },function(isRecordingError){
 *       alert(JSON.stringify(isRecordingError));
 * });
 */

AppStatsObject.prototype.startRecord = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kutAppStatsStartRecord,
		[]
	);
};

//! The stopRecord method deactivates statistics recording.
/**
 * Use this method to stop recording. This will set the isRecording property to false, and close the SQLite database to ensure anything in memory is flushed to the file system.\n
 * This method is only valid if you previously started recording.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return
 *    The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 *    successCallback -  KMC_SUCCESS    if recording stopped successfully.
 *    errorCallback  -    error message would contain the appropriate error description. Possible error objects are KmcRuntimeException, Exception.
 *
 * @example
 * var appStats = kfxCordova.kfxUtilities.createAppStatsObject();
 * appStats.isRecording(function(isRecordingSuccess){
 *   if(isRecordingSuccess){
 *       appStats.stopRecord(function(stopRecordSuccess){
 *               alert(JSON.stringify(stopRecordSuccess));
 *       },function(stopRecordError){
 *               alert(JSON.stringify(stopRecordError));
 *       });
 *   }
 * },function(isRecordingError){
 *   alert(JSON.stringify(isRecordingError));
 * });
 */
AppStatsObject.prototype.stopRecord = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kutAppStatsStopRecord,
		[]
	);
};

//! The writeToFile method writes the in-memory statistics buffer to the AppStats database.
/**
 * Use this asynchronous method from your thresholdReached delegate to periodically write the buffer to the database file. You may also call this method periodically while recording or after recording is turned off. This helps conserve memory. Writing AppStats data to memory improves performance.\n\n
 * If the database was closed, this method opens it first for writing, then closes it when finished. Else if open, the method keeps it open.\n\n
 *
 * After the write is complete, the AppStats internal buffer is erased, and the file size property may or may not increase, but reflects the size of the database file after the write completes.\n\n
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return
 *    The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 *    successCallback :  KMC_SUCCESS     if the write to file was started successfully
 *    errorCallback :    error message would contain the appropriate error description. Possible error objects are KmcRuntimeException, Exception.
 *
 * @example
 * var appStats = kfxCordova.kfxUtilities.createAppStatsObject();
 * appStats.isRecording(function(isRecordingSuccess){
 *   if(isRecordingSuccess){
 *       appStats.stopRecord(function(stopRecordSuccess){
 *           appStats.writeToFile(function(writeToFileSuccess){
 *               alert(JSON.stringify(writeToFileSuccess));
 *           },function(writeToFileError){
 *               alert(JSON.stringify(writeToFileError));
 *           });
 *       },function(stopRecordError){
 *           alert(JSON.stringify(stopRecordError));
 *       });
 *   }
 * },function(isRecordingError){
 *   alert(JSON.stringify(isRecordingError));
 * });
 */

AppStatsObject.prototype.writeToFile = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kutAppStatsWriteToFile,
		[]
	);
};

/// To set the Options/properties of the AppStatsObject class .
/**
 * Method to set the properties of the App Stats class.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Object} parameters - parameters are the options that need to be set on the AppStatsObject. see {@link AppStatsObject#getAppStatsOptions getAppStatsOptions} for more understanding.
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS     if options are set successfully
 * errorCallback -    error message would contain the appropriate error description. Possible error objects are Wrong Parameters, KmcRuntimeException & Exception.
 *
 * @example
 * function successCallback(success){
 *   alert(JSON.stringify(success));
 * }
 * function errorCallback(error){
 *   alert(JSON.stringify(error));
 * }
 * var appStats = kfxCordova.kfxUtilities.createAppStatsObject();
 * var options = appStats.getAppStatsOptions();
 * // need to set deviceId from cordova device Plugin
 * options.deviceId = device.uuid;
 * appStats.setOptions(successCallback,errorCallback,options);
 */
AppStatsObject.prototype.setOptions = function (successCallback, errorCallback, parameters) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kutAppStatsSetOptions,
		[parameters]
	);
};

/// To get the Options/properties of the AppStatsObject class .
/**
 * Method to get the properties of the App Stats class.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name.
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  JSONObject representing AppStatsObject Options. JSONObject structure can also be known from getAppStatsOptions() method.
 * errorCallback -    error message would contain the appropriate error description. Possible error objects are JSONException, Exception.
 *
 * @see {@link AppStatsObject#getAppStatsOptions getAppStatsOptions}
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var appStats = kfxCordova.kfxUtilities.createAppStatsObject();
 * appStats.getAppStatsOptions(successCallback,errorCallback);
 */
AppStatsObject.prototype.getOptions = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kutAppStatsGetOptions,
		[]
	);
};

//! The purge method erases the AppStats memory buffer and the AppStats recording database file.
/**
 * Recording must be disabled before calling this method. The purge method does not delete the SQL file that was created by the export method. Your app is responsible for consuming and controlling the export data file.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS     if purge done successfully.
 * errorCallback -    error message would contain the appropriate error description. Possible error objects are JSONException, Exception.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var appStats = kfxCordova.kfxUtilities.createAppStatsObject();
 * appStats.purge(successCallback,errorCallback);
 */

AppStatsObject.prototype.purge = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kutAppStatsPurge,
		[]
	);
};

//! The upgradeSchema method upgrades an older AppStats datastore from a previous schema.
/**
 * If a database open fails error call back is triggered with the error "invalid schema", then it is likely due to
 * attempting to open a database of an older schema.  Issuing this call will update the database and close it again, to allow the caller to attempt opening again.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Object} parameters - the new file path of the schema is specified in the parameters. Ex : {filePath :"file path value"}
 *
 * @return
 *    The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -   KMC_SUCCESS  success call back
 * errorCallback -    error message would contain the appropriate error description. Possible error objects are Wrong Parameters, KmcRuntimeException & Exception.
 *
 * @example
 * function successCallback(success){
 *   alert(JSON.stringify(success));
 * }
 * function errorCallback(error){
 *   alert(JSON.stringify(error));
 * }
 * var appStats = kfxCordova.kfxUtilities.createAppStatsObject();
 * appStats.upgradeSchema(successCallback,errorCallback,{filePath :"file path value"});
 */
AppStatsObject.prototype.upgradeSchema = function (successCallback, errorCallback, parameters) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kutAppStatsUpgradeSchema,
		[parameters]
	);
};

//! The export method creates a SQL dump file of the internal data store.
/**
 * Use this asynchronous method to create a file containing the different statistics tables created by AppStats.\n\n
 * The library creates a file according to the export format specified (e.g. MSSQL, etc.). This will create a series of SQL insert statements, intended to populate a destination database with the AppStats data. The destination database must already exist with the schema provided; no "Create" statements are included in this export SQL dump. Note that exportFilePath is a full file path. The export data file is expected to be a .sql file name.\n\n
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Object} parameters - file path  and format as JSON Object. Valid format values are JSON, SQL. Ex : {filePath :"file path value", format : "JSON"}
 *
 * @return
 *    The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  success call back with JSON Object representing export status.
 * errorCallback -    error message would contain the appropriate error description. Possible error objects are Wrong Parameters, KmcRuntimeException & Exception.
 *
 * @example
 * function successCallback(success){
 *   alert(JSON.stringify(success));
 * }
 * function errorCallback(error){
 *   alert(JSON.stringify(error));
 * }
 * var appStats = kfxCordova.kfxUtilities.createAppStatsObject();
 * appStats.export(successCallback,errorCallback,{filePath :"file path value", format : "JSON"});
 */

AppStatsObject.prototype.export = function (successCallback, errorCallback, parameters) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kutAppStatsExport,
		[parameters]
	);
};

//! Determine if AppStats is currently recording.
/**
 * Use the isRecording to determine whether or not AppStats recording is active. It is set true after you call the startRecord method, and off after you call stopRecord. Certain methods calls are illegal while recording is on.
 *
 * @param {Function} successCallback - Default Success Call back function name, called when the event is registered successfully
 * @param {Function} errorCallback - Default Error Call back function name
 *
 * @return
 *    The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  success call back with TRUE or FALSE boolean
 * errorCallback -    error message would contain the appropriate error description.  Possible error object is Exception.
 *
 * @example
 * var appStats = kfxCordova.kfxUtilities.createAppStatsObject();
 * appStats.isRecording(function(isRecordingSuccess){
 *       alert(JSON.stringify(isRecordingSuccess));
 * },function(isRecordingError){
 *       alert(JSON.stringify(isRecordingError));
 * });
 */

AppStatsObject.prototype.isRecording = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kutAppStatsIsRecording,
		[]
	);
};

/// Method to add the event listener to the 'exportStatusEvent' method of the   App stats
/**
 * The exportStatusEvent delegate method reports on the status of the export sequence. If the export is still in progress, the method also reports the percent complete. Otherwise, it reports either export complete or export failed.
 *
 * @param {Function} successCallback - Default Success Call back function name, called when the event is registered successfully
 * @param {Function} errorCallback - Default Error Call back function name
 * @param {Function} exportListenerCallback - function variable to hold the return value once the event is triggered
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS success call back
 * errorCallback -    error message would contain the appropriate error description. Possible error objects are KmcRuntimeException, Exception.
 *
 * @example
 * var appStats = kfxCordova.kfxUtilities.createAppStatsObject();
 * function exportListenerSuccessCallback(){
 *   alert('exportListenerSuccessCallback');
 * }
 * appStats.addExportListener(function(exportSuccess){alert(JSON.stringify(exportSuccess));},function(exportError){alert(JSON.stringify(exportError));},exportListenerSuccessCallback);
 */

AppStatsObject.prototype.addExportListener = function (successCallback, errorCallback, exportListenerCallback) {
	ActionUtils.exec(
		function (result) {
			if (result.eventType === "eventRegistered") {
				if (successCallback) successCallback(result);
			} else if (result.eventType === "eventRaised") {
				if (exportListenerCallback) exportListenerCallback(result);
			}
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kutAppStatsAddAppStatsExportListener,
		[]
	);
};

/// Method to add the event listener to the 'writeFileStatusEvent' method of the   App stats
/**
 * The writeFileStatusEvent delegate method reports on the status of writeToFile. If writeToFile is still in progress, it also reports the percent complete. Otherwise, it reports either write complete or write failed. In the case of failure, errorCode and errorMsg will contain a description of the specific failure.
 *
 * @param {Function} successCallback - Default Success Call back function name, called when the event is registered successfully
 * @param {Function} errorCallback - Default Error Call back function name
 * @param {Function} writeToFIleListenerCallback - function variable to hold the return value once the event is triggered
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS success call back
 * errorCallback -    error message would contain the appropriate error description. Possible error objects are KmcRuntimeException, Exception.
 *
 * @example
 * var appStats = kfxCordova.kfxUtilities.createAppStatsObject();
 * function writeToFileListenerSuccessCallback(){
 *    alert('writeToFileListenerSuccessCallback');
 * }
 * appStats.addWriteToFileListener(function(writeToFileSuccess){alert(JSON.stringify(writeToFileSuccess));},function(writeToFileError){alert(JSON.stringify(writeToFileError));},writeToFileListenerSuccessCallback);
 */

AppStatsObject.prototype.addWriteToFileListener = function (
	successCallback,
	errorCallback,
	writeToFIleListenerCallback
) {
	ActionUtils.exec(
		function (result) {
			if (result.eventType === "eventRegistered") {
				if (successCallback) successCallback(result);
			} else if (result.eventType === "eventRaised") {
				if (writeToFIleListenerCallback) writeToFIleListenerCallback(result);
			}
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kutAppStatsAddAppStatsWriteFileListener,
		[]
	);
};

/// Method to add the event listener to the 'sizeThresholdReached' method of the App stats
/**
 * The sizeThreshold delegate method indicates that either the memory buffer or the file size has reached a threshold
 *
 * @param {Function} successCallback - Default Success Call back function name, called when the event is registered successfully
 * @param {Function} errorCallback - Default Error Call back function name
 * @param {Function} thresholdListenerCallback - function variable to hold the return value once the event is triggered
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS success call back
 * errorCallback -    error message would contain the appropriate error description. Possible error objects are KmcRuntimeException, Exception.
 *
 * @example
 * var appStats = kfxCordova.kfxUtilities.createAppStatsObject();
 * function thresholdListenerSuccessCallback(){
 *    alert('thresholdListenerSuccessCallback');
 * }
 * appStats.addThresholdListener(function(thresholdSuccess){alert(JSON.stringify(thresholdSuccess));},function(thresholdError){alert(JSON.stringify(thresholdError));},thresholdListenerSuccessCallback);
 */

AppStatsObject.prototype.addThresholdListener = function (successCallback, errorCallback, thresholdListenerCallback) {
	ActionUtils.exec(
		function (result) {
			if (result.eventType === "eventRegistered") {
				if (successCallback) successCallback(result);
			} else if (result.eventType === "eventRaised") {
				if (thresholdListenerCallback) thresholdListenerCallback(result);
			}
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kutAppStatsAddAppThresholdListener,
		[]
	);
};

/// Method to remove the event listener to the 'exportStatusEvent' method of the   App stats
/**
 * The export listener would be removed and no further events are received
 *
 * @param {Function} successCallback - Default Success Call back function name, called when the event is removed successfully
 * @param {Function} errorCallback - Default Error Call back function name
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS success call back
 * errorCallback -    error message would contain the appropriate error description. Possible error objects are KmcRuntimeException, Exception.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var appStats = kfxCordova.kfxUtilities.createAppStatsObject();
 * appStats.removeExportListener(successCallback,errorCallback);
 */
AppStatsObject.prototype.removeExportListener = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kutAppStatsRemoveAppStatsExportListener,
		[]
	);
};

/// Method to remove the event listener to the 'writeToFileStatusEvent' method of the   App stats
/**
 * The write to file listener would be removed and no further events are received
 *
 * @param {Function} successCallback - Default Success Call back function name, called when the event is removed successfully
 * @param {Function} errorCallback - Default Error Call back function name
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS success call back
 * errorCallback -    error message would contain the appropriate error description. Possible error objects are KmcRuntimeException, Exception.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var appStats = kfxCordova.kfxUtilities.createAppStatsObject();
 * appStats.removeWriteToFileListener(successCallback,errorCallback);
 */
AppStatsObject.prototype.removeWriteToFileListener = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kutAppStatsRemoveAppStatsWriteFileListener,
		[]
	);
};

/// Method to remove the event listener to the 'sizeThresholdReached' method of the App stats
/**
 * The threshold listener would be removed and no further events are received
 *
 * @param {Function} successCallback - Default Success Call back function name, called when the event is removed successfully
 * @param {Function} errorCallback - Default Error Call back function name
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS success call back
 * errorCallback -    error message would contain the appropriate error description. Possible error objects are KmcRuntimeException, Exception.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var appStats = kfxCordova.kfxUtilities.createAppStatsObject();
 * appStats.removeThresholdListener(successCallback,errorCallback);
 */
AppStatsObject.prototype.removeThresholdListener = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kutAppStatsRemoveAppStatsThresholdListener,
		[]
	);
};

/// This method tells appStats to start a "session".
/**
 * This method allows the application a means of recording an application-defined Session.
 * Each session is a grouping in which all subsequent appStats operations will be logged with the same "sessionKey", until the next endSession call.
 * This "sessionKey" is automatically generated while recording session.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Object} parameters - parameters are the options that need to be set on the AppStatsObject.
 * @param {String} parameters.category - an application-defined string, representing the type of session this represents. Examples of typical categories include BillPay, etc.
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS     if options are set successfully
 * errorCallback -    error message would contain the appropriate error description. Possible error objects are Wrong Parameters, KmcRuntimeException & Exception.
 *
 * @example
 * function successCallback(success){
 *   alert(JSON.stringify(success));
 * }
 * function errorCallback(error){
 *   alert(JSON.stringify(error));
 * }
 * var appStats = kfxCordova.kfxUtilities.createAppStatsObject();
 * appStats.beginSession(successCallback,errorCallback,{category:"BillPay"});
 */
AppStatsObject.prototype.beginSession = function (successCallback, errorCallback, parameters) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kutAppStatsBeginSession,
		[parameters]
	);
};

/// This method allows the application a means of recording an application-defined Session event.
/**
 * Each Session event may represent a "sub-Session", or single operation which defines one step in a sequence of steps which collectively define a complete session.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Object} parameters - parameters are the options that need to be set on the AppStatsObject.
 * @param {String} parameters.type - specific type of Session event, or single step (a sort of sub-Session) in a sequence of steps which comprise a complete Session.
 * @param {String} parameters.response -  the response (result) of a session event. This response is defined by the application and could indicate success, failure, or some type of error condition
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS     if options are set successfully
 * errorCallback -    error message would contain the appropriate error description. Possible error objects are Wrong Parameters, KmcRuntimeException & Exception.
 *
 * @example
 * function successCallback(success){
 *   alert(JSON.stringify(success));
 * }
 * function errorCallback(error){
 *   alert(JSON.stringify(error));
 * }
 * var appStats = kfxCordova.kfxUtilities.createAppStatsObject();
 * appStats.logSessionEvent(successCallback,errorCallback,{type:"Retake", response:"success"});
 */
AppStatsObject.prototype.logSessionEvent = function (successCallback, errorCallback, parameters) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kutAppStatsLogSessionEvent,
		[parameters]
	);
};

/// This method tells appStats to end a "session".
/**
 * This method tells appStats to stop the session.
 * Subsequent logging calls will not include a sessionKey in the database, until the next time beginSession is called again.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Object} parameters - parameters are the options that need to be set on the AppStatsObject.
 * @param {Boolean} parameters.success - should be set to true if the overall operation for this session succeeded. Only the application can know overall success or not of a session.
 * @param {String} parameters.description -  helpful logging information, in case the session did not succeed.
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS     if options are set successfully
 * errorCallback -    error message would contain the appropriate error description. Possible error objects are Wrong Parameters, KmcRuntimeException & Exception.
 *
 * @example
 * function successCallback(success){
 *   alert(JSON.stringify(success));
 * }
 * function errorCallback(error){
 *   alert(JSON.stringify(error));
 * }
 * var appStats = kfxCordova.kfxUtilities.createAppStatsObject();
 * appStats.endSession(successCallback,errorCallback,{success:false, description:" submission failed due to network issues"});
 */
AppStatsObject.prototype.endSession = function (successCallback, errorCallback, parameters) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kutAppStatsEndSession,
		[parameters]
	);
};

/// /// To get the Options/properties of the AppStatsObject .
/**
* Method to get the properties of the AppStatsObject .
*
* @return 'appStatsOptions' JSON Object containing the properties  to be set to the AppStatsObject
*
* @example
* var appStats = kfxCordova.kfxUtilities.createAppStatsObject();
* var appStatsOptions = appStats.getAppStatsOptions();
* appStatsOptions should be like below {
*        deviceId:"",
*        fileSizeThreshold:2097152,
*        ramSizeThreshold:109000,
*        filePath:""
*    };

*/

AppStatsObject.prototype.getAppStatsOptions = function () {
	var options = {
		deviceId: "",
		fileSizeThreshold: 2097152,
		ramSizeThreshold: 109000,
		filePath: "",
	};
	return options;
};
//End of App Stats Methods
module.exports = AppStatsObject;
