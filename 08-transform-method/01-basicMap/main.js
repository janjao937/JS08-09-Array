const array1 = [1, 2, 30, 400];
// result: [2, 4, 60, 800]
let result1 =array1.map((e)=>e*2);

const array2 = [1, 2, 3, 4];
// result: ["1", "2", "3", "4"]
let result2=array2.map((e)=>`${e}`);

const array3 = [1, '1', 2, {}];
// result: ["number", "string", "number", "object"]
let result3 = array3.map((e)=>typeOf(e));

const array4 = ['apple', 'banana', 'orange'];
// result: ["APPLE", "BANANA", "ORANGE"]
let result4 = array4.map((e)=>e.toUpperCase());

const array5 = [1, 3, 4, 5, 6, 7, 8];
// result: ["odd", "odd", "even", "odd", "even", "odd", "even"]
let result5 = array5.map((e)=>e%2===0?"Odd":"Event");

const array6 = [1, -3, 2, 8, -4, 5];
// result: [1, 3, 2, 8, 4, 5]
let result6 = array6.map((e)=>Math.abs(e));

const array7 = [100, 200.25, 300.84, 400.3];
// result: ["100.00", "200.25", "300.84", "400.30"]
let result7=array7.map((e)=>`${e}`);
const array8 = [0, 5, 10, 7, 6, 5, 0];
// result: ["Jan", "Jun", "Nov", "Aug", "Jul", "Jun", "Jan"]
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let result8 = array8.map((e)=>month[e]);

const array9 = [1, 16, 81, 256, 625, 1296];
// result: [1, 2, 3, 4, 5, 6]
let result9 = array9.map((e)=>Math.sqrt(Math.sqrt(e)));
const array10 = [
  { name: 'apple', age: 14 },
  { name: 'banana', age: 18 },
  { name: 'watermelon', age: 32 }
];
// result: ["apple", "banana", "watermelon"]
let result10 = array10.map((e)=>e.name);

const array11 = [
  { name: 'apple', age: 14 },
  { name: 'banana', age: 18 },
  { name: 'watermelon', age: 32 }
];
// result: [14, 18, 32]
let result11 = array11.map((e)=>e.age);

const array12 = [
  { name: 'apple', surname: 'London' },
  { name: 'banana', surname: 'Bangkok' },
  { name: 'watermelon', surname: 'Singapore' }
];
// result: ["apple London", "banana Bangkok", "watermelon Singapore"]
let result12 = array12.map((e)=>`${a.name} ${a.surname}`)

const array13 = [
  { name: 'apple', birth: '2000-01-01' },
  { name: 'banana', birth: '1990-10-01' },
  { name: 'watermelon', birth: '1985-12-01' }
];
// result: [
//   { name: "apple", birth: "2000-01-01", age: 21 },
//   { name: "banana", birth: "1990-10-01", age: 31 },
//   { name: "watermelon", birth: "1985-12-01", age: 36 },
// ]

let result13 = arr13.map((e)=>{

    const newObject = Object.assign({},array13);
    const birthYear = +newObject.birth.slice(0,4);//0-4 = char year
    newObject.age = 2021 - birthYear;
    return newObject;
    })


const array14 = [
  { name: 'apple', birth: '2000-01-01' },
  { name: 'banana', birth: '1990-10-10' },
  { name: 'watermelon', birth: '1985-12-30' }
];

let fragment =  document.createDocumentFragment();

let result14 = array14.map((e)=>{
    let tr = document.createElement("tr");
   let blockName = document.createElement("td");
   blockName.innerText = e.name;
   let blockYear = document.createElement("td");
   blockYear.innerText = e.birth;

   tr.appendChild(blockName);
   tr.appendChild(blockYear);

   let fragmentSmall =  document.createDocumentFragment();
   fragmentSmall.appendChild(tr);
   fragmentSmall.appendChild(tr);

   return fragment.appendChild(fragmentSmall);

})
 
// result: [
//     "<tr><td>apple</td><td>01 jan 2000</td></tr>",
//     "<tr><td>banana</td><td>10 oct 1990</td></tr>",
//     "<tr><td>watermelon</td><td>30 dec 1985</td></tr>",
// ]


//14 TeacherCode
const arrayDom = [
    { name: 'apple', birth: '2000-01-01' },
    { name: 'banana', birth: '1990-10-10' },
    { name: 'watermelon', birth: '1985-12-30' }
  ];

const newArray = arrayDom.map(function (e){
    let name = e.name;
    const day = e.birth.slice(-2);
    const monthIndex = e.birth.slice(0,4);

    const resultString = `<tr> <td>${name}</td>${day} </td></tr>`
    return resultString;
})