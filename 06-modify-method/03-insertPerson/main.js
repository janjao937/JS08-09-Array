/*ให้เขียนโค้ดเพื่อลบ Jay ออกและใส่ Jack และ Joe เข้าไปแทน

```js
const person = ['John', 'Jay', 'Jim', 'Jame'];
```*/

const person = ['John', 'Jay', 'Jim', 'Jame'];

let r = person.splice(1,1,"Jack","Joe");
console.log(r);
console.log(person);

