let n1 = 100;// 200
let n2 = n1;  // Deep clone
console.log(n2);// 100
n1 = 200;
console.log(n2);//

let s1 = "Hey JS";
let s2 = s1; // Deep clone

let b1 = true;
let b2 = b1; // Deep clone

const person = {
    fullName: "MS Dhoni",
    age : 38
}
const player = person; // Shallow clone
player.fullName = "Captain cool Dhoni";
console.log(player);
console.log(person);

console.log("Deep clone using spread operator");
const newPlayer = {...person};  //Deep clone using spread operator
console.log(newPlayer);
newPlayer.age = 42;
console.log(`newPlayer ==> ${newPlayer.fullName} ${newPlayer.age}`);
console.log(`person ==> ${person.fullName} ${person.age}`);

const student = {
    fullName: "Virat Kohli",
    age : 33,
    address : {
        street: "AS CLUB",
        city : "PUNE",
        PIN : 431202
    }
}

const newStudent = {...student}; // Deep clone using spred operator for nested object.







console.log("Deep clone using spread String.json()");
const bank = {
    bankName: "SBI Bank",
    accountNo: 3456789,
    bankAddress: {
        city: "Banglore",
        PIN: 5556677
    }
}
const newBank = JSON.parse(JSON.stringify(bank));
newBank.bankAddress.PIN = 999999;
console.log(`bank==> ${bank.bankAddress.PIN}`);// 
console.log(`newBank==> ${newBank.bankAddress.PIN}`);//

const arrayOfNumber = [4, 5, 6, 7, 8, 3];
const newArray = arrayOfNumber;
newArray.push(100);
console.log(arrayOfNumber);
console.log(newArray);

const array = [5, 6, 3, 2, 1];
const clonedArray = [...array]
clonedArray.pop();
console.log(clonedArray);






