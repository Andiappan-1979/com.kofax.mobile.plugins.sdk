//
//  kfxPlugin.h
//  KofaxPGSDK
//
//  Copyright (c) 2012 - 2017 Kofax. Use of this code is with permission pursuant to Kofax license terms.
//
//

#import <Cordova/CDVPlugin.h>

@interface kfxPlugin : CDVPlugin
#pragma mark
#pragma mark UTILITIES Methods


-(void) kutSetMobileSDKLicense:(CDVInvokedUrlCommand*)command;
-(void) kutGetDaysRemaining:(CDVInvokedUrlCommand*)command;
-(void)kutGetSDKVersions:(CDVInvokedUrlCommand*)command;
-(void)kutEnableLogging:(CDVInvokedUrlCommand*)command;
-(void)kutDisableLogging:(CDVInvokedUrlCommand*)command;
-(void)kutSetMobileSDKLicenceServer:(CDVInvokedUrlCommand*)command;
-(void)kutGetRemainingVolumeCount:(CDVInvokedUrlCommand*)command;
-(void)kutAddAcquireVolumeLicenseListener:(CDVInvokedUrlCommand*)command;
-(void)kutRemoveAcquireVolumeLicenseListener:(CDVInvokedUrlCommand*)command;
-(void)kutAcquireVolumeLicenses:(CDVInvokedUrlCommand*)command;
-(void)kutUpdateCustomAcquireLicenseVolumeCount:(CDVInvokedUrlCommand*)command;
-(void)kutAddCustomAcquireVolumeLicenseListener:(CDVInvokedUrlCommand*)command;
-(void)kutRemoveCustomAcquireVolumeLicenseListener:(CDVInvokedUrlCommand*)command;

#pragma  mark
#pragma mark App Stats merthods
-(void)kutAppStatsStartRecord:(CDVInvokedUrlCommand*)command;
-(void)kutAppStatsStopRecord:(CDVInvokedUrlCommand*)command;
-(void)kutAppStatsWriteToFile:(CDVInvokedUrlCommand*)command;
-(void)kutAppStatsSetOptions:(CDVInvokedUrlCommand*)command;
-(void)kutAppStatsGetOptions:(CDVInvokedUrlCommand*)command;
-(void)kutAppStatsPurge:(CDVInvokedUrlCommand*)command;
-(void)kutAppStatsIsRecording:(CDVInvokedUrlCommand*)command;
-(void)kutAppStatsExport:(CDVInvokedUrlCommand*)command;
-(void)kutAppStatsAddAppStatsExportListener:(CDVInvokedUrlCommand*)command;
-(void)kutAppStatsAddAppStatsWriteFileListener:(CDVInvokedUrlCommand*)command;
-(void)kutAppStatsAddAppThresholdListener:(CDVInvokedUrlCommand*)command;
-(void)kutAppStatsRemoveAppStatsExportListener:(CDVInvokedUrlCommand*)command;
-(void)kutAppStatsRemoveAppStatsWriteFileListener:(CDVInvokedUrlCommand*)command;
-(void)kutAppStatsRemoveAppStatsThresholdListener:(CDVInvokedUrlCommand*)command;
-(void)kutAppStatsBeginSession:(CDVInvokedUrlCommand*)command;
-(void)kutAppStatsLogSessionEvent:(CDVInvokedUrlCommand*)command;
-(void)kutAppStatsEndSession:(CDVInvokedUrlCommand*)command;

#pragma mark
#pragma mark Capture Server methods
-(void)kloCaptureServerCreate:(CDVInvokedUrlCommand*)command;
-(void)kloCaptureServerRegisterDevice:(CDVInvokedUrlCommand*)command;
-(void)kloCaptureServerLogin:(CDVInvokedUrlCommand*)command;
-(void)kloCaptureServerLogout:(CDVInvokedUrlCommand*)command;
-(void)kloCaptureServerLoginAnonymously:(CDVInvokedUrlCommand*)command;
-(void)kloCaptureServerGetDocumentType:(CDVInvokedUrlCommand*)command;
-(void)kloCaptureServerSubmitDocument:(CDVInvokedUrlCommand*)command;
-(void)kloCaptureServerCancelSubmission:(CDVInvokedUrlCommand*)command;
-(void)kloCaptureServerStartJobService:(CDVInvokedUrlCommand*)command;
-(void)kloCaptureServerSendImageService:(CDVInvokedUrlCommand*)command;
-(void)kloCaptureServerSetProperties:(CDVInvokedUrlCommand*)command;
-(void)kloCaptureServerGetProperties:(CDVInvokedUrlCommand*)command;
-(void)kloCaptureServerCleanCaptureServer:(CDVInvokedUrlCommand*)command;
-(void)kloCaptureServeraddProgressListener:(CDVInvokedUrlCommand*)command;
-(void)kloCaptureServerremoveProgressListener:(CDVInvokedUrlCommand*)command;

#pragma mark
#pragma mark Server Extractor methods
-(void)kloServerExtractorCreate:(CDVInvokedUrlCommand*)command;
-(void)kloServerExtractorLogin:(CDVInvokedUrlCommand*)command;
-(void)kloServerExtractorExtractData:(CDVInvokedUrlCommand*)command;
-(void)kloServerExtractorCancelExtraction:(CDVInvokedUrlCommand*)command;
-(void)kloServerExtractorSetOptions:(CDVInvokedUrlCommand*)command;
-(void)kloServerExtractorGetOptions:(CDVInvokedUrlCommand*)command;
-(void)kloServerExtractorClean:(CDVInvokedUrlCommand*)command;

#pragma mark
#pragma mark document type class
-(void)kloCreateDocumentTypeWithFieldTypes:(CDVInvokedUrlCommand*)command;
-(void)kloDeleteDocumentTypes:(CDVInvokedUrlCommand*)command;
-(void)kloRemoveAllDocumentTypes:(CDVInvokedUrlCommand*)command;
-(void)kloGetDocumentTypes:(CDVInvokedUrlCommand*)command;
-(void)kloGetDocumentTypeProperties:(CDVInvokedUrlCommand*)command;

#pragma mark
#pragma mark document class
-(void)kloAddPageToDocument:(CDVInvokedUrlCommand*)command;
-(void)kloRemovePageFromDocument:(CDVInvokedUrlCommand*)command;
-(void)kloCreateDocumentWithDocumentType:(CDVInvokedUrlCommand*)command;
-(void)kloCreateDocumentWithDocumentTypeAndId:(CDVInvokedUrlCommand*)command;
-(void)kloUpdateFields:(CDVInvokedUrlCommand*)command;
-(void)kloDeleteDocuments:(CDVInvokedUrlCommand*)command;
-(void)kloRemoveAllDocuments:(CDVInvokedUrlCommand*)command;
-(void)kloGetDocumentIds:(CDVInvokedUrlCommand*)command;
-(void)kloGetDocumentProperties:(CDVInvokedUrlCommand*)command;

#pragma mark
#pragma mark page class
-(void)kloCreatePageObject:(CDVInvokedUrlCommand*)command;
-(void)kloAddImageToPage:(CDVInvokedUrlCommand*)command;
-(void)kloRemoveImageFromPage:(CDVInvokedUrlCommand*)command;
-(void)kloDeletePages:(CDVInvokedUrlCommand*)command;
-(void)kloGetPageIds:(CDVInvokedUrlCommand*)command;
-(void)kloRemoveAllPages:(CDVInvokedUrlCommand*)command;
-(void)kloGetPageProperties:(CDVInvokedUrlCommand*)command;
-(void)kloSetPageProperties:(CDVInvokedUrlCommand*)command;

#pragma mark
#pragma mark image capture control class
-(void)kuiGetImageCaptureControlID:(CDVInvokedUrlCommand*)command;
-(void)kuiForceTakePicture:(CDVInvokedUrlCommand*)command;
-(void)kuiForceTakePictureFocusAgain:(CDVInvokedUrlCommand *)command;
-(void)kuiAddCameraView:(CDVInvokedUrlCommand*)command;

-(void)kuiRemoveCameraView:(CDVInvokedUrlCommand*)command;

-(void)kuiAddImageCapturedListener:(CDVInvokedUrlCommand*)command;
-(void)kuiRemoveImageCapturedListener:(CDVInvokedUrlCommand*)command;

-(void)kuiAddStablityDelayListener:(CDVInvokedUrlCommand*)command;
-(void)kuiRemoveStablityDelayListener:(CDVInvokedUrlCommand*)command;

-(void)kuiAddLevelnessListener:(CDVInvokedUrlCommand*)command;
-(void)kuiRemoveLevelnessListener:(CDVInvokedUrlCommand*)command;

-(void)kuiAddFocusListener:(CDVInvokedUrlCommand*)command;
-(void)kuiRemoveFocusListener:(CDVInvokedUrlCommand*)command;

-(void)kuiSetImageCaptureOptions:(CDVInvokedUrlCommand*)command;

-(void)kuiGetImageCaptureOptions:(CDVInvokedUrlCommand*)command;
-(void)kuiAddCameraInitializationListener:(CDVInvokedUrlCommand*)command;
-(void)kuiRemoveCameraInitializationListener:(CDVInvokedUrlCommand*)command;
-(void)kuiAddCameraInitializationFailedListener:(CDVInvokedUrlCommand*)command;
-(void)kuiRemoveCameraInitializationFailedListener:(CDVInvokedUrlCommand*)command;
-(void)kuiSetImageResolution:(CDVInvokedUrlCommand*)command;
-(void)kuiAddTorchLuminanceListener:(CDVInvokedUrlCommand*)command;
-(void)kuiRemoveTorchLuminanceListener:(CDVInvokedUrlCommand*)command;
-(void)kuiSetFocusAreas:(CDVInvokedUrlCommand*)command;
-(void)kuiGetMaxFocusAreas:(CDVInvokedUrlCommand*)command;
-(void)kuiSetCameraType:(CDVInvokedUrlCommand*)command;

#pragma mark -----
#pragma mark Fixed Aspect Ratio Experience 
#pragma mark -----

-(void)kuiFCEBindCaptureControl:(CDVInvokedUrlCommand*)command;
-(void)kuiFCETakePicture:(CDVInvokedUrlCommand*)command;
-(void)kuiFCETakePictureContinually:(CDVInvokedUrlCommand*)command;
-(void)kuiFCEStopCapture:(CDVInvokedUrlCommand*)command;
-(void)kuiFCEGetOptions:(CDVInvokedUrlCommand*)command;
-(void)kuiFCEGetDefaultGlareThreshold:(CDVInvokedUrlCommand*)command;
-(void)kuiFCESetOptions:(CDVInvokedUrlCommand*)command;
-(void)kuiFCEAddImageCapturedListener:(CDVInvokedUrlCommand*)command;
-(void)kuiFCERemoveImageCapturedListener:(CDVInvokedUrlCommand*)command;
-(void)kuiFCEAddImageCapturedEventListener:(CDVInvokedUrlCommand*)command;
-(void)kuiFCERemoveImageCapturedEventListener:(CDVInvokedUrlCommand*)command;
-(void)kuiFCEDestroy:(CDVInvokedUrlCommand*)command;
-(void)kuiFCEBindCaptureControlWithOptions:(CDVInvokedUrlCommand*)command;
-(void)kuiFCEAddImageAboutToCaptureListener:(CDVInvokedUrlCommand*)command;
-(void)kuiFCERemoveImageAboutToCaptureListener:(CDVInvokedUrlCommand*)command;
-(void)kuiFCEAddImageJustCapturedListener:(CDVInvokedUrlCommand*)command;
-(void)kuiFCERemoveImageJustCapturedListener:(CDVInvokedUrlCommand*)command;

#pragma mark
#pragma mark Check Capture Experience
-(void)kuiCHEBindCaptureControl:(CDVInvokedUrlCommand*)command;
-(void)kuiCHETakePicture:(CDVInvokedUrlCommand*)command;
-(void)kuiCHETakePictureContinually:(CDVInvokedUrlCommand*)command;
-(void)kuiCHEStopCapture:(CDVInvokedUrlCommand*)command;
-(void)kuiCHEGetOptions:(CDVInvokedUrlCommand*)command;
-(void)kuiCHESetOptions:(CDVInvokedUrlCommand*)command;
-(void)kuiCHEAddImageCapturedListener:(CDVInvokedUrlCommand*)command;
-(void)kuiCHERemoveImageCapturedListener:(CDVInvokedUrlCommand*)command;
-(void)kuiCHEAddImageCapturedEventListener:(CDVInvokedUrlCommand*)command;
-(void)kuiCHERemoveImageCapturedEventListener:(CDVInvokedUrlCommand*)command;
-(void)kuiCHEDestroy:(CDVInvokedUrlCommand*)command;
-(void)kuiCHEBindCaptureControlWithOptions:(CDVInvokedUrlCommand*)command;
-(void)kuiCHEAddImageAboutToCaptureListener:(CDVInvokedUrlCommand*)command;
-(void)kuiCHERemoveImageAboutToCaptureListener:(CDVInvokedUrlCommand*)command;
-(void)kuiCHEAddImageJustCapturedListener:(CDVInvokedUrlCommand*)command;
-(void)kuiCHERemoveImageJustCapturedListener:(CDVInvokedUrlCommand*)command;

#pragma mark
#pragma mark Document Guidence Capture Experience
-(void)kuiDCBindCaptureControl:(CDVInvokedUrlCommand*)command;
-(void)kuiDCTakePicture:(CDVInvokedUrlCommand*)command;
-(void)kuiDCTakePictureContinually:(CDVInvokedUrlCommand*)command;
-(void)kuiDCAddImageCapturedListener:(CDVInvokedUrlCommand*)command;
-(void)kuiDCRemoveImageCapturedListener:(CDVInvokedUrlCommand*)command;
-(void)kuiDCAddImageCapturedEventListener:(CDVInvokedUrlCommand*)command;
-(void)kuiDCRemoveImageCapturedEventListener:(CDVInvokedUrlCommand*)command;
-(void)kuiDCStopCapture:(CDVInvokedUrlCommand*)command;
-(void)kuiDCSetOptions:(CDVInvokedUrlCommand*)command;
-(void)kuiDCGetDefaultGlareThreshold:(CDVInvokedUrlCommand*)command;
-(void)kuiDCGetOptions:(CDVInvokedUrlCommand*)command;
-(void)kuiDCDestroy:(CDVInvokedUrlCommand*)command;
-(void)kuiDCBindCaptureControlWithOptions:(CDVInvokedUrlCommand*)command;
-(void)kuiDCAddImageAboutToCaptureListener:(CDVInvokedUrlCommand*)command;
-(void)kuiDCRemoveImageAboutToCaptureListener:(CDVInvokedUrlCommand*)command;
-(void)kuiDCAddImageJustCapturedListener:(CDVInvokedUrlCommand*)command;
-(void)kuiDCRemoveImageJustCapturedListener:(CDVInvokedUrlCommand*)command;

#pragma mark
#pragma mark Passport Capture Experience
-(void)kuiPCBindCaptureControl:(CDVInvokedUrlCommand*)command;
-(void)kuiPCTakePicture:(CDVInvokedUrlCommand*)command;
-(void)kuiPCTakePictureContinually:(CDVInvokedUrlCommand*)command;
-(void)kuiPCAddImageCapturedListener:(CDVInvokedUrlCommand*)command;
-(void)kuiPCRemoveImageCapturedListener:(CDVInvokedUrlCommand*)command;
-(void)kuiPCAddImageCapturedEventListener:(CDVInvokedUrlCommand*)command;
-(void)kuiPCRemoveImageCapturedEventListener:(CDVInvokedUrlCommand*)command;
-(void)kuiPCStopCapture:(CDVInvokedUrlCommand*)command;
-(void)kuiPCSetOptions:(CDVInvokedUrlCommand*)command;
-(void)kuiPCGetOptions:(CDVInvokedUrlCommand*)command;
-(void)kuiPCDestroy:(CDVInvokedUrlCommand*)command;
-(void)kuiPCBindCaptureControlWithOptions:(CDVInvokedUrlCommand*)command;
-(void)kuiPCAddImageAboutToCaptureListener:(CDVInvokedUrlCommand*)command;
-(void)kuiPCRemoveImageAboutToCaptureListener:(CDVInvokedUrlCommand*)command;
-(void)kuiPCAddImageJustCapturedListener:(CDVInvokedUrlCommand*)command;
-(void)kuiPCRemoveImageJustCapturedListener:(CDVInvokedUrlCommand*)command;


#pragma mark
#pragma mark Selfie Capture Experience
-(void)kuiSCBindCaptureControl:(CDVInvokedUrlCommand*)command;
-(void)kuiSCTakePicture:(CDVInvokedUrlCommand*)command;
-(void)kuiSCAddImageCapturedListener:(CDVInvokedUrlCommand*)command;
-(void)kuiSCRemoveImageCapturedListener:(CDVInvokedUrlCommand*)command;
-(void)kuiSCStopCapture:(CDVInvokedUrlCommand*)command;
-(void)kuiSCSetOptions:(CDVInvokedUrlCommand*)command;
-(void)kuiSCGetOptions:(CDVInvokedUrlCommand*)command;
-(void)kuiSCDestroy:(CDVInvokedUrlCommand*)command;
-(void)kuiSCBindCaptureControlWithOptions:(CDVInvokedUrlCommand*)command;


#pragma mark
#pragma mark imagearray
-(void)kedGetTotalImages:(CDVInvokedUrlCommand*)command;
-(void)kedGetImageIds:(CDVInvokedUrlCommand*)command;
-(void)kedGetImageProperties:(CDVInvokedUrlCommand*)command;
-(void)kedGetImageFromBase64:(CDVInvokedUrlCommand*)command;
-(void)kedGetImageFromFilePath:(CDVInvokedUrlCommand*)command;
-(void)kedGetImageAsBlob:(CDVInvokedUrlCommand*)command;
-(void)kedGetImageToBase64:(CDVInvokedUrlCommand*)command;
-(void)kedRemoveImages:(CDVInvokedUrlCommand*)command;
-(void)kedSetImageProperties:(CDVInvokedUrlCommand*)command;
-(void)kedRemoveAllImages:(CDVInvokedUrlCommand*)command;
-(void)kedImageWriteToFile:(CDVInvokedUrlCommand*)command;
-(void)kedImageReadFromFile:(CDVInvokedUrlCommand*)command;
-(void)kedClearimageBitMap:(CDVInvokedUrlCommand*)command;
-(void)kedDeleteFileFromDisk:(CDVInvokedUrlCommand*)command;
-(void)kedGetImageSize:(CDVInvokedUrlCommand *)command;


#pragma mark
#pragma mark BarcodeCaptureController
-(void)kuiBCSetOptions:(CDVInvokedUrlCommand*)command;
-(void)kuiBCGetOptions:(CDVInvokedUrlCommand*)command;
-(void)kuiBCReadBarcode:(CDVInvokedUrlCommand*)command;
-(void)kuiBCAddView:(CDVInvokedUrlCommand*)command;
-(void)kuiBCRemoveView:(CDVInvokedUrlCommand*)command;
-(void)kuiBCAddEventListener:(CDVInvokedUrlCommand*)command;
-(void)kuiBCRemoveEventListener:(CDVInvokedUrlCommand*)command;
-(void)kuiBCAddInitializationFailedListener:(CDVInvokedUrlCommand*)command;
-(void)kuiBCRemoveInitializationFailedListener:(CDVInvokedUrlCommand*)command;

#pragma mark
#pragma mark image Review Edit Control class
-(void)kuiAddImageReviewView:(CDVInvokedUrlCommand*)command;
-(void)kuiSetImageReviewEditOptions:(CDVInvokedUrlCommand*)command;
-(void)kuiGetImageReviewEditOptions:(CDVInvokedUrlCommand*)command;
-(void)kuiRemoveImageReviewView:(CDVInvokedUrlCommand*)command;
-(void)kuiSetImage:(CDVInvokedUrlCommand*)command;
-(void)kuiGetImage:(CDVInvokedUrlCommand*)command;
-(void)kuiClearImage:(CDVInvokedUrlCommand*)command;
-(void)kuiShowHighlights:(CDVInvokedUrlCommand*)command;
-(void)kuiClearHighlights:(CDVInvokedUrlCommand*)command;

#pragma mark
#pragma mark ENGINES Methods

-(void)kenImageProcessorSetOptions:(CDVInvokedUrlCommand*)command;
-(void)kenImageProcessorGetOptions:(CDVInvokedUrlCommand*)command;
-(void)kenCancelImageProcess:(CDVInvokedUrlCommand*)command;
-(void)kenSpecifyProcessedImageFilePath:(CDVInvokedUrlCommand*)command;
-(void)kenGetProcessedImageFilePath:(CDVInvokedUrlCommand*)command;
-(void)kenProcessImage:(CDVInvokedUrlCommand*)command;
-(void)kenImageProcessorAddImageOutEventListener:(CDVInvokedUrlCommand*)command;
-(void)kenImageProcessorAddProcessProgressListener:(CDVInvokedUrlCommand*)command;
-(void)kenImageProcessorRemoveImageOutEventListener:(CDVInvokedUrlCommand*)command;
-(void)kenImageProcessorRemoveProcessProgressListener:(CDVInvokedUrlCommand*)command;


-(void)kenImageProcessorDoQuickAnalysis:(CDVInvokedUrlCommand*)command;
-(void)kenImageProcessorDoQuickAnalysisWithSettings:(CDVInvokedUrlCommand*)command;


-(void)kenImageProcessorAddAnalysisCompleteListener:(CDVInvokedUrlCommand*)command;
-(void)kenImageProcessorAddAnalysisProgressListener:(CDVInvokedUrlCommand*)command;
-(void)kenImageProcessorRemoveAnalysisCompleteListener:(CDVInvokedUrlCommand*)command;
-(void)kenImageProcessorRemoveAnalysisProgressListener:(CDVInvokedUrlCommand*)command;

-(void)kenODEAddOnDeviceExtractionListener:(CDVInvokedUrlCommand*)command;
-(void)kenODERemoveOnDeviceExtractionListener:(CDVInvokedUrlCommand*)command;
-(void)kenODEExtractData:(CDVInvokedUrlCommand*)command;
-(void)kenODECancelExtraction:(CDVInvokedUrlCommand*)command;
-(void)kenODESetProvider:(CDVInvokedUrlCommand*)command;
-(void)kenODEGetProjectName:(CDVInvokedUrlCommand*)command;
-(void)kenODEAddFrontProcessedImageListener:(CDVInvokedUrlCommand*)command;
-(void)kenODERemoveFrontProcessedImageListener:(CDVInvokedUrlCommand*)command;
-(void)kenODEAddBackProcessedImageListener:(CDVInvokedUrlCommand*)command;
-(void)kenODERemoveBackProcessedImageListener:(CDVInvokedUrlCommand*)command;

-(void)kenServerProjectProvider:(CDVInvokedUrlCommand*)command;
-(void)kenServerProjectProviderSetRequestTimeOut:(CDVInvokedUrlCommand*)command;
-(void)kenServerProjectProviderGetHighestVersion:(CDVInvokedUrlCommand*)command;
-(void)kenServerProjectProviderGetProject:(CDVInvokedUrlCommand*)command;
-(void)kenServerProjectProviderGetVariant:(CDVInvokedUrlCommand*)command;
-(void)kenServerProjectProviderLoadAllVariantsForProject:(CDVInvokedUrlCommand*)command;
-(void)kenServerProjectProviderCancelLoadAllVariants:(CDVInvokedUrlCommand*)command;
-(void)kenServerProjectProviderUseCacheProvider:(CDVInvokedUrlCommand*)command;

-(void)kenLocalProjectProvider:(CDVInvokedUrlCommand*)command;
-(void)kenLocalProjectProviderGetHighestVersion:(CDVInvokedUrlCommand*)command;
-(void)kenLocalProjectProviderGetProject:(CDVInvokedUrlCommand*)command;
-(void)kenLocalProjectProviderGetVariant:(CDVInvokedUrlCommand*)command;
-(void)kenLocalProjectProviderUseCacheProvider:(CDVInvokedUrlCommand*)command;

-(void)kenBundleCacheProvider:(CDVInvokedUrlCommand*)command;
-(void)kenBundleCacheProviderGetLatestVersionForProject:(CDVInvokedUrlCommand*)command;
-(void)kenBundleCacheProviderGetProject:(CDVInvokedUrlCommand*)command;
-(void)kenBundleCacheProviderGetVariant:(CDVInvokedUrlCommand*)command;
-(void)kenBundleCacheProviderCacheProject:(CDVInvokedUrlCommand*)command;
-(void)kenBundleCacheProviderCacheVariant:(CDVInvokedUrlCommand*)command;

-(void)kenQEAddQuickExtractionListener:(CDVInvokedUrlCommand*)command;
-(void)kenQERemoveQuickExtractionListener:(CDVInvokedUrlCommand*)command;
-(void)kenQEQuickExtract:(CDVInvokedUrlCommand*)command;
-(void)kenQESetQuickExtractionSettings:(CDVInvokedUrlCommand*)command;
-(void)kenQEDestroy:(CDVInvokedUrlCommand*)command;

-(void)kenNFCReadTag:(CDVInvokedUrlCommand*)command;
-(void)kenNFCVerifyDocumentSecurityObject:(CDVInvokedUrlCommand*)command;
-(void)kenNFCAddReadTagListener:(CDVInvokedUrlCommand*)command;
-(void)kenNFCAddDocumentSecurityObjectVerificationListener:(CDVInvokedUrlCommand*)command;
-(void)kenNFCRemoveReadTagListener:(CDVInvokedUrlCommand*)command;
-(void)kenNFCRemoveDocumentSecurityObjectVerificationListener:(CDVInvokedUrlCommand*)command;


-(void)kuiQEAAddQuickExtractionFieldsListener:(CDVInvokedUrlCommand*)command;
-(void)kuiQEARemoveQuickExtractionFieldsListener:(CDVInvokedUrlCommand*)command;
-(void)kuiQEAAddQuickExtractionFaceListener:(CDVInvokedUrlCommand*)command;
-(void)kuiQEARemoveQuickExtractionFaceListener:(CDVInvokedUrlCommand*)command;
-(void)kuiQEASetCaptureExperienceAndQuickExtractionSettings:(CDVInvokedUrlCommand*)command;
-(void)kuiQEADestroy:(CDVInvokedUrlCommand*)command;



#pragma mark
#pragma mark LOGISTICS Methods


#pragma mark
#pragma mark Glare Remover Methods
-(void)kenGRRemoveGlare:(CDVInvokedUrlCommand*)command;
-(void)kenGRGetGlareFraction:(CDVInvokedUrlCommand*)command;

@end
