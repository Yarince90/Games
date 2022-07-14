    let generatedPattern = [];
    let userClickedPattern = [];
    let count = 0;

    //Generates next sequence 
    function nextSequence(){
        let chosenColor;
        let randomNumber = Math.floor(Math.random() * 4);
        count++;
        if(randomNumber === 0){
            chosenColor = "red";
        }
        else if(randomNumber === 1){
            chosenColor = "blue";
        }
        else if(randomNumber === 2){
            chosenColor = "green";
        }
        else if(randomNumber === 3){
            chosenColor = "yellow"
        }
        else{
            chosenColor = "Error choosing color";
        }

        userClickedPattern = [];

        setTimeout(function(){
            $("#" + chosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
        makeSound(chosenColor);
        },500)
        

        return chosenColor;
    }

    //Determines button clicked and adds animation and sound to it
    $(".styledBtn").click(function(e){
        makeSound(e.target.id);
        buttonAnimation(e.target.id);
        
        if(count > 0){
        userClickedPattern.push(e.target.id);
        
        levelUp(userClickedPattern.length);
        }

    })

    //Start game by pressing Space bar
    $(document).keydown(function(e){
        if(e.code === "Space" && count === 0){
            $("#level-title").text("Level " + count);
            generatedPattern.push(nextSequence());
        }
    })
    //Creates sound object for pressed button
    function makeSound(key){
        switch(key){
            case "red":
                let red = new Audio("sounds/red.mp3");
                red.play();
            break;

            case "blue":
                let blue = new Audio("sounds/blue.mp3");
                blue.play();
            break;

            case "green":
                let green = new Audio("sounds/green.mp3");
                green.play();
            break;

            case "yellow":
                let yellow = new Audio("sounds/yellow.mp3");
                yellow.play();
            break;

            default:
                let defaultSound = new Audio ("sound/wrong.mp3");
                defaultSound.play();
        }
    }

    //Creates animation for pressed button
    function buttonAnimation(Key){
        //Adds "Pressed class from CSS for animation"
        activeButton = $("#" + Key);
        activeButton.addClass("pressed");

        //Removes "Pressed class after .1 second"
        setTimeout(function(){
            activeButton.removeClass("pressed");
        }, 100);
    }

    //Check if user clicked array matched generated Array
    function levelUp(input){
        
        if(generatedPattern.length === input){
            
            if(checkAnswer()){
                $("#level-title").text("Level " + count);
                generatedPattern[count] = nextSequence();                    
            }
            else{
                $("#level-title").text("Game Over :(");
                count = 0;
                userClickedPattern = [];
                generatedPattern = [];
                
                let wrong = new Audio("sounds/wrong.mp3");
                wrong.play();
                
                $("body").addClass("game-over");
                setTimeout(function(){
                    $("body").removeClass("game-over");
                    $("#level-title").text("Press The Space bar to Start");
                }, 2000);
            }
        }
    }
    //Compares user input and generated impute returns true or false if matched or missmatched
    function checkAnswer(){
        let result = false;
    
        for(let i = 0; i < userClickedPattern.length; i++){
        if(generatedPattern[i] === userClickedPattern[i]){
            result = true;
        }
        else{
            result = false;
        }
        }
        return result;
    }