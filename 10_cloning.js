const person = {
    fullName : "MS Dhoni",
    age : 38
}

Object.freeze(person);
person.city = "Ranchi";

const player =person;
//cloning
let n1 =100;
let n2=n1;
console.log(n2);
n1=200;
console.log(n2);

let s1 = "Hey JS"; //deep clone
let s2 = s1;

let b1 = true;
let b2 = b1;