const coding = ['fuad','imran','rony']

const myNum = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNum.filter((num)=>{
//     return num > 4
// })

const newNum = myNum
                .map((num) => num*10)
                .map((num) => num+1)
                .filter((num)=>num>=40)

console.log(newNum);
  
// coding.forEach(function (val , idx , arr){
//     console.log(val , idx , arr);   
// })

//using arrow funciton
// coding.forEach((item)=>{
//     console.log(item);
// })

function printme(item){
    console.log(item);
}
// other function
// coding.forEach(printme)

const myCoding = [
    {
        Language: 'Javascript',
        fileName: 'js',
    },
    {
        Language: 'Java',
        fileName: 'java',
    },
    {
        Language: 'Python',
        fileName: 'py',
    },
]
myCoding.forEach((item)=> {
    // console.log(item.Language);
})
