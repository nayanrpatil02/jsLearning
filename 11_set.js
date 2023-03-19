const setOfNums = new Set();
setOfNums.add(2); //add 
setOfNums.add(3);
setOfNums.add(8);
setOfNums.add(2);
setOfNums.add(9);
setOfNums.add(3);
console.log(setOfNums);

console.log(setOfNums.size);  //size property

setOfNums.delete(8);  //delete method
console.log(setOfNums);

//setOfNums.clear(); //clears the set  
//console.log(setOfNums);

console.log(setOfNums.values());

const array = [3, 4, 5, 6, 7, 2, 4, 5];
const setOfElements = new Set();
for (const element of array) {
    setOfElements.add(element); 
}
// console.table(setOfElements);

const arrayOfUniqueElements =  [...new Set(array)];
console.log(arrayOfUniqueElements);


console.log(" TRAVERSING SET");
for (const element of setOfNums) {
    console.log(element);
}











