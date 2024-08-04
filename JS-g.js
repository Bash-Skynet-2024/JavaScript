// change charector of string
let name = "JavaScript";
let arr = [];
for (let i =0 ; i < name.length ;i++){
    arr[i] = name[i];
}
arr[4] = 'T';
let Name = arr.join('');
console.log(Name);
