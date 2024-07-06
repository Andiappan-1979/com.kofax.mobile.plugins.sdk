# Kofax PhoneGap Plugin

Open Kofax PhoneGap plugin which is available at **KofaxMobileSDK(Hybrid/PhoneGap/Plugins/com.kofax.mobile.plugins.sdk)**.

## For Android

1. Copy arm64-v8a, armeabi-v7a folders from **KofaxMobileSDK(Android/MobileSDK_libs/aar)** to Kofax PhoneGap plugin **(com.kofax.mobile.plugins.sdk/lib/Android)**.
2. Copy the lib files from **KofaxMobileSDK(Android/MobileSDK_libs/aar)** except arm64-v8a, armeabi-v7a folders to Kofax PhoneGap plugin **(com.kofax.mobile.plugins.sdk/lib/Android/NativeLibs)**.

## For iOS

1. Unzip the frameworks in **KofaxMobileSDK(iOS/Frameworks/MobileSDK.zip)**
2. Copy the frameworks from **KofaxMobileSDK(iOS/Frameworks/MobileSDK)** to Kofax PhoneGap plugin **(com.kofax.mobile.plugins.sdk/lib/iOS)**.

# Cordova Environment

After doing above changes to Kofax PhoneGap plugin for both iOS and Android platforms, add it to the cordova project and run the application.

## Usage

**Note:** Please make sure that python has been installed on /usr/bin/python location in order to launch the app in iOS devices.
**Note:** Please mention your development team id in build and run commands for iOS

```
cordova create SampleProject identifier(ex:com.kofax.sampleproject) SampleProject
cd SampleProject
cordova plugin add "Plugin(com.kofax.mobile.plugins.sdk) path"
cordova platform add android
cordova build android
cordova run android
cordova platform add ios
cordova build ios --buildFlag="-UseModernBuildSystem=0" --buildFlag="DEVELOPMENT_TEAM=yourDevelopmentTeamID"
cordova run ios --buildFlag="-UseModernBuildSystem=0" --buildFlag="DEVELOPMENT_TEAM=yourDevelopmentTeamID"
```

# OutSystems Environment

1. After doing above changes to Kofax PhoneGap plugin for both iOS and Android platforms, remove below libraries from **(com.kofax.mobile.plugins.sdk/lib/Android/NativeLibs)** folder.

```
okhttp
gson
okio
```

2. Comment below line in plugin.xml file.

```
<framework src="com.android.support:support-v4:27.1.1" />
```

3. After doing above changes, add PhoneGap plugin to the OutSystems project and run the application.
