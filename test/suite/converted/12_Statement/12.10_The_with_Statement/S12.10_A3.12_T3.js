// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * No matter how control leaves the embedded 'Statement',
 * the scope chain is always restored to its former state
 *
 * @path 12_Statement/12.10_The_with_Statement/S12.10_A3.12_T3.js
 * @description Calling a function without "with" statement declared within the statement, leading to normal completion by "return"
 * @onlyStrict
 * @negative
 */

this.p1 = 1;
var result = "result";
var value = "value";
var myObj = {p1: 'a', 
             value: 'myObj_value',
             valueOf : function(){return 'obj_valueOf';}
}

with(myObj){
  var f = function(){
    return value;
    p1 = 'x1';
  }
}
result = f();

if(!(p1 === 1)){
  $ERROR('#1: p1 === 1. Actual:  p1 ==='+ p1  );
}

if(!(myObj.p1 === "a")){
  $ERROR('#2: myObj.p1 === "a". Actual:  myObj.p1 ==='+ myObj.p1  );
}

if(!(result === "myObj_value")){
  $ERROR('#3: result === "myObj_value". Actual:  result ==='+ result  );
}
