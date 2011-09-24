// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * A property can have attribute ReadOnly like E in Math
 *
 * @path 08_Types/8.6_The_Object_Type/8.6.1_Property_Attributes/S8.6.1_A1.js
 * @description Try change Math.E property
 * @onlyStrict
 * @negative
 */

var __e = Math.E;
Math.E=1;
if (Math.E !==__e){
  $ERROR('#1: __e = Math.E; Math.E=1; Math.E ===__e');
}
