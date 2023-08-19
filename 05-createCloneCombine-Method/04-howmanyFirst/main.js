// - จงสร้างฟังก์ชัน first(arr, n) ให้ return ค่าตามเงื่อนไขต่อไป
//   -  n เป็น undefined หรือ 1 ให้ return element ตัวแรกของ arr
//   -  n มากกว่า 1 ให้ return ค่าเป็น array ที่มี element ของ arr n ตัวแรก
// - ตัวอย่างผลลัพธ์

// ```js
// console.log(first([7, 9, 0, -2])); // 7
// console.log(first([], 3)); // []
// console.log(first([7, 9, 0, -2], 3)); // [7, 9 ,0]
// ```

//Before Know Slice
const first = (arr,n=1) => 
{
    if(arr.length < 0) return arr;
    const r = new Array();
    for(let i = 0 ; i < n;i++)
    {  
        if(arr[i]=== void 0)
        {
          //r[i] = 1; 
          continue;
        }
        r[i] = arr[i];
    }
    return r;
}

console.log(first([7, 9, 0, -2])); 
console.log(first([], 3)); 
console.log(first([7, 9, 0, -2], 3));

//Slide
function Fir(arr,n = 1)
{
  return arr.slice(0,n);
}

console.log(Fir([7, 9, 0, -2],1)); 
console.log(Fir([], 3)); 
console.log(Fir([7, 9, 0, -2], 3));

//Teacher Code

