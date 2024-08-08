// stone , paper and scissors game 
function genranint(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return ( Math.floor(Math.random() * (max-min+1) + min ));
}
function rematch(){
    
    let i = confirm("Wanna play again ?");
    if (i){
        SPS();
     }
}
function SPS(){
    alert("Stone-Paper-Scissors ....");
    let com = parseInt(genranint(1, 3));
    let usr = parseInt(prompt("enter 1.Stone / 2.Paper / 3.Scissors"));
    if( com == 1){
        if (usr == 1){
            alert(" we both chose stone...tie...rematch...");
            rematch();
        }
        else if(usr == 2){
            alert("u won ... i chose stone...")
            rematch();
        }
        else if(usr == 3){
            alert("u lose ... i chose stone");
            rematch();
        }
    }
    else if(com == 2){
        if(usr == 1){
            alert("u lose ... i chose paper");
            rematch();
        }
        else if(usr == 2){
            alert(" we both chose paper...tie...rematch...");
            rematch();
        }
        else if(usr == 3){
            alert("u won ... i chose paper");
            rematch();
        }
    }
    else if(com == 3){
        if(usr == 1){
            alert("u won , i chose scissors");
            rematch();
        }
        else if(usr == 2){
            alert("u lose ... i chose scissors");
            rematch();
        }
        else if(usr == 3){
            alert(" we both chose scissors...tie...rematch...");
            rematch();
        }
    }
}
SPS();
            
        
            
            
            
        
    
