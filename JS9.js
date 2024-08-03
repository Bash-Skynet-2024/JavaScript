// object printing ibdividuallu
let data ={
    " aa" : 34,
    "bb": 45,
    "cc": 56,
    "dd": 67
};
for (let i in data){
    console.log("marks of "+i+" are "+ data[i]);
}
let arr =[ 1,2,3,4,5];
for(let i of arr){
    console.log(i);
}
// use 'in' for objects
// use 'of' for array
