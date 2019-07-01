"use strict"
let readlineSync = require('readline-sync');
let isPrime = require('is-prime-number');
const number = readlineSync.questionInt('Es primo el numero ');

console.log(number);
 
console.log( isPrime(number) );