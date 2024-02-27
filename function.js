

function findSum(n){
    let ans = 0;

    for(let i=1; i<n;i++){
    ans = ans +i;
    }
    return ans;
}

let s = findSum(10);

console.log("s",s);