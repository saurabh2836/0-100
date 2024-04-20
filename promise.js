


// var d = new Promise(function (resolve){
//     resolve("saurabh")
// });


// function callback(){
//     console.log(d)
// }

// d.then(callback)

//promise which is immediately resolves 
let p = new Promise(function(resolve){
    resolve('Hi there');
});

p.then(function(){
    console.log(p);
});