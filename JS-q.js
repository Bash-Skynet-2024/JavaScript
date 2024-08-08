// browser
// input age from user and check if he can drive 
// ask user if he wants to input again
// give error for negative age
let runagain = true;

while(runagain) {
    // input age and check if can drive
    let age = parseInt(prompt("Enter age: "));
    if(age<0){
        alert("enter valid age ");
        console.error("enter valid age ");
        break;
    }
    function canDrive(age) {
        return age >= 18;
    }
    
    if(canDrive(age)) {
        alert("Yes, you can drive.");
    } else {
        alert("No, you cannot drive.");
    }
    
    runagain = confirm("Enquire again?");
}
