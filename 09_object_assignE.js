console.log("********** ASSIGNMENT E **********");

const sbiBank = {
    dataMembers: {
      bankName: "SBI Bank",
      location: "Deccan",
      accountNo: 65423995874,
      ifsc: "SBI000054",
      interestRate: 6.5,
    },
    showDetails: function () {
      console.log(`Bank Name is: ${this.dataMembers.bankName}, Location is: ${this.dataMembers.location}, Account No is: ${this.dataMembers.accountNo}, IFSC: ${this.dataMembers.ifsc}, Interest Rate: ${this.dataMembers.interestRate}`);
    }
  };
  
  const axisBank = {
    dataMembers: {
      bankName: "Axis Bank",
      location: "Hinjewadi",
      accountNo: 6523148759,
      ifsc: "AXIS0002458",
      interestRate: 7.2,
    },
    showDetails: function () {
      console.log(`Bank Name is: ${this.dataMembers.bankName}, Location is: ${this.dataMembers.location}, Account No is: ${this.dataMembers.accountNo}, IFSC: ${this.dataMembers.ifsc}, Interest Rate: ${this.dataMembers.interestRate}`);
    }
  };
  
  const hdfcBank = {
    dataMembers: {
      bankName: "HDFC Bank",
      location: "Kothrud",
      accountNo: 658954231,
      ifsc: "HDFC000072",
      interestRate: 8.12,
    },
  showDetails: function () {
        console.log(`Bank Name is: ${this.dataMembers.bankName}, Location is: ${this.dataMembers.location}, Account No is: ${this.dataMembers.accountNo}, IFSC: ${this.dataMembers.ifsc}, Interest Rate: ${this.dataMembers.interestRate}`);
      }
  };

  const yesBank = {
    dataMembers: {
      bankName: "YES Bank",
      location: "Bavdhan",
      accountNo: 9655856632,
      ifsc: "YES0000252",
      interestRate: 6.25,
    },
  showDetails: function () {
        console.log(`Bank Name is: ${this.dataMembers.bankName}, Location is: ${this.dataMembers.location}, Account No is: ${this.dataMembers.accountNo}, IFSC: ${this.dataMembers.ifsc}, Interest Rate: ${this.dataMembers.interestRate}`);
      }
  };

  console.log("==================== SBI Bank Details====================");
  sbiBank.showDetails();
  
  console.log("==================== Axis Bank  Details====================");
  axisBank.showDetails();
  
  console.log("==================== HDFC Bank Details ====================");
  hdfcBank.showDetails();
  
  
  console.log("====================  YES Bank Details ====================");
  yesBank.showDetails();