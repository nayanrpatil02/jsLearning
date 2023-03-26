console.log("******************** SORTING ASSIGNMENT A ********************");

const arrayRollNumbers = [113,45,56,11,32,45,109,799,56,54]
console.log(`ORIGINAL ARRAY IS : ${arrayRollNumbers}`);

console.log(" ");
console.log("==================== STEP 1 : REVERSE THE ARRAY ==================== ");

const arrayReverse = arrayRollNumbers.sort((a,b) => {
    return a>b ? -1 : 1;
})
console.log(arrayReverse);

console.log(" ");
console.log("========= STEP 2 : SORTING THE ARRAY W/O ANY CUSTOM SORTING LOGIC =========");

const arrayWithoutCustomsort = arrayRollNumbers.sort();
console.log(arrayWithoutCustomsort);

console.log(" ");
console.log("========= STEP 3 : SORTING THE ARRAY IN ASCENDING ORDER WITH CUSTOM SORTING LOGIC ========= ");

const arraySortWithCustomSort = arrayRollNumbers.sort((a,b) =>{
    return a>b ? 1 : -1;
})
console.log(arraySortWithCustomSort);

console.log(" ");
console.log("==================== STEP 4 : GREATEST NUMBER FROM THE ARRAY ==================== ");

let greatestNumber = arrayRollNumbers[arrayRollNumbers.length-1];
console.log(`GREATEST NUMBER IN THE ARRAY IS : ${greatestNumber}`);

console.log(" ");
console.log("==================== STEP 5 : SMALLEST NUMBER FROM THE ARRAY ==================== ");

let smallestNumber = arrayRollNumbers[0];
console.log(`SMALLEST NUMBER IN THE ARRAY IS : ${smallestNumber}`);

console.log(" ");
console.log("==================== STEP 6 :REMOVE DUPLICATES FROM THE ARRAY ==================== ");

function removeDuplicate(arrayRollNumbers){
    // removing duplicate using set method
    let uniqueArray = [...new Set(arrayRollNumbers)];
    console.log(uniqueArray);
}
console.log("ARRAY AFTER REMOVING DUPLICATE ELEMENTS IS :");
removeDuplicate(arrayRollNumbers);