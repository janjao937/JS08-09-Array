//Map

/*
<array>.map(callback)
*/
[5,6,7].map((x)=> x*3);

[2,5,10].map((item,index,array) => item*2);

//Map การทำงาน
//create arr[]
//1/ loop(item=2)| array.push(2*2);
//2/ loop(item=5)| array.push(5*2);
//3/ loop(item = 10)| array.push(3*10);

let names = ["Banana","Green","Weed"].map((e)=> e.length);//string.length = char ของ string

names.forEach(el => {
    console.log(el);
});

const nums = [1,2,3,4,5];
const newArr = nums.map(x=>{

    return 2*x;
})


//find item
//find(item,index,arr)

const b =[2,3,4,5,8,7];
const r = nums.find((item) => item===3);
const rr = nums.findIndex((item) => item===3);//Defult -1
const ee = nums.find((item) => item===9);
console.log(r);
console.log(rr);
console.log(ee);//not found

const fruit=[{price:500,discount:0.1},{price:6,discount:0.1},{price:800,discount:0.1},{price:1000,discount:0.1}]

const foundIndex = fruit.findIndex((e)=>e.price===800)

if(foundIndex != -1)//not found  = -1
{
    const newObj = fruit[foundIndex];
    newObj.price = 2000;
    fruit.splice(foundIndex,1,newObj);
}
console.log(fruit);

///////
