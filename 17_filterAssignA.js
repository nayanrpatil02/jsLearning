console.log("******************** FILTER ASSIGNMENT A ********************");

const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log(`GIVEN ARRAY IS : ${arrayNumbers}`);

console.log("==================== STEP 1 - NUMBERS GREATER THAN 50 ====================");

const arrayResult = arrayNumbers.filter( (currentValue) => {
    return currentValue >= 50;
} );
console.log(arrayResult);

console.log("==================== STEP 2 - EVEN NUMBERS ====================");

const arrayEven = arrayNumbers.filter(currentValue => currentValue % 2 == 0);
console.log(arrayEven);

console.log("==================== STEP 3 - ODD NUMBERS ====================");

const arrayOdd = arrayNumbers.filter(currentValue => currentValue % 2 != 0);
console.log(arrayOdd);

console.log("==================== STEP 4 - NUMBERS IN THE MULTIPLE OF 5 ====================");

const arrayResult1 = arrayNumbers.filter(currentValue => currentValue % 5 == 0);
console.log( arrayResult1);

console.log("==================== STEP 5 - NUMBERS BETWEEN 20 AND 50 ====================");

const arrayResult2 = arrayNumbers.filter(currentValue => currentValue >= 20 && currentValue <=50 );
console.log( arrayResult2);