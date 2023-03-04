console.log("******************** ASSIGNMENT B ********************");
function factorialOfWordsCount(str){
   
  if (str==null ||(isNaN(str) && typeof str=="number")|| str == undefined) {
    console.log(`Entered string ${str} is INVALID.`);
  } 
  else {
    console.log(`Entered string :"${str}" is VALID.`);
    let stringSplit = str.split(" ");
    const numberOfWords = stringSplit.length;
    console.log(`Total number of words in string are : ${numberOfWords}`);
    let factorial = 1;
    for (let index = numberOfWords; index >= 1; index--) {
         factorial = factorial * index;
     }
    console.log(`Factorial of the words in "${str}" is ${factorial}`);
}
}

factorialOfWordsCount("Revision is the mother of Success");
console.log("=====================================================================");
factorialOfWordsCount("We never fail, we always learn");
console.log("=====================================================================");
factorialOfWordsCount();
console.log("=====================================================================");
factorialOfWordsCount("");
console.log("=====================================================================");
factorialOfWordsCount("Naayan Rajesh Patil");

