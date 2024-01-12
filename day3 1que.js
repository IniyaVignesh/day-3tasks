let obj1 = {name: "person 1",age:5};
let obj2 = {age:5 , name:"person 1"};

let prop1 = Object.getOwnPropertyNames(obj1);
let prop2 = Object.getOwnPropertyNames(obj2);


for (let i = 0; i <obj1.length; i++) {
    let obj = obj1[i];
    
    if (obj1[prop] !== obj2[prop]) {
        console.log("false");
    }
  }
  console.log("true");



   