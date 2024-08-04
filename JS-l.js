// keep adding number to array untill 0 is added
let arr=[];
let ele;
for(let i=0;i<100;i++){
    ele = parseInt(prompt("enter element ... enter 0 to quit : "));
    if(ele == 0){
        break;
    }else{
        arr.push(ele);
    }
}
console.log(arr);
