console.log("******************** MAP METHOD ASSIGNMENT - A ********************");

const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];

console.log(" ");
console.log("==================== STEP 1 - ADD 10 IN EACH ELEMENT ====================");

const arrayAfterAdd = arrayNumbers.map( (element) => {
    return element + 10;
 } )
 console.log(`Array element after adding 10 are : ${arrayAfterAdd}`);
 console.log(arrayAfterAdd);

 console.log(" ");
 console.log("==================== STEP 2 - SQUARE EACH ELEMENT ====================");

 const arrayAfterSquare = arrayNumbers.map( (element) => {
    return element * element;
 } )
 console.log(`Array element after squaring are : ${arrayAfterSquare}`);
 console.log(arrayAfterSquare);

 console.log(" ");
 console.log("==================== STEP 3 - ADD INDEX VALUE IN EACH ELEMENT ====================");

 const arrayAfterAddIndex = arrayNumbers.map( (element, index) => {
    return element + index;
 } )
 console.log(`Original array is : ${arrayNumbers}`);
 console.log(`Array element after adding corresponding index are : ${arrayAfterAddIndex}`);
 console.log(arrayAfterAddIndex);