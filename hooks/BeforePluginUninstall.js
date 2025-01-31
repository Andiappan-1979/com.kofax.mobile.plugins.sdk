#!/usr/bin/env node
"use strict";

let cwd = process.cwd();
let fs = require("fs");
let path = require("path");

console.log("KofaxPlugin BeforePluginInstall.js, attempting to modify build.xcconfig");

let xcConfigBuildFilePath = path.join(cwd, "platforms", "ios", "cordova", "build.xcconfig");
console.log("xcConfigBuildFilePath: ", xcConfigBuildFilePath);
let lines = fs.readFileSync(xcConfigBuildFilePath, "utf8").split("\n");

lines.forEach((l, i) => {
	if (l.indexOf("GCC_NO_COMMON_BLOCKS") > -1) {
		lines.splice(i, 1);
		console.log("Removing No Common Blocks option from build.xcconfig");
	}
});

let headerSearchPathLineNumber;
lines.forEach((l, i) => {
	if (l.indexOf("HEADER_SEARCH_PATHS") > -1) {
		headerSearchPathLineNumber = i;
	}
});

if (lines[headerSearchPathLineNumber].indexOf("com.kofax.cordova") === -1) {
	console.log("build.xcconfig does not have header path for KofaxPlugin.");
	return;
}

let line = lines[headerSearchPathLineNumber];
lines[headerSearchPathLineNumber] = line.replace(
	/\ "\$\(SRCROOT\)\/\$\(PRODUCT_NAME\)\/Plugins\/com.kofax.cordova\/MobileSDK.framework\/Headers\"/i,
	""
);

let newConfig = lines.join("\n");

fs.writeFile(xcConfigBuildFilePath, newConfig, function (err) {
	if (err) {
		console.log("error updating build.xcconfig, err: ", err);
		return;
	}
	console.log("successfully updated HEADER_SEARCH_PATHS in build.xcconfig");
});
