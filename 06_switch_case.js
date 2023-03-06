/*function dayCheck(dayNumber){
 if (dayNumber <=0 || dayNumber >7 || dayNumber == null || isNaN(dayNumber)) {
    console.log("Invalid day number");
 }
if (dayNumber==1){
    console.log(`Monday`);
}
if (dayNumber==2){
    console.log(`Tuesday`);
}
if (dayNumber==3){
    console.log(`Wednesday`);
}
if (dayNumber==4){
    console.log(`Thursday`);
}
if (dayNumber==5){
    console.log(`Friday`);
}
if (dayNumber==6){
    console.log(`Saturday`);
}if (dayNumber==7){
    console.log(`Sunday`);
}
}

dayCheck(null);
dayCheck(0); 
dayCheck(-3);
dayCheck(9);
dayCheck(3);
dayCheck(5);
dayCheck(7);  */

function weekDay(day) {
    switch (day) {
        case 1: //day == 1
            console.log(` Day of the week is ${day}: Monday`);
            console.log('Monday is the start day of the week');
            break;
        
        case 2: //day == 2
            console.log(` Day of the week is ${day}: Tuesday`);
            break;
        
        case 3: //day == 3
            console.log(` Day of the week is ${day}: Wednesday`);
            break;
        
        case 4: //day == 4
            console.log(` Day of the week is ${day}: Thursday`);
            break;
        
        case 5: //day == 5
            console.log(` Day of the week is ${day}: Friday`);
            break;
        
        case 6: //day == 6
            console.log(` Day of the week is ${day}: Saturday`);
            break;

        case 7: //day == 7
            console.log(` Day of the week is ${day}: Sunday`);
            break;
    
        default:
            console.log(`Invalid day : ${day}`);
            break;
    }
  console.log(`End of switch case for ${day}`);  
}
weekDay(3);
weekDay(7);
weekDay(0);
weekDay(-2);
weekDay(100);
weekDay(null);
weekDay(undefined);


