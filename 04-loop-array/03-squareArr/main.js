const arr = [2, 3, 5, 7, 11];

function SquareArr(arr)
{
    const r=[];

    for(let i in arr)
    {
        r[i] = arr[i]**2;
    }
    return r;
}

console.log(SquareArr(arr));// [4, 9, 25, 49, 121]
console.log(arr);// [2, 3, 5, 7, 11]





//Teacher Code//
//tR = teacher result
function TeacherSquareArr(arr)
{
    const tR =[];
    
    for(let j = 0;j<=arr.length-1;j++)
    {
        tR.push(ar[i] **2);
    }

    return tR;
}