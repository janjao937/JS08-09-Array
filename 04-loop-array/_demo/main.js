//#region Array Loop

const testArray1=["Banana","stawberry","Human","Dog"];


testArray1.forEach((e) => 
{
    console.log(e);//item
});
testArray1.forEach((e,i) => 
{
    console.log(e);//item
    console.log(i);//index
});
testArray1.forEach((e,i,c) => 
{
    console.log(e);//item
    console.log(i);//index
    console.log(c);//array
});



for(let i = 0;i< testArray1.length;i++)
{
    console.log(testArray1[i]);
}

for(let j in testArray1)
{
    console.log(testArray1[j]);
}

for(let e of testArray1)
{
    console.log(e);
}
//#endregion

//#region  รับ function ใน paramiter = callback
function ShowAndAdd(x,y,showFn)
{
    let r = x+y;
    showFn(r);
    return r;
}
const show=(e)=>//iterate function //paramiter ตัวท้าจะเป็น array ตัวที่ใช้ show(...,e[])
{
    console.log(e);
};


ShowAndAdd(5,6,show);//11

//#endregion

//higher order function
function Hof(callback)
{
    for(let i = 0 ; i< 10;i++)
    {
        callback();
    }
}

Hof(a =>
    {console.log("Hi");
});

