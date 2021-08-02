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
    if (event.key == 1){
      sounds[0].currentTime = 0;
      sounds[0].play();
    }
    else if (event.key == 2){
      sounds[1].currentTime = 0;
      sounds[1].play();
    }
    else if (event.key == 3){
      sounds[2].currentTime = 0;
      sounds[2].play();
    }
    else if (event.key == 4){
      sounds[3].currentTime = 0;
      sounds[3].play();
    }
    else if (event.key == 5){
      sounds[4].currentTime = 0;
      sounds[4].play();
    }
    else if (event.key == 6){
      sounds[5].currentTime = 0;
      sounds[5].play();
    }
  });
});
