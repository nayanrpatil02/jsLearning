
console.log(10 + " Hi");
console.log("Good" + " Morning");

console.log(`Operation : 10 - "Hi" ==>`, 10- "Hi");

console.log(`Operation : 0/0 ==>`,0/0); // NaN- Not a Number

var num = "10";
console.log(typeof num);
var num2 = +num; //number string "10" is explicitly converted to number 10
console.log(`${num2} and it's type is ${typeof num2}`);

var myName = "Billgates";
var result = +myName;
console.log(`${result} and it's type is ${typeof result}`);

console.log(10 + true); // true is implicitly converted and its value is 1 so 10 + 1 = 11
console.log(10 + false); // false is implicitly converted in number and its value is 0





