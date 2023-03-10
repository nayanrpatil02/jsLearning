console.log("********** ASSIGNMENT D **********");
let professor ={
    professorId : 4202,
    professorName : "Sangeeta Yadav",
    age : 47,
    qualification : "MSC Computer Science",
    department : "Computer science",
    email :"sangeetayadav4202@gmail.com",
   degreeDetails : function() {  //return concatenated function
        this.degrees
        return `Teacher Degress are : Engineering : ${this.degrees.engineering}, PHD: ${this.degrees.PHD}, Masters :${this.degrees.masters}, Distance : ${this.degrees.distance}`
       }
}
console.log("==================== STEP 1 ====================");
console.log(professor);

console.log("==================== STEP 2 ====================");
professor. degrees = {
    engineering : "CSC",
    PHD : "Adv. Computing",
    masters : "M.E.",
    distance : "MBA"
}
console.log(professor.degrees);

console.log("==================== STEP 3 ====================");
professor.certificates = ["Hacker Rank Participation", "Certificate in IFE course", "Certificate in Adv Programming"];
console.log(professor.certificates);

console.log("==================== STEP 4 ====================");
let resultDegrees = professor.degreeDetails(); //call concatenated function
console.log(resultDegrees);
console.log("Total degrees are : 5");

console.log("==================== STEP 5 ====================");
professor.totalExperience = "14 years";
console.log(`Total Experience is : ${professor.totalExperience}`);

console.log("==================== STEP 6 ====================");
professor.professorId = 4201;
console.log(`Updated ID is ${professor.professorId}`);
console.log(professor);

console.log("==================== STEP 7 ====================");
professor.certificates.push("Oracle Certified");
console.log("Updated certifications :");
console.log(professor.certificates);

console.log("==================== STEP 8 ====================");
const valueAtLastIndex = professor.certificates[professor.certificates.length-1];
console.log(`Value at last element in the array certificates is : ${valueAtLastIndex}`); 

