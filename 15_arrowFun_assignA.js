console.log(" ******************** ARROW FUNCTION ******************** ");
console.log(" ");
console.log(" ==================== STEP 1 : ARROW FUNCTION WITH NO ARG AND NO RETURN VALUE  ==================== ");

let display = () => {
    console.log(" Good Morning,Today is Monday ");
}
display();
console.log(" ");

console.log(" ==================== STEP 2 : ARROW FUNCTION WITH NO ARG AND NO RETURN VALUE  ==================== ");

let mult = (num1, num2, num3 ) => {
    console.log(`2.A] Multiplication of : ${num1}*${num2}*${num3} is : ${num1 * num2 * num3} `);
}
mult(5, 5, 2);

let multi = (num1, num2, num3 ) => {
    console.log(`2.B] Multiplication of 2 argument: ${num1} & ${num2} and default value ${num3} is : ${num1 * num2 * num3} `);
}

multi(10, 4, 1);
console.log(" ");

console.log(" ==================== STEP 3 : ARROW FUNCTION WITH ARG AND RETURN VALUE  ==================== ");
let addition = (num1, num2, num3, num4, num5) => {
    const result = num1 + num2 + num3 + num4 + num5;
    return result;
}
const additionResult = addition(100, 100, 200, 349, 756);
console.log(`3.A] Addition of 5 arguments is : ${additionResult}`);

const additionResultStr = addition(" I am ", " learning " , " ES6 ", " feature ", " in depth. ");
console.log(`3.B] Addition of 5 strings is : ${additionResultStr}`);
