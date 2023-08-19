//Array.filter
//callback syntax| function(item,index,allArray)
let fillterArray = [4,5,6,7].filter((e)=>e%2===0);//return [4,6]

//filter fn

const per = [
    {name:"K",age:100},
    {name:"KA",age:15},
    {name:"KAR",age:25},
]
const allowPerson = per.filter((e)=>{
    ///Condition for filter
    return true;//all item
})
