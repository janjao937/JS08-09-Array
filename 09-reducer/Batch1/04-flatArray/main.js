// จงกระจาย element ที่ซ้อนกันอยู่ภายใน array ให้กระจายออกมาที่ element ชั้นนอกสุด

// ```js
// let flattened = [
//   [0, 1],
//   [2, 3],
//   [4, 5]
// ];
// // expected result: [0, 1, 2, 3, 4, 5]

let flattened = [
  [0, 1],
  [2, 3],
  [4, 5]
];

//flattened[0][0,1]
let result = flattened.reduce((acc,item)=>{
    for(let i of item)
    {
        acc.push(i);
    }
  return acc
},[]) 