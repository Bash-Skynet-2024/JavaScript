// sorting array in ascending order 
// the sort function only sorts according to first digit on  number
// so we make a function that compares by difference to check negative
// and insert it in sort
let num = [551,22,3,14,5,6,7,8,229];
function sortasc(a, b){
    return a - b ;
}
num.sort(sortasc);
console.log(num);
