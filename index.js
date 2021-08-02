window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");

  pads.forEach((pad, index) => {
    pad.addEventListener("click", function() {
      sounds[index].currentTime = 0;
      sounds[index].play();
    });
  });
  document.addEventListener("keydown", function(event) {
    try {
      sounds[event.key-1].currentTime = 0;
      sounds[event.key-1].play();
    }
    catch(err) {
      console.log("Use 1 - 6, not any other to play. ");
    }
  });
});
