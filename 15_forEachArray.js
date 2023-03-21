
const array = [2, 3, 4, 5, 9];
array.forEach( function( currentValue, index, array ) {
    console.log(currentValue, index, array);
});

array.forEach( ( currentValue ) => {
    console.log(currentValue);
});


console.log("FOR EACH TO FIND EVEN NUMBER");
array.forEach(element => {
    if (element%2==0) {
        console.log(element);
    }
});

console.log("SUM OF THE ARRAY");
let sum = 0;
array.forEach(element => {
    sum = sum + element;
});
console.log(sum);

console.log("TO FIND EVEN POSITIONED ELEMENT IN THE ARRAY");
array.forEach((element,index) => {
    if (index % 2 == 0) {
        console.log(element);
    }
});