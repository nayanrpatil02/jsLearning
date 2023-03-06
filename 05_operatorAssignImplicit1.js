console.log("****** ASSIGNMENT 1 *****");
console.log(" Implicit conversion to String. ");

var result;
// numeric string used with + gives string type 
result = '3' + 2;
console.log(`"3" + 2 = ${result}`); // "32"

result = '3' + true;
console.log(`"3" + true = ${result}`); // "3true"

result = '3' + undefined;
console.log(`"3" + undefined = ${result}`); // "3undefined"

result = '3' + null;
console.log(`"3" + null = ${result}`); // "3null"

console.log("\n ****** END OF ASSIGNMENT *****");

console.log("****** ASSIGNMENT 2 *****");
console.log("\n Implicit Boolean Conversion to Number ");

var result;
// if boolean is used, true is 1 and false is 0
result = '4' - true;
console.log(`'4' - true = ${result}`);

result = 4 + true;
console.log(`4 + true = ${result}`);

result = 4 + false;
console.log(`4 + false = ${result}`);
console.log("\n ****** END OF ASSIGNMENT *****");

console.log("****** ASSIGNMENT 3 *****");
console.log("\n Implicit String Conversion to Number ");

var result;
// numeric string used with + gives string type 
result = '4'-'2';
console.log(`'4' - '2' = ${result}`); // 2

result = '4'- 2;
console.log(`'4' - 2 = ${result}`); // 2

result = '4' * 2;
console.log(`'4' * 2 = ${result}`); //8

result = '4' / 2;
console.log(`'4' / 2 = ${result}`); //2
console.log("\n ****** END OF ASSIGNMENT *****");

console.log("****** ASSIGNMENT 4 *****");
console.log("\n Undefined used with number,boolean or null gives NaN ");

var result;
// Arithmetic operation of undefined with number,boolean or null gives NaN 
result = 4 + undefined;
console.log(`4 + undefined = ${result}`); // NaN

result = 4- undefined;
console.log(`4 - undefined= ${result}`); // 2

result = true + undefined;
console.log(`true + undefined = ${result}`); //8

result = null + undefined;
console.log(`null + undefined = ${result}`); //2
console.log("\n ****** END OF ASSIGNMENT *****");






