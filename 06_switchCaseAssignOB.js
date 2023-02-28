console.log("***** ASSIGNMENT B *****");

function checkLeapYear(leap_year) {
    if (leap_year == "NULL" || leap_year == undefined || isNaN(leap_year) || leap_year== "number") {
        console.log(`Entered year ${leap_year} is an INVALID YEAR. Please enter valid year`);
        
    }
    else if ((leap_year % 4 == 0) && (leap_year % 100 != 0) || (leap_year % 400 == 0)) {
        console.log(`The entered year ${leap_year} is a leap year`);
    } else {
        console.log(`The entered year ${leap_year} is a not leap year`);
    }
    
}

checkLeapYear(2020);
checkLeapYear(1600);
checkLeapYear(2022);
checkLeapYear(1945);
checkLeapYear("NULL");
checkLeapYear("Twenty Twenty");
checkLeapYear(undefined);
checkLeapYear(NaN);
checkLeapYear(1750);