// playing the audio using the button click
for (let i = 0; i < 7; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {     // if we are not using anonymous functions here then we dont pass the paranthesis with the function name as it directly calls the when the line is executed by the compiler.

        var keyPressed = this.innerText;

        playAudio(keyPressed);
        
        buttonAnimation(keyPressed);
        
    });
}




// playing the audio using the keyboard 
document.addEventListener("keydown", function (event) {

    var keyPressed = event.key;

    playAudio(keyPressed);

    buttonAnimation(keyPressed);

});




// creating function for animating the button when clicked
function buttonAnimation(keyPressed) {
    var activeBtn = document.querySelector("." + keyPressed);
    activeBtn.classList.add("Pressed");

    setTimeout( function () {activeBtn.classList.remove("Pressed");}, 100);
}



// creating a func to play different audio on diffrent clicks and presses
function playAudio(keyPressed) {
    switch (keyPressed) {

        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        case "l":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        default: console.log(keyPressed);
    }
}