//
// FieldTypeObject.js
//
//  Copyright (c) 2012 - 2021 Kofax. Use of this code is with permission pursuant to Kofax license terms.

var ActionUtils = require("./ActionUtils");

//Start of FiledType Object
/**
 * Get the default fieldtypeobject everytime
 *
 * @class
 * @alias FieldTypeObject
 * @constructor
 *
 * @example {
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
 *    }
 */
var FieldTypeObject = function () {
	this.dataType = "KLO_TYPE_STRING";
	this.hidden = false;
	this.options = null;
	this.readOnly = false;
	this.required = false;
	this.forceMatch = true;
	this.name = null;
	this.displayName = null;
	this.label = null;
	this.min = null;
	this.max = null;
	this.defaultValue = null;
	this.customTag = null;
};
//End of FieldType Object

module.exports = FieldTypeObject;
