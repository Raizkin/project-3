 const dino = document.getElementById("avatar");
    const cactus = document.getElementById("cactus");

    let isJumping = false;

    
    function jump() {
      if (isJumping) return;
      isJumping = true;

      let position = 0;
      let upInterval = setInterval(() => {
        if (position >= 120) {
          clearInterval(upInterval);

          let downInterval = setInterval(() => {
            if (position <= 0) {
              clearInterval(downInterval);
              isJumping = false;
            } else {
              position -= 5;
              dino.style.bottom = position + "px";
            }
          }, 20);

        } else {
          position += 5;
          dino.style.bottom = position + "px";
        }
      }, 20);
    }

    document.addEventListener("keydown", (event) => {
      if (event.code === "Space") {
        jump();
      }
    });

   
    function moveCactus() {
      let cactusPosition = 800;
      let timerId = setInterval(() => {
        if (cactusPosition < -60) {
          cactusPosition = 800;
        }

        cactusPosition -= 5;
        cactus.style.left = cactusPosition + "px";

    
        let dinoBottom = parseInt(window.getComputedStyle(dino).bottom);
        if (cactusPosition < 100 && cactusPosition > 50 && dinoBottom < 50) {
          alert("Game Over!");
          clearInterval(timerId);
        }
      }, 20);
    }

    moveCactus();