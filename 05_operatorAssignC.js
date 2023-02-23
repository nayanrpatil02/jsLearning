console.log("*********** ASSIGNMENT C ***********");
console.log(" ");

console.log("========== STEP 1 ==========");

function tcsEligibility(gradScore,hscScore,sscScore,candidateName){
    var eligibility = (gradScore>=70 || hscScore>=80 || sscScore>90) ? `Congrats ${candidateName} you are eligible for TCS interview.` : `Sorry ${candidateName},Unfortunately you are not eligible for TCS interview.`;
    console.log(eligibility);
   
}

tcsEligibility(80,86,90,"Nikhil");
tcsEligibility(70,65,55,"Mohit");
tcsEligibility(60,79,88,"Priyanka");

console.log(" ");
console.log("*********** END OF ASSIGNMENT ***********");