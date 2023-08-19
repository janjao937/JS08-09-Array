// จงหาคะแนนเฉลี่ยแบบถ่วงน้ำหนัก


// ```js
// const scores = [
//   { score: 90, subject: 'HTML', weight: 0.2 },
//   { score: 95, subject: 'CSS', weight: 0.3 },
//   { score: 85, subject: 'JavaScript', weight: 0.5 }
// ];
// // expected result: 89
// ```

//90*0.2| 95*0.3 |85*0.5/totalWeigth

const scores = [
  { score: 90, subject: 'HTML', weight: 0.2 },
  { score: 95, subject: 'CSS', weight: 0.3 },
  { score: 85, subject: 'JavaScript', weight: 0.5 }
];
const result = scores.reduce((acc,item)=>acc+((item.score*item.weight)/1),0)

console.log(result);
