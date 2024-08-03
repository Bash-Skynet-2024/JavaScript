//program to print marks of students from object using for loop
let data = {
    "rohan" : 78,
    "rahul" : 80,
    "priya" : 75,
    "ola"   : 90
};
for(let i =0 ; i < Object.keys(data).length ; i++){
    console.log(Object.keys(data)[i]+" has scored "+data[Object.keys(data)[i]]+ " marks");
}
