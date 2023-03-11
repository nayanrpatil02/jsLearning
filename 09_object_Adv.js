const employee = {
    id : 124567,
    name : "Elon Musk",
    country : "US",
    city : "Silicon Valley"
}

console.log(" ===== in operator =====");
const isIdAvailable = "id" in employee;
console.log(isIdAvailable);

console.log(" =====Object traversing =====");
for (const key in employee) {
      if (Object.hasOwnProperty.call(employee, key)) {
        const element = employee[key];
        console.log(key,element);
        
    }
}
const keysOfEmployee = Object.keys(employee);
console.log(keysOfEmployee);

const valueOfEmployee = Object.values(employee);
console.log(valueOfEmployee);

const entriesOfEmployee = Object.entries(employee);
console.log(entriesOfEmployee); // array of key and value
console.log(entriesOfEmployee[0]); //pair at 0th index
console.log(entriesOfEmployee[0][0]); //key of 0th element
console.log(entriesOfEmployee[0][1]);// value of 0th element

console.log("========== FREEZING ==========");
const player = {
    fullName : "Virat Kohli",
    totalCenturies : 46,
    isMarried : true
}
Object.freeze(player);  //freezes the object, no modification allowed
player.totalWicket = 120; //Adding new property not allowed
delete player.totalCenturies; //deleting existing property not allowed
player.fullName = "King Kohli"; //updating existing property not allowed

console.table(player);

console.log("========== OBJECT CONCAT USING ASIGN ==========");
const student = {
    firstName : "Elon",
    lastName : "Musk",
    age : 54,
}
const address = {
    country : "US",
    city : "Silicon Valley",
    PIN : "QA2345"
}

// First way 
const mergedObject = Object.assign({}, student, address);
console.table(mergedObject);

// Second way 
const newObject = {};
Object.assign(newObject, student, address);
console.table(newObject);

//  Third way
Object.assign(student, address);
console.table(student);

//  Fourth way
Object.assign(address, student);
console.table(address);











