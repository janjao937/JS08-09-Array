//reduce .reduce(function,ค่า acc เรื่มต้น,index,array)//ถ้าไม่มีparameter acc เริ่มต้น จะเริ่มจาก value ของ array[0]
const demo = [1,2,3,4,5,6,7]


let a = demo.reduce((acc,item)=> acc+item ,0);//acc เริ่มจาก 0
let a2 = demo.reduce((acc,item)=> acc+item );
/*

  การทำงาน a
    //update มาจากค่าของaccของแต่ละรอบ acc จะคล้าย i++ ใน for
  //1// acc = 0; update acc 0+1
  //2// acc = 1; update acc 1+2 = 3
  //3// acc = 3; update acc 3+3 = 6 


  //n-1// acc = 21;update acc 21+7 = 28

  return acc
*/


console.log(a);
let b = demo.reduce((acc,item)=> acc+item ,1);//acc = 1

console.log(b);


demo.reduce((acc,item)=>{
    acc.push(item*2);
    return acc;
},[]);//acc = []
//(acc=[],item = 1)=>[].push(1*2) = 2  update acc = [2]
//(acc=[2],2) =>[2].push(2*2) = 4  update acc = [2,4]
//