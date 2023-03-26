




const arrayOfNames = ["BillGates","Elon","Ratan","PT Usha","Murmu"];
console.log(arrayOfNames);
console.log(" ========== After Sorting ==========");
const sortedArray = arrayOfNames.sort();
console.log(sortedArray);
sortedArray.push("Sundar");
console.log(sortedArray); //Sorting in ascending order
console.log(arrayOfNames);

sortedArray.reverse(); //Sorting in descending order
console.log(sortedArray);

console.log("========== Sorting Array of Numbers ==========");

const array = [5, 6, 3, 44, 104, 302, 15]; //
console.log(array);
//custom sorting to sort the elements in ascending order
array.sort((a,b)=> {
    return a>b ? 1 : -1; // a>b? a : b
});
console.log(array); // ascending order

//custom sorting to sort the elements in descending order
const arrayNum = [56,3,4,78,23,32];
arrayNum.sort((a,b)=> {
    return a>b ? -1 : 1; // a>b? a : b
});
console.log(arrayNum); //descending order