
console.log("********** STEP 1 **********");
console.log("=======================================================================");
function squareOfWordLength(word) {
    console.log(`1.1 The accepted string is: ${word}`);
    var lengthOfWord = word.length;
    console.log(`1.2 The length of original string ${word} is: ${lengthOfWord}`);
    var squareLength = lengthOfWord ** 2;
    console.log(`1.3 Square of the length of string ${word} is ${squareLength}`);
    console.log("=======================================================================");
}

squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");

console.log("********** STEP 2 **********");
 function developer(){
    var str = "I am Angular Developer";
    console.log(`The given string is: ${str}`);
   
    var lengthOfString = str.length;
    console.log(`The length of given string ${str} is: ${lengthOfString}`);
   
    var splitStr = str.split(" ");
    //console.log(splitStr);
    console.log("Total number of words in the given string :",splitStr.length);
    
    var div = lengthOfString / splitStr.length ;
    console.log(`String length divided by total number of words is : ${div}`);
   
    var mult = lengthOfString * splitStr.length ;
    console.log(`String length multiplied by total number of words is : ${mult}`); 

   }
 
   developer();