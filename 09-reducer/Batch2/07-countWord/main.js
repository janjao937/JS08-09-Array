let names = ['Jack', 'John', 'Bill', 'John', 'Rick', 'Bill', 'John'];
let initObj ={}
function reducerFn(acc,name,index,arr)
{   
    // if(!acc[name]) acc[name]++;
    // else acc[name]++;
    // return acc;

    if(!acc[name]) acc[name] = 0;
    acc[name]++;
    return acc;
}

const r = names.reduce(reducerFn,initObj);