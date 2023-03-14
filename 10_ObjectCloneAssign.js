console.log(`********** OBJECT CLONE ASSIGNMENT **********`);
console.log(" ");
const arrayNums = [20, 3, 4, 56, 90, 400, 49];

console.log(`========== SHALLOW CLONE ==========`);

const shallowClonedArray = arrayNums;
shallowClonedArray.push(55,66);
console.log(`ORIGINAL ARRAY IS : ${arrayNums}`);
console.log(`SHALLOW CLONED ARRAY IS : ${shallowClonedArray}`);
console.log(" ");

console.log(`========== DEEP CLONE USING SPREAD OPERATOR ==========`);

const deepClonedArray = [...arrayNums];
deepClonedArray.push(10,25);
console.log(`ORIGINAL ARRAY IS : ${arrayNums}`);
console.log(`DEEP CLONED ARRAY IS : ${deepClonedArray}`);
console.log(" ");

console.log(`========== MERGE ARRAY ==========`);
arrayEven = [2, 30, 14, 8];
const mergedArray = [...arrayNums, ...arrayEven];
console.log(`MERGED ARRAY IS  :${mergedArray}`);
console.log(" ");

//STEP 4
const employee_info = {
    emp_id : 27,
    emp_name : "John Doe",
    salary: {
        july_month: "40,0000 INR",
        aug_month: "50,0000 INR",
        jun_month: "65,0000 INR"
    },
    address: {
        locality: {
            colony: "OM Vrindavan Society",
            street: "Kanch Pokli, 431202",
        },
        city: "Mumbai",
        state: "Maharashtra",
        country: "India"
    },
    mobiles: ["+91 8600 3456 88","+1800- 4567 32","+91- 9096 5678 77"]
}

console.log(`========== EMPLOYEE DETAILS ==========`);
console.log(`A.ADDRESS IS ~ LOCALITY: COLONY- ${employee_info.address.locality.colony}, STREET- ${employee_info.address.locality.street}, CITY: ${employee_info.address.city}, STATE:${employee_info.address.state}, COUNTRY:${employee_info.address.country} `);
console.log(`B.MOBILE NUMBERS ARE : ${employee_info.mobiles}`);
console.log(" ");

console.log(`========== DEEP CLONE USING JSON.stringfy() ==========`);

const cloneEmp = JSON.parse(JSON.stringify(employee_info));

console.log(`A.ORIGINAL PROPERTY OF CLONED OBJECT IS : JULY MONTH SALARY - ${cloneEmp.salary.july_month}`);
cloneEmp.salary.july_month = "80,0000 INR";
console.log(`UPDATED PROPERTY ON CLONED OBJECT IS : JULY MONTH SALARY - ${cloneEmp.salary.july_month}`);
console.log("_________________________________________________________________________________________________________________");

console.log(`B.ORIGINAL PROPERTY OF ORIGINAL OBJECT IS: COUNTRY : ${employee_info.address.country}`);
employee_info.address.country = " United Kingdom";
console.log(`UPDATED PROPERTY ON ORIGINAL OBJECT IS: COUNTRY : ${employee_info.address.country}`);

