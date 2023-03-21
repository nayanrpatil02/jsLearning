 console.log("  ******************** ASSIGNMENT A - FOR EACH ********************");

 const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];

 console.log(" ==================== STEP 1: ARRAY USING FOR EACH ==================== ");

  arrayNumbers.forEach( function( currentValue, index, array ) {
    console.log(`Current value is : ${currentValue} , Index is : ${index},  Array is : ${array}`);
});

console.log(" ");
console.log(" ==================== STEP 2 : POSITIVE NUMBERS  ==================== ");

arrayNumbers.forEach(element => {
    if (element>=0) {
        console.log(`Positive numbers are : ${element}`);
    }
});

console.log(" ");
console.log(" ==================== STEP 3 : ARRAY OF NEGATIVE NUMBERS  ==================== ");

let arrayneg = [];
arrayNumbers.forEach(element => {
    if (element<0) {
       arrayneg = arrayneg + element;   
    }
});
console.log(`Array of negative numbers is : ${arrayneg}`);

console.log(" ");
console.log(" ==================== STEP 4 : EVEN NUMBERS ARE  ==================== ");

arrayNumbers.forEach(element => {
    if (element% 2 == 0) {
        console.log(`Even numbers are : ${element}`);
    }
});

console.log(" ");
console.log(" ==================== STEP 5 : SUM OF ALL ELEMENTS FROM ARRAY IS ==================== ");

let sum = 0;
arrayNumbers.forEach(element => {
    sum = sum + element;
});
console.log(sum);

console.log(" ");
console.log(" ==================== STEP 6 : EVEN INDEXED VALUES FROM ARRAY ARE ==================== ");

console.log("TO FIND EVEN POSITIONED ELEMENT IN THE ARRAY");
arrayNumbers.forEach((element,index) => {
    if (index % 2 == 0) {
        console.log(element);
    }
});