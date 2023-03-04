console.log("******************** ASSIGNMENT A ********************");
var factorialOfNum = function (number) {
  let factorial = 1;
  if (number == "NULL" || number == "number" || isNaN(number) || number == undefined ) {
    console.log(`Entered number: ${number} is INVALID. Please enter valid number` );
  } 
  //else if (number == 1) {
   // return factorial;
 // } 
  else {//if (number > 1) {
    for (var index = number; index >= 1; index--) {
      factorial = factorial * index;
    }
    return factorial;
  }
}

var factResult = factorialOfNum(5);
console.log(`Factorial of 5  is : ${factResult}`);
console.log("=================================================================");
var factResult = factorialOfNum(3);
console.log(`Factorial of 3 is : ${factResult}`);
console.log("=================================================================");
var factResult = factorialOfNum(null);
console.log(`Factorial of null is : ${factResult}`);
console.log("=================================================================");
var factResult = factorialOfNum(8);
console.log(`Factorial of 8  is : ${factResult}`);
console.log("=================================================================");
var factResult = factorialOfNum(undefined);
console.log(`Factorial of undefined  is : ${factResult}`);
console.log("=================================================================");
var factResult = factorialOfNum(9);
console.log(`Factorial of 9 is : ${factResult}`);
console.log("=================================================================");
var factResult = factorialOfNum(0);
console.log(`Factorial of 0 is : ${factResult}`);
console.log("=================================================================");
var factResult = factorialOfNum(NaN);
console.log(`Factorial of NaN is : ${factResult}`);


