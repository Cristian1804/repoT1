"use strict"
let readlineSync = require('readline-sync');
let isPrime = require('is-number-prime');
const number = readlineSync.questionInt('Es primo el numero ');

if(isPrime(number)){
    console.log("El numero "+number+ " es primo.");
}else{
    console.log("El numero "+number+ " no es primo.");
}
