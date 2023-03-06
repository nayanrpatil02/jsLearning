console.log("****** ASSIGNMENT 1 *****");
console.log("\n Convert number strings and boolean value to numbers, in that case we use Number(); ");
var result;
// string to number
result =Number('324');
console.log(`'324' in number is : ${result}`); // 324

result =Number('324e-1');
console.log(`'324e-1' in number is : ${result}`); // 32.4

// boolean to number

result =Number(true);
console.log(`Boolean "true" in number is : ${result}`); // 1

result =Number(false);
console.log(`Boolean "false" in number is : ${result}`); // 0
console.log("\n ****** END OF ASSIGNMENT *****");

console.log("****** ASSIGNMENT 2 *****");
console.log("\n Invalid string to number return NaN");
var result;
// if a string is an invalid number, the result will be NaN.
result =Number('hello');
console.log(`Invalid string 'hello' in number is : ${result}`); //NaN.

result =Number(undefined);
console.log(`Invalid string "undefined" in number is : ${result}`); // NaN.

result =Number(NaN);
console.log(`Invalid string "NaN" in number is : ${result}`); // NaN.

console.log("\n ****** END OF ASSIGNMENT *****");

console.log("****** ASSIGNMENT 3 *****");
console.log("\nString to number using + operator");

var numberInString = "100";
console.log(`String "100" in number is : ${numberInString}`); //

var myNumber = +numberInString;
console.log(`String '+numberInString' in number is : ${myNumber}`); //

console.log("\n ****** END OF ASSIGNMENT *****");

console.log("****** ASSIGNMENT 4 *****");
console.log("\nnumber to string datatype conversion using toString() method");

var myNumber = 100;
console.log(typeof myNumber); // number

var afterConversion = myNumber.toString();
console.log(typeof afterConversion); //string

console.log("\n ****** END OF ASSIGNMENT *****");

