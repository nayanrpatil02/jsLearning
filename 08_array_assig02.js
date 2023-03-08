console.log("====================            ASSIGNMENT 02                 ====================");
console.log(" ");
const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`ARRAY IS : ${arrayNumbers}`);
console.log(" ");

console.log("====================              1.Elements in array         ====================");
console.log(`Length of array is : ${arrayNumbers.length}`);
console.log(" ");

console.log("====================           2.First and Last element       ====================");
console.log(`First element in the array is : ${arrayNumbers[0]}`);
let lastElement = arrayNumbers[arrayNumbers.length-1];
console.log(`Last element in given array is : ${lastElement}`);
console.log(" ");

console.log("====================         3.Third last element             ====================");
let thirdLastElement = arrayNumbers[arrayNumbers.length-3];
console.log(`Third Last element in given array is : ${thirdLastElement}`);
console.log(" ");

console.log("====================         4. Even numbers                  ====================");
var index=0;
console.log("EVEN numbers in the array are :");
while (index<arrayNumbers.length) {
    const element = arrayNumbers[index];
    if (element%2 == 0){
        console.log(element);
    }
    index++;
}
console.log(" ");

console.log("====================         5.Odd numbers                    ====================");
var index=0;
console.log("ODD numbers in the array are :");
while (index<arrayNumbers.length) {
    const element = arrayNumbers[index];
    if (element%2 != 0){
        console.log(element);
    }
    index++;
}
console.log(" ");

console.log("====================       6.Even positioned numbers          ====================");
var index=0;
console.log("EVEN indexed numbers in the array are :");
while (index<arrayNumbers.length) {
    const element = arrayNumbers[index];
    if (index%2 == 0){
        console.log(element);
    }
    index++;
}
console.log(" ");

console.log("====================       7.Odd positioned numbers           ====================");
var index=0;
console.log("ODD indexed numbers in the array are :");
while (index<arrayNumbers.length) {
    const element = arrayNumbers[index];
    if (index%2 != 0){
        console.log(element);
    }
    index++;
}
console.log(" ");

console.log("====================      8.Sum of elements in the array      ====================");
let sum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index]; 
    sum = sum + element; 
    
 } 
console.log(`Sum of an Array element is: ${sum}`);
console.log(" ");

console.log("====================       9.Numbers in multiple of 5         ====================");
var index=0;
console.log("EVEN numbers in the array are :");
while (index<arrayNumbers.length) {
    const element = arrayNumbers[index];
    if (element%5 == 0){
        console.log(element);
    }
    index++;
}
console.log(" ");

console.log("====================       10.Is number 115 available         ====================");

for (let index = 0; index < arrayNumbers.length; index++) {
    if (arrayNumbers[index]==115) {
        console.log("YES , element 115 is present in the array");
    } else {
        console.log("NO ,element 115 is not present in the array");
        break;
    }
}
console.log(" ");

console.log("====================       11.Is number 23 available          ====================");
var index=0;
while (index<arrayNumbers.length) {
    const element = arrayNumbers[index];
    if (element == 23){
        console.log("YES , element 23 is present in the array");
    }
     index++;
}

console.log(" ");

console.log("==================== 12.Insert numbers 55 & 66 before index 3 ====================");
console.log(`Before inserting elements in the array : ${arrayNumbers}`);
arrayNumbers.splice(3,0,55,66);
console.log(`After inserting elements in the array : ${arrayNumbers}`);

console.log(" ");

console.log("==================== 13.Delete 3 elements starting from index 4 ====================");
console.log(`Before deleting, elements in the array are : ${arrayNumbers}`);
arrayNumbers.splice(4,3);
console.log(`After deleting, elements in the array are: ${arrayNumbers}`);
console.log(" ");
