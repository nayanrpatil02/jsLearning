console.log(" ******************** CLASS ASSIGNMENT A  ********************");
console.log(" ");
console.log(" =================== STEP 1 ===================");

class Vehicle {
    companyName
    model
    engine
    mileage
    price
    color

    constructor(companyName, model, engine, mileage, price, color) {
        this.companyName = companyName;
        this.model = model;
        this.engine = engine;
        this.mileage = mileage;
        this.color = color;
        this.price = price;
    }

}


const toyota = new Vehicle("Toyota", "Etios", "Petrol", "19.50", "Silver", 115000);
const mercedes = new Vehicle("Mercedes", "Maybach S-Class", "Petrol", "10.50", "Black", 33200000);
const audi = new Vehicle("audi", "R8", "Petrol", "5.71", "Red", 27200000);
const marutisuzuki = new Vehicle("Marutisuzuki", "Breeza", "Diesel", "17.50", "White", 120000);
const honda = new Vehicle("Honda", "City", "Petrol", "12.50", "White", 167500);

const arrayOfVehicles = [toyota, mercedes, audi, marutisuzuki, honda];

for (let index = 0; index < arrayOfVehicles.length; index++) {
    const element = arrayOfVehicles[index];
    console.log(`${element.companyName}, ${element.model}, ${element.engine}, ${element.mileage},${element.color},${element.price}`);
}

console.log(" ");
console.log(" =================== STEP 2 ===================");

class College {
    collegeName
    collegeID
    university
    location
    course

    constructor(collegeName, collegeID, university, location, course) {
        this.collegeName = collegeName;
        this.collegeID = collegeID;
        this.university = university;
        this.location = location;
        this.course = course;

    }
}

const SCOE = new College("SCOE", "SCOE221", "SPPU", "Vadgaon,Pune", "Engineering");
console.log(SCOE);

const MITSoM = new College("MITSoM", "MIT452", "SPPU", "Kothrud,Pune", "Management");
console.log(MITSoM);

const WIT = new College("WIT", "WIT440", "Autonomous", "Shivajinagar,Pune", "UG");
console.log(WIT);

const VP = new College("VP", "VP42", "SPPU", "MIDC,Baramati", "Engineering");
console.log(VP);

console.log(" ");
console.log(" =================== STEP 3 ===================");

const traverseObject = function (argument) {
    for (const key in argument) {
        if (Object.hasOwnProperty.call(argument, key)) {
            const element = argument[key];
            console.log(`${key}: ${element}`);
        }
    }
}
traverseObject(SCOE);
console.log(" ");
traverseObject(MITSoM);
console.log(" ");
traverseObject(WIT);
console.log(" ");
traverseObject(VP);

console.log(" ");
console.log(" =================== STEP 4 ===================");

function primeNumber(number) {
    if (number < 1) {
        console.log(`Entered number :${number} is INVALID CHOICE.Please enter a POSITIVE NUMBER.`);
    }
    else if (number === 1) {
        return `${number} is NEITHER PRIME NOR COMPOSITE`;
    }
    else {
        for (var i = 2; i < number; i++) {
            if (number % i == 0) {
                return `${number} is NOT A PRIME NUMBER`;
            }
        }
        return `${number} is A PRIME NUMBER`;
    }
}

console.log(primeNumber(11));
console.log(primeNumber(1));
console.log(primeNumber(2));
console.log(primeNumber(57));
console.log(primeNumber(-20));


