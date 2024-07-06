//
// CaptureServer.js
//
//  Copyright (c) 2012 - 2021 Kofax. Use of this code is with permission pursuant to Kofax license terms.

var ActionUtils = require("./ActionUtils");
var DocumentTypeObject = require("./DocumentTypeObject");

//Start of Capture Server
/**
 * This CaptureServer class is responsible for handling the corresponding plugin js to interact with the
 * native KFXCaptureServer class. To set and get the properties, and to access the instance methods,
 * corresponding JS methods are written under this class which are used by the end user in application script.
 * The CaptureServer object represents a physical Capture Server. The properties and
 * methods allow you to log into a Capture Server, download a list of Document Types and Field Types, and create a
 * document object from a populated document type reference object. Then you can add images to your document,
 * either processed or not. Once all your pages and images are added, you can use the submit method to send the document to Capture Server.
 *
 * @class
 * @alias CaptureServer
 * @constructor
 *
 */
//CaptureServer constructor and corresponding methods
var CaptureServer = function () {};

///Register your mobile device with the Capture server.
/**
 * Use the registerDevice method to check if this device has access to a valid server license. The method returns KMC_SUCCESS if the device registered successfully.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions.
 *  successCallback -  The library returns KMC_SUCCESS if the device has registered successfully.
 *  errorCallback   -  Error will be returned.
 *  if you have not set the license
 *  if you forgot to set the URL
 *  if the library could not connect to the server.
 *  if the SSL connection specified in the URL could not be achieved.
 *  if the web services request timed out. Currently the timeout is fixed at 20 seconds.
 *  if you lost WiFi or network connectivity, or you have Airplane mode set on your device.
 *  if an internal request couldn't be authenticated (rare communication error).
 *  A Network error - Could not create a network connection or data transfer error, usually caused by a bad URL or services path.
 *  A Network error - The Host is not available, such as when the server URL is bogus or garbage.
 *  Authentication required for registration - means we have to register after logged into server.
 *
 * @see Check the 'errorCallback' method for any failures in case of unexpected behaviour of the method. Generally the error call back
 * would return a JSON object with 'ErrorMsg' & 'ErrorDesc' giving the description of the error.
 *
 * @example
 * var captureServer = null;
 * kfxCordova.kfxLibLogistics.createCaptureServer(function(captureServerObj){
 *      captureServer = captureServerObj;
 * },function(error){
 *      alert(JSON.stringify(error));
 * },{serverUrl:"valid url",serverType:"SERVER_KFS"});
 *
 * captureServer.registerDevice(function(success){
 *      alert(JSON.stringify(success));
 * },function(registerError){
 *      alert(JSON.stringify(registerError));
 * });
 */
CaptureServer.prototype.registerDevice = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kloCaptureServerRegisterDevice,
		[]
	);
};
///Log into the Capture server.
/**
 * Use the asynchronous login method to log into the server specified by the serverURL property. This method uses the user profile parameter that contains the username and password in order to log into the server.
 * You must create or manage a user profile object and supply it with this method.You can only log into the server if you have previously registered your device.
 * You may need to re-register your device on some servers after a period of inactivity.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {UserProfileObject} UserProfileObject -  This references the UserProfile object that contains the credentials needed to log into the server.
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions.
 *  successCallback -  The library returns KMC_SUCCESS status and document types list if logged in successfully.
 *  errorCallback   -  Error will be returned.
 *  if you have not set the license
 *  if you forgot to set the URL
 *  if the library could not connect to the server.
 *  if the SSL connection specified in the URL could not be achieved.
 *  if the web services request timed out. Currently the timeout is fixed at 20 seconds.
 *  if you lost WiFi or network connectivity, or you have Airplane mode set on your device.
 *  if an internal request couldn't be authenticated (rare communication error).
 *  A Network error: Could not create a network connection or data transfer error, usually caused by a bad URL or services path.
 *  A Network error: The Host is not available, such as when the server URL is bogus or garbage.
 *
 * @see Check the 'errorCallback' method for any failures in case of unexpected behaviour of the method. Generally the error call back
 * would return a JSON object with 'ErrorMsg' & 'ErrorDesc' giving the description of the error.
 *
 * @example
 * var userProfile = kfxCordova.kfxLibLogistics.createUserProfileObject();
 * userProfile.userName = "";
 * userProfile.password = "";
 * userProfile.Domain = "";
 * userProfile.userEmailAddress = "";
 *
 * var captureServer = null;
 * kfxCordova.kfxLibLogistics.createCaptureServer(function(captureServerObj){
 *      captureServer = captureServerObj;
 * },function(error){
 *      alert(JSON.stringify(error));
 * },{serverUrl:"valid url",serverType:"SERVER_KFS"});
 *
 * captureServer.login(function(success){
 *      alert(JSON.stringify(success));
 * },function(registerError){
 *      alert(JSON.stringify(registerError));
 * },userProfile);
 */

CaptureServer.prototype.login = function (successCallback, errorCallback, UserProfileObject) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kloCaptureServerLogin,
		[UserProfileObject]
	);
};

///Fetches the device profile shortcuts from the Capture server.
/**
 * Use the asynchronous loginAnonymously method to fetch the device profile shortcuts. If you want to log in to the server without user profile you can use this method.
 * You can only login anonymously if you have previously registered your device.
 * You may need to re-register your device on some servers after a period of inactivity.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions.
 *  successCallback -  The library returns KMC_SUCCESS status and document types list if logged in successfully.
 *  errorCallback   -  Error will be returned.
 *  if you have not set the license
 *  if you forgot to set the URL
 *  if the library could not connect to the server.
 *  if the SSL connection specified in the URL could not be achieved.
 *  if the web services request timed out. Currently the timeout is fixed at 20 seconds.
 *  if you lost WiFi or network connectivity, or you have Airplane mode set on your device.
 *  if an internal request couldn't be authenticated (rare communication error).
 *  A Network error: Could not create a network connection or data transfer error, usually caused by a bad URL or services path.
 *  A Network error: The Host is not available, such as when the server URL is bogus or garbage.
 *
 * @see Check the 'errorCallback' method for any failures in case of unexpected behaviour of the method. Generally the error call back
 * would return a JSON object with 'ErrorMsg' & 'ErrorDesc' giving the description of the error.
 *
 * @example
 * var captureServer = null;
 * kfxCordova.kfxLibLogistics.createCaptureServer(function(captureServerObj){
 *      captureServer = captureServerObj;
 * },function(error){
 *      alert(JSON.stringify(error));
 * },{serverUrl:"valid url",serverType:"SERVER_KFS"});
 *
 * captureServer.loginAnonymously(function(success){
 *      alert(JSON.stringify(success));
 * },function(registerError){
 *      alert(JSON.stringify(registerError));
 * });
 */
CaptureServer.prototype.loginAnonymously = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kloCaptureServerLoginAnonymously,
		[]
	);
};

///Logout from the Capture server.
/**
 * Use the logout method to log out of the server currently used for the current session. The logout method is only valid if you have previously called server login.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions.
 *  successCallback -  The library returns KMC_SUCCESS status when the logout completes.
 *  errorCallback   -  Error will be returned.
 *  if no license set.
 *  if you have not logged in yet.
 *
 * @see Check the 'errorCallback' method for any failures in case of unexpected behaviour of the method. Generally the error call back
 * would return a JSON object with 'ErrorMsg' & 'ErrorDesc' giving the description of the error.
 *
 * @example
 * var captureServer = null;
 * kfxCordova.kfxLibLogistics.createCaptureServer(function(captureServerObj){
 *      captureServer = captureServerObj;
 * },function(error){
 *      alert(JSON.stringify(error));
 * },{serverUrl:"valid url",serverType:"SERVER_KFS"});
 *
 * captureServer.logout(function(success){
 *      alert(JSON.stringify(success));
 * },function(error){
 *      alert(JSON.stringify(error));
 * });
 */
CaptureServer.prototype.logout = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kloCaptureServerLogout,
		[]
	);
};
///Cancel the submission operation.
/**
 * Use this method to attempt to cancel a submission operation already in progress. We have to send the submission job id associated with the submission process. You can get the
 * submission job id in progress listener. The submit may or may not be cancellable at the time you asynchronously call this method during an on-going operation.
 * The library detects and cancels an outstanding submission on document page boundaries, therefore there may be a delay between calling cancel and the submit actually completing.
 * This cancel operation will result in a submitDocument errorCallback, and the status will be KMC_LO_OPERATION_CANCELLED
 * if the operation was cancelled before it normally completes.Otherwise, you will receive a normal completion status.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {String} submissionJobID - Job id of the submission operation which is in process.
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions.
 *  successCallback -  The library returns KMC_SUCCESS.
 *  errorCallback   -  Error will be returned.
 *  if the cancel will be honored, detected and handled at the next available opportunity.
 *  if there is no operation in progress that can be cancelled.
 *
 * @see Check the 'errorCB' method for any failures in case of unexpected behaviour of the method. Generally the error call back
 * would return a JSON object with 'ErrorMsg' & 'ErrorDesc' giving the description of the error.
 *
 * @example
 * var captureServer = null;
 * kfxCordova.kfxLibLogistics.createCaptureServer(function(captureServerObj){
 *      captureServer = captureServerObj;
 * },function(error){
 *      alert(JSON.stringify(error));
 * },{serverUrl:"valid url",serverType:"SERVER_KFS"});
 *
 * captureServer.cancelSubmission(function(success){
 *      alert(JSON.stringify(success));
 * },function(error){
 *      alert(JSON.stringify(error));
 * },"valid submissionJobID");
 */

CaptureServer.prototype.cancelSubmission = function (successCallback, errorCallback, submissionJobID) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kloCaptureServerCancelSubmission,
		[submissionJobID]
	);
};

/// Method to clear capture server memory
/**
 * The method would clear capture server memory
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error Call back function name
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  This library returns KMC_SUCCESS if capture server memory cleared
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are KmcRuntimeException,Exception.
 *
 * @example
 * var captureServer = null;
 * kfxCordova.kfxLibLogistics.createCaptureServer(function(captureServerObj){
 *      captureServer = captureServerObj;
 * },function(error){
 *      alert(JSON.stringify(error));
 * },{serverUrl:"valid url",serverType:"SERVER_KFS"});
 *
 * captureServer.clean(function(success){
 *      alert(JSON.stringify(success));
 * },function(error){
 *      alert(JSON.stringify(error));
 * });
 */
CaptureServer.prototype.clean = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kloCaptureServerCleanCaptureServer,
		[]
	);
};

///Initiate the submission process of a document to the server
/**
 * Use the start job service method to start the submission process of images to the server to which you already established a connection. You can start job service after you
 * have previously registered with the server and logged in. You will get submission job id once submission process started successfully. Submission job id is used to send the image
 * to the server. We can send image to server by using {@link CaptureServer#sendImageService sendImageService} method.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions.
 *  successCallback -  The library returns submission job id if submission process started successfully.
 *  errorCallback   -  Error will be returned.
 *  if you have not set the license
 *  if you forgot to set the URL
 *  if the library could not connect to the server.
 *  if the SSL connection specified in the URL could not be achieved.
 *  if the web services request timed out. Currently the timeout is fixed at 20 seconds.
 *  if you lost WiFi or network connectivity, or you have Airplane mode set on your device.
 *  if an internal request couldn't be authenticated (rare communication error).
 *  A Network error - Could not create a network connection or data transfer error, usually caused by a bad URL or services path.
 *  A Network error - The Host is not available, such as when the server URL is bogus or garbage.
 *
 * @see Check the 'errorCallback' method for any failures in case of unexpected behaviour of the method. Generally the error call back
 * would return a JSON object with 'ErrorMsg' & 'ErrorDesc' giving the description of the error.
 *
 * @example
 * var captureServer = null;
 * kfxCordova.kfxLibLogistics.createCaptureServer(function(captureServerObj){
 *      captureServer = captureServerObj;
 * },function(error){
 *      alert(JSON.stringify(error));
 * },{serverUrl:"valid url",serverType:"SERVER_KFS"});
 *
 * captureServer.startJobService(function(success){
 *      alert(JSON.stringify(success));
 * },function(registerError){
 *      alert(JSON.stringify(registerError));
 * });
 */
CaptureServer.prototype.startJobService = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kloCaptureServerStartJobService,
		[]
	);
};

///Send an image to the server
/**
 * Use send image service method to send the single image to the server to which you already established a connection. We have to send the order of the image and specify the
 * image is last image in the document. After initiating the submission process only we have to call send image service because after initiating submission process we will get
 * the job ID. With invalid job ID we can't send the image to the server. The method also checks the image is valid or not.  It also checks image has represented by a file,
 * because images that only contain a bitmap (or none at all) cannot be submitted.  If the image is invalid, the library immediately returns an error.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Object} parameters - A JSON Object which is used to send an image to the server
 *
 * @param {String} parameters.documentID - Refers to the Document object id containing fields that you want to update.
 *
 * @param {String} parameters.imageID -  Refers to an image object id that you want to send to the server.
 *
 * @param {String} parameters.submissionJobID - Job id of the submission operation which already in progress.
 *
 * @param {Number} parameters.imageIndex -  index of an image
 *
 * @param {Boolean} parameters.isLastImage - specify the image is last image or not
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions.
 *  successCallback -  The library returns KMC_SUCCESS if an image sent to server.
 *  errorCallback   -  Error will be returned.
 *  if you have not set the license
 *  if you forgot to set the URL
 *  if the library could not connect to the server.
 *  if the SSL connection specified in the URL could not be achieved.
 *  if the web services request timed out. Currently the timeout is fixed at 20 seconds.
 *  if you lost WiFi or network connectivity, or you have Airplane mode set on your device.
 *  if an internal request couldn't be authenticated (rare communication error).
 *  A Network error - Could not create a network connection or data transfer error, usually caused by a bad URL or services path.
 *  A Network error - The Host is not available, such as when the server URL is bogus or garbage.
 *
 * @see Check the 'errorCallback' method for any failures in case of unexpected behaviour of the method. Generally the error call back
 * would return a JSON object with 'ErrorMsg' & 'ErrorDesc' giving the description of the error.
 *
 * @example
 * var captureServer = null;
 * var submissionJobID = null;
 * kfxCordova.kfxLibLogistics.createCaptureServer(function(captureServerObj){
 *      captureServer = captureServerObj;
 * },function(error){
 *      alert(JSON.stringify(error));
 * },{serverUrl:"valid url",serverType:"SERVER_KFS"});
 *
 * captureServer.startJobService(function(success){
 *      submissionJobID = success;
 *      alert(JSON.stringify(success));
 * },function(registerError){
 *      alert(JSON.stringify(registerError));
 * });
 *
 * captureServer.sendImageService(function(success){
 *      alert(JSON.stringify(success));
 * },function(registerError){
 *      alert(JSON.stringify(registerError));
 * },{documentID:"document id",imageID:"image id",submissionJobID:submissionJobID,imageIndex:0,isLastImage:false});
 */
CaptureServer.prototype.sendImageService = function (successCallback, errorCallback, parameters) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kloCaptureServerSendImageService,
		[parameters]
	);
};

/// Add Progress listener.
/**
 * The library calls this method when the submission process is going on. You can capture progress percent and submission job id in this callback.
 * Submission job id is required to cancel the submission process.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Function} progressCallback - A JSON object contain progress percent and submission job id.
 *
 * @return The return value is captured in the 'successCB' for a successful operation, and might return in 'errorCB' for an incomplete/invalid operation. Returns the following values in the corresponding functions.
 *  successCallback -  The library returns KMC_SUCCESS.
 *  errorCallback   -  Error message would contain the appropriate error description. Possible error is KmcException,JSONException.
 *  progressCallback - A JSON object contain submission job id and progress percent.
 *
 *  Return Params:
 *  submissionJobID - Provides the job id of a submit. It is required to cancel the submission operation.
 *  progressPercent   - Provides the progress of a submit, after the submitDocument method is called.
 *  The library provides a percentage progress update after each page submitted. If there is only one page in the document,
 *  you will get one session submitting event of 1%, then a submit complete with a progressPercent of 100%.
 *  If there are two images in the document, you will get one session submitting event with 1%, followed by another session submitting with percent of a greater amount, depending on the total size of all images, followed by a submit completed with a percent of 100%.
 *  The progress percent value is computed by using a sum total of the size of all the images in the document. When a page is submitted, the partial amount submitted is divided by the sum total to provide the progress percent. Therefore,
 *  you may see the percent progress updates in a non-linear progression, especially when the image size of all the pages varies greatly.
 *
 * @example
 * var captureServer = null;
 * kfxCordova.kfxLibLogistics.createCaptureServer(function(captureServerObj){
 *      captureServer = captureServerObj;
 * },function(error){
 *      alert(JSON.stringify(error));
 * },{serverUrl:"valid url",serverType:"SERVER_KFS"});
 *
 * var progressCallback = function(result){
 *     alert(JSON.stringify(result));
 * };
 * captureServer.addProgressListener(function(success){
 *     alert(JSON.stringify(success));
 * },function(progressError){
 *     alert(JSON.stringify(progressError));
 * },progressCallback);
 */

CaptureServer.prototype.addProgressListener = function (successCallback, errorCallback, progressCallback) {
	ActionUtils.exec(
		function (result) {
			if (result.eventType === "eventRegistered") {
				if (successCallback) successCallback(result);
			} else if (result.eventType === "eventRaised") {
				if (progressCallback) progressCallback(result);
			}
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kloCaptureServeraddProgressListener,
		[]
	);
};

/// Remove the Progress listener.
/**
 * Method to remove the progress listener
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions.
 *  successCallback -  The library returns KMC_SUCCESS.
 *  errorCallback   -  Error message would contain the appropriate error description. Possible error is KmcException,JSONException.
 *
 * @example
 * var captureServer = null;
 * kfxCordova.kfxLibLogistics.createCaptureServer(function(captureServerObj){
 *      captureServer = captureServerObj;
 * },function(error){
 *      alert(JSON.stringify(error));
 * },{serverUrl:"valid url",serverType:"SERVER_KFS"});
 *
 * captureServer.removeProgressListener(function(success){
 *      alert(JSON.stringify(success));
 * },function(progressError){
 *      alert(JSON.stringify(progressError));
 * });
 */
CaptureServer.prototype.removeProgressListener = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kloCaptureServerremoveProgressListener,
		[]
	);
};

///Submit a Document to the server.
/**
 * Use the submit document method to submit a Document object to the server to which you already established a connection using login.
 * You can only submit a document after you have previously registered with the server and logged in.
 * This method checks the document to see if it is composed of pages with valid images. It also checks if all images in the document are represented by a file,
 * because images that only contain a bitmap (or none at all) cannot be submitted. If the document has anything invalid within it, the library immediately returns an error,
 * Otherwise, the submission begins, in which case the library calls your progress listener to notify you about submission progress and submission job id.
 * The library calls your progress listener several times to indicate the percent completed and success callback when submission completes.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {String} documentID - Refers to the Document object id containing pages and fields that you want to submit.
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions.
 *  successCallback -  The library returns KMC_SUCCESS if the submission completes successfully.
 *  errorCallback   -  Error will be returned.
 *  progressCallback - Progress percent and submission job id will be returned.
 *  if you have not yet set a valid license.
 *  if you are in the process of submitting, registering, logging in or out, or getting document properties.
 *  if you have not yet registered your device. Use the register and login methods before submitting.
 *  if you have not logged into the server before trying to submit.
 *  if the current session state required for document submission is unknown or unexpected.
 *  if the document parameter is nil, or if no pages exist, or if one or more pages have no images.
 *  if the current index in a page does not reference an existing image within that page.
 *  if the image representation of an image associated with a page is incorrect for submitting, like a bitmap representation or an empty image object. Images must be of a FILE representation to be submitted.
 *  if an image object of a page in the document has an invalid mimetype specified.
 *  if an image object in a page contains a PNG image. You can only submit TIFF and JPG images.
 *
 * @see Check the 'errorCallback' method for any failures in case of unexpected behaviour of the method. Generally the error call back
 * would return a JSON object with 'ErrorMsg' & 'ErrorDesc' giving the description of the error.
 *
 * @example
 * var captureServer = null;
 * kfxCordova.kfxLibLogistics.createCaptureServer(function(captureServerObj){
 *      captureServer = captureServerObj;
 * },function(error){
 *      alert(JSON.stringify(error));
 * },{serverUrl:"valid url",serverType:"SERVER_KFS"});
 *
 * var documentTypesArray = null;
 * captureServer.loginAnonymously(function(success){
 *      documentTypesArray = success;
 * },function(registerError){
 *      alert(JSON.stringify(registerError));
 * });
 *
 * kfxCordova.kfxLibLogistics.createDocumentWithDocumentType(function(docObject){
 *      //Add pages and images to the Document.
 *      captureServer.submitDocument(function(submitDocumentSuccess){
 *           alert(JSON.stringify(submitDocumentSuccess));
 *      },function(submitDocumentError){
 *           alert(JSON.stringify(submitDocumentError));
 *      },docObject.documentID);
 * },function(createDocumentError){
 *      alert(JSON.stringify(createDocumentError));
 * },documentTypesArray[0]);
 */
CaptureServer.prototype.submitDocument = function (successCallback, errorCallback, documentID) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kloCaptureServerSubmitDocument,
		[documentID]
	);
};

///Get a DocumentType Object.
/**
 * This is an asynchronous operation to get the fields associated with this document type, as well as the image processing operations to perform on images associated with this document type.
 * Use the getDocumentType method to send off a request to communicate with the server in order to create a DocumentType object, by using the given documentTypeName parameter.
 * You will receive the DocumentType object in successCallback. From this document type object, you can create a Document object.
 * Once you get the document type object, you will find the array of field types that indicate the data items associated with this document type. You will later fill in actual document fields with run-time data obtained from your app and your app user.
 * Fields are data items that are changeable in the document object, and these data items are sent to the server with the images during a document submission.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {String} documentTypeName - references the document type name string, which was obtained from an element in the document types list returned by the {@link CaptureServer#login login} or {@link CaptureServer#loginAnonymously loginAnonymously} method.
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions.
 *  successCallback -  The library returns KMC_SUCCESS.
 *  errorCallback   -  Error message would contain the appropriate error description. Possible error is KmcException,JSONException.
 *
 * @see {@link CaptureServer#login} and {@link CaptureServer#loginAnonymously loginAnonymously}
 *
 * @example
 * var captureServer = null;
 * kfxCordova.kfxLibLogistics.createCaptureServer(function(captureServerObj){
 *      captureServer = captureServerObj;
 * },function(error){
 *      alert(JSON.stringify(error));
 * },{serverUrl:"valid url",serverType:"SERVER_KFS"});
 *
 * var documentTypesArray = nil, index = 0;
 * captureServer.loginAnonymously(function(documentTypeList){
 *     documentTypesArray = documentTypeList;
 * },function(documentListError){
 *      alert(JSON.stringify(loginError));
 * });
 *
 * //After getting documentTypesArray only we have to call this method otherwise it will give an error
 * captureServer.getDocumentType(function(documentTypeObject){
 *      alert(JSON.stringify(documentTypeObject));
 * },function(getDocumentTypeError){
 *      alert(JSON.stringify(getDocumentTypeError));
 * },documentTypesArray[index]);     //index is selected documentType
 */
CaptureServer.prototype.getDocumentType = function (successCallback, errorCallback, documentTypeName) {
	ActionUtils.exec(
		function (result) {
			var docTypeObj = new DocumentTypeObject(result);
			if (successCallback) successCallback(docTypeObj);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kloCaptureServerGetDocumentType,
		[documentTypeName]
	);
};

///Set the properties of the Capture server.
/**
 * Method to set the options of the Capture server.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Object} serverOptions - A JSON object contains the options of the capture server.
 *
 * @param {Number} [serverOptions.serverTimeout = 20]
 *     timeout for the capture server
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions.
 *  successCallback -  The library returns KMC_SUCCESS.
 *  errorCallback   -  Error message would contain the appropriate error description. Possible error is KmcException,JSONException.
 *
 * @example
 * var serverOptions={
 *     serverTimeout:20
 * };
 * var captureServer = null;
 * kfxCordova.kfxLibLogistics.createCaptureServer(function(captureServerObj){
 *      captureServer = captureServerObj;
 * },function(error){
 *      alert(JSON.stringify(error));
 * },{serverUrl:"valid url",serverType:"SERVER_KFS"});
 *
 * captureServer.setProperties(function(success){
 *      alert(JSON.stringify(success));
 * },function(error){
 *      alert(JSON.stringify(error));
 * },serverOptions);
 */
CaptureServer.prototype.setProperties = function (successCallback, errorCallback, serverOptions) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kloCaptureServerSetProperties,
		[serverOptions]
	);
};
///Get the properties of the Capture server.
/**
 * Method to get the options of the Capture server.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions.
 *  successCallback -  The library returns the serverOptions.
 *  errorCallback   -  Error message would contain the appropriate error description. Possible error is KmcException,JSONException.
 *
 * @example
 * var captureServer = null;
 * kfxCordova.kfxLibLogistics.createCaptureServer(function(captureServerObj){
 *      captureServer = captureServerObj;
 * },function(error){
 *      alert(JSON.stringify(error));
 * },{serverUrl:"valid url",serverType:"SERVER_KFS"});
 *
 * captureServer.getProperties(function(serverOptions){
 *     alert(JSON.stringify(serverOptions));
 * },function(error){
 *     alert(JSON.stringify(error));
 * });
 */

CaptureServer.prototype.getProperties = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.kloCaptureServerGetProperties,
		[]
	);
};

//End of Front Office Server
module.exports = CaptureServer;
