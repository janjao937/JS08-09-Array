const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];

// let result = alphabets.indexOf("a");

let result = [];

for(let index of alphabets)
{
    if(alphabets[index]==="a")result.push(index);
}


//Teacher
let r = [];
let T = alphabets.findIndex((item,index)=>{
    if(item==="a"){
        r.push(index);
    }
});