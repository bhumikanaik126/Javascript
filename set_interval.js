/*
setInterval(() => {
    console.log("Bhumika")
}, 1000);
*/

//JSON
/*
const user={
        name:"bhumika",
        age:20
};
console.log(user["name"]);
console.log(user.age);

const s=JSON.stringify(user);
console.log(s);
//console.log(s["name"]); // we cant do this...most of the times input is string , so we need to parse 
const user_r=JSON.parse(s);
console.log(user_r["name"],user_r.age);

user_r.age=21;
console.log(user);//user_r was parsed from string so no chages
console.log(user_r);
*/

//math
console.log(Math.random(),Math.pow(2,3),Math.sqrt(36));
console.log(Math.floor(2.6),Math.ceil(4.2),Math.max(33,54,82),Math.min(34,6,56));

//object methods
const obj={
    name:"xyz",
    place:"abc",
    age:34
}
console.log(Object.keys(obj));//keys in an array
console.log(Object.values(obj));//values in an array
console.log(Object.entries(obj));// array where every entry in an array(key-value)
obj2=Object.assign({},obj,{newProperty:"new Value"});
console.log(obj2);
