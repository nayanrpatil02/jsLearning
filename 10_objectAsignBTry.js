console.log("********** Object Cloning And Traversing **********");
console.log("==================== STEP 1 & 2 ====================");

const bankSbi = {
    bankName : "SBI Bank",
    openTime : "10 AM",
    ifscCode: "SBIN000101",
    interestRate : 12.50
}

console.log(" %%%%%% BANK DETAILS ARE %%%%%% ");
console.log(`Bank Name: ${bankSbi.bankName}, Open Time: ${bankSbi.openTime}, IFSC Code: ${bankSbi.ifscCode}, Interest Rate: ${bankSbi.interestRate}`);

const bankLocation = {
    street: "SB Road",
    city: "Pune",
    pinCode: "411024"
}

console.log(`Street: ${bankLocation.street}, City: ${bankLocation.city}, Pin Code: ${bankLocation.pinCode}`);

console.log("==================== STEP 3.1 ====================");
 
 console.log(" %%%%%% CLONED BANK DETAILS USING OBJECT.ASSIGN() ARE %%%%%% ");
 const clonedbankSbi = Object.assign({}, bankSbi); // To clone an object bankSbi
 console.log(`Bank Name: ${clonedbankSbi.bankName}, Open Time: ${clonedbankSbi.openTime}, IFSC Code: ${clonedbankSbi.ifscCode}, Interest Rate: ${clonedbankSbi.interestRate}`);
 
const clonedbankLocation = Object.assign({}, bankLocation); // To clone an object bankLocation
console.log(`Street: ${clonedbankLocation.street}, City: ${clonedbankLocation.city}, Pin Code: ${clonedbankLocation.pinCode}`);

console.log("==================== STEP 3.2 ====================");

console.log(" %%%%%% CLONED BANK DETAILS USING SPREAD OPERATOR ARE %%%%%% ");

const newBankSbi = { ...bankSbi };
console.log(`Details of cloned object are ==> Bank Name: ${bankSbi.bankName}, Open Time: ${bankSbi.openTime}, IFSC Code: ${bankSbi.ifscCode}, Interest Rate: ${bankSbi.interestRate}`);

const newBankLocation = { ...bankLocation };
console.log(`Details of cloned object are ==> Street: ${bankLocation.street}, City:${bankLocation.city}, Pin Code: ${bankLocation.pinCode}`);

console.log("==================== STEP 4 ====================");

const rateOfInterest = {
    homeLoanInterest: "9%",
    personalLoanInterest: "12.5%",
    dueInterest: "7%"
}
console.log(`Home Loan Interest: ${rateOfInterest.homeLoanInterest}, Personal Loan Interest: ${rateOfInterest.personalLoanInterest}, Due Interest: ${rateOfInterest.dueInterest}`);

console.log("==================== STEP 5 ====================");

const sbiDetails = Object.assign({}, bankSbi, bankLocation, rateOfInterest);
console.log(sbiDetails);
console.table(sbiDetails);
/*console.log(`Bank Name: ${sbiDetails.bankName}, Open Time: ${sbiDetails.openTime}, IFSC Code: ${sbiDetails.ifscCode},
Interest Rate: ${sbiDetails.interestRate}, Street: ${sbiDetails.street}, City: ${sbiDetails.city}, Pin Code: ${sbiDetails.pinCode}
Home Loan Interest: ${sbiDetails.homeLoanInterest}, Personal Loan Interest: ${sbiDetails.personalLoanInterest}, Due Interest: ${sbiDetails.dueInterest}`);
*/

console.log("==================== STEP 6 ====================");

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
/*
const bankSbi = {
    bankName: "SBI Bank",
    openTime: "9 AM IST",
    closeTime: "6 PM IST",
    ifscCode: "SBIN001122",
    interestRate: 10.12
}
console.log(`Bank Name: ${bankSbi.bankName}, Open Time: ${bankSbi.openTime}, Close Time: ${bankSbi.closeTime}, IFSC Code: ${bankSbi.ifscCode}, Interest Rate: ${bankSbi.interestRate}`);

console.log("**** STEP-2 Create the object - bankLocation Using Object Literals ****");

// STEP-2 Create the object - bankLocation
const bankLocation = {
    street: "Wakad",
    city: "Pune",
    pinCode: "431204"
}
console.log(`Street: ${bankLocation.street}, City: ${bankLocation.city}, Pin Code: ${bankLocation.pinCode}`);

console.log("**** STEP-3.1 Cloning an Object bankSbi and bankLocation Using Object.assign() ****");

// STEP-3.1 Cloning an Object bankSbi and bankLocation Using Object.assign()

const clonedbankSbi = Object.assign({}, bankSbi); // To clone an object bankSbi
console.log(`Bank Name: ${clonedbankSbi.bankName}, Open Time: ${clonedbankSbi.openTime}, Close Time: ${clonedbankSbi.closeTime}, IFSC Code: ${clonedbankSbi.ifscCode}, Interest Rate: ${clonedbankSbi.interestRate}`);
//console.log(clonedbankSbi);

const clonedbankLocation = Object.assign({}, bankLocation); // To clone an object bankLocation
console.log(`Street: ${clonedbankLocation.street}, City: ${clonedbankLocation.city}, Pin Code: ${clonedbankLocation.pinCode}`);
//console.log(clonedbankLocation);

console.log("**** STEP-3.2 Cloning an Object bankSbi and bankLocation Using Spread Operator() *****");

// STEP-3.2 Cloning an Object bankSbi and bankLocation Using Spread Operator()

console.log("** Deep Clone Using Spread Operator() ***");

const newbankLocation = { ...bankSbi };
//console.log(bankSbi, bankLocation);
console.log(`Bank Details of bankSbi ==> Bank Name: ${bankSbi.bankName}, Open Time: ${bankSbi.openTime}, Close Time: ${bankSbi.closeTime}, IFSC Code: ${bankSbi.ifscCode}, Interest Rate: ${bankSbi.interestRate}`);
console.log(`Bank Dtails of newbankLocation ==> Street: ${bankLocation.street}, City:${bankLocation.city}, Pin Code: ${bankLocation.pinCode}`);

bankLocation.city = "Mumbai";
//console.log(bankSbi, bankLocation);
console.log(`Bank Details of bankSbi ==> Bank Name: ${bankSbi.bankName}, Open Time: ${bankSbi.openTime}, Close Time: ${bankSbi.closeTime}, IFSC Code: ${bankSbi.ifscCode}, Interest Rate: ${bankSbi.interestRate}`);
console.log(`Bank Dtails of newbankLocation ==> Street: ${bankLocation.street}, City:${bankLocation.city}, Pin Code: ${bankLocation.pinCode}`);

console.log("**** STEP-4 Create the object - rateOfInterest Using Object Literals ****");

const rateOfInterest = {
    homeLoanInterest: 10,
    personalLoanInterest: 12,
    dueInterest: 8
}
console.log(`Home Loan Interest: ${rateOfInterest.homeLoanInterest}, Personal Loan Interest: ${rateOfInterest.personalLoanInterest}, Due Interest: ${rateOfInterest.dueInterest}`);

console.log("**** STEP-5 Merge the STEP-1, STEP-2 and STEP-4 Objects into New Object - sbiDetails = mergedObjects");

const sbiDetails = Object.assign({}, bankSbi, bankLocation, rateOfInterest);
console.log(sbiDetails);
console.table(sbiDetails);
console.log(`Bank Name: ${sbiDetails.bankName}, Open Time: ${sbiDetails.openTime}, Close Time: ${sbiDetails.closeTime}, IFSC Code: ${sbiDetails.ifscCode},
Interest Rate: ${sbiDetails.interestRate}, Street: ${sbiDetails.street}, City: ${sbiDetails.city}, Pin Code: ${sbiDetails.pinCode}
Home Loan Interest: ${sbiDetails.homeLoanInterest}, Personal Loan Interest: ${sbiDetails.personalLoanInterest}, Due Interest: ${sbiDetails.dueInterest}`);


console.log("**** STEP-6 Traverse this Merged Object - STEP-5 Using Loopp ");
 
console.log("*** Shallow Clone, Deep Clone, Merge Operation And Deep copy Using JSON.stringfy() ***");
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
*/