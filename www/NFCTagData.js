//
// NFCTagData.js
//
//  Copyright (c) 2012 - 2021 Kofax. Use of this code is with permission pursuant to Kofax license terms.

//Start of NFC Tag Data Object
/**
 * This method is used to create NFCTagData object
 *
 * @class
 * @alias NFCTagData
 * @constructor
 *
 * @param {Object} properties - NFC Tag Data properties. Which are used to create NFC Tag Data object.
 * @param {MRZResult} properties.mrzResult - This mrz result will have information like document code, issuing code, given name and document number etc.
 * @param {String} properties.faceImage - It is a base64 string. Which contains the high quality face image which is available in NFC chip.
 * @param {String} properties.documentSecurityObject - This contains document security object string.
This will be the documentSecurityObject string from the Passport and will be used to do a certificate validation externally.
 * @example
 * var properties = {
 *      mrzResult: kfxCordova.kfxEngine.createMRZResult(),
 *      faceImage: "Face Image Base64 string",
 *      documentSecurityObject: "Document Security Object String"
 * };
 * var nfcTagDataInstance = kfxCordova.kfxEngine.createNFCTagData(properties);
 */
var NFCTagData = function (properties) {
	this.mrzResult = typeof properties.mrzResult === "object" ? properties.mrzResult : null;
	this.faceImage = typeof properties.faceImage === "string" ? properties.faceImage : null;
	this.documentSecurityObject =
		typeof properties.documentSecurityObject === "string" ? properties.documentSecurityObject : null;
};
//End of NFC Tag Data Object
module.exports = NFCTagData;
