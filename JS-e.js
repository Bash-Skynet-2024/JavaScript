// find average 
// function to find average of elements of array
function avg(arr, n){
    let sum = 0;
    for(let i =0; i<n;i++){
        sum += arr[i];
    }
    let average = sum / n ;
    console.log("Average of given numbers is : "+average);
}
let n = parseInt(prompt("Enter number of integers u want to find average of : "));
let arr=[];
for(let i = 0 ; i<n ;i++){
    arr[i] = parseInt(prompt("Enter number : "));
}
avg(arr, n);
