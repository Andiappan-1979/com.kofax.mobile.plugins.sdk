//
// ImageProcessor.js
//
//  Copyright (c) 2012 - 2021 Kofax. Use of this code is with permission pursuant to Kofax license terms.

var ActionUtils = require("./ActionUtils");
var ImageObject = require("./ImageObject");

/// A variable/Object to access the native SDK methods of ImageProcessor class(es)
/**
 * An instance of this class contains methods to process images. It holds the profile that specifies the kind of
 * image processing to perform based on a selected image processing profile. Use the methods on this object to do standard
 * image processing, perform a quick quality analysis and to find a signature in the image for a particular area.
 *
 * @class
 * @alias ImageProcessor
 * @constructor
 */
//ImageProcessor constructor and corresponding methods
var ImageProcessor = function () {};

/// To process the specified image.
/**
 * Use this method when you want to perform standard image processing on the image supplied with the method. The library
 * processes the image using the processing options contained in the profile you specified. You can specify either a basic
 * settings profile or an image perfection profile. If the input image representation is file based, and a bitmap is not supplied,
 * the library will load and process the image from the file in the image object. If the image is represented by a bitmap,
 * then the library uses that image, even if the image representation indicates both (bitmap and file).
 * License Required: this is a licensed method. You cannot use this method until you have set a valid SDK license. In order to set your license, you need to use the setMobileSDKLicense method on the kfxKUTLicensing object. You must obtain a valid license from Kofax in order to use licensed methods. An example of setting your license can be found in the licensing class.
 * This method generates a brand new kfxKEDImage object, if the image processing completes without error. The library notifies you by calling the imageOut delegate. The output image object does not retain much from the input image.
 * When the processing completes normally, the library sets the following output image object properties:
 * imageMimeType, to the MIMETYPE_UNKNOWN setting.
 * imageBitMap, to the new processed bitmap.
 * imageRepresentation, to IMAGE_REP_BITMAP, because the bitmap is stored.
 * imageSourceID, to the imageID of the input image.
 * imageMetaData, to the metadata created by the image processor.
 * imagePerfectionProfileUsed or basicSettingsProfileUsed, to the one that was used to produce the output image.
 * imageGPSLat, to the preserved latitude of the source input file.
 * imageGPSLon, to the preserved longitude of the source input file.
 * imageFileOutputColor, to the new color definition of the output image generated.
 * imageHeight, to the height of the new output image.
 * imageWidth, to the width of the new output image.
 * All other image object properties are set to the default.
 *
 * The output image jpegQuality specifies the JPEG quality for an output image file created by image processing. This is used only when both the following are true:
 * mimeType is set to MIMETYPE_JPEG, and
 * representation is set to IMAGE_REP_FILE or IMAGE_REP_BOTH.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {String}  imageID -the actual input image object that you want to process. An image id in the ImageArray is to be passes as argument
 *
 * @return
 *    The return value is captured in the 'successCallback' function. This method returns KMC_SUCCESS when the image processing was started up successfully.
 *    Several error codes are returned for this method when the image processing request could not be started, due to such things as memory limitations. In these cases, the method
 *    generates no final completion notification by calling your imageOut delegate. But, if the library returns KMC_SUCCESS, then image processing has started successfully.
 *    Your imageOut delegate is called after the image processing completes, in which case a processing error may be indicated in the delegate. So you should always check this
 *    return value to detect if you should expect progress delegate calls or completion delegate calls. One of these error codes may be returned immediately, in which case the
 *    background processing is not started.
 *
 *    The possible error codes are:
 *    KMC_IP_LICENSE_INVALID if you have not set a valid license yet.
 *    KMC_ED_NO_MEMORY_FOR_METADATA if memory could not be allocated to store image metadata.
 *    KMC_ED_NOIMAGE if you did not include an image in the input image object.
 *    KMC_IP_NO_PROFILE if you forgot to include a profile, either a basic settings or perfection profile.
 *    KMC_ED_FILEPATH if the image object is represented by a file, but the file path is missing.
 *    KMC_ED_NONEXISTENT_FILE If the file name in the input object was set to the name of a non-existent file, and you try to process it.
 *    KMC_IP_NO_REPRESENTATION if the image representation in the input image object is invalid.
 *    KMC_ED_IMAGE_COLOR_SPACE if the library could not create a color space reference, usually a system resource issue.
 *    KMC_ED_IMAGE_CONTEXT if an image bitmap could not be created, normally caused by a resource issue.
 *
 *    //ANDROID ERROR CODES
 *    NullPointerException    ('image' parameter is null).
 *    KmcRuntimeException (KMC_IP_NO_PROFILE).
 *    KmcRuntimeException (KMC_ED_NOIMAGE).
 *    KmcRuntimeException (KMC_ED_FILEPATH).
 *    KmcRuntimeException (KMC_ED_MIMETYPE).
 *    KmcRuntimeException (KMC_ED_IMAGE_PERFECTION_PROFILE_EMPTY).
 *    KmcException    (KMC_ED_NONEXISTENT_FILE).
 *
 * @see
 *    Use - cancelProcessing to cancel an image processing operation if necessary.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var imageProcessor = kfxCordova.kfxEngine.createImageProcessor();
 * imageProcessor.processImage(successCallback,errorCallback, 'imageid');
 */
ImageProcessor.prototype.processImage = function (successCallback, errorCallback, imageID) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.processImage,
		[imageID]
	);
};

/// To  stop image processing.
/**
 * Use the cancelProcessing method to cancel an image processing operation that is underway. In, this way, the app can respond to low-memory events or, for any reason, the app user manually stops processing while the image is being processed in background. To do this, asynchronously call a cancel method in the Image Processor engine. Note that there may be a delay between cancelling and the imageOut delegate because the image processor will only cancel the balance of processing tasks on functional boundaries. The image out event will indicate that the processing was cancelled if the image processing operation was incomplete.
 *
 * The library ignores the cancelProcessing call if the operation has already completed or hasn't started yet. If you cancel processing beforehand, the library will not cancel immediately if you then call processImage.
 * Background image processing and the cancel operation are both asynchronous. Depending on the current percentage last reported by the progress delegate, the image processing operation may be nearly complete. Therefore, the library may not necessarily cancel an operation, and the cancel error status may not occur. If the operation is cancelled, the imageOut delegate will indicate the KMC_EV_USER_ABORT status. In this case, there will be no image object included with the imageOut delegate.
 *
 * The cancelProcessing method will cancel either a quick analysis or an image processing operation.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS success call back
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are KmcRuntimeException,Exception.
 *
 * @see
 * For ANDROID, return value is captured in the 'successCallback' function. This method returns KMC_EV_CANCEL_OPERATION_SUCCESS when the image processing cancelled successfully.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var imageProcessor = kfxCordova.kfxEngine.createImageProcessor();
 * imageProcessor.cancelImageProcess(successCallback, errorCallback);
 */
ImageProcessor.prototype.cancelImageProcess = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.cancelImageProcess,
		[]
	);
};

/// To set the Options/properties of the ImageProcessor class .
/**
 * Method to set the properties of the native ImageProcessor class.
 * The output image jpegQuality specifies the JPEG quality for an output image file created by image processing. This is used only when both the following are true:
 * mimeType is set to MIMETYPE_JPEG, and
 * representation is set to IMAGE_REP_FILE or IMAGE_REP_BOTH.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Object} imageProcessorOptions -  a 'imageProcessorOptions'  object containing the image processing properties
 * @param {Object} [imageProcessorOptions.ProcessedImage] -  object containing processed image properties
 * @param {String} [imageProcessorOptions.ProcessedImage.representation] -  String indicates how the Processed Image object is represented. The Image object may contain a bitmap image, or be represented by an image in a file, or both. You end up with the representation set to both when you write the image to a file by name, or you read the image into the bitmap from a file name. The library manages this representation for you based on operations you perform on the Image object.
 *               IMAGE_REP_NONE The image object has no image content.
 *               IMAGE_REP_BITMAP The image object references a bitmap.
 *               IMAGE_REP_FILE The image object references a file.
 *               IMAGE_REP_BOTH The image object references both a bitmap and a file.
 * @param {String} [imageProcessorOptions.ProcessedImage.mimeType] -  String represents the Mime Type of the image file referenced by this Image Object. Possible value are MIMETYPE_JPEG, MIMETYPE_PNG, MIMETYPE_TIFF and MIMETYPE_UNKNOWN.
 * @param {Number} [imageProcessorOptions.ProcessedImage.jpegQuality] -  Set the output image JPEG quality. The output image JPEG quality specifies the JPEG quality for an output image file created by image processing.
 *               This is used only when both the following are true:
 *               processedImageMimeType is set to ImageMimeType.MIMETYPE_JPEG, and
 *               processedImageRepresentation is set to ImageRep.IMAGE_REP_FILE or ImageRep.IMAGE_REP_BOTH.
 *
 * @param {Object} [imageProcessorOptions.BasicSettingsProfile] -  The BasicSettingsProfile specifies basic image processing options.
 *       It define the standard crop, deskew and rotation options. You can also use this object to specify the output image DPI and the desired color.
 *       You specify the output color by setting OutputBitDepth to BITONAL, GRAYSCALE, or COLOR. The cropping tetragon defines bounding corner points of an area of an image that you want to crop, and override automatic page detection.
 *       If the outputDPI is >= 300 DPI, and the OutputBitDepth is BITONAL, then the image processing includes enhanced binarization, otherwise it uses standard binarization. @deprecated as of 3.3, use ImageProcessorConfiguration instead.
 *
 * @param {String} [imageProcessorOptions.BasicSettingsProfile.rotateType] -  String represents the rotation type. Possible value are ROTATE_NONE, ROTATE_90, ROTATE_180, ROTATE_270 and ROTATE_AUTO
 * @param {String} [imageProcessorOptions.BasicSettingsProfile.cropType] -  String represents the crop type. Possible value are CROP_NONE, CROP_AUTO, CROP_TETRAGON and CROP_QUICKANALYSIS.
 * @param {Boolean} [imageProcessorOptions.BasicSettingsProfile.doDeskew] -  The deskew property specifies whether to deskew the image or not.
 * @param {Number} [imageProcessorOptions.BasicSettingsProfile.inputDocShortEdge] -  Sets the input doc short edge property.
 *       Use this property to set the length of the shorter edge of the original document in inches.
 *       The library uses this parameter to better estimate the output image DPI and also helps algorithms better detect document corners, especially when one is outside the boundary of the image. You need not set both short and long edges, the algorithm uses one if it is present.
 *       If you set it to 0.0 or null, then the library will not use this parameter.
 * @param {Number} [imageProcessorOptions.BasicSettingsProfile.inputDocLongEdge] -  Sets the input doc long edge property.
 *       Use this property to set the length of the longer edge of the original document in inches.
 *       The library uses this parameter to better estimate the output image DPI and also helps algorithms better detect document corners, especially when one is outside the boundary of the image. You need not set both short and long edges, the algorithm uses one if it is present.
 *       If you set it to 0.0 or null, then the library will not use this parameter.
 * @param {Object} [imageProcessorOptions.BasicSettingsProfile.BoundingTetragon] - Sets the cropping tetragon property.
 *       Use this property combined with CropType CROP_TETRAGON to specify the corner points of a tetragon for cropping an image. If the tetragon is not a rectangle, the image will be stretched to make it into a rectangle
 * @param {Object} [imageProcessorOptions.BasicSettingsProfile.BoundingTetragon.TopLeft] - Sets the top left corner coordinates of cropping tetragon.
 * @param {Number} [imageProcessorOptions.BasicSettingsProfile.BoundingTetragon.TopLeft.x = 0] - Sets the top left x coordinate of cropping tetragon. This value should be less than top right x value otherwise error will be thrown.
 * @param {Number} [imageProcessorOptions.BasicSettingsProfile.BoundingTetragon.TopLeft.y = 0] - Sets the top left y coordinate of cropping tetragon. This value should be less than bottom left y value otherwise error will be thrown.
 * @param {Object} [imageProcessorOptions.BasicSettingsProfile.BoundingTetragon.TopRight] - Sets the top right corner coordinates of cropping tetragon.
 * @param {Number} [imageProcessorOptions.BasicSettingsProfile.BoundingTetragon.TopRight.x = 0] - Sets the top right x coordinate of cropping tetragon. This value should be greater than top left x value otherwise error will be thrown.
 * @param {Number} [imageProcessorOptions.BasicSettingsProfile.BoundingTetragon.TopRight.y = 0] - Sets the top right y coordinate of cropping tetragon. This value should be less than bottom right y value otherwise error will be thrown.
 * @param {Object} [imageProcessorOptions.BasicSettingsProfile.BoundingTetragon.BottomLeft] - Sets the bottom left corner coordinates of cropping tetragon.
 * @param {Number} [imageProcessorOptions.BasicSettingsProfile.BoundingTetragon.BottomLeft.x = 0] - Sets the bottom left x coordinate of cropping tetragon. This value should be less than bottom right x value otherwise error will be thrown.
 * @param {Number} [imageProcessorOptions.BasicSettingsProfile.BoundingTetragon.BottomLeft.y = 0] - Sets the bottom left y coordinate of cropping tetragon. This value should be greater than top left y value otherwise error will be thrown.
 * @param {Object} [imageProcessorOptions.BasicSettingsProfile.BoundingTetragon.BottomRight] - Sets the bottom right corner coordinates of cropping tetragon.
 * @param {Number} [imageProcessorOptions.BasicSettingsProfile.BoundingTetragon.BottomRight.x = 0] - Sets the bottom right x coordinate of cropping tetragon. This value should be greater than bottom left x value otherwise error will be thrown.
 * @param {Number} [imageProcessorOptions.BasicSettingsProfile.BoundingTetragon.BottomRight.y = 0] - Sets the bottom right y coordinate of cropping tetragon. This value should be greater than top right y value otherwise error will be thrown.
 * @param {Number} [imageProcessorOptions.BasicSettingsProfile.outputDPI] -  Sets the output DPI property.
 *       Use this property to set the desired output image DPI (Dots Per Inch). If you set it to 0 or null, the library will automatically detect the output image DPI and indicate it in the output object
 * @param {String} [imageProcessorOptions.BasicSettingsProfile.outputBitDepth] -  Sets the output bit depth property.
 *       The output bit depth property specifies the desired bit depth of the output image. Possible values are BITONAL, GRAYSCALE, COLOR.
 * @param {Object} [imageProcessorOptions.ImagePerfectionProfile] -  The ImagePerfectionProfile object encapsulates advanced image processing settings. If both BasicSettingsProfile and ImagePerfectionProfile are given, only ImagePerfectionProfile is considered.
 *       Set ImagePerfectionProfile as null, to use only BasicSettingsProfile.Use this ImagePerfectionProfile object to specify advanced image processing settings to the ImageProcessor. These advanced image processing settings may have originated from a KFS Server, a TotalAgility Server or the application itself.
 *       The ImagePerfectionProfile allows for two ways of specifying those settings: ImageProcessor operations string (ipOperations), ImageProcessor operations XML file (ipOperationsFilePath).
 *       If both ipOperations and ipOperationsFilePath are specified as non-blank, the ipOperations string is used and the other one is ignored. @deprecated as of 3.3, use ImageProcessorConfigurationinstead.
 * @param {String} [imageProcessorOptions.ImagePerfectionProfile.name] -  Sets the application-defined name for this ImagePerfectionProfile object.
 *       An application could use the name to describe the purpose of the image processing settings in this object.
 * @param {String} [imageProcessorOptions.ImagePerfectionProfile.ipOperations] - Sets the image processing operations string.
 *       This specifies the image processing operations to be performed by the ImageProcessor. Please refer to the developers guide for a list of image processing operations tokens.
 * @param {String} [imageProcessorOptions.ImagePerfectionProfile.ipOperationsFilePath] - Sets the image processing settings file.
 *       This specifies the file containing image processing operations to be performed by the ImageProcessor. Please refer to the developers guide for a list of image processing operations tokens.
 * @param {Boolean} [imageProcessorOptions.ImagePerfectionProfile.useMRZPassportDetection = false] - Sets MRZ passport detection for this ImagePerfectionProfile object.
 *      Use this property to enable or disable MRZ passport detection.
 * @param {Boolean} [imageProcessorOptions.ImagePerfectionProfile.useTargetFrameCrop = false] - Sets target frame cropping for this ImagePerfectionProfile object.
 *      Use this property to enable or disable target frame cropping.
 * @param {Object} [imageProcessorOptions.ImageProcessorConfiguration] -  ImageProcessorConfiguration specifies image processing configuration options. When this object is set with values , then we consider this as a highest priority and neglect the "BasicSettingsProfile" and "ImagePrefectionProfile" options and process the image with XVRS processing technique.
 * @param {String} [imageProcessorOptions.ImageProcessorConfiguration.rotateType = null] -  Use this property to set the desired rotate type. This value will be updated based on ipp string. If we pass ipp string as null then this value will be updated to ROTATE_NONE. If we pass any specific value then this value will be updated to that. Possible values are ROTATE_NONE,ROTATE_90,ROTATE_180,ROTATE_270,ROTATE_AUTO.
 * @param {String} [imageProcessorOptions.ImageProcessorConfiguration.outputColorDepth = null] - Use this property to set the desired output color depth type. This value will be updated based on ipp string. If we pass ipp string as null then this value will be updated to COLOR. If we pass any specific value then this value will be updated to that. Possible values are BITONAL,GRAYSCALE,COLOR.
 * @param {String} [imageProcessorOptions.ImageProcessorConfiguration.cropType = null] - Use this property to set the desired crop type. This value will be updated based on ipp string. If we pass ipp string as null then this value will be updated to CROP_NONE. If we pass any specific value then this value will be updated to that. Possible values are CROP_NONE,CROP_AUTO,CROP_TETRAGON.
 * @param {Object} [imageProcessorOptions.ImageProcessorConfiguration.croppingTetragon] - Sets the cropping tetragon property.
 *       Use this property combined with cropType CROP_TETRAGON to specify the corner points of a tetragon for cropping an image. If the tetragon is not a rectangle, the image will be stretched to make it into a rectangle.
 * @param {Object} [imageProcessorOptions.ImageProcessorConfiguration.croppingTetragon.TopLeft] - Sets the top left corner coordinates of cropping tetragon.
 * @param {Number} [imageProcessorOptions.ImageProcessorConfiguration.croppingTetragon.TopLeft.x = 0] - Sets the top left x coordinate of cropping tetragon. This value should be less than top right x value otherwise error will be thrown.
 * @param {Number} [imageProcessorOptions.ImageProcessorConfiguration.croppingTetragon.TopLeft.y = 0] - Sets the top left y coordinate of cropping tetragon. This value should be less than bottom left y value otherwise error will be thrown.
 * @param {Object} [imageProcessorOptions.ImageProcessorConfiguration.croppingTetragon.TopRight] - Sets the top right corner coordinates of cropping tetragon.
 * @param {Number} [imageProcessorOptions.ImageProcessorConfiguration.croppingTetragon.TopRight.x = 0] - Sets the top right x coordinate of cropping tetragon. This value should be greater than top left x value otherwise error will be thrown.
 * @param {Number} [imageProcessorOptions.ImageProcessorConfiguration.croppingTetragon.TopRight.y = 0] - Sets the top right y coordinate of cropping tetragon. This value should be less than bottom right y value otherwise error will be thrown.
 * @param {Object} [imageProcessorOptions.ImageProcessorConfiguration.croppingTetragon.BottomLeft] - Sets the bottom left corner coordinates of cropping tetragon.
 * @param {Number} [imageProcessorOptions.ImageProcessorConfiguration.croppingTetragon.BottomLeft.x = 0] - Sets the bottom left x coordinate of cropping tetragon. This value should be less than bottom right x value otherwise error will be thrown.
 * @param {Number} [imageProcessorOptions.ImageProcessorConfiguration.croppingTetragon.BottomLeft.y = 0] - Sets the bottom left y coordinate of cropping tetragon. This value should be greater than top left y value otherwise error will be thrown.
 * @param {Object} [imageProcessorOptions.ImageProcessorConfiguration.croppingTetragon.BottomRight] - Sets the bottom right corner coordinates of cropping tetragon.
 * @param {Number} [imageProcessorOptions.ImageProcessorConfiguration.croppingTetragon.BottomRight.x = 0] - Sets the bottom right x coordinate of cropping tetragon. This value should be greater than bottom left x value otherwise error will be thrown.
 * @param {Number} [imageProcessorOptions.ImageProcessorConfiguration.croppingTetragon.BottomRight.y = 0] - Sets the bottom right y coordinate of cropping tetragon. This value should be greater than top right y value otherwise error will be thrown.
 * @param {String} [imageProcessorOptions.ImageProcessorConfiguration.targetFrameCropType = null] -  Pre-crop image using the targetFrame coordinates from the input image. This value will be updated based on ipp string. If we pass ipp string as null then this value will be updated to TARGET_FRAME_CROP_OFF. If we pass any specific value then this value will be updated to that. Possible values are TARGET_FRAME_CROP_OFF,TARGET_FRAME_CROP_ON.
 * @param {String} [imageProcessorOptions.ImageProcessorConfiguration.deskewType = null] -  Use this property to set the desired deskew type. This value will be updated based on ipp string. If we pass ipp string as null then this value will be updated to DESKEW_NONE. If we pass any specific value then this value will be updated to that. Possible values are DESKEW_NONE,DESKEW_BY_DOCUMENT_EDGES,DESKEW_BY_DOCUMENT_CONTENT.
 * @param {Object} [imageProcessorOptions.ImageProcessorConfiguration.DocumentDimensions] - Represents the dimensions of a document. If the length of at least one of the edges of the document to be found are known ahead of time, they can be specified here to aid with edge detection, and also helps algorithms better estimate the output image DPI. You need not set both short and long edges; the algorithm uses one or both if present.
 * @param {Number} [imageProcessorOptions.ImageProcessorConfiguration.DocumentDimensions.shortEdge = 0] - Represents the length of the shortest edge of the document to be found in inches. If you set it to 0.0, the library will not use this parameter.
 * @param {Number} [imageProcessorOptions.ImageProcessorConfiguration.DocumentDimensions.longEdge = 0] -  Represents the length of the longest edge of the document to be found in inches. If you set it to 0.0, the library will not use this parameter.
 * @param {Number} [imageProcessorOptions.ImageProcessorConfiguration.outputDPI = null] -  Use this property to set the desired output image DPI (Dots Per Inch). If you set it to 0, then the library will automatically estimate the output image DPI and indicate it in the output object. This value will be updated based on ipp string. If we pass ipp string as null then this value will be updated to 0. If we pass any specific value then this value will be updated to that.
 * @param {String} [imageProcessorOptions.ImageProcessorConfiguration.advancedConfiguration = null] - Use this proerty to set any advanceConfiguration. This value will be updated based on ipp string. If we pass ipp string as null then this value will be null. If we pass any specific value then this value will be updated to that.
 * @param {String} [imageProcessorOptions.ImageProcessorConfiguration.ippString = null] - This option is used to initialize the Image Processor Configuration. Based on this other properties will be updated. If we pass this as null then normal initialization will happen.
 *
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS success call back
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Wrong Parameters, KmcRuntimeException & Exception.
 *
 * @see Check the 'errorCallback' method for any failures in case of unexpected behaviour of the method. Generally the error call back
 * would return a JSON object with ErrorMsg & ErrorDesc' giving the description of the error.
 * you can understand what are the image processor options by go through this method {@link ImageProcessor#getImageProcessingOptions getImageProcessingOptions}
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var imageProcessor = kfxCordova.kfxEngine.createImageProcessor();
 * var  imageProcessorOptions =  imageProcessor.getImageProcessingOptions();
 * imageProcessor.setImageProcessorOptions(successCallback,errorCallback,imageProcessorOptions)
 */
ImageProcessor.prototype.setImageProcessorOptions = function (successCallback, errorCallback, imageProcessorOptions) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.setImageProcessorOptions,
		[imageProcessorOptions]
	);
};

/// To get the Options/properties of the ImageProcessor class .
/**
 * Method to get the properties of the native ImageProcessor class.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  JSONObject representing ImageProcessor Options. JSONObject structure can also be known from getImageProcessingOptions() method.
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are KmcRuntimeException,JSONException & Exception.
 *
 * @see {@link ImageProcessor#getImageProcessingOptions getImageProcessingOptions}
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var imageProcessor = kfxCordova.kfxEngine.createImageProcessor();
 * imageProcessor.getImageProcessorOptions(successCallback,errorCallback);
 */
ImageProcessor.prototype.getImageProcessorOptions = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.getImageProcessorOptions,
		[]
	);
};

/// To Specify a file path for use with the object.
/**
 * Use this method to specify the fully qualified path to a file name that you want to contain the output processed image. Usually this file should not already exist. You should always check for returned error codes because this specifyProcessedImageFilePath method returns errors for certain cases. When this method returns an error, the library will not save the file path. The valid file path extensions are: jpg, jpeg, tif, tiff, png and their upper-case equivalents.
 * If the file name extension is valid, then the library sets up the imageMimetype setting for you.
 * This value is only used when the processedImageRepresentation is set to IMAGE_REP_FILE or IMAGE_REP_BOTH.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {String} filepath - filepath where you want to write an image. The filepath needs to include imageName with extension(ex:imageName.png).
 * In iOS, it is not required to pass the documents directory path because internally MobileSDK is getting the documents directory path and appending the file path which is coming from the user.
 * In Android, if we pass imageName with extension then the image will write to phone internal storage. If we pass SD card full path (ex:/storage/emulated/0/imageName.png) then the image will write to SD card.
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS success call back
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are KMC_ED_OBJECT_REP_BITMAP_MISMATCH, when you try to set a file name for an existing file, when there is already a bitmap set for the object.
 * KMC_ED_FILE_EXTENSION, when you try to set a file name with an illegal file extension, KmcRuntimeException & Exception.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var imageProcessor = kfxCordova.kfxEngine.createImageProcessor();
 * imageProcessor.specifyProcessedImageFilePath(successCallback, errorCallback,'imageName.png')
 */
ImageProcessor.prototype.specifyProcessedImageFilePath = function (successCallback, errorCallback, filepath) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.specifyProcessedImageFilePath,
		[filepath]
	);
};

/// To get the current processed image file path.
/**
 * Use this method to retrieve the current file path associated with this object. In some cases, the file name may not have been set if the specifyProcessedImageFilePath method returned an error.
 *
 * @param {Function} successCallback - Default Success call back function name. Return values of the exec call is captured here.
 * @param {Function} errorCallback - Default Error call back function name, and any failure in executing the 'exec' call are captured here.s
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS success call back with file path specified for 'specifyProcessedImageFilePath' method
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are Wrong Parameters, KmcRuntimeException & Exception.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var imageProcessor = kfxCordova.kfxEngine.createImageProcessor();
 * imageProcessor.getProcessedImageFilePath(successCallback,errorCallback);
 */
ImageProcessor.prototype.getProcessedImageFilePath = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.getProcessedImageFilePath,
		[]
	);
};

/// To  check image quality.
/**
 * Use this method to specify the image upon which you want to perform a quick analysis. The image processor will check image quality and determine the page edges of a document in the image.
 * The doQuickAnalysis method does not use a profile. The library uses an internally generated opString, and ignores the basic settings profile and the image perfection profile set in the image processor object.
 * License Required: this is a licensed method. You cannot use this method until you have set a valid SDK license. In order to set your license, you need to use the setMobileSDKLicense method on the kfxKUTLicensing object. An example of setting your license can be found in the licensing class.
 *
 * The method returns KMC_SUCCESS if the process starts without any error. In this case you should expect multiple analysis process progress delegate calls to indicate the progress of the analysis. You should never make any assumptions about completion of the process when you get to 100% completion, because the library performs several post process steps and then calls the analysisComplete delegate. You should always check the status in the analysis complete delegate to know if the process completed without error.
 * If the call to doQuickAnalysis method does not return KMC_SUCCESS, then the library will not have stored the kfxKEDQuickAnalysisFeedback object, and you will not receive any progress delegate calls nor a analysisComplete delegate call. Therefore, you should always check the return value to make sure you have correctly initialized objects for the process and analysis starts up ok.
 * Quick analysis always returns a kfxKEDImage in the analysisComplete delegate, and this is a reference to the same input image given to quick analysis with the imageToAnalyze parameter. When Quick Analysis completes without error, it stores a kfxKEDQuickAnalysisFeedback object in the input image for your use. If you request a reference image, by setting the generateRefImage to true, then the library returns a UIImage reference in the kfxKEDQuickAnalysisFeedback object.
 * Quick Analysis Results are always stored in the kfxKEDQuickAnalysisFeedback object in the input image specified with the imageToAnalyze parameter. Then you can decide what to do with the results. You should examine the various settings in the kfxKEDQuickAnalysisFeedback object, to see if the image is blurry, over saturated, under saturated or not. The library also sets the bounding tetragon corners and side equations for the page boundaries in the feedback object and the metadata. Then if the image looks good, you can also display the reference UIImage * if you requested one. You could display this image for user confirmation, and then a new picture could be taken if the user decides he doesn't like the results, or the green bordered image of the page seems incorrect.
 * Otherwise, if your user accepts the image, you could then process the image using a standard processImage call. When you do so, if you want to crop to the page detection referenced by the quick analysis process, you should use a basic settings profile, and set the doCrop setting to KED_CROP_WITH_QUICK_ANALYSIS_RESULTS, and your image processing will complete sooner than if you did normal processing because the library already knows the page boundaries.
 * Note: The library ignores any supplied profiles and uses internal settings instead. This data is returned in the quick analysis feedback object in the input imageToAnalyze object.
 * The analysisComplete delegate returns your input image, and everything in it is retained.
 * When the processing completes normally, the library sets the following image object properties:
 * imageQuickAnalysisFeedback, set to an object created by the analysis, indicating the results, and a reference image if requested. imageMetaData, to the quick analysis metadata created by the image processor for quick analysis.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback Default Error call back function name
 * @param {Object} options - doQuickAnalysis options. You can get these options by using getQuickAnalysisSettingsOptions{@link ImageProcessor#getQuickAnalysisOptions getQuickAnalysisOptions}.
 *
 * @param {String} [options.imageID] the actual input image object that you want to check. The image to be analysed is to added to the ImageArray class and the corresponding id is to be provided as input to this method for analysis.
 *
 * @param {Boolean} [options.generateOutputImage] is a bool, when set to true, causes the image processor to return a native UIImage object. This image includes a green border around the page boundaries. You can use this image to detect the correct orientation and edges, to decide if the image should be used for further processing or not.
 *
 * @return The return value is captured in the 'successCallback' and can have any of the  following results.
 *    This method returns KMC_SUCCESS when image processing started without error. Otherwise it may return one of these error codes if processing was not started. No delegates are generated if the method returns an error.
 *    KMC_IP_LICENSE_INVALID if you have not set a valid license yet. KMC_ED_NOIMAGE If you did not include an image in the input image object.
 *    KMC_ED_FILEPATH If the image object is represented by a file, but the file path is missing.
 *    KMC_ED_NONEXISTENT_FILE If the file name in the input object was specified so that the image representation is set to IMAGE_REP_FILE, an then the file used to represent the image is later deleted. The the library returns this error if you try to process it.
 *    KMC_IP_NO_REPRESENTATION If the image representation in the input image object is invalid, and not set to IMAGE_REP_FILE, or IMAGE_REP_BITMAP or BOTH. This indicates that there is no image to process. This is returned even if you set a file path to a non-existent file.
 *    KMC_ED_NO_MEMORY_FOR_METADATA if memory could not be allocated to store image metadata.
 *    KMC_ED_IMAGE_COLOR_SPACE If the library could not create a color space reference, usually a system resource issue.
 *    KMC_ED_IMAGE_CONTEXT, If an image bitmap could not be created, normally caused by a resource issue.
 *    KMC_EV_PROCESS_PAGE_BUSY/KMC_IP_CONTEXT, Another thread is calling the image processor for page process operation. Application can either retry after certain period of time, or cancel the operation
 *
 *    ANDROID ERROR CODES
 *    NullPointerException    ('image' parameter is null).
 *    KmcException    (KMC_EV_PROCESS_PAGE_BUSY).
 *    KmcException    (KMC_ED_NONEXISTENT_FILE).
 *    KmcRuntimeException (KMC_ED_FILEPATH).
 *
 *
 * @see
 *    Use - cancelProcessing to cancel an ongoing quick analysis process if necessary.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 *  var options = {
 *        imageID: imageToAnalyze,
 *        generateOutputImage: false
 *  };
 * var imageProcessor = kfxCordova.kfxEngine.createImageProcessor();
 * imageProcessor.doQuickAnalysis(successCallback,errorCallback, options);
 */
ImageProcessor.prototype.doQuickAnalysis = function (successCallback, errorCallback, options) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.doQuickAnalysis,
		[options]
	);
};

/// To  check image quality with quick analysis settings
/**
 * Use this method to specify the image upon which you want to perform a quick analysis. The image processor will check image quality and determine the page edges of a document in the image.
 * The doQuickAnalysis method does not use a profile. The library uses an internally generated opString, and ignores the basic settings profile and the image perfection profile set in the image processor object.
 * License Required: this is a licensed method. You cannot use this method until you have set a valid SDK license. In order to set your license, you need to use the setMobileSDKLicense method on the kfxKUTLicensing object. An example of setting your license can be found in the licensing class.
 *
 * The method returns KMC_SUCCESS if the process starts without any error. In this case you should expect multiple analysis process progress delegate calls to indicate the progress of the analysis. You should never make any assumptions about completion of the process when you get to 100% completion, because the library performs several post process steps and then calls the analysisComplete delegate. You should always check the status in the analysis complete delegate to know if the process completed without error.
 * If the call to doQuickAnalysis method does not return KMC_SUCCESS, then the library will not have stored the kfxKEDQuickAnalysisFeedback object, and you will not receive any progress delegate calls nor a analysisComplete delegate call. Therefore, you should always check the return value to make sure you have correctly initialized objects for the process and analysis starts up ok.
 * Quick analysis always returns a kfxKEDImage in the analysisComplete delegate, and this is a reference to the same input image given to quick analysis with the imageToAnalyze parameter. When Quick Analysis completes without error, it stores a kfxKEDQuickAnalysisFeedback object in the input image for your use. If you request a reference image, by setting the generateRefImage to true, then the library returns a UIImage reference in the kfxKEDQuickAnalysisFeedback object.
 * Quick Analysis Results are always stored in the kfxKEDQuickAnalysisFeedback object in the input image specified with the imageToAnalyze parameter. Then you can decide what to do with the results. You should examine the various settings in the kfxKEDQuickAnalysisFeedback object, to see if the image is blurry, over saturated, under saturated or not. The library also sets the bounding tetragon corners and side equations for the page boundaries in the feedback object and the metadata. Then if the image looks good, you can also display the reference UIImage * if you requested one. You could display this image for user confirmation, and then a new picture could be taken if the user decides he doesn't like the results, or the green bordered image of the page seems incorrect.
 * Otherwise, if your user accepts the image, you could then process the image using a standard processImage call. When you do so, if you want to crop to the page detection referenced by the quick analysis process, you should use a basic settings profile, and set the doCrop setting to KED_CROP_WITH_QUICK_ANALYSIS_RESULTS, and your image processing will complete sooner than if you did normal processing because the library already knows the page boundaries.
 * Note: The library ignores any supplied profiles and uses internal settings instead. This data is returned in the quick analysis feedback object in the input imageToAnalyze object.
 * The analysisComplete delegate returns your input image, and everything in it is retained.
 * When the processing completes normally, the library sets the following image object properties:
 * imageQuickAnalysisFeedback, set to an object created by the analysis, indicating the results, and a reference image if requested. imageMetaData, to the quick analysis metadata created by the image processor for quick analysis.
 *
 * @param {Function} successCallback - Default Success call back function name
 * @param {Function} errorCallback - Default Error call back function name
 * @param {Object} options - doQuickAnalysis with settings options. You can get these options by using getQuickAnalysisSettingsOptions{@link ImageProcessor#getQuickAnalysisSettingsOptions getQuickAnalysisSettingsOptions}.
 *
 * @param {String} [options.imageID] the actual input image object that you want to check. The image to be analysed is to added to the ImageArray class and the corresponding id is to be provided as input to this method for analysis.
 *
 * @param {Boolean} [options.generateOutputImage] is a bool, when set to true, causes the image processor to return a native UIImage object. This image includes a green border around the page boundaries. You can use this image to detect the correct orientation and edges, to decide if the image should be used for further processing or not.
 *
 * @param {Object} [options.settings] do quick analysis settings which are used to perform the quick analysis. see the example to know how settings object look like.
 *
 * @param {Boolean} [options.settings.enableBlurDetection = true] This is to enable or disable blur detection in quick analysis. The default value is true.
 * @param {Boolean} [options.settings.enableLegacyBlurDetection = false] This is to enable or disable  blur detection in quick analysis. The default value is false. If user enable this option then the blur detection will perform based on the legacy blur detection algorithm.
 * @param {Number} [options.settings.blurThreshold = 50] Sets the sensibility of the blur detection algorithm. An image section is considered blurry when its blurriness exceeds this threshold. Threshold values should be in the [0, 100] range, other values will be clamped to this range. Defaults to 50.
 * @param {Number} [options.settings.legacyBlurThreshold = 15] Sets blur threshold for legacy blur detection. Threshold values should be in the [0, 100] range, other values will be clamped to this range. Defaults to 15.
 * @param {Number} [options.settings.blurCountPercentThreshold = 80] Sets the threshold for blurry areas. An image is considered blurry when the amount of blurry areas exceeds this threshold. The threshold should be specified as percentage of the image area. Threshold values should be in the [0, 100] range, other values will be clamped to this range. Defaults to 80.
 * @param {Boolean} [options.settings.enableSaturationDetection = true] This is to enable or disable saturation detection in quick analysis. The default value is true.
 * @param {Boolean} [options.settings.enableGlareDetection = true] This is to enable or disable glare detection in quick analysis. The default value is true.
 * @param {Number} [options.settings.glareDetectionIntensityFraction = 0.03] Sets the value of intensity fraction of glare detection. The fraction of pixels with the highest intensity that are assumed to be glare. Valid values: 0.01-0.99. The default value is 0.03.
 * @param {Number} [options.settings.glareDetectionIntensityThreshold = 230] Sets the value of intensity threshold fraction of glare detection. The absolute lower threshold for high intensity pixels. No pixel below this threshold is perceived as glare. Valid values: 0-255. The default value is 230.
 * @param {Number} [options.settings.glareDetectionMinimumGlareAreaFraction = 0.01] Sets the value of minimum glare area fraction of glare detection.The minimum area of an image that needs to be affected by glare to be included in the glare area. Valid values: 0.01-0.99. The default value is 0.01.
 * @param {Number} [options.settings.glareDetectionNumberOfTiles = 100] Sets the value of number of tiles of glare detection. The number of tiles into which an edge of the image is divided for glare detection. Valid values: 1-1000. The default value is 100.
 * @param {Number} [options.settings.glareDetectedThreshold = 0.05] Sets the threshold for the area of the glare. An image is considered to have a glare when the area of the glare exceeds this threshold. The threshold should be specified as a fraction of the image area. Threshold values should be in the [0.01, 0.99] range, other values will be clamped to this range. Defaults to 0.02.
 * @param {Boolean} [options.settings.enableSkewDetection = true] This is to enable or disable skew detection in quick analysis. The default value is true.
 * @param {Boolean} [options.settings.enableShadowDetection = true] This is to enable or disable shadow detection in quick analysis. The default value is true.
 * @param {Boolean} [options.settings.enableMissingBordersDetection = true] This is to enable or disable missing borders detection in quick analysis. The default value is true.
 * @param {Boolean} [options.settings.enableLowContrastBackgroundDetection = true] This is to enable or disable low contract background detection in quick analysis. The default value is true.
 * @param {Boolean} [options.settings.useMRZPassportDetection = false] Specify quick analysis to use MRZ passport detection for cropping process or not. The default value is false.
 * @param {Boolean} [options.settings.useTargetFrameCrop = false] Specify quick analysis to run target frame cropping prior to page detection. The default value is false.
 * @param {Boolean} [options.settings.useDocumentDetectionBasedCrop = false] Specify quick analysis to run document detection based cropping prior to page detection. The default value is false.
 *
 * @return The return value is captured in the 'successCallback' and can have any of the  following results.
 * This method returns KMC_SUCCESS when image processing started without error. Otherwise it may return one of these error codes if processing was not started. No delegates are generated if the method returns an error.
 * KMC_IP_LICENSE_INVALID if you have not set a valid license yet. KMC_ED_NOIMAGE If you did not include an image in the input image object.
 * KMC_ED_FILEPATH If the image object is represented by a file, but the file path is missing.
 * KMC_ED_NONEXISTENT_FILE If the file name in the input object was specified so that the image representation is set to IMAGE_REP_FILE, an then the file used to represent the image is later deleted. The the library returns this error if you try to process it.
 * KMC_IP_NO_REPRESENTATION If the image representation in the input image object is invalid, and not set to IMAGE_REP_FILE, or IMAGE_REP_BITMAP or BOTH. This indicates that there is no image to process. This is returned even if you set a file path to a non-existent file.
 * KMC_ED_NO_MEMORY_FOR_METADATA if memory could not be allocated to store image metadata.
 * KMC_ED_IMAGE_COLOR_SPACE If the library could not create a color space reference, usually a system resource issue.
 * KMC_ED_IMAGE_CONTEXT, If an image bitmap could not be created, normally caused by a resource issue.
 * KMC_EV_PROCESS_PAGE_BUSY/KMC_IP_CONTEXT, Another thread is calling the image processor for page process operation. Application can either retry after certain period of time, or cancel the operation
 *
 * ANDROID ERROR CODES
 * NullPointerException    ('image' parameter is null).
 * KmcException    (KMC_EV_PROCESS_PAGE_BUSY).
 * KmcException    (KMC_ED_NONEXISTENT_FILE).
 * KmcRuntimeException (KMC_ED_FILEPATH).
 *
 * @see
 * Use - cancelProcessing to cancel an ongoing quick analysis process if necessary.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 *  var quickAnalysisSettings={
 *       enableBlurDetection:true,
 *       enableLegacyBlurDetection:false,
 *       blurThreshold:50,
 *       legacyBlurThreshold: 15,
 *       blurCountPercentThreshold:0,
 *       enableSaturationDetection:true,
 *       enableGlareDetection:true,
 *       glareDetectionIntensityFraction:0.03,
 *       glareDetectionIntensityThreshold:230,
 *       glareDetectionMinimumGlareAreaFraction:0.01,
 *       glareDetectionNumberOfTiles:100,
 *       glareDetectedThreshold:0.05,
 *       enableSkewDetection: true,
 *       enableShadowDetection: true,
 *       enableMissingBordersDetection: true,
 *       enableLowContrastBackgroundDetection: true,
 *       useMRZPassportDetection: false,
 *       useTargetFrameCrop: false,
 *       useDocumentDetectionBasedCrop: false,
 *
 *  };
 *  var options = {
 *        imageID: imageToAnalyze,
 *        generateOutputImage: false,
 *        settings:quickAnalysisSettings
 *  };
 * var imageProcessor = kfxCordova.kfxEngine.createImageProcessor();
 * imageProcessor.doQuickAnalysisWithSettings(successCallback,errorCallback, options);
 */

ImageProcessor.prototype.doQuickAnalysisWithSettings = function (successCallback, errorCallback, options) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.doQuickAnalysisWithSettings,
		[options]
	);
};

/// Method to add the event listener to the 'on image processed  ' of ImageProcessor
/**
 * This method would receive the on image processed at the ImageProcessor and the new corresponding details
 * are captured in success call back.
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error Call back function name
 * @param {Function} imageOutCallback - the processed image properties are returned in this variable in the form a JSOn object
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS success call back.
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are KmcRuntimeException & Exception.
 * imageOutCallback - will have the processed image properties returned in the form a JSON object
 *
 * @see Check the 'errorCallback' method for any failures in case of unexpected behaviour of the method. By Default,  the error call back
 * would return a JSON object with ErrorMsg & ErrorDesc' giving the description of the error.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * function imageOutCallback(){
 *       alert('image out callback');
 * }
 * var imageProcessor = kfxCordova.kfxEngine.createImageProcessor();
 * imageProcessor.addImageOutEventListener(successCallback,errorCallback,imageOutCallback);
 */
ImageProcessor.prototype.addImageOutEventListener = function (successCallback, errorCallback, imageOutCallback) {
	ActionUtils.exec(
		function (result) {
			if (result.eventType === "eventRegistered") {
				if (successCallback) successCallback(result);
			} else if (result.eventType === "eventRaised") {
				var imgObject = new ImageObject(result);
				if (imageOutCallback) imageOutCallback(imgObject);
			}
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.addImageOutEventListener,
		[]
	);
};

/// Method to add the event listener to the 'Image process progress' of ImageProcessor
/**
 * This method would receive the Image process progress at the ImageProcessor and the new corresponding details
 * are captured in success call back.
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error Call back function name
 * @param {Function} processCallback - a variable to hold any value returned from the progress change listener of the processor class
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS success call back
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are KmcRuntimeException & Exception.
 * processCallback - will have the processed 'ProgressPercent', 'imageID' returned in the form a JSON object
 *
 * @see Check the 'errorCallback' method for any failures in case of unexpected behaviour of the method. By Default,  the error call back
 * would return a JSON object with ErrorMsg & ErrorDesc' giving the description of the error.
 * 'processCallback' a variable to hold any value returned from the progress change listener of the processor class
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * function processCallback(){
 *       alert('analysis complete callback');
 * }
 * var imageProcessor = kfxCordova.kfxEngine.createImageProcessor();
 * imageProcessor.addProcessProgressListener(successCallback,errorCallback,processCallback);
 */
ImageProcessor.prototype.addProcessProgressListener = function (successCallback, errorCallback, processCallback) {
	ActionUtils.exec(
		function (result) {
			if (result.eventType === "eventRegistered") {
				if (successCallback) successCallback(result);
			} else if (result.eventType === "eventRaised") {
				if (processCallback) processCallback(result);
			}
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.addProcessProgressListener,
		[]
	);
};

/// Method to add the event listener to the 'Image Analysis complete' of ImageProcessor
/**
 * This method would receive the Image Analysis complete at the ImageProcessor and the new corresponding details
 * are captured in success call back.
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error Call back function name
 * @param {Function} analysisCompleteCallback - a var to hold any value returned from the analysis complete listener of the processor class
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS success call back
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are KmcRuntimeException & Exception.
 * analysisCompleteCallback - a var to hold 'QuickAnalysisFeedback' returned from the analysis completed listener of the processor class
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * function analysisCompleteCallback(){
 *       alert('analysis complete callback');
 * }
 * var imageProcessor = kfxCordova.kfxEngine.createImageProcessor();
 * ImageProcessor.prototype.addAnalysisCompleteListener(successCallback,errorCallback,analysisCompleteCallback);
 */
ImageProcessor.prototype.addAnalysisCompleteListener = function (successCallback, errorCallback, analysisCallback) {
	ActionUtils.exec(
		function (result) {
			if (result.eventType === "eventRegistered") {
				if (successCallback) successCallback(result);
			} else if (result.eventType === "eventRaised") {
				var imgObject = new ImageObject(result.image);
				result.image = imgObject;
				if (analysisCallback) analysisCallback(result);
			}
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.addAnalysisCompleteListener,
		[]
	);
};

/// Method to add the event listener to the 'Image Analysis progress' of ImageProcessor
/**
 * This method would receive the Image Analysis progress at the ImageProcessor and the new corresponding details
 * are captured in success call back.
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error Call back function name
 * @param {Function} analysisProgressCallback - a var to hold the current analysis progress listener call from processor
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS success call back
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are KmcRuntimeException & Exception.
 * analysisProgressCallback - return the current analysis progress for a 'doQuickAnalysis' method
 *
 * @see Check the 'errorCallback' method for any failures in case of unexpected behaviour of the method. By Default,  the error call back
 * would return a JSON object with ErrorMsg & ErrorDesc' giving the description of the error.
 *
 * @example
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * function analysisProgressCallback(){
 *       alert('analysis progress callback');
 * }
 * var imageProcessor = kfxCordova.kfxEngine.createImageProcessor();
 * imageProcessor.addAnalysisProgressListener(successCallback,errorCallback,analysisProgressCallback);
 */
ImageProcessor.prototype.addAnalysisProgressListener = function (successCallback, errorCallback, processCallback) {
	ActionUtils.exec(
		function (result) {
			if (result.eventType === "eventRegistered") {
				if (successCallback) successCallback(result);
			} else if (result.eventType === "eventRaised") {
				if (processCallback) processCallback(result);
			}
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.addAnalysisProgressListener,
		[]
	);
};

/// Method to remove the event listener to the  'Processed image out' changed delegate method of the ImageCaptureControl
/**
 * The method would remove the listener and would not receive the processed image events. After removing the listener,
 * there will not be any call backs from native .
 *
 * @param {Function} successCallback - Default Success Call back function name
 * @param {Function} errorCallback - Default Error Call back function name
 *
 * @return
 * The return value is captured in the 'successCallback' for a successful operation, and might return in 'errorCallback' for an incomplete/invalid operation. Returns the following values in the corresponding functions
 * successCallback -  KMC_SUCCESS success call back
 * errorCallback -    error message would contain the appropriate error description.Possible error objects are KmcRuntimeException,Exception.
 *
 * @code
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var imageProcessor = kfxCordova.kfxEngine.createImageProcessor();
 * imageProcessor.removeImageOutEventListener(successCallback,errorCallback);
 */
ImageProcessor.prototype.removeImageOutEventListener = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.removeImageOutEventListener,
		[]
	);
};

/// Method to remove the event listener to the  'Processed image progress' changed delegate method of the ImageCaptureControl
/**
 * The method would remove the listener and would not receive the Processed image progress events. After removing the listener,
 * there will not be any call backs from native .
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
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var imageProcessor = kfxCordova.kfxEngine.createImageProcessor();
 * imageProcessor.removeProcessProgressListener(successCallback,errorCallback);
 */
ImageProcessor.prototype.removeProcessProgressListener = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.removeProcessProgressListener,
		[]
	);
};

/// Method to remove the event listener to the  'Analysis complete' changed delegate method of the ImageCaptureControl
/**
 * The method would remove the listener and would not receive the Analysis complete events. After removing the listener,
 * there will not be any call backs from native .
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
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var imageProcessor = kfxCordova.kfxEngine.createImageProcessor();
 * imageProcessor.removeAnalysisCompleteListener(successCallback,errorCallback);
 */
ImageProcessor.prototype.removeAnalysisCompleteListener = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.removeAnalysisCompleteListener,
		[]
	);
};

/// Method to remove the event listener to the  'Analysis progress' changed delegate method of the ImageCaptureControl
/**
 * The method would remove the listener and would not receive the Analysis progress events. After removing the listener,
 * there will not be any call backs from native .
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
 * function successCallback(response){
 *       alert(JSON.stringify(response));
 * }
 * function errorCallback(error){
 *       alert(JSON.stringify(error));
 * }
 * var imageProcessor = kfxCordova.kfxEngine.createImageProcessor();
 * imageProcessor.removeAnalysisProgressListener(successCallback,errorCallback);
 */
ImageProcessor.prototype.removeAnalysisProgressListener = function (successCallback, errorCallback) {
	ActionUtils.exec(
		function (result) {
			if (successCallback) successCallback(result);
		},
		function (error) {
			if (errorCallback) errorCallback(error);
		},
		ActionUtils.serviceName,
		ActionUtils.removeAnalysisProgressListener,
		[]
	);
};
// A getter  method for QuickAnalysis options
/**
 * Method returning the QuickAnalysis properties that can be set by the user. Use this object as an input parameter to set
 * options on doQuickAnalysis{@link ImageProcessor#doQuickAnalysis doQuickAnalysis}
 *
 * @example
 * var imageProcessor = kfxCordova.kfxEngine.createImageProcessor();
 * var  doQuickAnalysisOptions =  imageProcessor.getQuickAnalysisOptions();
 *  doQuickAnalysisOptions  should be like below {
 *       imageID:"",
 *       generateOutputImage:true
 *   };
 */
ImageProcessor.prototype.getQuickAnalysisOptions = function () {
	var doQuickAnalysisOptions = {
		imageID: "",
		generateOutputImage: true,
	};
	return doQuickAnalysisOptions;
};

// A getter  method for QuickAnalysisSettings options
/**
 * Method returning the QuickAnalysisSettings properties that can be set by the user. Use this object as an input parameter to set options on doQuickAnalysisWithSettings{@link ImageProcessor#doQuickAnalysisWithSettings doQuickAnalysisWithSettings}
 *
 * @example
 * var imageProcessor = kfxCordova.kfxEngine.createImageProcessor();
 * var  doQuickAnalysisSettingsOptions =  imageProcessor.getQuickAnalysisSettingsOptions();
 *  doQuickAnalysisSettingsOptions  should be like below {
 *       imageID:"",
 *       generateOutputImage:true,
 * 		 settings: {
			enableBlurDetection: true,
			enableLegacyBlurDetection: false,
			blurThreshold: 50,
			legacyBlurThreshold: 15,
			blurCountPercentThreshold: 0,
			enableSaturationDetection: true,
			enableGlareDetection: true,
			glareDetectionIntensityFraction: 0.03,
			glareDetectionIntensityThreshold: 230,
			glareDetectionMinimumGlareAreaFraction: 0.01,
			glareDetectionNumberOfTiles: 100,
			glareDetectedThreshold: 0.05,
			enableSkewDetection: true,
			enableShadowDetection: true,
			enableMissingBordersDetection: true,
			enableLowContrastBackgroundDetection: true,
			useMRZPassportDetection: false,
			useTargetFrameCrop: false,
			useDocumentDetectionBasedCrop: false,
		},
 *   };
 */
ImageProcessor.prototype.getQuickAnalysisSettingsOptions = function () {
	var doQuickAnalysisOptions = {
		imageID: "",
		generateOutputImage: true,
		settings: {
			enableBlurDetection: true,
			enableLegacyBlurDetection: false,
			blurThreshold: 50,
			legacyBlurThreshold: 15,
			blurCountPercentThreshold: 0,
			enableSaturationDetection: true,
			enableGlareDetection: true,
			glareDetectionIntensityFraction: 0.03,
			glareDetectionIntensityThreshold: 230,
			glareDetectionMinimumGlareAreaFraction: 0.01,
			glareDetectionNumberOfTiles: 100,
			glareDetectedThreshold: 0.05,
			enableSkewDetection: true,
			enableShadowDetection: true,
			enableMissingBordersDetection: true,
			enableLowContrastBackgroundDetection: true,
			useMRZPassportDetection: false,
			useTargetFrameCrop: false,
			useDocumentDetectionBasedCrop: false,
		},
	};
	return doQuickAnalysisOptions;
};

/// A getter  method of properties of the 'ImageProcessor' class
/**
 * Method returning the 'ImageProcessor'  class properties that can be set by the user. Use this object as an input
 * parameter to set the properties of the ImageProcessor class. The parameters are grouped, and has the below mentioned
 * default values.
 *
 * @example
 * var imageProcessor = kfxCordova.kfxEngine.createImageProcessor();
 * var  imageProcessorOptions =  imageProcessor.getImageProcessingOptions();
 * imageProcessorOptions should be like below {
 *        ProcessedImage:{
 *            representation:'IMAGE_REP_BITMAP',
 *            mimeType:'MIMETYPE_JPEG',
 *            jpegQuality:50
 *        },
 *        BasicSettingsProfile:{
 *            rotateType:'ROTATE_NONE',
 *            cropType:'CROP_AUTO',
 *            doDeskew:true,
 *            inputDocShortEdge:0.0,
 *            inputDocLongEdge:0.0,
 *            BoundingTetragon:{
 *                TopLeft:{
 *                    x:0,
 *                    y:0
 *                },
 *                TopRight:{
 *                    x:0,
 *                    y:0
 *                },
 *                BottomLeft:{
 *                    x:0,
 *                    y:0
 *                },
 *                BottomRight:{
 *                    x:0,
 *                    y:0
 *                }
 *            },
 *            outputDPI:0,
 *            outputBitDepth:'BITONAL'
 *        },
 *        ImagePerfectionProfile:{
 *            name:null,
 *            ipOperations:null,
 *            ipOperationsFilePath:null
 *        },
 *        ImageProcessorConfiguration:{
 *            rotateType:null,
 *            outputColorDepth: null,
 *            cropType: null,
 *            targetFrameCropType: null,
 *            deskewType: null,
 *            DocumentDimensions:{
 *                shortEdge: 0.0,
 *                longEdge: 0.0
 *            },
 *            outputDPI:null,
 *            advancedConfiguration: null,
 *            ippString: null,
 *            croppingTetragon:{
 *                TopLeft:{
 *                    x:0,
 *                    y:0
 *                },
 *                TopRight:{
 *                    x:0,
 *                    y:0
 *                },
 *                BottomLeft:{
 *                    x:0,
 *                    y:0
 *                },
 *                BottomRight:{
 *                    x:0,
 *                    y:0
 *                }
 *            },
 *
 *        }
 *    };
 */
ImageProcessor.prototype.getImageProcessingOptions = function () {
	var imageProcessorOptions = {
		ProcessedImage: {
			/*An enum which identifies the Image Representation(s) included in this Image Object.The Image object may contain a bitmap image, or be represented by an image in a file, or both.
             Representation is set to both usually when you write the image to a file by name, or you read the image into the bitmap from a file name*/
			representation: "IMAGE_REP_BITMAP", // IMAGE_REP_NONE,IMAGE_REP_BITMAP,IMAGE_REP_FILE,IMAGE_REP_BOTH

			///An enum which identifies the type of the image file referenced by this Image Object.
			mimeType: "MIMETYPE_JPEG", //MIMETYPE_JPEG,MIMETYPE_PNG,MIMETYPE_TIFF,MIMETYPE_UNKNOWN

			/** Represents a JPEG compression quality value, where lower numbers indicate higher compression (smaller size), but lower image quality.
            Higher JPEG quality numbers indicate lower compression (larger size), but better image quality. Valid quality values are 1 to 100.
            The output image jpegQuality specifies the JPEG quality for an output image file created by image processing. This is used only when both the following are true:
            mimeType is set to MIMETYPE_JPEG, and
            representation is set to IMAGE_REP_FILE or IMAGE_REP_BOTH.
                 */
			jpegQuality: 50,
		},
		/*Basic Perfection Profile contains simple image processing options that you want to perform on an image.
        These define the standard crop, deskew and rotation options. This object can also be used to specify the output image DPI and the desired color
        @deprecated Deprecated in SDK 3.3. Please use ImageProcessorConfiguration instead.
        */
		BasicSettingsProfile: {
			///An enum which identifies the rotation type.
			rotateType: "ROTATE_NONE", //ROTATE_NONE,ROTATE_90,ROTATE_180,ROTATE_270,ROTATE_AUTO

			/*An enum which identifies the crop type.Provides a simple way to crop an image. Choose from three options specified below
              CROP_NONE:Set this option to perform no image cropping.
              CROP_AUTO:The library automatically finds the bounding tetragon around the document of interest, and crops to this boundary. Automatic cropping entails finding page boundaries, stretching the image into a rectangle if necessary, and cropping the image to the found sheet boundaries. This means that, in order to crop, the input image should have some sheet borders.
              CROP_TETRAGON:Use this option when you want to supply the tetragon around the page edges. This boundary is defined externally by the Review and Edit UI control, or automatically by image processing.
              Default:CROP_NONE
            */
			cropType: "CROP_AUTO", //CROP_NONE,CROP_AUTO,CROP_TETRAGON,CROP_QUICKANALYSIS

			/*Deskew an output image.
             Provides a simple way to deskew an image when set to true. The image processor deskews the image after it is properly cropped to sheet boundaries.*/
			doDeskew: true, //true,false

			/** Use this property to set the length of the shorter edge of the original document in inches.
            The library uses this parameter to better estimate the output image DPI and also helps algorithms better detect document corners, especially when one is outside the boundary of the image.
            You need not set both short and long edges, the algorithm uses one if it is present.
            If you set it to 0.0 or null, then the library will not use this parameter.
                 */
			inputDocShortEdge: 0.0, //ANY FLOAT NUMBER

			/** Use this property to set the length of the longer edge of the original document in inches.
                The library uses this parameter to better estimate the output image DPI and also helps algorithms better detect document corners,
                especially when one is outside the boundary of the image. You need not set both short and long edges, the algorithm uses one if it is present.
                If you set it to 0.0 or null, then the library will not use this parameter.
                */
			inputDocLongEdge: 0.0, //ANY FLOAT NUMBER

			//The tetragon consists of the its top-left, top-right, bottom-left, and bottom-right points.
			BoundingTetragon: {
				/// Represents the coordinates of the top left corner.
				/**  This CGPoint structure holds the the top left x and y coordinates of the tetragon point in pixels. The x value should be less than the top right x value and y value should be less than bottom left y value.
                Avoid fractions. The library converts to whole integers in use. Default: 0,0
                 */
				TopLeft: {
					x: 0,
					y: 0,
				},

				/// Represents the coordinates of the top right corner.
				/**  This CGPoint structure holds the top right x and y coordinates of the tetragon.The x value should be greater than top left x value and y value should be less than bottom right y value.
                Avoid fractions. The library converts to whole integers in use. Default: 0,0
                 */
				TopRight: {
					x: 0,
					y: 0,
				},

				/// Represents the coordinates of the bottom left corner.
				/**  This CGPoint structure holds the bottom left x and y coordinates of the tetragon. The x value should be less than the bottom right x value and y value should be greater than top left y value.
                Avoid fractions. The library converts to whole integers in use. Default: 0,0
                 */
				BottomLeft: {
					x: 0,
					y: 0,
				},

				/// Represents the coordinates of the bottom right corner.
				/**  This CGPoint structure holds the bottom right x and y coordinates of the tetragon. The x value should be greater than the bottom left x value and y value should be greater than top right y value.
                Avoid fractions. The library converts to whole integers in use. Default: 0,0
                 */
				BottomRight: {
					x: 0,
					y: 0,
				},
			},

			/** Use this property to set the desired output image DPI (Dots Per Inch). If you set it to 0 or null, the library will automatically detect the output image DPI and indicate it in the output object.
			 */
			outputDPI: 0, //any integer value

			///An enum which identifies the output bit depth.
			outputBitDepth: "BITONAL", //BITONAL,GRAYSCALE,COLOR
		},

		/*Image Perfection Profile specifies advanced Image Processing options. These settings are a superset of what is possible with basic settings profiles.
        This object contains more complicated image processing settings
        @deprecated Deprecated in SDK 3.3. Please use ImageProcessorConfiguration instead.
        */
		ImagePerfectionProfile: {
			///String which identifies the name of the perfection profile.
			name: null, //ANY STRING VALUE

			///Processing operations
			ipOperations: null, //ANY STRING VALUE

			///The file path of the xml file.
			ipOperationsFilePath: null, //VALID FILEPATH OF THE XML FILE

			///Use this property to enable or disable MRZ passport detection
			useMRZPassportDetection: false,

			///Use this property to enable or disable target frame cropping
			useTargetFrameCrop: false,
		},

		ImageProcessorConfiguration: {
			///An enum which identifies the rotation type. This value will be updated based on ipp string. If we pass ipp string as null then this value will be updated to ROTATE_NONE. If we pass any specific value then this value will be updated to that.
			rotateType: null, //ROTATE_NONE,ROTATE_90,ROTATE_180,ROTATE_270,ROTATE_AUTO

			///An enum which identifies the output bit depth. This value will be updated based on ipp string. If we pass ipp string as null then this value will be updated to COLOR. If we pass any specific value then this value will be updated to that.
			outputColorDepth: null, //BITONAL,GRAYSCALE,COLOR

			/*An enum which identifies the crop type.Provides a simple way to crop an image. Choose from three options specified below
              CROP_NONE:Set this option to perform no image cropping.
              CROP_AUTO:The library automatically finds the bounding tetragon around the document of interest, and crops to this boundary. Automatic cropping entails finding page boundaries, stretching the image into a rectangle if necessary, and cropping the image to the found sheet boundaries. This means that, in order to crop, the input image should have some sheet borders.
              CROP_TETRAGON: If we want to send cropping tetragon co-ordinates then we have to set this option. Based on the cropping tetragon co-ordinates cropping will happen.
              This value will be updated based on ipp string. If we pass ipp string as null then this value will be updated to CROP_NONE. If we pass any specific value then this value will be updated to that.
              Default:null
            */
			cropType: null, //CROP_NONE,CROP_AUTO,CROP_TETRAGON

			/*Pre-crop image using the targetFrame coordinates from the input image. This value will be updated based on ipp string. If we pass ipp string as null then this value will be updated to TARGET_FRAME_CROP_OFF. If we pass any specific value then this value will be updated to that.
            TARGET_FRAME_CROP_ON: This option is specified when the image will be pre-cropped to the coordinates in the targetFrame property of the input image (which is normaly set when the input image is captured using one of the library's Capture Experiences). Other specified cropping options will be performed subsequently.
            Default:null
            */

			targetFrameCropType: null, // TARGET_FRAME_CROP_OFF,TARGET_FRAME_CROP_ON

			/* An enum to deskew image to the user specified option. This value will be updated based on ipp string. If we pass ipp string as null then this value will be updated to DESKEW_NONE. If we pass any specific value then this value will be updated to that.
               Default: null
               Acceptable Values are: DESKEW_NONE,DESKEW_BY_DOCUMENT_EDGES,DESKEW_BY_DOCUMENT_CONTENT
            */

			deskewType: null, // DESKEW_NONE,DESKEW_BY_DOCUMENT_EDGES,DESKEW_BY_DOCUMENT_CONTENT

			/*  Represents the dimensions of a document. If the length of at least one of the edges of the document to be found are known ahead of time, they can be specified here to aid with edge detection, and also helps algorithms better estimate the output image DPI. You need not set both short and long edges; the algorithm uses one or both if present.
               Default (0.0, 0.0)
            */

			DocumentDimensions: {
				/* Represents the length of the shortest edge of the document to be found in inches. If you set it to 0.0, the library will not use this parameter.
               Default: 0.0
            */
				shortEdge: 0.0,

				/* Represents the length of the longest edge of the document to be found in inches. If you set it to 0.0, the library will not use this parameter.
               Default: 0.0
            */
				longEdge: 0.0,
			},

			/** Use this property to set the desired output image DPI (Dots Per Inch). If you set it to 0 or null, the library will automatically detect the output image DPI and indicate it in the output object.
             * This value will be updated based on ipp string. If we pass ipp string as null then this value will be updated to 0. If we pass any specific value then this value will be updated to that.
             Default : null
             */
			outputDPI: null, //any integer value

			advancedConfiguration: null, //ANY STRING VALUE

			/* This option is used to initialize the Image Processor Configuration. Based on this other properties will be updated. If we pass this as null then normal initialization will happen. */
			ippString: null,

			//The tetragon consists of the its top-left, top-right, bottom-left, and bottom-right points.
			croppingTetragon: {
				/// Represents the coordinates of the top left corner.
				/**  This CGPoint structure holds the the top left x and y coordinates of the tetragon point in pixels. The x value should be less than the top right x value and y value should be less than bottom left y value.
                Avoid fractions. The library converts to whole integers in use. Default: 0,0
                 */
				TopLeft: {
					x: 0,
					y: 0,
				},

				/// Represents the coordinates of the top right corner.
				/**  This CGPoint structure holds the top right x and y coordinates of the tetragon.The x value should be greater than top left x value and y value should be less than bottom right y value.
                Avoid fractions. The library converts to whole integers in use. Default: 0,0
                 */
				TopRight: {
					x: 0,
					y: 0,
				},

				/// Represents the coordinates of the bottom left corner.
				/**  This CGPoint structure holds the bottom left x and y coordinates of the tetragon. The x value should be less than the bottom right x value and y value should be greater than top left y value.
                Avoid fractions. The library converts to whole integers in use. Default: 0,0
                 */
				BottomLeft: {
					x: 0,
					y: 0,
				},

				/// Represents the coordinates of the bottom right corner.
				/**  This CGPoint structure holds the bottom right x and y coordinates of the tetragon. The x value should be greater than the bottom left x value and y value should be greater than top right y value.
                Avoid fractions. The library converts to whole integers in use. Default: 0,0
                 */
				BottomRight: {
					x: 0,
					y: 0,
				},
			},
		},
	};
	return imageProcessorOptions;
};
//End of ImageProcessor methods
module.exports = ImageProcessor;
