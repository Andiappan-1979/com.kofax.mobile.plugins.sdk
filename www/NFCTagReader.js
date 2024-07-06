//
// NFCTagReader.js
//
//  Copyright (c) 2012 - 2021 Kofax. Use of this code is with permission pursuant to Kofax license terms.

var ActionUtils = require("./ActionUtils");
var MRZResult = require("./MRZResult");
var NFCTagData = require("./NFCTagData");
//Start of NFC Tag Reader Object
/// The Plugin object for the native NFCTagReader class
/**
 * This NFCTagReader class is responsible for handling the corresponding plugin js to interact with the * native NFCTagReader class. To set and get the properties, and to access the instance methods corresponding JS methods are written under this class which are used by the end user in application script.
 * Use the NFCTagReader object for Reading Tag and Verifying Document Security Object.
 * @class
 * @alias NFCTagReader
 * @constructor
 */
var NFCTagReader = function () {};

/// Begins the Tag Read process.
/**
 * Calling this method will start the Tag Read process. The event listener  {@link NFCTagReader#addReadTagListener addReadTagListener} will receive the delegate call back message and will have the corresponding tag details.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {NFCTagParameters} parameters - Parameters which are required to read the tag.
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions. <br/>
 * successCallback -  KMC_SUCCESS    The tag read process was successfully started for iOS and "OK" for Android. <br/>
 * errorCallback -    KMC_EV_LICENSING The tag read process was not successfully started, and returns the licensing error code.Possible error objects are KmcRuntimeException,Exception.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var nfcTagReaderObject =  kfxCordova.kfxEngine.createNFCTagReader();
 * nfcTagReaderObject.readTag(successCallback,errorCallback);
 */
NFCTagReader.prototype.readTag = function (successCallback, errorCallback, parameters) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kenNFCReadTag,
		[parameters]
	);
};
/// Begins the Document Security Object Verification process.
/**
 * Calling this method will start the Verification process. The event listener  {@link NFCTagReader#addDocumentSecurityObjectVerificationListener addDocumentSecurityObjectVerificationListener} will receive the delegate call back message and will have the corresponding Verification Status details.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param { Object } parameters - Parameters to verify the Document Security Object.
 * @param { String } parameters.documentSecurityObject - Document Securing Object string which is coming in the tag details({@link NFCTagData NFCTagData}) after successful tag read.
 * @param { String } parameters.iOSMasterListPath - Master List File Path which is used to verify the Document Security Object. This should be in .pen format. This is relative path to www folder. For Example "www/MasterList.pem". This will be used in iOS platform only.
 * @param { String } parameters.androidMasterListPath - Master List File Path which is used to verify the Document Security Object. This should be in .ml format. This is relative path to www folder or we can pass SD Card path also. For Example "www/MasterList.ml" or "/storage/emulated/0/masterList.ml". This will be used in Android platform only.
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions. <br/>
 * successCallback -  KMC_SUCCESS    The tag read process was successfully started for iOS and "OK" for Android. <br/>
 * errorCallback -    KMC_EV_LICENSING The tag read process was not successfully started, and returns the licensing error code.Possible error objects are KmcRuntimeException,Exception.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var nfcTagReaderObject =  kfxCordova.kfxEngine.createNFCTagReader();
 * nfcTagReaderObject.verifyDocumentSecurityObject(successCallback,errorCallback);
 */
NFCTagReader.prototype.verifyDocumentSecurityObject = function (successCallback, errorCallback, parameters) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kenNFCVerifyDocumentSecurityObject,
		[parameters]
	);
};
/// This method will add an event listener which will be triggered whenever a tag is read.
/**
 * A listener that will be called when tag was read.
 * It would send the {@link NFCTagData NFCTagData} object to success call back method.
 *
 * Add this event listener before calling the {@link NFCTagReader#readTag radTag} method.
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error Call back function name
 * @param {Function} tagReadHandler - A JSON object containing the properties of the NFC Tag Data object. Check the {@link NFCTagData NFCTagData}  object for its properties.
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions. <br/>
 * successCallback -  KMC_SUCCESS success call back. <br/>
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Wrong Parameters, KmcRuntimeException & Exception. <br/>
 * tagReadHandler - will have the JSON object of the KFXTagData object properties.
 *
 * @example
 * function tagReadHandler(tagDetails)
 * {
 *      alert(JSON.stringify(tagDetails));
 * }
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var nfcTagReaderObject =  kfxCordova.kfxEngine.createNFCTagReader();
 * nfcTagReaderObject.addTagReadListener(successCallback, errorCallback, tagReadHandler);
 */
NFCTagReader.prototype.addReadTagListener = function (successCallback, errorCallback, tagReadHandler) {
	ActionUtils.exec(
		function (result) {
			if (result.eventType === "eventRegistered") {
				if (successCallback) successCallback(result);
			} else if (result.eventType === "eventRaised") {
				var mrzResultObject = new MRZResult(result.mrzResult);
				var tagDataObject = new NFCTagData({
					mrzResult: mrzResultObject,
					faceImage: result.faceImage,
					documentSecurityObject: result.documentSecurityObject,
				});
				if (tagReadHandler) tagReadHandler(tagDataObject);
			}
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kenNFCAddReadTagListener,
		[]
	);
};
/// This method will add an event listener which will be triggered whenever a tag is detected.
/**
 * A listener that will be called when tag was detected. This listener works for android only. For iOS * it won't work. It would notify about Tag Detection in tagDetectedHandler method.
 *
 * Add this event listener before calling the {@link NFCTagReader#readTag readTag} method.
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error Call back function name
 * @param {Function} tagDetectedHandler - This method won't return anything. This method will be called when tag will be detected.
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions. <br/>
 * successCallback -  KMC_SUCCESS success call back. <br/>
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Wrong Parameters, KmcRuntimeException & Exception. <br/>
 * tagDetectedHandler - This method won't return anything. It will be used to notify the user about tag detection.
 *
 * @example
 * function tagDetectedHandler()
 * {
 *      alert("Tag Detected");
 * }
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var nfcTagReaderObject =  kfxCordova.kfxEngine.createNFCTagReader();
 * nfcTagReaderObject.addTagDetectedListener(successCallback, errorCallback, tagDetectedHandler);
 */
NFCTagReader.prototype.addDetectTagListener = function (successCallback, errorCallback, tagDetectedHandler) {
	ActionUtils.exec(
		function (result) {
			if (result.eventType === "eventRegistered") {
				if (successCallback) successCallback(result);
			} else if (result.eventType === "eventRaised") {
				if (tagDetectedHandler) tagDetectedHandler(result);
			}
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kenNFCAddDetectTagListener,
		[]
	);
};
/// This method will add an event listener which will be triggered whenever verification is done.
/**
 * A listener that will be called when verification was done.
 * It would then send the status of the verification to documentSecurityObjectVerificationHandler method.
 *
 * Add this event listener before calling the {@link NFCTagReader#verifyDocumentSecurityObject verifyDocumentSecurityObject} method.
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error Call back function name
 * @param {Function} documentSecurityObjectVerificationHandler - This method will return boolean value which indicates that the verification is successful or not.
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions. <br/>
 * successCallback -  KMC_SUCCESS success call back. <br/>
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Wrong Parameters, KmcRuntimeException & Exception. <br/>
 * documentSecurityObjectVerificationHandler - This method will return boolean value which indicates that the verification is successful or not.
 *
 * @example
 * function documentSecurityObjectVerificationHandler(verificationSucceeded)
 * {
 *      alert(JSON.stringify(verificationSucceeded));
 * }
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var nfcTagReaderObject =  kfxCordova.kfxEngine.createNFCTagReader();
 * nfcTagReaderObject.addDocumentSecurityObjectVerificationListener(successCallback, errorCallback, documentSecurityObjectVerificationHandler);
 */
NFCTagReader.prototype.addDocumentSecurityObjectVerificationListener = function (
	successCallback,
	errorCallback,
	documentSecurityObjectVerificationHandler
) {
	ActionUtils.exec(
		function (result) {
			if (result.eventType === "eventRegistered") {
				if (successCallback) successCallback(result);
			} else if (result.eventType === "eventRaised") {
				if (documentSecurityObjectVerificationHandler) documentSecurityObjectVerificationHandler(result);
			}
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kenNFCAddDocumentSecurityObjectVerificationListener,
		[]
	);
};
/// Method to remove the event listener to the {@link NFCTagReader#readTag readTag} method of the {@link NFCTagReader NFCTagReader}.
/**
 * The method would remove the listener to the delegate call back of the {@link NFCTagReader#readTag readTag} method.
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error Call back function name
 *
 * @return The return value is captured in the 'successCallback' function for successful operation.
 *
 * @see Check the 'errorCallback' method for any failures in case of unexpected behaviour of the method. Generally the error call back
 * would return a JSON object with 'ErrorMs' & 'ErrorDesc' giving the description of the error.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var nfcTagReaderObject =  kfxCordova.kfxEngine.createNFCTagReader();
 * // after tag read
 * nfcTagReaderObject.removeReadTagListener(successCallback,errorCallback);
 */
NFCTagReader.prototype.removeReadTagListener = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kenNFCRemoveReadTagListener,
		[]
	);
};
/// Method to remove the event listener to the {@link NFCTagReader#readTag readTag} method of the {@link NFCTagReader NFCTagReader}. This listener is only works for android. It won't work for iOS.
/**
 * The method would remove the listener to the delegate call back of the {@link NFCTagReader#readTag readTag} method.
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error Call back function name
 *
 * @return The return value is captured in the 'successCallback' function for successful operation.
 *
 * @see Check the 'errorCallback' method for any failures in case of unexpected behaviour of the method. Generally the error call back
 * would return a JSON object with 'ErrorMs' & 'ErrorDesc' giving the description of the error.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var nfcTagReaderObject =  kfxCordova.kfxEngine.createNFCTagReader();
 * // after verification done
 * nfcTagReaderObject.removeDetectTagListener(successCallback,errorCallback);
 */
NFCTagReader.prototype.removeDetectTagListener = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kenNFCRemoveDetectTagListener,
		[]
	);
};

/// Method to remove the event listener to the {@link NFCTagReader#verifyDocumentSecurityObject verifyDocumentSecurityObject} method of the {@link NFCTagReader NFCTagReader}.
/**
 * The method would remove the listener to the delegate call back of the {@link NFCTagReader#verifyDocumentSecurityObject verifyDocumentSecurity} method.
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error Call back function name
 *
 * @return The return value is captured in the 'successCallback' function for successful operation.
 *
 * @see Check the 'errorCallback' method for any failures in case of unexpected behaviour of the method. Generally the error call back
 * would return a JSON object with 'ErrorMs' & 'ErrorDesc' giving the description of the error.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var nfcTagReaderObject =  kfxCordova.kfxEngine.createNFCTagReader();
 * // after verification done
 * nfcTagReaderObject.removeDocumentSecurityObjectVerificationListener(successCallback,errorCallback);
 */
NFCTagReader.prototype.removeDocumentSecurityObjectVerificationListener = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kenNFCRemoveDocumentSecurityObjectVerificationListener,
		[]
	);
};
//End of NFC Tag Reader Object
module.exports = NFCTagReader;
