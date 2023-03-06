function stringHandsOn(){
    var string = "     Hey you are doing good, keep it up       ";
    console.log("********** STEP 1 **********");
    console.log(string);
    console.log("********** STEP 2 **********");
    var stringLength = string.length;
    console.log("Length of string is :",stringLength);
    console.log("********** STEP 3 **********");
    var stringAfterTrim = string.trim()
    console.log("String after removing extra spaces:", stringAfterTrim," \t And its length is:", stringAfterTrim.length);
    console.log("********** STEP 4 **********");
    var spacesRemoved = string.length-stringAfterTrim.length;
    console.log("The count of spaces removed in step 3 is:", spacesRemoved);
    console.log("********** STEP 5 **********");
    var firstcharacter = stringAfterTrim.charAt(0);
    var lastcharacter = stringAfterTrim.charAt(stringAfterTrim.length-1); 
    console.log("First character is :", firstcharacter, "\t Last character is:", lastcharacter);
    console.log("********** STEP 6 **********");   
    var splitString = stringAfterTrim.split(" ");
    //console.log(splitString);
    console.log("Total number of words in string after trim are: ",splitString.length);
    console.log("********** STEP 7 **********");
    var indexOfGood = string.indexOf("good");
    console.log("Index of good before trim is:", indexOfGood);
    var indexOfGoodAfterTrim = stringAfterTrim.indexOf("good");
    console.log("Index of good after trim is:",  indexOfGoodAfterTrim);
    console.log("********** STEP 8 **********");
    var sliceString = stringAfterTrim.slice(22, );
    console.log("Substring after String Trim starting from index 22 using slice is:",sliceString);
    var subString = stringAfterTrim.substring(22, );
    console.log("Substring after String Trim starting from index 22 using substring is:",subString);
    console.log("********** STEP 9 **********");
    var stringEndWithUp = stringAfterTrim.includes("up");
    console.log("Does string after trim end with up :",stringEndWithUp);
    console.log("********** STEP 10 **********");
    var stringStartWithHey = stringAfterTrim.includes("Hey");
    console.log("Does string after trim start with Hey :",stringStartWithHey);
   }
stringHandsOn();