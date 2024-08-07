//1. asynchronous function
/*
console.log("hii")
function sum(n)
{   
    let ans=0;
    for(let i=1;i<=n;i++)
        ans+=i;
    return ans;
}
function sumof100()
{
    console.log(sum(100));
}
setTimeout(sumof100,1000); // 1s
console.log("hello")
*/

//NOTE: real use of callback-asyn function

//2. read from file -async function
/*
const fs=require("fs");
fs.readFile("a.txt","utf-8",(err,data)=>{
    console.log(data);
})
console.log("this is the msg");
*/


