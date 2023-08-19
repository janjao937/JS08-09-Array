let alphabets = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];

const result = alphabets.reduce((acc,char)=>{

    for(let i of acc)
    {
        if(char == i)return;
        acc.push(char);
        return acc;
    }
},[])

//Teacher
const set = new Set(alphabets);
const newArr = new Array(...set);