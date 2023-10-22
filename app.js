
var randNum = Math.floor(Math.random() * 101);



var turns = 7;







function addition(){
    var num1 = document.querySelector("#one").value;
    var guess = Number(num1);

    if(turns == 1){
        document.querySelector("p").textContent = "You Lose \n Answer is " + randNum;
        
        document.querySelector("h1").textContent = "Refresh to Play Again";
        exit();
    }


   
        if(randNum == guess){
            document.querySelector("p").textContent = "You Won✌️";   
            document.querySelector("h1").textContent = "Refresh to Play Again";
            exit();
        }else if(guess>randNum){
                turns-=1;
                document.querySelector("p").textContent = "Too High ! ";
                document.querySelector("input").value = " ";
                document.querySelector("h3").textContent = "You have " + turns +  " turns left";
        }else{
            turns-=1;
            document.querySelector("p").textContent = "Too Low! ";
            document.querySelector("input").value = " ";
            document.querySelector("h3").textContent = "You have " + turns +  " turns left";
    
        }

       
        

}

document.querySelector("button").onclick = addition;








