// try , throw , catch , finally 
// error handling 
function addnum(a,  b){
    try { 
        if ( b == 0 ){
            throw new Error("division by 0 is not possible ");
        }
        console.log(a/b);
}catch(Error){
    console.log(`Error : ${Error.message}`);
} finally {
    console.log(" execution completed");
}
}
addnum(10,2);
addnum(5,0);
