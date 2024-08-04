// ways to print elements of array
let arr =[ 1,2,3,4,5,'-----'];
// standard for loop
for(let i=0; i<arr.length ; i++){
    console.log(arr[i]);
}
// forEach method
arr.forEach(
    (element) => {
        console.log(element);
    }
    );
// of method - of returns object-value
for(item of arr){
    console.log(item);
}
//in method - in returns index of value
for(i in arr){
    console.log(arr[i]);
}
