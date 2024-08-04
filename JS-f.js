// program to find numbers
let sentence = "During your recent visit, you bought 6 oranges at $1.99 per pound, 4 bags of flour at $3.45 each, and 3 bottles of olive oil priced at $7.89 each. You also picked up 12 cans of soup at $1.29 each, 2 boxes of cereal for $4.99 each, and 1 large watermelon for $5.50. The subtotal comes to $52.83, and after applying a 10% discount, the final total is $47.55.";
let num =['0','1','2','3','4','5','6','7','8','9','.'];
let res = [];
let b =0;
for(let i=0 ; i < sentence.length ; i++ ){
    if(num.includes(sentence[i])){
        res[b] = sentence[i];
        b++ ;
        if(num.includes(sentence[i+1])){
            continue;
        }else{
            res[b] = "  \n";
            b++;
        }
    }
}
let Res = res.join('');
console.log(Res);
