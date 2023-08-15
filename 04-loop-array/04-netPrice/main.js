/*- จงสร้างตัวแปร summary โดยใช้ค่าจากตัวแปร sales
- netPrice = price x discount (ถ้าไม่มี discount ให้ถือว่า netPrice = price)


```js
const sales = [
  { price: 1000, discount: 0.1 },
  { price: 500, discount: 0.05 },
  { price: 100 }
];

const summary = [
  { netPrice: 900 }, 
  { netPrice: 475 },
  { netPrice: 100 }
];

- จงสร้างตัวแปร summary โดยใช้ค่าจากตัวแปร sales
- netPrice = price x discount (ถ้าไม่มี discount ให้ถือว่า netPrice = price)


```*/

//out put
// const summary = [
  //   { netPrice: 900 }, 
  //   { netPrice: 475 },
  //   { netPrice: 100 },
  // ];
  
  /*solution
  console.log(summary[0]);
  sales[0]["sales"] = sales[0].price* sales[0].discount;
  console.log( sales[0]);
  */
 
 const sales = [
     { price: 1000, discount: 0.1 },
     { price: 500, discount: 0.05 },
     { price: 100 }
   ];
   
  const r =[];
  for(let i = 0; i< sales.length;i++)
  {
    let discount = sales[i]?.discount?sales[i].discount:1;

    if(!sales[i]?.discount)
    {
      r[i] ={ netPrice:sales[i].price};
      continue; 
    }
    //Discount
    r[i] = {netPrice:sales[i].price*(1-discount)};
  }
  console.log(r);




//TeacherCode//
const tR = [];

sales.forEach((e)=>{;

  let newValue = e.price * (1-(e.discount|| 0));
  tR.push({newValue});//shot hand
});
console.log(tR);