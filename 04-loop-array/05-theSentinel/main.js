/*
- ให้ใช้ฟังก์ชัน prompt เพื่อรับค่าตัวเลข แล้วเก็บไว้ในตัวแปร Array
- รับค่าตัวเลขไปเรื่อยๆจนกว่าผู้ใช้จะพิมพ์ข้อความที่ไม่ใช่ตัวเลขหรือกด cancel
- ให้หาผลรวมของตัวเลขที่เก็บไว้ในตัวแปร Array
*/

//get int input
//continue until cancle or typing !float
//find sumation

let numInput = new String();//= prompt("Enter number or other for exit");//first input

let isContinue = true;
let temp = 0; 
while(isContinue)
{
    numInput = prompt("Enter number or other for exit");
    //check input
    if(numInput === null || numInput.trim() === "" || isNaN(numInput))
    {
        isContinue = false;
        alert("sumation:"+temp);
        break;
    }
    // console.log(numInput)
    temp += +numInput;
}