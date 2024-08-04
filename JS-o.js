// find factorial of  n natural number using reduce 
let arr =[];
let n = parseInt(prompt("enter num to find factorial : "));
let ele;
for(let i = 1;i<=n;i++){
    arr.push(parseInt(i));
}
let fact = 1;
let factnum = arr.reduce(
    (value1, value2) =>{
        return value1 * value2;
    }
)
console.log(factnum);
