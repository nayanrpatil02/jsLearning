var num1 = 100;
var num2 = 200;

var str1 = "Sweety";
var str2 = "Cutie";

var name1 = "Akshay";
var name2 = "Sachin";


function swapVariables(value1, value2) {
    //console.log("Before Swap:", value1, value2);
    //console.log(value1, value2);
    var temp = value1;
    value1 = value2;
    value2 = temp;
    //console.log("After Swap:", value1, value2);
    return "Swapping variables successfully completed";
}
var swapResult   = swapVariables(num1, num2); //function call or function invoke
//console.log(swapResult);

var swapResult2 = swapVariables(str1, str2);
//console.log(swapResult);

swapVariables(name1, name2);

function display(num){
 //console.log(num);
 var result = typeof num;
 return result;
}
var displayResult = display(100);
//console.log(displayResult);



// Function with no arguments and no return value
function showFullName(){ 
   // console.log("My Full Name is: Naayan Patil");

}

showFullName(); // Function call/invoke

// Function with arguments and no return value
function showAge(age){
   // console.log("My Age is:", age);
}

showAge(32);

// Function with no arguments and return value
function fullName(){
 var name = "Naayan Patil";
 return name;
}
var fName = fullName();
//console.log(fName);

// Function with arguments and return value
function sumOfNumbers(num1, num2, num3){
    var sum = num1 + num2 + num3;
    return sum;
}
var sumResult = sumOfNumbers(10,45,79);
//console.log(sumResult);


var num1 = 100;
var num2 = 200;

var str1 = "Sweety";
var str2 = "Cutie";

var name1 = "Bill Gates";
var name2 = "Steve Jobs";

function swapVariables(value1, value2){
    console.log("Before Swap:", value1, value2);
    
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("After Swap:", value1, value2);
    return "Swapping variables successfully completed";
}
var swapResult   = swapVariables(num1, num2); //function call or function invoke
console.log(swapResult);

var swapResult2 = swapVariables(str1, str2);
console.log(swapResult);