/*
Game function:
--------------
- player must guess a number between a min and max
- player gets a certain amount of guess
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- let player choose to play again
*/

let min = 1,
  max = 10,
  winningNum = 2,
  guesseLeft = 3;

//ui elements

const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input");
message = document.querySelector(".message");
//Assign ui min and max

minNum.textContent = min;
maxNum.textContent = max;

// listen for guess
guessBtn.addEventListener("click", function (e) {
  let guess = parseInt(guessInput.value);
  console.log(guess);
  // validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  }
  //Check if Won
  if (guess === winningNum) {
    // game over won

    //disable input
    guessInput.disabled = true;
    //change border green
    guessInput.style.border = "1px solid green";
    //set message
    setMessage(`${winningNum} is correct YOU WIN!`, "green");
  } else {
    //WRONG NUMBER
    guesseLeft -= 1;
    if (guesseLeft === 0) {
      //game over - lost

      //disable input
      guessInput.disabled = true;
      //change border green
      guessInput.style.border = "1px solid red";
      //set message
      setMessage(
        `Game Over, You lost. The correct number was ${winningNum}`,
        "red"
      );
    } else {
      //game continue - answer wrong
      //change border left
      guessInput.style.border = "1px solid red";
      //clear the input
      guessInput.value = "";
      //Tell user its the wrong number
      setMessage(`${guess} is not correct!, ${guesseLeft} guesses left`, "red");
    }
  }

  e.preventDefault();
});

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
