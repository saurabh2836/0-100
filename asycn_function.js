


// function saurabhAsyncFunctionn(){

//     let p = new Promise(function(resolve){

//         setTimeout(function(){
//             resolve("hi there !")
//         },1000)
//     });

//     return p;

// }

// async function main(){
//     let value = await saurabhAsyncFunctionn()
//     console.log("value",value);
// }
// main();


//callback syntax
function saurabhAsyncFunction(callback){
    callback("Hi There");
}

async function main(){
    saurabhAsyncFunction(function(value){
        console.log(value);
    })
}
main();

//Promise (then) syntax 

function saurabhAsyncFunction1() {
    let p = new Promise(function(resolve){
        resolve("Hi there")
    });
    return p;
}

function main1(){
    saurabhAsyncFunction1().then(function(value){
        console.log("value",value)
    });
}

main1();



//Async / Await syntax

function saurabhAsyncFunction2() {
    let p = new Promise(function(resolve){
        resolve("Hi there")
    });
    return p;
}

async function main2(){
    const value = await saurabhAsyncFunction2();

    console.log(value);

}

main2();


//promisify

function myOwnPromiifiedTimeout(){
    return new Promise(function(onDone,onError){
            onError();
    ));
}

let p = myOwnPromiifiedTimeout();

p.then(function(){

}).catch(function(){

});