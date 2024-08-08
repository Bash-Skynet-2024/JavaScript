// input age and check if can drive
let age = parseInt(prompt("enter age : "));
function candrive( age){
    return (age >= 18)?true:false ;
}
if(candrive(age)){
    alert("yes u can drive");
} else{
    alert("u cannot drive");
}
