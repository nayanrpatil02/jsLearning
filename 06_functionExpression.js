function display(args) {
    console.log(args*args);
    
}
display(30);

var num =100;
console.log(num); //100
var show = function(args) {      //anonymous function
console.log("Hi Good Morning");    
}
show();
console.log(typeof show);

var sum = function(arg1,arg2){
    console.log(arg1 + arg2);
    return arg1*arg2;
}
sum(100, 100);
log 

//CodeMind
var show = function(args){
    console.log('Hi Good Morning');
}
show();
console.log(typeof show);
// FE - Function expression
var sum = function(arg1, arg2){
    console.log(arg1 + arg2);
    return arg1*arg2;
}
var result = sum(100, 100);
console.log(result);