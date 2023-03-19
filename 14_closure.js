let globalVariable = 100;

function outer (){

    console.log("This is Outer Function");
    let outerFunVariable = 300;

    let inner = function (){

        console.log("This is Inner Function");
        let innerFunVariable = 500;
        console.log(innerFunVariable);
        console.log(outerFunVariable);
        console.log(globalVariable);
    }
    return inner;
}

const innerFunc = outer();
innerFunc();
// outer()();