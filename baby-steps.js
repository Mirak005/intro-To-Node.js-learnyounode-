
const test=(array)=> array.slice(2).map(x=>x*1).reduce((a,b)=>a+b);
console.log(test(process.argv));
test(process.argv);