
      const listRef = document.querySelector(".paper__list");
        const btnOpRef = document.querySelector(".paper__listbtn");
        
        const stoneBtnRef = document.querySelector(".stone");
        const scissorsBtnRef = document.querySelector(".scissors");
        const paperBtnRef = document.querySelector(".paperop");
        const buttonRef = document.querySelector(".paper__button");

        const textRef = document.querySelector(".paper__text");
        const computerScore = document.querySelector(".computerscore");
        const userScore = document.querySelector(".userscore");

        const spanRef = document.querySelector(".paper__btnspan")

        const userChoices = [stoneBtnRef, scissorsBtnRef, paperBtnRef];
        const computerChoices = ["stone", "scissors", "paper"];

        let userChoice = null;
        let playerScore = 0;
        let compScore = 0;
    

         userChoices.forEach(choice => {
            choice.addEventListener("click", (event) => {
                userChoice = event.currentTarget;
                console.log(userChoice);
            })
            });

            
            buttonRef.addEventListener("click", playGame);

            
            function playGame() {

        const randomOption = Math.floor(Math.random()*3);
        const computerChoice = computerChoices[randomOption];
        console.log(computerChoice);

        spanRef.textContent = computerChoice;

        if(userChoice === stoneBtnRef) {
            if(computerChoice === "stone") {
                textRef.textContent = "Нічия!";
                textRef.style.color = "grey";
            } else if(computerChoice === "scissors") {
                textRef.textContent = "Ви виграли раунд!";
                textRef.style.color = "green";
                playerScore += 1;
                userScore.textContent = `Ви - ${playerScore}`;
            } else if(computerChoice === "paper") {
                textRef.textContent = "Комп’ютер виграв раунд!";
                textRef.style.color = "red";
                compScore += 1;
                computerScore.textContent = `Комп’ютер - ${compScore}`;
            }
        }  else if(userChoice === scissorsBtnRef) {
            if(computerChoice === "stone") {
                textRef.textContent = "Комп’ютер виграв раунд!";
                textRef.style.color = "red";
                compScore += 1;
                computerScore.textContent = `Комп’ютер - ${compScore}`;
            } else if(computerChoice === "scissors") {
                textRef.textContent = "Нічия!";
                textRef.style.color = "grey";
            } else if(computerChoice === "paper") {
                textRef.textContent = "Ви виграли раунд!";
                textRef.style.color = "green";
                playerScore += 1;
                userScore.textContent = `Ви - ${playerScore}`;
            }
        } else if(userChoice === paperBtnRef) {
            if(computerChoice === "stone") {
                textRef.textContent = "Ви виграли раунд!";
                textRef.style.color = "green";
                playerScore += 1;
                userScore.textContent = `Ви - ${playerScore}`;
            } else if(computerChoice === "scissors") {
                textRef.textContent = "Комп’ютер виграв раунд!";
                textRef.style.color = "red";
                compScore += 1;
                computerScore.textContent = `Комп’ютер - ${compScore}`;
            } else if(computerChoice === "paper") {
                textRef.textContent = "Нічия!";
                textRef.style.color = "grey";
            }
        }
            }