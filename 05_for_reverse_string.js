


//reverse string
var reverseString = function(str){
    var reverse = "";
    for (let index = str.length-1; index >= 0; index--) {
        var charAt = str.charAt(index);
        reverse = reverse + charAt;
    }
    return reverse;
}
var result = reverseString(" Do it anyhow");
console.log(`Reverse string is : ${result}`);



//reverse last word in the string only
var reverseStr = function(str){ // str = "Do it anyhow"
    var reverse = ""; // wohyna
    for (let index = str.length-1 ; index >= 0; index--) {
       var char = str.charAt(index);// o
       if(char == " "){
            break;
       }
       reverse = reverse + char; // "w"+"o" ==> "wo"
    }
    return reverse;
}
var result = reverseStr("Do it anyhow"); 
console.log(`Reverse last word : ${result}`);



// "I am Angular  champ" find "no of words"
var str = "I am Angular  champ";
var count = 0;
for (let index = 0; index < str.length; index++) {
    var char = str.charAt(index);
    if (char == " ") {
        count = count + 1;
    }
}
console.log("Total number of spaces is: ", count);

// "I am Angular  champ" - count vowels
var str = "I am Angular  champ";
var count = 0;
for (let index = 0; index < str.length; index++) {
    var char = str.charAt(index);
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u" || char == "A" || char == "E" || char == "I" || char == "O" || char == "U" )
    {
        count = count + 1;
    }
}
console.log("Total number of vowels is: ", count); 