console.log(" ********** ASSIGNMENT B ********** ");

const bankSbi = {
    bankName : "SBI BANK",
    ifsc : "SBI0000046",
    intRate: "12.5 %",
    noOfEmployees : 30
}

const bankLocation = {
    street : "SB_Road",
    city :  "Pune",
    pinCode : 411024

}

const newBankLocation = {}
const newBankSbi = {}

const clonedBankSbi = {}
const clonedBankLocation = {}
console.log("========== STEP 1 - BANK NAME OBJECT ==========");
console.log(`Bank Name: ${bankSbi.bankName},IFSC Code: ${bankSbi.ifsc}, Interest Rate: ${bankSbi.intRate}, Number of Employees : ${bankSbi.noOfEmployees}`);
console.log("========== STEP 2 -BANK LOCATION OBJECT ==========");
console.log(`Street: ${bankLocation.street}, City: ${bankLocation.city}, Pin Code: ${bankLocation.pinCode}`);
console.log("========== CLONING USING OBJECT.ASSIGN() ==========");

const cloneBankSbi = Object.assign(newBankSbi,bankSbi);
console.log(cloneBankSbi);
//console.log(`Cloned object of bank SBI using ASSIGN is : ${cloneBankSbi}`);

const cloneBankLocation = Object.assign(newBankLocation,bankLocation);
console.log(cloneBankLocation);
//console.log(`Cloned object of bank Location using ASSIGN is :${cloneBankLocation}`);

console.log("========== CLONING USING SPREAD OPERATOR ==========")

const spreadBankSbi = {...clonedBankSbi,...bankSbi};
console.log(spreadBankSbi);
//console.log(`Cloned object of bank SBI using ASSIGN is : ${spreadBankSbi}`);

const spreadBankLocation = {...clonedBankLocation,...bankLocation};
console.log(spreadBankLocation);
//console.log(`Cloned object of bank Location using ASSIGN is :${spreadBankLocation}`);


//RATE OF INTEREST
const rateOfInterest = {
    homeLoanInterest : "10.5%",
    personalLoanInterest : "11%",
    dueInterest : "2.5%"
}

console.log("========== MERGE BANK DETAILS ==========");
const sbiDetails = {...bankSbi,...bankLocation,...rateOfInterest}
console.table(sbiDetails);

console.log("========== TRAVERSE BANK DETAILS ==========");

for (const key in bankSbi) {
    if (Object.hasOwnProperty.call(bankSbi, key)) {
        const element = bankSbi[key];
        console.log(`${key}: ${element}`);
    }
}
for (const key in bankLocation) {
    if (Object.hasOwnProperty.call(bankLocation, key)) {
        const element = bankLocation[key];
        console.log(`${key}: ${element}`);
    }
}
for (const key in rateOfInterest) {
    if (Object.hasOwnProperty.call(rateOfInterest, key)) {
        const element = rateOfInterest[key];
        console.log(`${key}: ${element}`);
    }
}
