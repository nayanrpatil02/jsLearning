class Bank {
    bankName
    location
    account
    ifsc
    interestRate
    constructor(bankName, location, account, ifsc, interestRate){
        this.bankName = bankName;
        this.location = location;
        this.account = account;
        this.ifsc = ifsc;
        this.interestRate = interestRate;
    }
    showDetails(){
        console.log(`Bans Details :${this.bankName}, ${this.location}, ${ this.account}, ${this.ifsc}, ${this.interestRate} `);
    }

}
/*const sbiBank = new Bank("SBI Bank", "Wakad", "621458793", "SBIIN004598", 10.75);
console.log(sbiBank);*/

const sbiBank = new Bank("SBI Bank", "Wakad", "621458793", "SBIIN004598", 10.75);
sbiBank.showDetails(); //display using show details

const axisBBank = new Bank("Axis Bank","Bajirao Road","688789573215","AXIS84764", 12.5);
//console.log(axisBBank);
axisBBank.showDetails();

function traverseObject(bankObject){
    for (const key in bankObject) {
        if (Object.hasOwnProperty.call(bankObject, key)) {
            const element = bankObject[key];
            console.log(`Object key value is :${key} ${element}`);
            
        }
    }
}

traverseObject(sbiBank);
traverseObject(axisBBank);

class Person {
    fullName
    city
    constructor(fullName,city){
        this.fullName = fullName ;
        this.city = city;
    }
}

const personDhoni = new Person("MS Dhoni","Ranchi");
const personShubham = new Person("Shubhan","Mumbai");

//to check the object is instance of the given class

console.log(personDhoni instanceof Person);
console.log(personShubham instanceof Bank);
console.log(sbiBank instanceof Bank);