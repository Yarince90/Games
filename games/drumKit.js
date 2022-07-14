//Detects button press
for(i = 0; i < document.querySelectorAll(".drum").length; i++){
   
    document.querySelectorAll("button")[i].addEventListener("click", function (){
        let buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}
//Detects keyboard press
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

//Plays sounds
function makeSound(key){
    switch (key) {
    case "w":
        let crash = new Audio("sounds/crash.mp3");
        crash.play();           
    break;
            
    case "a":
        let kickBass = new Audio("sounds/kick-bass.mp3");
        kickBass.play();           
    break;

    case "s":
        let snare = new Audio("sounds/snare.mp3");
        snare.play();           
    break;
         
    case "d":
        let tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();           
    break;

    case "j":
        let tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();           
    break;

    case "k":
        let tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();           
    break;

    case "l":
        let tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();           
    break;

    default:
        console.log("Error Playing Sound");
    break;
    }   
}

function buttonAnimation(currentKey){
    //Adds "Pressed"  class from CSS to button being pressed
    activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    
    //Removes "Pressed"  class from CSS from button being pressed after .1 second
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}