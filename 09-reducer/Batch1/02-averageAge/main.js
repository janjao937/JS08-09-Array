/*
let john = { name: 'John', age: 27 };
let jo = { name: 'Jo', age: 21 };
let jin = { name: 'Jin', age: 25 };

let arr = [john, pete, mary];

console.log(getAverageAge(arr)); // (27 + 21 + 25) / 3 = 24.33
*/

let john = { name: 'John', age: 27 };
let jo = { name: 'Jo', age: 21 };
let jin = { name: 'Jin', age: 25 };

let arr = [john,jo,jin];

const allSum =(array) => array.reduce((acc,item)=>{

    return (item.age/array.length)+acc;

},0)

console.log(allSum(arr));



//Teacher
function getAverageAge(array)
{
    const sunAge = array.reduce((acc,persn)=>{
        let age = persn.age;
        return acc+ age;
    },0);
}