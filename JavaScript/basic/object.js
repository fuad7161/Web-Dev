const singleTonObejct = new Object() // single ton object
const leteranObject = {}
// console.log(singleTonObejct);
// console.log(leteranObject);
leteranObject.id = '123abc';
leteranObject.name = 'Sunny'
leteranObject.isLoggedIn = false;

// console.log(leteranObject);

const regularUser = {
    email:"fuad@google.com",
    fullname:{
        firstName:"Fuad",
        lastName:"Hasan",
    }
}

// marge two object
// const ob1 = {1:"a" , 2:"b"}
// const ob2 = {3:"c" , 4:"d"}
// const ob3 = Object.assign(ob1 , ob2)
// console.log(ob3);

// apread operation to merge two object
// const ob1 = {1:"a" , 2:"b"}
// const ob2 = {3:"c" , 4:"d"}
// const ob3 = {...ob1 , ...ob2} 
// console.log(ob3);

const users = {
    1:{
        name: 'Fuad',
        email: 'Fuad@gmail.com',
    },
    2:{
        name: 'Fuad1',
        email: 'Fuad1@gmail.com',
    },
    3:{
        name: 'Fuad2',
        email: 'Fuad2@gmail.com',
    }
}

// console.log(users[1].email);

// see the keys and values and entires..
// console.log(Object.keys(leteranObject));
// console.log(Object.values(leteranObject));
// console.log(Object.entries(leteranObject));


// check the key exist or not..
// console.log(leteranObject.hasOwnProperty("isLoggedIn"));

const course = {
    courseName:"Js in hindi",
    price:"999",
    courseInstructure:"Hidesh",
}

// object destructuring... to reduce repeted call...
const {courseInstructure: instructor} = course
// console.log(instructor);

// api...

