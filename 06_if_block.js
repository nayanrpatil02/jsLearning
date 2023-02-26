console.log('Start');
var num = 10;
  
if(num>0){  //condition true
    console.log(`Inside if`);
    console.log(`Number ${num} is a positive number`);
}

console.log(`End`);

console.log('Start');
var num = -10;
  
if(num>0){  //condition false
    console.log(`Inside if`);
    console.log(`Number ${num} is a positive number`);
}

console.log(`End`);
console.log("==================================================================");

var ageForVote = 20;
if (ageForVote >= 18) {
    console.log(`You are eligible for voting`);
    console.log(`Age is : ${ageForVote}`);
}
console.log(`End of block`);
console.log("==================================================================");

function checkEvenOdd(num){
   if(num%2 == 0){
    return "EVEN";
   }
   if(num%2 != 0){
    return "ODD";
   }
}
var result = checkEvenOdd(45);
console.log(` Given number 45 is : ${result}`);


var result = checkEvenOdd(70);
console.log(` Given number 70 is : ${result}`);

var num1 = -5 //5 
if (num1 > 0) {
    console.log(`Number ${num1} is positive`);
} else {
    console.log(`Number ${num1} is negative`);
    
}

function maleMarriageEligibility(gender, age, boyName) {
    if(gender=="Male" && age >=21){
        console.log("You are eligible");
    } else {
        console.log("You are not eligible");
    }
}
maleMarriageEligibility("Male", 25, "Billgates");
maleMarriageEligibility("Male", 20, "Anil");