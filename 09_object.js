// Object using object literals

let student = {
    firstName : "Prashant",
    lastName : "Deshmukh",
    isWorking : true,
    age : 22,
    collegeName : "ABC",
    id : 12345,
    address: { //nested object
        street :"Wakad",
        city : "Pune",
        PIN : "431204"
    },
    school : "Podar School" ,//add new property
    friends : ["Bill","Steve","Elon"], //array
    show : function(){
        console.log("I am show() function");
    },
    addressDetails : function() {  //return concatenated function
        this.address
        return `Address is : Street ${this.address.street}, City${this.address.city}, PIN ${this.address.PIN}`
    }
};

let resultAddress = student.addressDetails(); //call concatenated function
console.log(resultAddress);

console.log(student.friends);

console.log(student.friends[student.friends.length-1]); //access last element from nested array from object

console.log(student);

student.show(); //invoke function


//console.log(typeof student.id);
console.log(typeof student.address);

console.log(student.address.city); //access nested object property
student.address.PIN = "431205"; //update PIN

student.school = "ABC";

student.marks = {  //add object in a given object
    math : 80,
    physics : 60,
    drawing : 70
}
console.log(student.marks);
/*let student1 = {
    "firstName" : "Naayan",
    "lastName" : "Patil",
    "isWorking" : true,
    "age" : 31,
    "collegeName" : "SCOE,Pune",
    "id" : 123456
};
console.log(student1);*/

console.log(typeof student);
// . Dot notation
console.log(student.firstName);
// [] notation
console.log(student["lastName"]);

//update value of any key
/*let collegeName  = "ABC";
collegeName = "COEP,Pune";*/
student.collegeName = "COEP,Pune"; //update property
//console.log(student.collegeName);

//access age
console.log(student.age);

//add 1 more property city ="Mumbai"
student.city = "Mumbai";
console.table(student);
//country = "India"
student.country = "INDIA";
console.table(student);

//delete any property isworking

delete student.isWorking;
console.table(student);

// Empty Object 
let teacher = {};  //empty object

teacher.firstName = "Mohit"; //add property
console.log(teacher);

