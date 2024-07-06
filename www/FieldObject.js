//
// FieldObject.js
//
//  Copyright (c) 2012 - 2021 Kofax. Use of this code is with permission pursuant to Kofax license terms.

var ActionUtils = require("./ActionUtils");
//Start of Field Object
/**
 * Get the default fieldobject everytime
 *
 * @class
 * @alias FieldObject
 * @constructor
 *
 * @example {
 *    fieldType : {
 *        dataType : "KLO_TYPE_STRING",
 *        hidden : false,
 *        options : [],
 *        readOnly : false,
 *        required : false,
 *        forceMatch : true,
 *        name: null,
 *        displayName : null,
 *        label : null,
 *        min : null,
 *        max : null,
 *        defaultValue : null,
 *        customTag : null
 *    },
 *    valid : 1,
 *    tag : null,
 *    errorDescription : null,
 *    value : null
 * }
 */
var FieldObject = function () {
	this.fieldType = {
		dataType: "KLO_TYPE_STRING",
		hidden: false,
		options: [],
		readOnly: false,
		required: false,
		forceMatch: true,
		name: null,
		displayName: null,
		label: null,
		min: null,
		max: null,
		defaultValue: null,
		customTag: null,
	};
	this.valid = 1;
	this.tag = null;
	this.errorDescription = null;
	this.value = null;
};
//End of Field Object
module.exports = FieldObject;
