// Copyright (c) 2012-2017 Kofax.  Use of this code is with permission pursuant to Kofax license terms.

#import <Cordova/CDVPlugin.h>
#import <kfxLibUIControls/kfxUIControls.h>
#import <kfxLibEngines/kfxEngines.h>

#import <MessageUI/MFMailComposeViewController.h>

@interface KFXMobileSdkPlugin : CDVPlugin<kfxKUIImageCaptureControlDelegate, kfxKIPDelegate, kfxKUIBarCodeCaptureControlDelegate, MFMailComposeViewControllerDelegate>
-(void) echo:(CDVInvokedUrlCommand *)command;
-(void) createImageCaptureControl:(CDVInvokedUrlCommand*)command;

+(void) setLicenseKey:(NSString*)key;

-(void)plugin_reset : (CDVInvokedUrlCommand*)command;

@end
