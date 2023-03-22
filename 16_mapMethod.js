//7.10
const array = [3, 4, 5, 6, 1];
           // [5, 6, 7, 8, 3];

const arrayTransformed = [];
array.forEach( (currentValue) => {
    arrayTransformed.push(currentValue+2)
} );
console.log(arrayTransformed);

console.log("Using map()");
const arrayNew = array.map( (element) => {
   return element + 2;
} )
console.log(arrayNew);

const arrayOfNames = ["Rupesh Dhumal", "Rutuja Pawar", "Nayan", "Pralhad"];
const arrayNamesTransformed = arrayOfNames.map((element) => {
    return element.length;
 } )
 //const arrayNamesTransformed = arrayOfNames.map(element => element.length; )
 console.log(arrayNamesTransformed);


/* 1.can store functions in variables, 
2.pass them to other functions as arguments, 
3. return them from other functions as values.*/

//47.12


 