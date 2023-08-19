// - จงเขียนฟังก์ชัน deleteTask(id) เพื่อลบ element ใน tasks ที่มี property ชื่อ id เท่ากับ id 
// - execute deleteTask(1)

// ```js
// const tasks = [
//   { id: 1, name: 'Fishing' },
//   { id: 2, name: 'Shopping' },
//   { id: 3, name: 'Swimming' }
// ];

// ```

const tasks = [
  { id: 1, name: 'Fishing' },
  { id: 2, name: 'Shopping' },
  { id: 3, name: 'Swimming' }
];


const deleteTask = (id)=>
{
   let indexItem = tasks.findIndex((e)=> e.id===id);

   tasks.splice(indexItem,1);
}

deleteTask(2);
console.log(tasks);