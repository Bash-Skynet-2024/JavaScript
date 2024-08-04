// filter nums div by 10
let arr=[1,23,45,20,30,45,70];
let arr1= arr.filter(
    (value) =>{
        if(value % 10 == 0){
            return value;
        }
    }
    )
console.log(arr1);
