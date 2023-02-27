console.log("********** ASSIGNMENT 2 *********");

function eligibilityTCS(gradScore,hscScore,sscScore,candidateName) {
   if (gradScore >= 70 || hscScore >= 80 || sscScore >= 90) {
    console.log(`Congrats ${candidateName}, You are eligible for TCS interview.`);
    
   } else {
    console.log(`Sorry ${candidateName},Unfortunately you are not eligible for TCS interview.`);
   }
}

eligibilityTCS(80,89,90,"Naayan");
eligibilityTCS(70,65,55,"Rajani");
eligibilityTCS(60,79,88,"Radha");