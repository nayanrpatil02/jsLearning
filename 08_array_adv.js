console.log("JOIN AN ARRAY");
const arrayOfNames = ["Anil", "Sunil", "Sita", "Bill", "Elon"];
const result = arrayOfNames.join(" : ");   //join method
console.log(result);
console.log(typeof result);

console.log("RESIZE AN ARRAY");
console.log(arrayOfNames.length);

arrayOfNames.length = 3;
console.log(arrayOfNames);
console.log(`Length is :${arrayOfNames.length}`);

arrayOfNames.length = 7;
console.table(arrayOfNames);
console.log(`Length is :${arrayOfNames.length}`);
