
////Declaration = ประกาศ
const fruits = [10];
//Array Literal
const frirnds = ["Money","Non","PeakPoon","Fon"];
//Array Constructor
const language = new Array();
const subject = new Array(10);


////Access,Modify,Add,Delete

//Modify
language[0] = "Thai";
language[1] = "English";
language[2] = "Chiness";

language[language.length] = "Cameroon";

//Get
for(let i in frirnds)
{
    console.log(`My friend ${i} name is ` + frirnds[i]);

}

console.log(language[-1]);//undifined
language[-1] = "Home";//can assing at index -1 //แต่จะ length จะไม่เพิ่ม
console.log(language[-1]);//Home
console.log(language.length);

//forEach
language.forEach(e => 
{
    console.log(e);
});

//Delete
delete language[-1];
console.log(language[-1]);


////Array Property

console.log(new Array().length);
console.log(language.length);
console.log(frirnds.length);
console.log(subject.length);

////Array Methods

//Method Create element
const pets = ["banana","spider","elephant"]

//push(...) add item | return index ปัจจุบัน 
pets.push("Prayut");//4
pets.push("dog","cat");
pets.push("crop","rat","ant","termite","mite");

//unshift() add item | return index ปัจจุบัน   //คล้าย push() แต่ต่อข้างหน้า   //จะช้าตอน array ยาว
pets.unshift("melon","ice","human","neonitle");

//pop() get item | return Item by index
pets.pop(4);//4


//shift() get item |return Item หน้าสุดแล้วเอาออก
console.log(pets.shift());   

//*mutable มาจาก mutant
//Immutable = ไม่เปลี่ยนแปลงค่า//จะดปลี่ยนต้องเขียนทับ
//Mutable = เปลี่ยนแปลงค่าได้


