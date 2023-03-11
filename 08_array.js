
console.log("********** ARRAYS IN JS **********");

let arrayOfNumber =[0, 2, 4, 5, 8, 4, 0, 8];
console.log(arrayOfNumber);
//console.table(arrayOfNumbers); 
const totalArrayElements = arrayOfNumber.length;
console.log(`Total number of elements in the array are :${totalArrayElements}`);

const is8Available = arrayOfNumber.includes(8); 
console.log(`Is 8 available : ${is8Available}`); //returns true if available

const is9Available = arrayOfNumber.includes(9);
console.log(`Is 9 available : ${is9Available}`); //returns false as not available

const indexOf8 = arrayOfNumber.indexOf(8);
console.log(`Index of 8 element is: ${indexOf8} `); //returns index of the element passed

const indexOf100 = arrayOfNumber.indexOf(100);
console.log(`Index of 100 element is: ${indexOf100} `); //returns -1 as element not available.

var arrayOfNumbers = [10, 20, 25, 15, 30, 5];
const valueAtIndex2 = arrayOfNumbers[2];
console.log(`Value at index 2 is: ${valueAtIndex2}`); //display value at given location

arrayOfNumbers[3] = 35;
console.log(arrayOfNumbers); //update value at index 3

arrayOfNumbers[1] = 50;
console.log(arrayOfNumbers); //update value at index 1

console.log("==================== Adding element in the last position ====================");
arrayOfNumbers.push(40); //adding element last index.
console.log(arrayOfNumbers);

console.log(" ==================== Adding element at the first posit ion  ====================");
arrayOfNumbers.unshift(5); //adding element at first index
console.log(arrayOfNumbers);

var arrayOfNumbers = [10, 20, 25, 15, 30, 5];
console.log(" ==================== Removing last element using pop() method  ====================");
arrayOfNumbers.pop();
console.log(arrayOfNumbers);

console.log(" ==================== Removing first element using shift()  method  ====================");
arrayOfNumbers.shift();
console.log(arrayOfNumbers);

var arrayOfNumbers = [10, 20, 25, 15, 30, 5, 40, 45];
console.log(" ==================== slice(startIndex ====================");
const arrayFromIndex3 = arrayOfNumbers.slice(3);  //slices array from index 3
console.log(arrayFromIndex3);

console.log(" ==================== slice(startIndex,endIndex)  ====================");
const subArray = arrayOfNumbers.slice(2, 5); //slices array from index 2 to 5
console.log(subArray);
console.log("###################################################");
var arrayOfNumbers = [10, 20, 25, 15, 40, 45];
console.log(" ==================== splice(startIndex)  ==================== ");
const splicedArray = arrayOfNumbers.splice(3);
console.log(`Removed Elements of array is: ${splicedArray}`);
console.log(arrayOfNumbers);

console.log("###################################################");
var arrayOfNumbers = [10, 20, 25, 15, 40, 45];
console.log("********** splice(startIndex, deleteCount) ********** ");
const splicedArrayWithDeleteCount = arrayOfNumbers.splice(2, 2);
console.log(`Removed Elements using delete count is: ${splicedArrayWithDeleteCount}`);
console.log(arrayOfNumbers);

var arrayOfNumbers = [10, 20, 25, 15, 40, 45];
arrayOfNumbers.splice(1,1); //remove 20 from array
console.log(arrayOfNumbers);

var arrayOfNumbers = [10, 20, 25, 15, 40, 45];
arrayOfNumbers.splice(3,1); //remove 15
console.log(`After removing 15, array is :${arrayOfNumbers}`);


var arrayOfNumbers = [10, 20, 25, 15, 40, 45];
arrayOfNumbers.splice(1,2); //remove 20,25
console.log(`After removing 20 & 25, array is :${arrayOfNumbers}`);

console.log("  ");
console.log("==================== Insert element in between array ====================");
var arrayOfNumbers = [10, 20, 25, 15, 40, 45];
arrayOfNumbers.splice(2, 0, 22); //insert 22 in between 20 & 25
console.log(arrayOfNumbers);

console.log("===== splice() to insert one elements without replacing existing element ====================");
var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];
arrayOfNumbers.splice( 4, 0, 5, 35, 55); //insert element 5, 35, 55 at 4th index
console.log(arrayOfNumbers);

console.log("=====splice() to replace one elements ====================");
var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];
arrayOfNumbers.splice(2, 1 ,50,60); //at index 2, remove 1 elemnts and replace them by 50 & 60
//arrayOfNumbers.splice(2, 2 ,50,60); //at index 2, remove 2 elemnts and replace them by 50 & 60
//arrayOfNumbers.splice(2, 3 ,50,60); //at index 2, remove 3 elemnts and replace them by 50 & 60
console.log(arrayOfNumbers);

console.log("======================================================================================================================");
console.log("===== Traversing ===================="); 
var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45, 60, 40, 30, 22, 26 ]; 
let sum = 0;
for (let index = 0; index < arrayOfNumbers.length; index++) {
    const element = arrayOfNumbers[index]; 
    sum = sum + element; 
    //console.log(element);
 } 
   console.log(`Sum of an Array element is: ${sum}`);
