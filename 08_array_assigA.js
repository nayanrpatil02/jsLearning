console.log("======================================== ASSIGNMENT A ========================================");
const arraySeasonalFruits = ["Banana", "Orange", "Apple", "Mango","Watermelon"];
console.log(arraySeasonalFruits);
console.log(" ");
console.log("======================================== 1. Log first and last element ======================================== ");
let firstElement = arraySeasonalFruits[0];
console.log(`First element in given array is : ${firstElement}`);

let lastElement = arraySeasonalFruits[arraySeasonalFruits.length-1];
console.log(`Last element in given array is : ${lastElement}`);
console.log(" ");

console.log("======================================== 2. Adding element Papaya before Banana ======================================== ");
var arraySeasonalFruit = ["Banana", "Orange", "Apple", "Mango","Watermelon"];
console.log("Given Array is :",arraySeasonalFruit);
arraySeasonalFruit.unshift("Papaya");
console.log("After inserting Papaya at start,the given array is :" ,arraySeasonalFruit);
console.log(" ");

console.log("======================================== 3. Remove Mango from the array ======================================== ");
//console.log(`Given Array is : ${arraySeasonalFruit}`);
console.log("Given Array is :",arraySeasonalFruit);
arraySeasonalFruit.splice(4,1);
//console.log(`After deleting Mango, the given array is : ${arraySeasonalFruit}`);
console.log("After deleting Mango, the given array is :" ,arraySeasonalFruit);
console.log(" ");

console.log("======================================== 4. Add element Pineapple at the last position ======================================== ");
//console.log(`Given Array is : ${arraySeasonalFruit}`);
console.log("Given Array is :",arraySeasonalFruit);
arraySeasonalFruit.push("Pineapple");
//console.log(`After adding Pineapple at the end, the given array is : ${arraySeasonalFruit}`);
console.log("After adding Pineapple at the end, the given array is :" ,arraySeasonalFruit);
console.log(" ");

console.log("======================================== 5. Insert Dragon Fruit before Watermelon ======================================== ");
//console.log(`Given Array is : ${arraySeasonalFruit}`);
console.log("Given Array is :",arraySeasonalFruit);
arraySeasonalFruit.splice(4,0,"Dragonfruit");
//console.log(`After adding Dragon fruit, the given array is : ${arraySeasonalFruit}`);
console.log("After adding Dragon fruit, the given array is :" ,arraySeasonalFruit);
console.log(" ");

console.log("======================================== 6. Replace Orange with Kiwi ======================================== ");
//console.log(`Given Array is : ${arraySeasonalFruit}`);
console.log("Given Array is :",arraySeasonalFruit);
arraySeasonalFruit.splice(2,1,"Kiwi");
//console.log(`After replacing Orange with Kiwi, the given array is : ${arraySeasonalFruit}`);
console.log("After replacing Orange with Kiwi, the given array is :" ,arraySeasonalFruit);
console.log(" ");

console.log("======================================== 7. Log element starting from index 1 to 4 ======================================== ");
//console.log(`Given Array is : ${arraySeasonalFruit}`);
console.log("Given Array is :",arraySeasonalFruit);
var slicedArray = arraySeasonalFruit.slice(1,4);
//console.log(`Elements from index 1 to 4 are: ${slicedArray}`);
console.log("Elements from index 1 to 4 are:" ,arraySeasonalFruit);
console.log(" ");

console.log("======================================== 8. Select last 3 elements and log using length property ======================================== "); 
//console.log(`Given Array is : ${arraySeasonalFruit}`);
console.log("Given Array is :",arraySeasonalFruit);
var lastThreeElements = arraySeasonalFruit.slice(arraySeasonalFruit.length-3);
//console.log(`Last three elements are: ${lastThreeElements}`);
console.log("Last three elements are:" ,arraySeasonalFruit);