//Array Method (modify-mutate)

//splice(start,delete,add item) => return Delete Item
/*
start = เริ่มจาก Index ไหน
*/

let a1 = ["i","L","JS"];
console.log(a1);
let spliteTemp = a1.splice(1,1);//start index1 ,Delete index1 || return Delete Item
console.log(a1);
console.log(spliteTemp)

let a2 =["I","Study","javaScript"];
console.log(a2);
 a2.splice(2,0,"Dance","Language");//start index 2 |No Delete|Add Item
console.log(a2);

