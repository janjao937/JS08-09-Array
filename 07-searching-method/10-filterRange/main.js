// จงเขียนฟังก์ชัน filterRange(arr, a, b) เพื่อ return array ที่ประกอบด้วย element ของ arr ที่มีค่าอยู่ระหว่าง a กับ b

const array = [1,2,3,4,5,80,12,15];

filterRange = (arr, max, min)=>
{
    let fill = arr.filter((e)=>e>max && e<min);
    return fill;
}

filterRange(array,1,5);