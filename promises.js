const fs=require("fs");
function bhumiAsyncFunc()
{
    return new Promise(function(resolve){
        //async logic
        fs.readFile("a.txt","utf-8",function(err,data){
            resolve(data);
            //promise resolved
        })
    })
}
function onDone(d)
{
    console.log(d);
    console.log("Done and dusted");
}
bhumiAsyncFunc().then(onDone);
console.log("after");
let ans=0;
for(let i=0;i<=1000000000;i++)
{
   ans=ans+i;
}
console.log("hii")
// finishes sync execution and then resolved promises will be executed