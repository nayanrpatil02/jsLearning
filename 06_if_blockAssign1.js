console.log("********** STEP 1 **********");
//console.log("===== EVEN/ODD =====");
function checkEvenOdd(num) {
    if (num%2 == 0){
        return "EVEN";
     }
     if (num%2 == 1){
        return "ODD";
     }
}
 var result = checkEvenOdd(45);
 console.log(`Given number 45 is : ${result}`);
 var result = checkEvenOdd(70);
 console.log(`Given number 70 is : ${result}`);
 var result = checkEvenOdd(67);
 console.log(`Given number 67 is : ${result}`);
 var result = checkEvenOdd(90);
 console.log(`Given number 90 is : ${result}`);

 console.log("==============================================");

 console.log("********* STEP 2 **********");
 //console.log("===== AGE ELGIBILITY FOR VOTING =====");

function eligibility(age){
    if (age >= 18) {
    return "eligible";
}
    if (age < 18) {
    return "not eligible";
}
}
var check = eligibility(18);
console.log(`Age 18 is ${check} for voting.`);
var check = eligibility(17);
console.log(`Age 17 is ${check} for voting.`);
var check = eligibility(20);
console.log(`Age 20 is ${check} for voting.`);
var check = eligibility(40);
console.log(`Age 40 is ${check} for voting.`);

console.log("==============================================");

console.log("********* STEP 3 **********");
//console.log("=====Length of string = 10 or not ====="); 

function lengthOfString(string){
    var string = "JavaScript-ES6";
    var stringLength = string.length;
    if(stringLength >= 10){
        console.log(`String ${string} has more than 10 characters`);
    }
}
lengthOfString();

console.log("==============================================");

console.log("********* STEP 4 **********");

var string = "JavaScript-ES6";
var answer = string.startsWith("Java", 0);
if(answer == 1){
    console.log(`String ${string} starts with Java.`);

}
//console.log();