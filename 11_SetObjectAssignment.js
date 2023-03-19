console.log("******************* SET OBJECT ASSIGNMENT *******************");


class Bank{
    constructor(bankName,location,accountNo,ifsc,intrest_rate){
        this.bankName=bankName,
        this.location=location,
        this.accountNo=accountNo;
        this.ifsc=ifsc,
        this.intrest_rate=intrest_rate
    }
    
}

console.log("==================== Creation of an objects of bank class =================== ");

const axisBank = new Bank("AXIS Bank","Mumbai","12458632021","AXIS0000104",10.00);
console.log(axisBank);

const sbiBank = new Bank("SBI Bank","Pune","4532006951","SBI00001421",11.50);
console.log(sbiBank);

const iciciBank = new Bank("ICICI Bank","Baramati","9456320125","ICICI0000542",9.5);
console.log(iciciBank);

const kotakBank = new Bank("KOTAK Bank","Satara","6522201123","KOTAK00000121",13.00);
console.log(kotakBank);
 
const hdfcBank = new Bank("HDFC Bank","Solapur","320065423","HDFC00021",14.25);
console.log(hdfcBank);

const punjabBank = new Bank("PUNJAB Bank","Sangli","442003596","PUN000236",10.41);
console.log(punjabBank);
console.log("  ");


//by using set
console.log("==================== Add all object elements to the set ====================");
const setOfBanks = new Set(); // STEP-C Add All Object Elements in a Set
setOfBanks.add(axisBank);
setOfBanks.add(sbiBank);
setOfBanks.add(iciciBank);
setOfBanks.add(kotakBank);
setOfBanks.add(hdfcBank);
setOfBanks.add(punjabBank);

console.log(setOfBanks);
console.log("  ");

console.log("==================== Traversing the set and display BankName and Location ====================");

for (const element of setOfBanks) { // STEP-C Set Traversing Using "for of loop"

    //console.log(element);
    console.log(`Bank Name: ${element.bankName}, Location: ${element.location}`);
}