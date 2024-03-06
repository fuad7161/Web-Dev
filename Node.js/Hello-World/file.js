const fs = require("fs");

// Sync... Blocking request
fs.writeFileSync('./text.txt' , 'hello world');

// Async... Non Blocking request
fs.writeFile('./text.txt' , 'hello world1' , (err)=>{});

// Sync Read operation...
const result = fs.readFileSync("./contacts.txt" , "utf-8");
console.log(result)


// non sync file read..
fs.readFile("./contacts.txt" , "utf-8" , (err,res)=>{
    if(err){
        console.log("error",err);
    }else{
        console.log(res);
    }
})

fs.appendFileSync("./text.txt",new Date().getDate().toLocaleString());

fs.cpSync("./text.txt" , "./copy.txt");

fs.unlinkSync('./copy.txt');

console.log(fs.statSync('./text.txt'));

const os = require("os");
console.log(os.cpus().length);