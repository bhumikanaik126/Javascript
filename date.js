//1
const currentDate=new Date(); //inbuilt global class
console.log(currentDate.getMonth()+1);
console.log(currentDate.getFullYear());
console.log(currentDate.getMinutes(),currentDate.getSeconds());
currentDate.setFullYear(2023);
console.log(currentDate.getFullYear());
const time=currentDate.getTime();
console.log(time);// time in milliseconds after 1970

//2
const beforeDate=new Date();
const beforeTime=beforeDate.getTime();

function sum(a,b)
{
    return a+b;
}
const s=sum(1,3);
console.log(s);

const afterDate=new Date();
const afterTime=afterDate.getTime();

console.log(afterTime-beforeTime); 


