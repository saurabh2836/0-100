


//find the square of the input

function square(n){
return n*n;

}

function cube(n){
    return n*n*n;
}


//finds the sum of the squares of the inputs

//functionname is called as callback function
function sumOfSquares(a,b,functionName){

const val1 = functionName(a);
const val2 = functionName(b);


return val1 + val2;

}


console.log("sumofsquares",sumOfSquares(1,2,cube));
