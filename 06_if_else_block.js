function maleMarriageEligibility(gender,age, boyName){
    //write conditions to handle unhappy path to handle invalid data
    if (age < 0 || age == undefined) {
        return `Hey ${boyName} your age ${age} is not valid`; 
    }
  
    if (gender=="Male" && age>=21) {
       var str = `Hey ${boyName} you are eligible for marriage`;
       return str;
    } else {
        var str = `${boyName} you are not eligible for marriage`;
        return str;
    }

}
var result = maleMarriageEligibility("Male", 25, "Billgates");
console.log(result);

var result = maleMarriageEligibility("Male", -30, "Shivam");
console.log(result);

var result = maleMarriageEligibility("Male", undefined, "Raju");
console.log(result);