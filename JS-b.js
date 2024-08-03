//program to print marks of students from object using for loop
let data = {
    "rohan" : 78,
    "rahul" : 80,
    "priya" : 75,
    "ola"   : 90
};
for(let a in data){
    console.log(a+" has scored "+data[a]+" marks");
}
