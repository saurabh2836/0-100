


//find the square of the input

function square(n){
return n*n;

}


//finds the sum of the squares of the inputs


function sumOfSquares(a,b){

const val1 = square(a);
const val2 = square(b);


return val1 + val2;

}


console.log("sumofsquares",sumOfSquares(1,2));


function onDisconnect(socket) {
    return () => {
      console.log(`${socket.id} disconnected`);
    };
  }