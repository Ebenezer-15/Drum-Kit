
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        var buttonInnerHtml = this.innerHTML;
        console.log(this);
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);

    });
}

document.addEventListener("keypress", function(event){
    makeSound(event.key);

    buttonAnimation(event.key);
})



function makeSound(key) {
  
    switch (key) {
        case "w":
            var drum1 = new Audio('sounds/snare.mp3');
            drum1.play();
            break;
    
            case "a":
                var drum2 = new Audio ("sounds/kick-bass.mp3");
                drum2.play();
                break;

            case "s":
                var drum3 = new Audio ('sounds/crash.mp3');
                drum3.play();
                break;

            case "d":
                var drum4 = new Audio('sounds/tom-1.mp3');
                drum4.play();
                break;
                
            case "j":
                var drum5 = new Audio ('sounds/tom-2.mp3');
                drum5.play();
                break;

            case "k":
                var drum6 = new Audio('sounds/tom-3.mp3');
                drum6.play();
                break;

            case "l":
                var drum7 = new Audio('sounds/tom-4.mp3');
                drum7.play();
                break;                
        default:console.log(key);
            break;
    }
}

function buttonAnimation (currentKey){
    var activeButton = document.querySelector("." + currentKey);

    if(activeButton !== null){
        activeButton.classList.add("pressed"); 
        setTimeout(function() {
            activeButton.classList.remove("pressed");
        }, 100); 
    }

}
// document.addEventListener("keypress", function(){
//      alert("A key was pressed!");
// });

