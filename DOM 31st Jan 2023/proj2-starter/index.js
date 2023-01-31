  // Define the audio files
  var audioFiles = {
    w: new Audio("sounds/tom-1.mp3"),
    a: new Audio("sounds/tom-2.mp3"),
    s: new Audio("sounds/tom-3.mp3"),
    d: new Audio("sounds/tom-4.mp3"),
    j: new Audio("sounds/snare.mp3"),
    k: new Audio("sounds/crash.mp3"),
    l: new Audio("sounds/kick-bass.mp3")
  };

  // Get all the drum buttons
  var drumButtons = document.querySelectorAll(".drum");

  // Add an event listener to each button
  drumButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      // Get the letter of the button
      var letter = this.textContent;

      // Play the corresponding audio file
      audioFiles[letter].currentTime = 0;
      audioFiles[letter].play();
    });
  });