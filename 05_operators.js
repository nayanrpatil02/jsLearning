console.log(` ===== ARITHMETIC OPERATOR =====`);
var num1 = 100;
var num2 = 200;

var sum = num1 + num2; //Addition 
console.log(`Addition is ${sum}`); 

var diff = num2 - num1; //Substraction 
console.log(`Substraction is ${diff}`); 

var multi = num1 * num2; //Multiplication 
console.log(`Multiplication is ${multi}`); 

var div = num2 / num1; //Division 
console.log(`Division is ${div}`);

var rem = num1 % 2; //Modulus
console.log(`Remainder is ${rem}`);

var expo = num1 ** 2; //num1 ** num2 // Exponential
console.log(`Power of ${num1} is ${expo}`);

console.log(10/3); //division - quotient
console.log(10%3); //modulus - remainder

 //result = num1 / 3;
 //console.log(` Division is ${result} `);

 //result = num1 % 3; // Modulus
 //console.log(` Reminder is ${result} `);


console.log(` ===== ASSIGNMENT OPERATOR =====`);

var num = 10; //COMPOUND ADDITION +=
num+=20; // num = num + 20;
console.log(`Compound Addition += ${num}`);

console.log(` ===== COMPARISON OPERATOR =====`);

var num3 = 10;
//console.log(num3==10); //Equality operator ==

var num4 = "10";
console.log(num3==num4); // 10==10 will convert string to no- IMPLICIT
console.log(num3===num4); //No conversion STRICTLY EQUAL 

console.log(num3 != num4); // != not equal
console.log(10 > 20); // Greater than
console.log(20 < 10); // less than
console.log(10 < 10); // less than

var marks = 35; 
console.log(marks > 35); // >Greater than
console.log(marks >= 35); // Greater than equal

console.log("===========TRENARY OPERATOR==========");
var marks = 70;
var result = marks >=60 ? "Allow for interview" : "Dont Allow";
console.log(result);

var age =20;
var res = age >=20 ? "allow for marraige" : "Not allowed" ;
console.log(res);

console.log("===== PROGRAM FOR FINDING EVEN OR ODD =====");
var myNumber = 7;
var result = myNumber%2 == 0 ? "EVEN" : "ODD";
console.log(result);

console.log("===== PROGRAM FOR FINDING GREATER NUMBER =====");
var num1 = 10;
var num2 = 12;
var greaterNumber = num1 > num2 ? num1 : num2;
console.log(greaterNumber);

//console.log("********************** Difference between == & === *************************");


//var num1 = 10;
//var num 2 = "10";

//result = num1 + num2;
//console.log(result);  
