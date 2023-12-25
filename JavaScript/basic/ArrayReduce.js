const mynums = [1,2,3]
// const mytotal = mynums.reduce(function(acc,curval){
//     console.log(`acc: ${acc} and curval: ${curval}`);
//     return acc + curval
// },0)

const mytotal = mynums.reduce((acc, curr)=> acc+curr,0)

console.log(mytotal);