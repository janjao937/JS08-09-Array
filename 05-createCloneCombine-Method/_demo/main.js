//เชื่อมต่อ Array

////concat(num or array)
const a1 = [1,2,3];
const a2 = [4,5,6];

const newArr = a1.concat(a2);

console.log(newArr);

const newArr2 = newArr.concat(8,9,10,a1);//Create new Array and Return Array

console.log(newArr2);

///slide(startIndex,endIndex) 

let iu = [0,1,2,3,4,5,6,7].slice(0,4);
console.log(iu);

let arrr = [0,11,22,33,44,55,66,77,88,99];
const newArr3 = arrr.slice(0,5);
console.log(newArr3);//Slide 0 => 5

const noEnd = arrr.slice(0);
console.log(noEnd);


const negativeIndex = arrr.slice(-5);//ติดลบ slide จะนับจากข้างหลัง
console.log(negativeIndex);//index => -5 -4 -3 -2 -1