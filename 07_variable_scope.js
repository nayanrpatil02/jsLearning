
var firstName;  //variable declaration
firstName = "Virat";  //variable initialization

var lastName = "Kohli";  // variable declaration &  initialization

firstName = "King Kohli"; // variable update 

var firstName; //variable re-declaration
console.log(firstName);

let city;  //variable declaration
city = "Delhi"; // variable initialization

//let city = "Mumbai"; //Not allowed variable redeclaration

/*let PI = 3.14;
PI = 3.56;  //no restriction on updation of the value 
console.log(PI); */

const PI = 3.14; //redeclaration not allowed.
// PI = 3.56; //updation not allowed
console.log(PI);

//scope of variable
var num = 10;
if (num==10) {
   // var word = "Revision is the mother of Success";
    let word = "Revision is the mother of Success"; //block scope
}
//console.log(word);

function sayHi(arg){
    let greet = "Hi Good Morning";
    if (arg%2==0) {
        let isEven = true;
    }else{
        let isEven = false;
    }
    return isEven;
}
console.log(isEven);
let result = sayHi(10);
//console.log(greet);


var fullName = "MS Dhoni";
if (true) {
    console.log("Hello",age);
} else {
    let age = 37;
}
console.log(age);