// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");


let strname = "string name";
console.log(typeof(Symbol(strname)));

let a =[0] , b=[0];

console.log(a===b)
'use strict'
console.log("0"==0)
console.log("saurabh",undefined == false)

console.log(({x:1,y:2}).toString())
let abc =[];
let abc2 =[4];
let abc4= {};
let abc5 = {"name":"saurabh"};

console.log("abc",abc)
console.log("abc2",abc2)
console.log("abc4",abc4)
console.log("abc5",abc5)
console.log("Number[]",Number([]))
console.log("Number[99]",Number([99]))

const x =1;
if(x===1){
    
    let x = 2 ;
    console.log("x",x)
}
console.log("x",x);

let [x1,...y2] = [1,2,3,4]

console.log("x1",x);
console.log("y2",y2);

console.log("this",this);
 let name ;
 name ="chetana";
console.log("this",this);

function test(){
  name = "saurabh";
  console.log("this.name",this.name);
}
test();
 console.log("this.name outside",this.name);
// let x = 3;
// console.log("x3",x);
let abcd = { b: "232323",c:"saurabh",d:null}
console.log("abcd",abcd.b?.c?.d);



let bc;

let index = 0;

try{
    a[index++];
}catch(e){
    index
}

console.log("bc?.[index++]",bc?.[index++]);
console.log("index",index);
// console.log("bc[index++]",bc[index++])


let f= null; 
 let xy = 1;

try {
    f(xy++)
}catch(e){
    xy
}

console.log("f?.(xy++)",f?.(xy++))
console.log("xy",xy);

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");

let count = 0;

while(count<10){
    console.log("count",count);
    count++;
}

function printArray(a){
    let len= a.length ,i=0;
    if(len === 0){
        console.log("Empty Array")
    }else{
        do{
            console.log("a[i]",a[i]);
        }while(++i<len)
    }
}

printArray("saurabh");

for(let count =0;count <10; count++){
    console.log("count",count)
}


let dataSum = [1,2,3,4,5,6,7,8,9],sum =0;
for(let element of dataSum){
    sum +=element;
}
console.log("sumofdata",sum)

let o ={x:1,y:2,z:3};

let keys ='';
for(let k of Object.keys(o)){
    keys+=k;
}
console.log("keys",keys)

let o1 ={x:1,y:2,z:3};

let keys1 ='';
for(let k of Object.values(o1)){
    keys1+=k;
}
console.log("keys1",keys1)


let pairs="";
let o4 = {x :1,y:2,z:3};
for(let [k,v] of Object.entries(o4)){
    pairs +=k+v;
}

console.log("paris",pairs)



let text = "Na na na na na2 na na na na Batman!";
let wordSet = new Set(text.split(" "));
let unique = [];
for(let word of wordSet){
    unique.push(word)
}

console.log("unique",unique);

let m= new Map([[1,"one"]]);
for(let[key,value] of m){
    console.log("key",key),
    console.log("value",value)
}
let o222 = {x:1,y:2,z:3};
let a1=[],i=0;
for(a1[i++] in o222){
     console.log("a",a)
}

for(let i3 in a){
    console.log("i",i3)
}


function factorial(x){
    
    if(x<0) throw new Error("X must not be negative");
    
    let f;
    for(f=1; x>1;f*=x,x--);
    return f;
}
console.log("factorial",factorial(4))


function factorial(x){
    if(x<0) throw new Error("X must not be negative");
    let f;
    for(f=1; x>1;f*=x,x--);
    return f;
}
console.log("factorial",factorial(0))

let oa = {x : "dont't change this value"};

console.log("library.function(Object.create(o))",Object.create(oa));

let s = {
    a:"name",
    b:"surname"
}

console.log("s.a",s.a);
console.log("s[a]",s["a"]);

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");

let point ={
    x:3,
    y:4,
    valueOf:function(){
        return Math.hypot(this.x,this.y)
    },
    toString:function(){ return `(${this.x},${this.y})`;
    },
    toJSON:function(){
        return this.toString();
        
    }
}

console.log("Number(point)",Number(point));
console.log("point>4",point > 4);
console.log("point>4",point >= 5);
console.log("point>4",point < 6);

console.log("JSON.stringify([point])",JSON.stringify([point]))


 const extension = Symbol("my extension symbol");
 
 let o = {
     [extension]:{
         
     }
 };
 o[extension].x=2;
 console.log("x[extension]",o[extension].x);
 
 
 
 
 
 