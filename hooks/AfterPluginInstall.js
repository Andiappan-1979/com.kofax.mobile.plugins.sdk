#!/usr/bin/env node
"use strict";

let cwd = process.cwd();
let fs = require("fs");
let path = require("path");

console.log("KofaxPlugin AfterPluginInstall.js, attempting to modify build.xcconfig");

let xcConfigBuildFilePath = path.join(cwd, "platforms", "ios", "cordova", "build.xcconfig");
console.log("xcConfigBuildFilePath: ", xcConfigBuildFilePath);
let lines = fs.readFileSync(xcConfigBuildFilePath, "utf8").split("\n");

let headerSearchPathLineNumber = -1,
	noCommonBlocksLineNumber = -1;
let headerSearchPathsIncluded = false,
	noCommonBlocksDisabled = false;
lines.forEach((l, i) => {
	if (l.indexOf("HEADER_SEARCH_PATHS") > -1) {
		headerSearchPathLineNumber = i;
	}
	if (l.indexOf("GCC_NO_COMMON_BLOCKS") > -1) {
		noCommonBlocksLineNumber = i;
	}
});

if (headerSearchPathLineNumber != -1 && lines[headerSearchPathLineNumber].indexOf("com.kofax.cordova") > -1) {
	console.log("Header search paths already setup for KofaxPLugin");
	headerSearchPathsIncluded = true;
}

if (noCommonBlocksLineNumber != -1 && lines[noCommonBlocksLineNumber].indexOf("NO") > -1) {
	console.log("No common blocks were already added to build.xcconfig");
	noCommonBlocksDisabled = true;
}

if (headerSearchPathsIncluded && noCommonBlocksDisabled) {
	return;
}

if (!headerSearchPathsIncluded && headerSearchPathLineNumber != -1) {
	lines[headerSearchPathLineNumber] +=
		' "$(SRCROOT)/$(PRODUCT_NAME)/Plugins/com.kofax.cordova/MobileSDK.framework/Headers"';
	console.log("Adding Header Search Paths for KofaxPlugin");
}

if (!noCommonBlocksDisabled && noCommonBlocksLineNumber != -1) {
	lines[noCommonBlocksLineNumber] = "GCC_NO_COMMON_BLOCKS = NO;";
	console.log("Updating No Common Blocks option in build.xcconfig");
} else {
	lines.push("GCC_NO_COMMON_BLOCKS = NO;");
	console.log("Adding No Common Blocks option to build.xcconfig");
}

let newConfig = lines.join("\n");

fs.writeFile(xcConfigBuildFilePath, newConfig, function (err) {
	if (err) {
		console.log("error updating build.xcconfig, err: ", err);
		return;
	}
	console.log("successfully updated HEADER_SEARCH_PATHS in build.xcconfig");
});
