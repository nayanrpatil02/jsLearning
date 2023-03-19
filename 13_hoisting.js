


console.log(myName);  //Allowed to access
//console.log(age);  // Not allowed to acccess
var myName = "Virat Kohli";
let age = 33;

show(); //Allowed to access bcz it is normal fn, normal fn are hoisted.

function show() {
    console.log("show()function");
}

//greet() ; not allowed as it is function expression and FE is not hoisted
var greet = function(){
    console.log("Good Morning");
}

greet();


/*
console.log(myName);// Allowed to access
// console.log(age); // Not allowed to access 
var myName = "Virat Kohli";
let age = 33;

show();//  Allowed as it is normal functions are hoisted 

function show(){
    console.log("show() function");
}

// greet(); // Not allowed as it is FE and FE does not hoisted 
let greet = function(){
    console.log("Good Morning");
}
greet();  1.15  */