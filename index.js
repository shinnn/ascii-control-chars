'use strict';

var arr = ['\x7f'];
var i = 31;

do {
  arr.unshift(String.fromCharCode(i));
} while (i--);

module.exports = arr;
