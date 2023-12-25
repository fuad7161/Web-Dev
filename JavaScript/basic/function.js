function addTowNumber(num1, num2){
    return num1+num2
}

// console.log(addTowNumber(2,3));

function loggedInMassage(username){
    return `${username} just logged in`
}

// console.log(loggedInMassage('Fuad'));


function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(100,200,300));

const user = {
    name : "Fuadul",
    price : "10000",
}
function handelUser(Info){
    console.log(`User name is ${Info.name}. Price is ${Info.price}`);
}

// handelUser(user)

handelUser({name:"Fuadul",price:"10000"})
