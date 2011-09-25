// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The length property of slice is 2
 *
 * @path 15_Native/15.4_Array_Objects/15.4.4_Properties_of_the_Array_Prototype_Object/15.4.4.10_Array_prototype_slice/S15.4.4.10_A5.4.js
 * @description slice.length === 2
 */

//CHECK#1
if (Array.prototype.slice.length !== 2) {
  $ERROR('#1: Array.prototype.slice.length === 2. Actual: ' + (Array.prototype.slice.length));
}

