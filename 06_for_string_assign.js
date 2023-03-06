console.log("********** VOWEL COUNT **********");

var funExp = function vowelsCount(str) {
    var count = 0;
for (let index = 0; index < str.length; index++) {
    var char = str.charAt(index);
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u" || char == "A" || char == "E" || char == "I" || char == "O" || char == "U" )
    {
        count = count + 1;
    }
}
   return count; 
}
var vowels = funExp("JavaScript is the language Of Internet");
console.log(`Total number of vowels in the string "JavaScript is the language Of Internet" is: ${vowels}`); 

var vowels = funExp("I am Angular Developer");
console.log(`Total number of vowels in the string "I am Angular Developer" is: ${vowels}`); 

var vowels = funExp("Hard work and commitment is the key of success");
console.log(`Total number of vowels in the string "Hard work and commitment is the key of succes" is: ${vowels}`); 


console.log("********** TOTAL NUMBER OF CHARACTERS **********");

var wordCount = function lastWordCharsCount(givenStr) {
    var len = 0;
    stringAfterTrim = givenStr.trim();
    for (let index = 0; index < stringAfterTrim.length; index++) {
        if (stringAfterTrim[index] == " ") {
            len = 0;
        }
        else {
            len++;
        }
        
    }
    return len;
}

var countOfWords = wordCount("JavaScript is the language Of Internet");
console.log(`Total number of characters in the last word of string "JavaScript is the language Of Internet" is: ${countOfWords}`); 

var countOfWords = wordCount("I am Angular Developer");
console.log(`Total number of characters in the last word of string "I am Angular Developer" is: ${countOfWords}`); 

var countOfWords = wordCount("Hard work and commitment is the key of success");
console.log(`Total number of characters in the last word of string "Hard work and commitment is the key of success" is: ${countOfWords}`); 