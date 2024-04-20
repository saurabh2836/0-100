

const  input =[1,2,3,4,5]


function transform(i){
      console.log("i",i);
        return i*2;
        console.log("i",i);
}


const ans = input.map(transform);

console.log("ans",ans);
