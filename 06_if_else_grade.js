console.log("********** STEP 1 **********");
function voteEligibility(age) {
  if (age <= 0 || age > 120 || age == undefined || age == "NULL") {
    console.log(`INVALID DATA : The given age ${age} is invalid. Please enter Valid Data`);
  }
  else
  if (age >= 18) {
    console.log(`The candidate with age ${age} is eligible for voting.`);
  } 
  else { //if(age < 18)
    console.log(`The candidate with age ${age} is not eligible for voting.`); 
  }
}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(undefined);
voteEligibility(null);

console.log("********** STEP 2 **********");
function gradeCalculation(marks) {
  if (marks<= 0 || marks > 100 || (typeof marks!= "number")) {
    console.log(`Please provide the valid marks - ${marks}`);
  }
  if (marks>= 90 && marks< 100){
  console.log(`Funtastic marks: ${marks}, Your grade is A+.`);
 }
 if (marks >= 75 && marks < 90){
  console.log(`Excellent marks: ${marks}, Your grade is A.`);
 }
 if (marks >= 50 && marks < 75){
  console.log(`Good marks: ${marks}, Your grade is B.`);
 }
 if (marks >= 35 && marks < 50){
  console.log(`Marks is: ${marks}, Your grade is C, Need improvement.`);
 }
 if (marks < 35 && marks > 1){
  console.log(`Marks is: ${marks}, Enter valid marks.`);
 }
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
gradeCalculation("NaN");
gradeCalculation(undefined);
gradeCalculation(null);
