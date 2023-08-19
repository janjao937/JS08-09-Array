/*let arr = [3.24, 2.78, 3.86, 1.37, 0.52]; min*/
let arr = [3.24, 2.78, 3.86, 1.37, 0.52];

const findMaxMin = (arr)=>{
    
    let maxMin = arr.reduce((acc,item)=>{
        return acc<item?acc:item;
    })
    return maxMin;
}

console.log(findMaxMin(arr));

// let temp = arr[0];
// const findMin = arr.reduce((temp,item)=>{

//     return item<temp?temp=item:temp=arr[0];
// },temp)
