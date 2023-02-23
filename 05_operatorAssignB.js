console.log("*********** ASSIGNMENT B ***********");
console.log(" ");

console.log("========== STEP 1 ==========");

function maleMarriageEligibility(gender, age, boyName){
    var result = (gender=="Male" && age>=21) ? `Hey ${boyName} you are eligible for marriage`:" Not eligible for Marriage"; 
    return result;
}
var result = maleMarriageEligibility("Male",25,"Billgates");
console.log("Eligibility of Bill Gates for marriage:", result);
var result = maleMarriageEligibility("Male",17,"Stew Jobs");
console.log("Eligibility of Stew Jobs for marriage:", result);

console.log(" ");

console.log("========== STEP 2 ==========");

function femaleMarriageEligibility(gender, age, girlName){
    var result = (gender=="Female" && age>=18) ? `Hey ${girlName} you are eligible for marriage`:" Not eligible"; 
    return result;
}
var result = femaleMarriageEligibility("Female",16,"Jenifer");
console.log("Eligibility of Jenifer for marriage:",result);
var result = femaleMarriageEligibility("Female",27,"Malinda Gates");
console.log("Eligibility of Malinda Gates for marriage:",result);

console.log(" ");
console.log("*********** END OF ASSIGNMENT ***********");