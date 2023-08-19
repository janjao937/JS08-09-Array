/*
- จงเขียนฟังก์ชัน updateTask(id, newName) เพื่อแก้ไขค่า element ใน tasks ที่มี property ชื่อ id เท่ากับ id โดยแก้ไข name ให้มีค่าเป็น newName
- execute updateTask(2, 'Travelling')

```js
const tasks = [
  { id: 1, name: 'Fishing' },
  { id: 2, name: 'Shopping' },
  { id: 3, name: 'Swimming' }
];

// const obj = { oldKey: 'value' };

// obj['newKey'] = obj['oldKey'];
// delete obj['oldKey'];

```*/
const tasks = [
    { id: 1, name: 'Fishing' },
    { id: 2, name: 'Shopping' },
    { id: 3, name: 'Swimming' }
  ];

  const updateTask = (id, newName) => {
    const foundedIndex = tasks.findIndex(obj => obj.id === id);
    if(foundedIndex != -1){
        // tasks[foundedIndex].name = newName;
        const newTodo = Object.assign({}, tasks[foundedIndex]);
        newTodo.name = newName;
        tasks.splice(foundedIndex, 1, newTodo);
    };
};


updateTask(2, "Travelling");
console.log(tasks); //-1