console.log(" ********** ASSIGNMENT MAP OBJECT 0A **********");

class Bank {
    constructor(bankName, location, accountNo, ifsc, interestRate ){
        this.bankName = bankName;
        this.location = location;
        this.accountNo = accountNo;
        this.ifsc = ifsc;
        this.interestRate = interestRate;
    }  
}

console.log("========== Objects of bank class ==========");

const axis_bank = new Bank("AXIS Bank","Mumbai","12458632021","AXIS0000104",10.00);
console.log(axis_bank);

const sbi_bank = new Bank("SBI Bank","Pune","4532006951","SBI00001421",11.50);
console.log(sbi_bank);

const icici_bank = new Bank("ICICI Bank","Baramati","9456320125","ICICI0000542",9.5);
console.log(icici_bank);

const kotak_bank = new Bank("KOTAK Bank","Satara","6522201123","KOTAK00000121",13.00);
console.log(kotak_bank);
 
const hdfc_bank = new Bank("HDFC Bank","Solapur","320065423","HDFC00021",14.25);
console.log(hdfc_bank);

const panjab_bank = new Bank("PANJAB Bank","Sangli","442003596","PUN000236",10.41);
console.log(panjab_bank);


console.log("========== CREATING MAP WITH KEY ACCOUNT NUMBER  ==========");

const mapOfBanks = new Map();

mapOfBanks.set("AXIS_1", axis_bank);
mapOfBanks.set("SBI_2", sbi_bank);
mapOfBanks.set("ICICI_3", icici_bank);
mapOfBanks.set("KOTAK_4", kotak_bank);
mapOfBanks.set("HDFC_5", hdfc_bank);
mapOfBanks.set("PUNJAB_6", panjab_bank);

console.log(mapOfBanks);
console.log(`                                                                   `);

//const keysOfMap = mapOfBanks.keys();
//console.log(keysOfMap);

const valuesOfMap = mapOfBanks.values();
console.log(valuesOfMap);

console.log("========== TRAVERSING MAP ==========");

const element = mapOfBanks.get("AXIS_1")
const keysOfMap = mapOfBanks.keys();

for (const key of keysOfMap) { // STEP-C Map Traversing Using "for of loop"
    
    const element = mapOfBanks.get(key);
    //console.log(key,element);
    console.log(`Bank Name: ${element.bankName}, Account No: ${element.accountNo}, Interest Rate: ${element.interestRate}`);
}