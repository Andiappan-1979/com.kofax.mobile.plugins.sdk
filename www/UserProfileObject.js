//
// UserProfileObject.js
//
//  Copyright (c) 2012 - 2021 Kofax. Use of this code is with permission pursuant to Kofax license terms.

var ActionUtils = require("./ActionUtils");
//Start of User Profile Object
/**
 * Get the default userprofileobject everytime
 *
 * @class
 * @alias UserProfileObject
 * @constructor
 *
 * @example {
 *    userName : "", //UserName which is used to login to the server
 *    password : "", //Password which is used to login to the server
 *    Domain : "", //Domain which is used for login
 *    userEmailAddress : "" //Email address of the user
 * }
 */
var UserProfileObject = function () {
	this.userName = "";
	this.password = "";
	this.Domain = "";
	this.userEmailAddress = "";
};
//End of User Profile Object
module.exports = UserProfileObject;
