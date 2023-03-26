
const array = [3, 4, 5, 8, 90, 50, 1, 44, 78, 51];
let sumOfArrayElements = array.reduce((runningTotal, value)=> {
   return runningTotal+value;
});
console.log(sumOfArrayElements);

//Find the even numbers from the given array and sum it

const arrayEven = array.filter((element) => {
    return element%2 == 0;
});
console.log(arrayEven);

const sumEven = arrayEven.reduce((runningTotal,value) => {
    return runningTotal+value;
});
console.log(sumEven);

//Find the numbers which are multiple of 3 from the given array and sum it

const arrayNum = [3, 4, 12, 8, 90, 50, 1,, 15, 78, 21];
console.log("Fing the number which are multiple of 3 and sum it");

/* NORMAL FLOW
const arrayMultipleOf3 = arrayNum.filter ((element) => {
    return element%3 == 0;
});
console.log(arrayMultipleOf3);

const sumMultiple = arrayMultipleOf3.reduce((runningTotal,value) => {
   return runningTotal+value
});
console.log(sumMultiple);
*/

 //CHAINING METHOD
const sum = arrayNum.filter ((element) => {
    return element%3 == 0;
}).reduce((runningTotal,value) => {
    return runningTotal+value
 });
console.log(sum);

console.log("~~~~~~~ OR ~~~~~~");
const sumMultipleOf3 = arrayNum.filter(element => element%3 == 0)
.reduce((runningTotal,value) => runningTotal+value);
console.log(sumMultipleOf3);


