function bhumiAsync()
{
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("hey promise fulfilled");
        },1000)
    })
}
async function main() {
    let ret= await bhumiAsync();
    console.log(ret);
}
main()