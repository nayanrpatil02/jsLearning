console.log("*********** ASSIGNMENT A***********");
console.log(" ");

console.log("========== STEP 1 ==========");
function greaterNumber(num1,num2){
    var result = num1>num2 ? `${num1} is greater than ${num2}` : `${num2} is greater than ${num1}`;
    console.log(result);

}
greaterNumber(10,-10);
greaterNumber(800,899);

console.log(" ");

console.log("========== STEP 2 ==========");
function isEvenorOddNum(num){
    var evenOdd = (num%2 == 0) ? `${num} is EVEN number` : `${num} is ODD number`;
    //return evenOdd;
    console.log(evenOdd);
}
isEvenorOddNum(29);
    //console.log(evenOdd);
isEvenorOddNum(44);
isEvenorOddNum(0);
isEvenorOddNum(101);

console.log(" ");

console.log("========== STEP 3 ==========");
function wordLength(word){
    var wordLength = word.length;
    var result = wordLength%2==0? "EVEN" : "ODD";
    return result;
    }
    var result = wordLength("JavaScript");
    console.log(`Word "JavaScript" has ${result} length`);
    var result = wordLength("developer");
    console.log(`Word "Developer" has ${result} length`);
    var result = wordLength("Google");
    console.log(`Word "Google" has ${wordLength("Google")} length`);

console.log(" ");
console.log("*********** END OF ASSIGNMENT ***********");