
function doAssignment(callback) {
    //Ajay
    console.log("Solving Assignments");
    console.log("Step 1 to 10 all are solved now.");
    callback();
}

function copyAssignment() {
    //Ajinkya
    console.log("Thank you Ajju, Let me copy assignments:");    
    console.log("Ohh finally copied all assignment.");
}

doAssignment(copyAssignment);

function greet(){
    console.log("Good Morning.....");
}
// 1 sec = 1000 milli seconds
// 3 sec = 3000 ms
setTimeout(greet, 4000);

function firstClass(){
    console.log("We can return function from another function");
    return function(){
        console.log("Inner function");
    }
    // return innerFunction;
}
const inner = firstClass();
inner();