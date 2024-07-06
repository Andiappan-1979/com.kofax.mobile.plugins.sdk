//
// NFCTagParameters.js
//
//  Copyright (c) 2012 - 2021 Kofax. Use of this code is with permission pursuant to Kofax license terms.

//Start of NFC Tag Parameters Object
/**
 * This method is used to create NFCTagParameters object
 *
 * @class
 * @alias NFCTagParameters
 * @constructor
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
var NFCTagParameters = function (properties) {
	if (typeof properties === "object") {
		this.idNumber = typeof properties.idNumber === "string" ? properties.idNumber : null;
		this.expirationDate = typeof properties.expirationDate === "string" ? properties.expirationDate : null;
		this.dateOfBirth = typeof properties.dateOfBirth === "string" ? properties.dateOfBirth : null;
	} else {
		this.idNumber = null;
		this.expirationDate = null;
		this.dateOfBirth = null;
	}
};
//End of NFC Tag Parameters Object
module.exports = NFCTagParameters;
