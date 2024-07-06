//
// MRZResult.js
//
//  Copyright (c) 2012 - 2021 Kofax. Use of this code is with permission pursuant to Kofax license terms.

//Start of MRZ Result Object
/**
 * This method is used to create MRZResult object
 *
 * @class
 * @alias MRZResult
 * @constructor
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
var MRZResult = function (result) {
	this.mrz = typeof result.mrz === "string" ? result.mrz : null;
	this.documentCode = typeof result.documentCode === "string" ? result.documentCode : null;
	this.issuingStateCode = typeof result.issuingStateCode === "string" ? result.issuingStateCode : null;
	this.documentNumber = typeof result.documentNumber === "string" ? result.documentNumber : null;
	this.personalNumber = typeof result.personalNumber === "string" ? result.personalNumber : null;
	this.gender = typeof result.gender === "string" ? result.gender : null;
	this.givenNames = typeof result.givenNames === "string" ? result.givenNames : null;
	this.surname = typeof result.surname === "string" ? result.surname : null;
	this.nationalityCode = typeof result.nationalityCode === "string" ? result.nationalityCode : null;
	this.dateOfBirth = typeof result.dateOfBirth === "string" ? result.dateOfBirth : null;
	this.dateOfExpiry = typeof result.dateOfExpiry === "string" ? result.dateOfExpiry : null;
};
//End of MRZ Result Object
module.exports = MRZResult;
