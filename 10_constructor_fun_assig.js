console.log("********** ASSIGNMENT **********");

function Bank(bankName,location,ifscCode,branchCode){
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
    this.show = function(){
        console.log(`BANK DETAILS IS :- Name of the bank is :${this.bankName}, Location is : ${this.location}, IFCS Code is : ${this.ifscCode}, Branch code is : ${this.branchCode}`);
    }
}

console.log("==================== BANK DETAILS ====================");

const yesBank = new Bank("Yes Bank","Mumbai","yes25400124","yes667");
yesBank.show();

const sbiBank = new Bank("State Bank of India","Pune","SBI00000524","sbi452");
sbiBank.show();

const mahBank = new Bank("Bank of Maharashtra","Satara","BOM00004591","bom220");
mahBank.show();

const axisBank = new Bank("Axis Bank","Baramati","AXIS0001245","axis555");
axisBank.show();

console.log("==================== BANK DETAILS USING PROTOTYPE ====================");

Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime = "6 PM IST";

console.log(`Open Time of SBI Bank is : ${sbiBank.openTime} and close time is: ${sbiBank.closeTime}.`);
console.log(`Open Time of AXIS Bank is : ${axisBank.openTime} and close time is: ${axisBank.closeTime}.`);
console.log(`Name of the Bank is ${yesBank.bankName}, Branch Code is : ${yesBank.branchCode}, Open Time is : ${yesBank.openTime} and close time is: ${yesBank.closeTime}.`);