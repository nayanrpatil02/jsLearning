console.log("Welcome to JS Function Module");
//console.log(" ");
console.log("********** STEP 1 **********");
console.log("Function with no arguments and no return type"); 
function angularModules(){ 
    console.log("Angular Web Development consists of : HTML+CSS, GIT+GITHub, Bootstrap, JavaScript, Agile+JIRA, Typescript and Angular.");
    console.log("We are learning FUNCTIONS in JavaScript now.");
  }
 angularModules(); // Function call
//console.log(" ");
console.log("********** STEP 2 **********");
console.log("Personal Details with arguments and no return type"); 
function personalDetails(firstName,lastName,collegeName){
  var firstName = "Naayan" ; 
  var lastName = "Patil";
  var collegeName = "SCOE,Pune";
  console.log("My First name is:",firstName);
  console.log("My Last name is:",lastName);
  console.log("My College name is:",collegeName);
}
personalDetails();
//console.log(" ");
console.log("********** STEP 3 **********");
console.log("Function with arguments and no return type"); 
function swapValuesDude(name1,name2){
  console.log("Values Before Swapping:", name1, name2);
    var temp = name1;
    name1 = name2;
    name2 = temp;
    console.log("Values After Swapping:", name1, name2);
}
swapValuesDude("Virat","Anushka"); //function call 
swapValuesDude("1000","2000"); //function call 
//console.log(" ");
console.log("********** STEP 4 **********");
console.log("Function with arguments and return type"); 
function addThreeValues(num1, num2, num3){
  var addition= num1 + num2 + num3;
  return addition;
}
var output = addThreeValues(10.23,600,40);
console.log(output);
var output = addThreeValues("Hello", "Good", "Morning");
console.log(output);