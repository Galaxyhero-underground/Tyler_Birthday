// detecting buttonpress

var i = document.querySelectorAll(".drum");
for (var j = 0; j < i.length; j++) {
    document.querySelectorAll(".drum")[j].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnnimation(buttonInnerHTML);
    });
}

// detecting keyboardpress
document.addEventListener("keydown", function() {

    makeSound(event.key);
    buttonAnnimation(event.key);
});

function makeSound(key) {
    switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;

    case "t":
        var birthday = new Audio("sounds/Tyler.mp3");
        birthday.play();
        break;

    default:
      console.log(key);
}
}

function buttonAnnimation (currentKey) {
      var activeButton = document.querySelector("."+currentKey);
      document.querySelector("."+currentKey).classList.add("pressed");
      setTimeout(function() {
        activeButton.classList.remove("pressed");
      },100);
}


// function handleClick() {
//   var audio=new Audio("sounds/tom-1.mp3");
//   audio.play();
// }

// document.querySelector("button")[j].addEventListener("click",function () {
//   alert("I got clicked!");
// });
// this line does the same thing as the previous six lines.
