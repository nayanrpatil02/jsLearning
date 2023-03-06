var greet = "Good Morning";
console.log(typeof greet);

console.log("Total number of characters available in this string - greet");
var greetLength = greet.length;
console.log(greetLength);

console.log("Find the character at index 3");
var charAtIndexThree = greet.charAt(3);
console.log("Character at index 3 is:", charAtIndexThree);

console.log("Find the last character in the string");
var charAtLastIndex = greet.charAt(greetLength-1);
console.log("Caracter at lastindex is:", charAtLastIndex);

console.log("Find the index by character value ");
var indexOfM = greet.indexOf("M");
console.log("Index of Char M is:", indexOfM);

//console.log("Index of char which is not available into the string", greet,indexOf('z'));
console.log("Index of char which is not available into the string: ", greet.indexOf('z'));

console.log("Index of o char",greet.indexOf('O'));
console.log("Index of o char",greet.indexOf('o')); //first O
console.log("Index of o char",greet.lastIndexOf('o')); //index of last occurance of o

var replaceResult = greet.replace("Morning","Evening");
console.log(replaceResult);
console.log(greet);

console.log("Upper Case",replaceResult.toUpperCase());
console.log("Lower Case",replaceResult.toLowerCase());

var myName = "   Mohit   Sharma  ";
var myNameAfterTrim = myName.trim();
console.log("Removing extra start and end spaces using trim():", myNameAfterTrim, myName.length, myNameAfterTrim.length);

//Find the total extra spaces removed from the string -myName
var count = myName.length - myNameAfterTrim.length;
console.log("Extra spaces removed from the string are:",count);

console.log(myName.trimStart(), myName.trimEnd());

console.log("includes()");
console.log("Is substring Mor includes in the greet or not :",greet.includes("Mor"));
console.log("Is substring Afternoon includes in the greet or not :",greet.includes("Afternoon"));
console.log("Is substring o includes in the greet or not :",greet.includes("o"));

console.log("Slice Method");
var sliceResult = greet.slice(5, 12);
console.log(sliceResult);
console.log(greet.slice(2, 5)); 

console.log("split() method");
var greet = "Good Morning my dear friend";
var splitResult = greet.split(" ");
console.log(splitResult);

console.log("Total words",splitResult.length);

var myFriendList = "Bill gates, Stew Job, Elon Musk,Ratan Tata, Sundar Pichai, Satya Nadella, Narayan Murti, Nandan Nilekani, Larry Page, Surgey Brain, Tin Cook";
var splitFriend = myFriendList.split(",");
console.log(splitFriend);
console.log("Total Number of Friends",splitFriend.length);
//Total no of words
var splitFriendWords = myFriendList.split(" ");
console.log(splitFriendWords);
console.log("Total Number of Words in Friends",splitFriendWords.length);