function square(n)
{
    return (n*n);
}
function cube(n)
{
    return (n*n*n);
}
function sumOfSomething(a,b,fn)
{
    let val1=fn(a);
    let val2=fn(b);
    return (val1+val2);
}
let sum1=sumOfSomething(2,1,square);
console.log(sum1);
let sum2=sumOfSomething(2,1,cube);
console.log(sum2);

//anonymous function
let sum3=sumOfSomething(2,1,(n)=>{ //function(n){}
    return (n*n*n*n);
});
console.log(sum3);

