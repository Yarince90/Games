function rollDice(key){
        if(key === "Space"){
        //generates a random number from 1 - 6
        function numberGenerator(){
            return Math.floor(Math.random() * 6) + 1;
        }
        //Assign random number to 2 variables ( 1 for each dice )
        let randomNumber1 = numberGenerator();
        let randomNumber2 = numberGenerator();

        //Replaces dice image according to number rolled
        document.querySelector(".img1").setAttribute("src", "/images/dice" + randomNumber1 + ".png");
        document.querySelector(".img2").setAttribute("src", "/images/dice" + randomNumber2 + ".png");

        //Generates custom message for whoever wins the game
        if(randomNumber1 === randomNumber2){
            document.querySelector("h1").textContent = "🚩 It's a Draw!";
        }
        else if(randomNumber1 > randomNumber2){
            document.querySelector("h1").textContent = "🚩 Player 1 Wins! :)";
        }
        else{
            document.querySelector("h1").textContent = "🚩 Player 2 Wins! :)";
        }
    }
}

//Detects click
document.addEventListener("keydown", function(event){
    rollDice(event.code);
});