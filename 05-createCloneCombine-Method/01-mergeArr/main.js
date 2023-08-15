/*
ให้สร้างตัวแปร Array ที่เกิดจากการนำค่า element ใน a และ b มาต่อกัน


```js
const a = [1, 5, 7, 11];
const b = [2, 3, 6];
```
*/


// const tempArray = [a,b];
// const ab = [];

// for(let i = 0;i< tempArray.length;i++)
// {
//     tempArray[i].forEach(e => 
//     {
//         ab.push(e);    
//     });
// }

const a = [1, 5, 7, 11];
const b = [2, 3, 6];

const mergeArr = (a,b) =>
{
    const tempArray = [a,b];
    const combineArray = [];
    for(let i = 0;i < tempArray.length;i++)
    {
        tempArray[i].forEach(e => 
        {
            combineArray.push(e);    
        });

    }

    return combineArray;
}

console.log(mergeArr(a,b));

//Concat

let newArr = a.concat(b);
console.log(newArr);