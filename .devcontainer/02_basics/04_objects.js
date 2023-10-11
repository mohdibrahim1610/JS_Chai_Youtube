// # how to create a object that can be used in futher declaration.
const ObjCheck= new Object()

ObjCheck.name="MOhdIBrahim";
ObjCheck.email="Mohd@gmail.com";
ObjCheck.Age=28
// console.log(ObjCheck.name);
// console.log(ObjCheck.email);
// console.log(ObjCheck.Age);

/// Json or general object declartion.
let genlObj={
name:"IBrhaim",
age:50,
email:"MohdIBrahim@gmail.com"
}
let genlObj2={
name:"Joen",
age:23,
email:"Joen@gmail.com"
}
// console.log(genlObj.name);
// console.log(genlObj.age);
// console.log(genlObj.email);



let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    ssn: '123-456-2356'
};


let job = {
    jobTitle: 'JavaScript Developer',
    location: 'USA'
};

let employee = {
    ...person,
    ...job,
    ...genlObj
};

console.log(employee);



/// #1 Object cration 
let Objcreation= {
    name:"IBrhaim",
    age:50,
    email:"MohdIBrahim@gmail.com"
};
//#2 JSON it will look like a Object but it will have both side string 
// this is how api will fetch data in the form of JSON 
// {
//     "Name": "Mohd IBrahim",
//     "age":28,
//     "Course": "JS"
// }
/// it may also get data in Array 

// [
//     "Name": "Mohd IBrahim",
//     //     "age":28,
//     //     "Course": "JS"
// ]


