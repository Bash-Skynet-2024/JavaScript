// array of square of given numbers
let arr =[];
let n = parseInt(prompt("enter size of array : "));
let ele;
for(let i=0;i<n;i++){
    ele=parseInt(prompt("enter element : "));
    arr.push(ele);
}
let sqr = arr.map(
    (value) =>{
        return value*value;
    }
    )
console.log(sqr);
