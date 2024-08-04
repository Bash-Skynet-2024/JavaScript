// map method
// creates new array after operating on elements of previous array
// return 3 types of values 
let arr=[23,45,68];
let a = arr.map(
    (value, index, array) => {
        console.log(value+index, index, array);
    }
    )
// filter function
let a2 = arr.filter(
    (value) => {
        return value>50 ;
    }
    )
console.log(a2);
// reduce method 
let a3 = arr.reduce(
    (val1, val2) => {
        return val1 + val2 ;
    }
    )
console.log(a3);
