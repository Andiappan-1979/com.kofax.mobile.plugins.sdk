//
// kfxMobilePlugin.js
//
//  Copyright (c) 2012 - 2021 Kofax. Use of this code is with permission pursuant to Kofax license terms.

var kfxVersion = "3.7";
var ActionUtils = require("./kfxMobilePlugin.ActionUtils");

//plugin methods
/**
 * we have declared the plugin name in plugin.xml file
 *
 * @namespace
 * @alias kfxCordova
 */
var kfxCordova = {};

var License = require("./kfxMobilePlugin.License");
var AppStatsObject = require("./kfxMobilePlugin.AppStatsObject");
var Logging = require("./kfxMobilePlugin.Logging");
/**
 * @class
 * @alias kfxCordova.kfxUtilities
 */
kfxCordova.kfxUtilities = {
	/**
	 * this method is used to get the instance of license
	 *
	 * @memberof kfxCordova.kfxUtilities
	 *
	 * @example
	 * var licenseInstance = kfxCordova.kfxUtilities.createLicense();
	 */
	createLicense: function () {
		return new License();
	},
	/**
	 * this method is used to get the instance of app stats object
	 *
	 * @memberof kfxCordova.kfxUtilities
	 *
	 * @example
	 * var appStatsInstance = kfxCordova.kfxUtilities.createAppStatsObject();
	 */
	createAppStatsObject: function () {
		return new AppStatsObject();
	},
	/**
	 * this method is used to get the instance of logging
	 *
	 * @memberof kfxCordova.kfxUtilities
	 *
	 * @example
	 * var loggingInstance = kfxCordova.kfxUtilities.createLogging();
	 */
	createLogging: function () {
		return new Logging();
	},
};

var FieldTypeObject = require("./kfxMobilePlugin.FieldTypeObject");
var FieldObject = require("./kfxMobilePlugin.FieldObject");
var DocumentObject = require("./kfxMobilePlugin.DocumentObject");
var DocumentTypeObject = require("./kfxMobilePlugin.DocumentTypeObject");
var DocumentTypesArray = require("./kfxMobilePlugin.DocumentTypesArray");
var DocumentsArray = require("./kfxMobilePlugin.DocumentsArray");
var PageObject = require("./kfxMobilePlugin.PageObject");
var PagesArray = require("./kfxMobilePlugin.PagesArray");
var UserProfileObject = require("./kfxMobilePlugin.UserProfileObject");
var CaptureServer = require("./kfxMobilePlugin.CaptureServer");
var ServerExtractor = require("./kfxMobilePlugin.ServerExtractor");
/**
 * @class
 * @ 
 * @alias kfxCordova.kfxLibLogistics
 */
kfxCordova.kfxLibLogistics = {
	/**
	 * this method is used to get the instance of capture server
	 *
	 * @memberof kfxCordova.kfxLibLogistics
	 *
	 * @param {Function} successCallback - Default Success Call back function name
	 * @param {Function} errorCallback - Default Error call back function name
	 * @param {Object} parameters - A JSON object contains server url and servertype to create capture server
	 *
	 * @param {String} [parameters.serverUrl = ""]
	 *     Url which is used to connect to the capture server
	 *
	 * @param {String} [parameters.serverType = ""]
	 *     Type of the capture server. It is either "SERVER_KFS" or "SERVER_KTA".
	 *
	 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
	 * successCallback -   KMC_SUCCESS success call back jsonArray of page ids.
	 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Exception,KmcException,JSONException.
	 * @example
	 * var captureServerObject = null;
	 * var parameters = {serverUrl:"Valid Url",serverType:"SERVER_KFS"};
	 * var captureServerInstance = kfxCordova.kfxLibLogistics.createCaptureServer(function(captureObj){
	 *       captureServerObject = captureObj;
	 * },function(error){
	 *       alert(JSON.stringify(error));
	 * },parameters);
	 */
	createCaptureServer: function (successCallback, errorCallback, parameters) {
		ActionUtils.exec(
			function (result) {
				var captureServer = new CaptureServer();
				if (successCallback) successCallback(captureServer);
			},
			function (error) {
				if (errorCallback) errorCallback(error);
			},
			ActionUtils.serviceName,
			ActionUtils.kloCaptureServerCreate,
			[parameters]
		);
	},
	/**
	 * this method is used to get the instance of field type instance
	 *
	 * @memberof kfxCordova.kfxLibLogistics
	 *
	 * @example
	 * var fieldTypeInstance = kfxCordova.kfxLibLogistics.createFieldTypeObject();
	 */
	createFieldTypeObject: function () {
		return new FieldTypeObject();
	},
	/**
	 * this method is used to get the instance of field object
	 *
	 * @memberof kfxCordova.kfxLibLogistics
	 *
	 * @example
	 * var fieldInstance = kfxCordova.kfxLibLogistics.createFieldObject();
	 */
	createFieldObject: function () {
		return new FieldObject();
	},
	/**
	 * this method is used to get the instance of document types array
	 *
	 * @memberof kfxCordova.kfxLibLogistics
	 *
	 * @example
	 * var documentTypesArrayInstance = kfxCordova.kfxLibLogistics.createDocumentTypesArray();
	 */
	createDocumentTypesArray: function () {
		return new DocumentTypesArray();
	},
	/**
	 * this method is used to get the instance of documents array
	 *
	 * @memberof kfxCordova.kfxLibLogistics
	 *
	 * @example
	 * var documentsArrayInstance = kfxCordova.kfxLibLogistics.createDocumentsArray();
	 */
	createDocumentsArray: function () {
		return new DocumentsArray();
	},
	/**
	 * this method is used to get the instance of pages array
	 *
	 * @memberof kfxCordova.kfxLibLogistics
	 *
	 * @example
	 * var pagesArrayInstance = kfxCordova.kfxLibLogistics.createPagesArray();
	 */
	createPagesArray: function () {
		return new PagesArray();
	},
	/**
	 * Method to Create new page object
	 *
	 * @memberof kfxCordova.kfxLibLogistics
	 *
	 * @param {Function} successCallback - Default Success Call back function name
	 * @param {Function} errorCallback - Default Error call back function name
	 * @param {Object} pageproperties - A JSON object contains the properties of the page object.
	 *
	 * @param {String} {pageproperties.side = "FRONT"}
	 *       what type of page you want to create i.e, front or back
	 *
	 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
	 * successCallback -  Gets the created pageObject.
	 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Exception,KmcException,JSONException.
	 *
	 * @example
	 * var pageObject = null;
	 * kfxCordova.kfxLibLogistics.createPageObject(function(pageObj){
	 *       pageObject = pageObj;
	 * },function(error){
	 *       alert(JSON.stringify(error));
	 * },{side:"FRONT"});// use side:"BACK" to create back side image
	 */
	createPageObject: function (successCallback, errorCallback, parameters) {
		ActionUtils.exec(
			function (result) {
				var pageObj = new PageObject(result);
				if (successCallback) successCallback(pageObj);
			},
			function (error) {
				if (errorCallback) errorCallback(error);
			},
			ActionUtils.serviceName,
			ActionUtils.kloCreatePageObject,
			[parameters]
		);
	},
	/**
	 * this method is used to create the document type
	 *
	 * @memberof kfxCordova.kfxLibLogistics
	 *
	 * @param {Function} successCallback - Default Success Call back function name
	 * @param {Function} errorCallback - Default Error call back function name
	 * @param {Array} fieldTypesArray - list of field types
	 *
	 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
	 * successCallback -   KMC_SUCCESS success call back jsonArray of page ids.
	 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Exception,KmcException,JSONException.
	 *
	 * @example
	 * var createdDocument = null;
	 * var captureServer = null;
	 * var documentTypesArray = null;
	 * kfxCordova.kfxLibLogistics.createCaptureServer(function(captureServerObj){
	 *      captureServer = captureServerObj;
	 * },function(error){
	 *      alert(JSON.stringify(error));
	 * },{serverUrl:"valid url",serverType:"SERVER_KFS"});
	 *
	 * captureServer.registerDevice(function(success){
	 *      captureServer.loginAnonymously(function(success){
	 *          documentTypesArray = success;
	 *      },function(registerError){
	 *          alert(JSON.stringify(registerError));
	 *      });
	 * },function(registerError){
	 *      alert(JSON.stringify(registerError));
	 * });
	 * var documentType = documentTypesArray[0];
	 * var kfsdocumentTypeReadyCallback = function(documentType){
	 *   kfxCordova.kfxLibLogistics.createDocumentTypeObjectFromFieldTypes(function(success){
	 *       alert(JSON.stringify(success));
	 *   },function(error){
	 *       alert(JSON.stringify(error));
	 *   },documentType.fieldTypesArray);
	 * };
	 */
	createDocumentTypeObjectFromFieldTypes: function (successCallback, errorCallback, fieldTypes) {
		ActionUtils.exec(
			function (result) {
				var documentTypeObj = new DocumentTypeObject(result);
				if (successCallback) successCallback(documentTypeObj);
			},
			function (error) {
				if (errorCallback) errorCallback(error);
			},
			ActionUtils.serviceName,
			ActionUtils.kloCreateDocumentTypeWithFieldTypes,
			[fieldTypes]
		);
	},
	/**
	 * Method to Create document using documentType and add in DocumentsArray.
	 *
	 * @memberof kfxCordova.kfxLibLogistics
	 *
	 * @param {Function} successCallback - Default Success Call back function name
	 * @param {Function} errorCallback - Default Error call back function name
	 * @param {String} docTypeName - A JSON object contains the documenttype name.
	 *
	 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
	 * successCallback -  The library returns KMC_SUCCESS.
	 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Exception,KmcException,JSONException.
	 *
	 * @example
	 * var createdDocument = null;
	 * var captureServer = null;
	 * var documentTypesArray = null;
	 * kfxCordova.kfxLibLogistics.createCaptureServer(function(captureServerObj){
	 *      captureServer = captureServerObj;
	 * },function(error){
	 *      alert(JSON.stringify(error));
	 * },{serverUrl:"valid url",serverType:"SERVER_KFS"});
	 *
	 * captureServer.registerDevice(function(success){
	 *      captureServer.loginAnonymously(function(success){
	 *          documentTypesArray = success;
	 *      },function(registerError){
	 *          alert(JSON.stringify(registerError));
	 *      });
	 * },function(registerError){
	 *      alert(JSON.stringify(registerError));
	 * });
	 * var documentType = documentTypesArray[0];
	 * var kfsdocumentTypeReadyCallback = function(documentType){
	 *   kfxCordova.kfxLibLogistics.createDocumentWithDocumentType(function(docObject){
	 *       createdDocument = docObject;
	 *   },function(error){
	 *       alert(JSON.stringify(error));
	 *   },documentType.typeName);
	 * };
	 */
	createDocumentWithDocumentType: function (successCallback, errorCallback, documentType) {
		ActionUtils.exec(
			function (result) {
				var docObj = new DocumentObject(result);
				if (successCallback) successCallback(docObj);
			},
			function (error) {
				if (errorCallback) errorCallback(error);
			},
			ActionUtils.serviceName,
			ActionUtils.kloCreateDocumentWithDocumentType,
			[documentType]
		);
	},
	/**
	 * Method to Create document using documentType and id and add in DocumentsArray.
	 *
	 * @memberof kfxCordova.kfxLibLogistics
	 *
	 * @param {Function} successCallback - Default Success Call back function name
	 * @param {Function} errorCallback - Default Error call back function name
	 * @param {Object} docTypeNameAndId :A JSON object contains the documenttype name and id.
	 *
	 * @return The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
	 * successCallback -  The library returns KMC_SUCCESS.
	 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Exception,KmcException,JSONException.
	 *
	 * @example
	 * var createdDocument = null;
	 * var captureServer = null;
	 * var documentTypesArray = null;
	 * kfxCordova.kfxLibLogistics.createCaptureServer(function(captureServerObj){
	 *      captureServer = captureServerObj;
	 * },function(error){
	 *      alert(JSON.stringify(error));
	 * },{serverUrl:"valid url",serverType:"SERVER_KFS"});
	 *
	 * captureServer.registerDevice(function(success){
	 *      captureServer.loginAnonymously(function(success){
	 *          documentTypesArray = success;
	 *      },function(registerError){
	 *          alert(JSON.stringify(registerError));
	 *      });
	 * },function(registerError){
	 *      alert(JSON.stringify(registerError));
	 * });
	 * var documentType = documentTypesArray[0];
	 * var kfsdocumentTypeReadyCallback = function(documentType){
	 *   kfxCordova.kfxLibLogistics.createDocumentWithDocumentTypeAndId(function(docObject){
	 *       createdDocument = docObject;
	 *   },function(error){
	 *       alert(JSON.stringify(error));
	 *   },{ documentTypeName:documentType.typeName,documentID: "document id what do you want to give"});
	 * };
	 */
	createDocumentWithDocumentTypeAndId: function (successCallback, errorCallback, parameters) {
		ActionUtils.exec(
			function (result) {
				var docObj = new DocumentObject(result);
				if (successCallback) successCallback(docObj);
			},
			function (error) {
				if (errorCallback) errorCallback(error);
			},
			ActionUtils.serviceName,
			ActionUtils.kloCreateDocumentWithDocumentTypeAndId,
			[parameters]
		);
	},
	/**
	 * this method is used to get the instance of user profile object
	 *
	 * @memberof kfxCordova.kfxLibLogistics
	 *
	 * @example
	 * var userProfileInstance = kfxCordova.kfxLibLogistics.createUserProfileObject();
	 */
	createUserProfileObject: function () {
		return new UserProfileObject();
	},

	/**
	 * This method is used to get the instance of server Extractor. It expects type of the server and server url.
	 * The newly created object is retained and the old one would be destroyed.
	 * For example if you create serverExtractor object using RTTI type and subsequently create serverExtractor object using KTA type,only KTA type object will exist.
	 *
	 * @memberof kfxCordova.kfxLibLogistics
	 *
	 * @param {Function} successCallback - Default Success call back function name
	 * @param {Function} errorCallback - Default Error call back function name
	 * @param {Object} parameters - JSON object which contains server type and server url to create server extractor
	 * @param {String} [parameters.serverType] - Type of the server. It is either "SERVER_RTTI" or "SERVER_KTA".
	 * @param {String} [parameters.serverUrl] - Valid server url which is used to create , login and extract data from server.
	 *
	 * @return
	 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
	 * successCallback -  KMC_SUCCESS success call back will contain the created ServerExtractor.
	 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Wrong Parameters,KmcRuntimeException,Exception.
	 *
	 * @see Check the 'errorCallback' method for any failures in case of unexpected behaviour of the method. Generally the error call back
	 * would return a JSON object with ErrorMsg & ErrorDesc' giving the description of the error.
	 *
	 * @example
	 *   var constructorOptions = {serverType:"SERVER_KTA",serverUrl:"Enter server url"};
	 *   var extractor = null;
	 *   kfxCordova.kfxLibLogistics.createServerExtractor(function(serverExtractor){
	 *       extractor = serverExtractor;
	 *
	 *   },function(error){
	 *       alert(JSON.stringify(error));
	 *   },constructorOptions);
	 */
	createServerExtractor: function (successCallback, errorCallback, parameters) {
		ActionUtils.exec(
			function (result) {
				var serverExtractor = new ServerExtractor();
				if (successCallback) successCallback(serverExtractor);
			},
			function (error) {
				if (errorCallback) errorCallback(error);
			},
			ActionUtils.serviceName,
			ActionUtils.kloServerExtractorCreate,
			[parameters]
		);
	},
};

var ImageCaptureControl = require("./kfxMobilePlugin.ImageCaptureControl");
var CheckCaptureExperience = require("./kfxMobilePlugin.CheckCaptureExperience");
var DocumentCaptureExperience = require("./kfxMobilePlugin.DocumentCaptureExperience");
var PassportCaptureExperience = require("./kfxMobilePlugin.PassportCaptureExperience");
var BarcodeCaptureControl = require("./kfxMobilePlugin.BarcodeCaptureControl");
var ImageReviewControl = require("./kfxMobilePlugin.ImageReviewControl");
var FixedAspectRatioCaptureExperience = require("./kfxMobilePlugin.FixedAspectRatioCaptureExperience");
var SelfieCaptureExperience = require("./kfxMobilePlugin.SelfieCaptureExperience");
var QuickExtractorAgent = require("./kfxMobilePlugin.QuickExtractorAgent");

/**
 * @class
 * @alias kfxCordova.kfxUicontrols
 */
kfxCordova.kfxUicontrols = {
	/**
	 * this method is used to get the instance of barcode capture control
	 *
	 * @memberof kfxCordova.kfxUicontrols
	 *
	 * @example
	 * var barcodeCaptureControlInstance = kfxCordova.kfxUicontrols.createBarcodeCaptureControl();
	 */
	createBarcodeCaptureControl: function () {
		return new BarcodeCaptureControl();
	},
	/**
	 * this method is used to get the instance of image capture control
	 *
	 * @memberof kfxCordova.kfxUicontrols
	 *
	 * @example
	 * var imageCaptureControlInstance = kfxCordova.kfxUicontrols.createImageCaptureControl();
	 */
	createImageCaptureControl: function () {
		return new ImageCaptureControl();
	},
	/**
	 * this method is used to get the instance of image review control
	 *
	 * @memberof kfxCordova.kfxUicontrols
	 *
	 * @example
	 * var imageReviewControlInstance = kfxCordova.kfxUicontrols.createImageReviewControl();
	 */
	createImageReviewControl: function () {
		return new ImageReviewControl();
	},

	/**
	 * this method is used to get the instance of check capture experience
	 *
	 * @memberof kfxCordova.kfxUicontrols
	 *
	 * @example
	 * var checkCaptureExperienceInstance = kfxCordova.kfxUicontrols.createCheckCaptureExperience();
	 */
	createCheckCaptureExperience: function () {
		return new CheckCaptureExperience();
	},

	/**
	 * this method is used to get the instance of fixed aspect ratio capture experience
	 *
	 * @memberof kfxCordova.kfxUicontrols
	 *
	 * @example
	 * var fixedAspectRatioCaptureExperienceInstance = kfxCordova.kfxUicontrols.createFixedAspectRatioCaptureExperience();
	 */
	createFixedAspectRatioCaptureExperience: function () {
		return new FixedAspectRatioCaptureExperience();
	},

	/**
	 * this method is used to get the instance of document capture experience
	 *
	 * @memberof kfxCordova.kfxUicontrols
	 *
	 * @example
	 * var documentCaptureExperienceInstance = kfxCordova.kfxUicontrols.createDocumentCaptureExperience();
	 */
	createDocumentCaptureExperience: function () {
		return new DocumentCaptureExperience();
	},
	/**
	 * this method is used to get the instance of passport capture experience
	 *
	 * @memberof kfxCordova.kfxUicontrols
	 *
	 * @example
	 * var passportCaptureExperienceInstance = kfxCordova.kfxUicontrols.createPassportCaptureExperience();
	 */
	createPassportCaptureExperience: function () {
		return new PassportCaptureExperience();
	},
	/**
	 * this method is used to get the instance of Selfie capture experience
	 *
	 * @memberof kfxCordova.kfxUicontrols
	 *
	 * @example
	 * var selfieCaptureExperienceInstance = kfxCordova.kfxUicontrols.createSelfieCaptureExperience();
	 */
	createSelfieCaptureExperience: function () {
		return new SelfieCaptureExperience();
	},
	/**
	 * this method is used to get the instance of Quick Extractor Agent
	 *
	 * @memberof kfxCordova.kfxUicontrols
	 *
	 * @example
	 * var quickExtractorAgent = kfxCordova.kfxUicontrols.createQuickExtractorAgent();
	 */
	createQuickExtractorAgent: function () {
		return new QuickExtractorAgent();
	},
};

var ImageProcessor = require("./kfxMobilePlugin.ImageProcessor");
var ImageArray = require("./kfxMobilePlugin.ImageArray");
var ImageObject = require("./kfxMobilePlugin.ImageObject");
var OnDeviceExtraction = require("./kfxMobilePlugin.OnDeviceExtraction");
var ServerProjectProvider = require("./kfxMobilePlugin.ServerProjectProvider");
var LocalProjectProvider = require("./kfxMobilePlugin.LocalProjectProvider");
var BundleCacheProvider = require("./kfxMobilePlugin.BundleCacheProvider");
var QuickExtractor = require("./kfxMobilePlugin.QuickExtractor");
var GlareRemover = require("./kfxMobilePlugin.GlareRemover");
var MRZResult = require("./kfxMobilePlugin.MRZResult");
var NFCTagData = require("./kfxMobilePlugin.NFCTagData");
var NFCTagParameters = require("./kfxMobilePlugin.NFCTagParameters");
var NFCTagReader = require("./kfxMobilePlugin.NFCTagReader");
/**
 * @class
 * @alias kfxCordova.kfxEngine
 */
kfxCordova.kfxEngine = {
	/**
	 * this method is used to get the instance of image processor
	 *
	 * @memberof kfxCordova.kfxEngine
	 *
	 * @example
	 * var imageProcessorInstance = kfxCordova.kfxEngine.createImageProcessor();
	 */
	createImageProcessor: function () {
		return new ImageProcessor();
	},
	/**
	 * this method is used to get the instance of image array
	 *
	 * @memberof kfxCordova.kfxEngine
	 *
	 * @example
	 * var imageArrayInstance = kfxCordova.kfxEngine.createImageArray();
	 */
	createImageArray: function () {
		return new ImageArray();
	},
	/**
	 * this method is used to get the instance of glare remover
	 *
	 * @memberof kfxCordova.kfxEngine
	 *
	 * @example
	 * var glareRemoverInstance = kfxCordova.kfxEngine.createGlareRemover();
	 */
	createGlareRemover: function () {
		return new GlareRemover();
	},
	/**
	 * this method is used to get the instance of NFC Tag Reader
	 *
	 * @memberof kfxCordova.kfxEngine
	 *
	 * @example
	 * var nfcTagReaderInstance = kfxCordova.kfxEngine.createNFCTagReader();
	 */
	createNFCTagReader: function () {
		return new NFCTagReader();
	},
	/**
	 * this method is used to get the instance of NFC Tag Parameters
	 *
	 * @memberof kfxCordova.kfxEngine
	 *
	 * @param {Object} properties - NFC Tag Parameters properties. Which are used to create NFC Tag Parameters object.
	 * @param {String} properties.idNumber - Document Id Number.
	 * @param {String} properties.expirationDate - Document Expiration Date. It should be in "YYDDMM" format.
	 * @param {String} properties.dateOfBirth - Date of Birth in the Document. It should be in "YYDDMM" format.
	 *
	 * @example
	 * var properties = {
	 *      idNumber : "Document Id Number",
	 *      expirationDate : "Expiration Date",
	 *      dateOfBirth : "Date Of Birth"
	 * };
	 * var nfcTagParametersInstance = kfxCordova.kfxEngine.createNFCTagParameters(properties);
	 */
	createNFCTagParameters: function (properties) {
		return new NFCTagParameters(properties);
	},
	/**
	 * this method is used to get the instance of NFC Tag Data
	 *
	 * @memberof kfxCordova.kfxEngine
	 *
	 * @param {Object} properties - NFC Tag Data properties. Which are used to create NFC Tag Data object.
	 * @param {MRZResult} properties.mrzResult - This mrz result will have information like document code, issuing code, given name and document number etc.
	 * @param {String} properties.faceImage - It is a base64 string. Which contains the high quality face image which is available in NFC chip.
	 * @param {ArrayBuffer} properties.documentSecurityObject - This contains document security object data.his will be the documentSecurityObject from the Passport and will be used to do a certificate validation externally.
	 *
	 * @example
	 * var properties = {
	 *      mrzResult: kfxCordova.kfxEngine.createMRZResult(),
	 *      faceImage: "Face Image Base64 string",
	 *      documentSecurityObject: "Document Security Array Buffer Object"
	 * };
	 * var nfcTagDataInstance = kfxCordova.kfxEngine.createNFCTagData(properties);
	 */
	createNFCTagData: function (properties) {
		return new NFCTagData(properties);
	},
	/**
	 * this method is used to get the instance of MRZ Result
	 *
	 * @memberof kfxCordova.kfxEngine
	 *
	 * @param {Object} properties - MRZ Result properties. Which are used to create the MRZ Result object.
	 * @param {String} properties.mrz - This value contains mrz raw data which is available on the document.
	 * @param {String} properties.documentCode - This value contains document code.
	 * @param {String} properties.issuingStateCode - This value contains issuing state code of the document.
	 * @param {String} properties.documentNumber - This value contains document number of the document.
	 * @param {String} properties.personalNumber - This value contains personal number of the document.
	 * @param {String} properties.gender - This value contains gender information.
	 * @param {String} properties.givenNames - This value contains given name.
	 * @param {String} properties.surname - This value contains sur name.
	 * @param {String} properties.nationalityCode - This value contains nationality code.
	 * @param {String} properties.dateOfBirth - This value contains the date of birth which is in "YYMMDD" format.
	 * @param {String} properties.dateOfExpiry -  This value contains the date of expiration of the document which is in "YYMMDD" format.
	 *
	 * @example
	 * var properties = {
	 *      mrz:"MRZ Data",
	 *      documentCode:"Document Code",
	 *      issuingStateCode: "Issuing State Code",
	 *      documentNumber: "Document Number",
	 *      personalNumber: "Personal Number",
	 *      gender: "Gender",
	 *      givenNames: "Given Names",
	 *      surname: "Surname",
	 *      nationalityCode: "Nationality Code",
	 *      dateOfBirth: "Date of Birth"
	 * };
	 * var mrzResultInstance = kfxCordova.kfxEngine.createMRZResult(properties);
	 */
	createMRZResult: function (properties) {
		return new MRZResult(properties);
	},
	/**
	 * this method is used to get the instance of image object
	 *
	 * @memberof kfxCordova.kfxEngine
	 *
	 * @example
	 * var imageObjectInstance = kfxCordova.kfxEngine.createImageObject();
	 */
	createImageObject: function (image) {
		return new ImageObject(image);
	},
	/**
	 * this method is used to get the instance of on device extraction
	 *
	 * @memberof kfxCordova.kfxEngine
	 *  
	 *
	 * @example
	 * var onDeviceExtractionInstance = kfxCordova.kfxEngine.createOnDeviceExtraction();
	 */
	createOnDeviceExtraction: function () {
		return new OnDeviceExtraction();
	},
	/**
	 * this method is used to get the instance of Quick Extractor
	 *
	 * @memberof kfxCordova.kfxEngine
	 *  
	 *
	 * @example
	 * var quickExtractorInstance = kfxCordova.kfxEngine.createQuickExtractor();
	 */
	createQuickExtractor: function () {
		return new QuickExtractor();
	},

	/**
	 * this method is used to get the instance of server project provider
	 *
	 * @memberof kfxCordova.kfxEngine
	 *  
	 *
	 * @param {Function} successCallback - Default Success call back function name
	 * @param {Function} errorCallback - Default Error call back function name
	 * @param {String}   serverUrl-Initializes the object with server URL.
	 *
	 * @return
	 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
	 * successCallback -  KMC_SUCCESS success call back will contain the created serverCacheProvider.
	 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Wrong Parameters,KmcRuntimeException,Exception.
	 *
	 * @see Check the 'errorCallback' method for any failures in case of unexpected behaviour of the method. Generally the error call back
	 * would return a JSON object with ErrorMsg & ErrorDesc' giving the description of the error.
	 *
	 * @example
	 * function successCallback(provider){
	 * }
	 * function errorCallback(error){
	 *       alert(JSON.stringify(error));
	 * }
	 *
	 * @example
	 * var serverProviderInstance = kfxCordova.kfxEngine.createServerProjectProvider(successCallback,errorCallback,serverUrl);
	 */
	createServerProjectProvider: function (successCallback, errorCallback, serverUrl) {
		ActionUtils.exec(
			function (result) {
				var serverProjectProvider = new ServerProjectProvider();
				if (successCallback) successCallback(serverProjectProvider);
			},
			function (error) {
				if (errorCallback) errorCallback(error);
			},
			ActionUtils.serviceName,
			ActionUtils.kenServerProjectProvider,
			[serverUrl]
		);
	},

	/**
	 * this method is used to get the instance of local project provider
	 *
	 * @memberof kfxCordova.kfxEngine
	 *  
	 *
	 * @param {Function} successCallback - Default Success call back function name
	 * @param {Function} errorCallback - Default Error call back function name
	 * @param {String}   filePath - Path to the folder containing zip files.
	 *
	 * @return
	 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
	 * successCallback -  KMC_SUCCESS success call back will contain the created localCacheProvider.
	 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Wrong Parameters,KmcRuntimeException,Exception.
	 *
	 * @see Check the 'errorCallback' method for any failures in case of unexpected behaviour of the method. Generally the error call back
	 * would return a JSON object with ErrorMsg & ErrorDesc' giving the description of the error.
	 *
	 * @example
	 * function successCallback(provider){
	 *
	 * }
	 * function errorCallback(error){
	 *       alert(JSON.stringify(error));
	 * }
	 *
	 * @example
	 * var localProviderInstance = kfxCordova.kfxEngine.createLocalProjectProvider(successCallback,errorCallback,filePath);
	 */
	createLocalProjectProvider: function (successCallback, errorCallback, filePath) {
		ActionUtils.exec(
			function (result) {
				var localProjectProvider = new LocalProjectProvider();
				if (successCallback) successCallback(localProjectProvider);
			},
			function (error) {
				if (errorCallback) errorCallback(error);
			},
			ActionUtils.serviceName,
			ActionUtils.kenLocalProjectProvider,
			[filePath]
		);
	},

	/**
	 * this method is used to get the instance of bundle cache provider with the specified path
	 *
	 * @memberof kfxCordova.kfxEngine
	 *  
	 *
	 * @param {Function} successCallback - Default Success call back function name
	 * @param {Function} errorCallback - Default Error call back function name
	 * @param {String}   filePath - Path to the folder where cached files should be stored.
	 *
	 * @return
	 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
	 * successCallback -  KMC_SUCCESS success call back will contain the created bundleCacheProvider.
	 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Wrong Parameters,KmcRuntimeException,Exception.
	 *
	 * @see Check the 'errorCallback' method for any failures in case of unexpected behaviour of the method. Generally the error call back
	 * would return a JSON object with ErrorMsg & ErrorDesc' giving the description of the error.
	 *
	 * @example
	 * function successCallback(provider){
	 *
	 * }
	 * function errorCallback(error){
	 *       alert(JSON.stringify(error));
	 * }
	 *
	 * var bundleProviderInstance = kfxCordova.kfxEngine.createBundleCacheProvider(successCallback,errorCallback,filePath);
	 */
	createBundleCacheProvider: function (successCallback, errorCallback, filePath) {
		ActionUtils.exec(
			function (result) {
				var bundleCacheProvider = new BundleCacheProvider();
				if (successCallback) successCallback(bundleCacheProvider);
			},
			function (error) {
				if (errorCallback) errorCallback(error);
			},
			ActionUtils.serviceName,
			ActionUtils.kenBundleCacheProvider,
			[filePath]
		);
	},

	/**
	 * Method to convert an image in the form of base64string to a KEDImage. The KEDImage is stored in the ImageArray and the
	 * corresponding id is returned in the call back.
	 *
	 * @memberof kfxCordova.kfxEngine
	 *
	 * @param {Function} successCallback - Default Success call back function name
	 * @param {Function} errorCallback - Default Error call back function name
	 * @param {String} base64String - an input image in the form of base64 string to be converted to KEDImage
	 *
	 * @return
	 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
	 * successCallback -  KMC_SUCCESS success call back will have the image id of the converted KEDImage(from input base64 string).
	 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Wrong Parameters,KmcRuntimeException,Exception.
	 *
	 * @see Check the 'errorCallback' method for any failures in case of unexpected behaviour of the method. Generally the error call back
	 * would return a JSON object with ErrorMsg & ErrorDesc' giving the description of the error.
	 *
	 * @example
	 * function successCallback(response){
	 *       alert(JSON.stringify(response));
	 * }
	 * function errorCallback(error){
	 *       alert(JSON.stringify(error));
	 * }
	 * var imageArray = kfxCordova.kfxEngine.createImageFromBase64(successCallback,errorCallback, 'base64string');
	 */
	createImageFromBase64: function (successCallback, errorCallback, base64String) {
		ActionUtils.exec(
			function (result) {
				var imgObject = new ImageObject(result);
				if (successCallback) successCallback(imgObject);
			},
			function (error) {
				if (errorCallback) errorCallback(error);
			},
			ActionUtils.serviceName,
			ActionUtils.getImageFromBase64,
			[base64String]
		);
	},
	/**
	 * Method to create and store a KEDImage in the ImageArray. The KEDImage is created from the image specified in the input
	 * file location.
	 *
	 * @memberof kfxCordova.kfxEngine
	 *
	 * @param {Function} successCallback - Default Success call back function name
	 * @param {Function} errorCallback - Default Error call back function name
	 * @param {Object} options - variable representing a physical location of an image which need to be converted to a KEDImage
	 * @param {String} [options.filePath]
	 *    This value specifies a physical location of an image.
	 * @return
	 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
	 * successCallback -  KMC_SUCCESS success call back will have the image id of the converted KEDImage(from input image mentioned in the file path )
	 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Wrong Parameters,KmcRuntimeException,Exception.
	 *
	 * @see Check the 'errorCallback' method for any failures in case of unexpected behaviour of the method. Generally the error call back
	 * would return a JSON object with ErrorMsg & ErrorDesc' giving the description of the error.
	 *
	 * @example
	 * function successCallback(response){
	 *       alert(JSON.stringify(response));
	 * }
	 * function errorCallback(error){
	 *       alert(JSON.stringify(error));
	 * }
	 * var externalDirectoryPath = cordova.file.externalRootDirectory;
	 * var imageFilePath = externalDirectoryPath + "Download/myfile.jpg";
	 *
	 * var imageArray = kfxCordova.kfxEngine.createImageFromFilePath(successCallback,errorCallback, {"filePath":imageFilePath});
	 */
	createImageFromFilePath: function (successCallback, errorCallback, filePath) {
		ActionUtils.exec(
			function (result) {
				var imgObject = new ImageObject(result);
				if (successCallback) successCallback(imgObject);
			},
			function (error) {
				if (errorCallback) errorCallback(error);
			},
			ActionUtils.serviceName,
			ActionUtils.getImageFromFilepath,
			[filePath]
		);
	},
};

/// A getter  method  for the  Layout property
/**  A  method which would return a 'Layout' property used to create objects(of SDK) with certain frame. Set the values of the Layout object such as origin, width and height(& visibility) and pass as argument to create the
frame. 'Layout' is a common  object and can be used by any class/object.
 */
/**
 * this method is used to get the layout properties
 *
 * @memberof kfxCordova
 *
 * @example
 * var layoutProperties = kfxCordova.getLayoutProperties();
 */
kfxCordova.getLayoutProperties = function () {
	var layout = {
		x: 0,
		y: 0,
		width: 0,
		height: 0,
		visibility: true,
	};
	return layout;
};
/**
 * this method is used to get the point object
 *
 * @memberof kfxCordova
 *
 * @example
 * var point = kfxCordova.getPointProperties();
 */
kfxCordova.getPointProperties = function () {
	var point = {
		x: 0,
		y: 0,
	};
	return point;
};
/**
 *
 * this method is used to get the cordova version
 *
 * @memberof kfxCordova
 *
 * @example
 * var cordovaVersion = kfxCordova.getCordovaVersion();
 */
kfxCordova.getCordovaVersion = function () {
	return cordova.version;
};
/**
 * this method is used to get the plugin version
 *
 * @memberof kfxCordova
 *
 * @example
 * var pluginVersion = kfxCordova.getkfxPluginVersion();
 */
kfxCordova.getkfxPluginVersion = function () {
	return kfxVersion;
};
/**
 * this method is used to get all versions of sdk
 *
 * @memberof kfxCordova
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  success call back with ImageCapture Control ID
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are KmcRuntimeException,Exception.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * kfxCordova.getAllVersions(successCallback,errorCallback);
 */
kfxCordova.getAllVersions = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) {
				result["cordova " + cordova.platformId + " Version"] = cordova.version;
				result["kfxPluginVersion"] = kfxVersion;
				successCallback(result);
			}
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.getSDKVersions,
		[]
	);
};
//End of plugin methods

module.exports = kfxCordova;
