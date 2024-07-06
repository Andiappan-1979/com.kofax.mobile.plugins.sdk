#!/usr/bin/env node

module.exports = function (context) {
	var fs = context.requireCordovaModule("fs"),
		path = context.requireCordovaModule("path");

	var platformRoot = path.join(context.opts.projectRoot, "platforms/android");

	var manifestFile = path.join(platformRoot, "AndroidManifest.xml");

	if (fs.existsSync(manifestFile)) {
		fs.readFile(manifestFile, "utf8", function (err, data) {
			if (err) {
				throw new Error("Unable to find AndroidManifest.xml: " + err);
			}

			var android_namespace = 'xmlns:android="http://schemas.android.com/apk/res/android"';
			var android_tools_namespace =
				'xmlns:android="http://schemas.android.com/apk/res/android" xmlns:tools="http://schemas.android.com/tools"';

			if (data.indexOf(android_tools_namespace) == -1) {
				var result = data.replace(android_namespace, android_tools_namespace);

				fs.writeFile(manifestFile, result, "utf8", function (err) {
					if (err) throw new Error("Unable to write into AndroidManifest.xml: " + err);
				});
			}
		});
	}
};
