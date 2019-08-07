// Group project one
// Word Guess game
// wordGuess.js


// Game Variables
var numOfWins = 0;
var currentWord = [];
var wordList = ["cat","dog","fish","mouse","cow","owl","rabbit","can"];
var randomWord = "";
var guessRemaining = 20;
var wrongGuesses = [];

// User Variables
var userGuess = "";
var letter = "";

// Reset the word list
function resetList(){
  wordList = ["cat","dog","fish","mouse","cow","owl","rabbit","can"];
}

// Select a random word form wordList and store into the currentWord.
// Delete the seclected word from list so it doesn't repeat.

function getWord(){
  randomWord =  wordList[Math.floor(Math.random()*wordList.length)];
  let i = wordList.indexOf(randomWord);
  console.log("randomWord: " + randomWord);
  wordList.splice(i,1)
  if (wordList.length == 0){
    resetList();
  }
// Store the randomWord into currentWord variable.
currentWord.length = randomWord.length;
for(let i =0;i<currentWord.length;i++){
  currentWord[i] = "_";
}
console.log("FUNCTION GETWORD: " + randomWord +" "+ currentWord);
}

// When the user presses a letter, test the letter.
document.onkeyup = function(event){
  let found = false
  letter = event.key;
  // Loop through the random word and look for guessed letter.
  for(let i = 0;i<randomWord.length;i++){
    if(letter === randomWord[i]){
      //Check the letter and store in currentWord.
      currentWord[i] = letter;
      found = true;
      wrongGuesses.push(letter);
    }
    else if(i === randomWord.length-1 && found === false) {
      guessRemaining--;
      console.log(letter + " was not part of the word. You have " + guessRemaining + " remaining.")
      wrongGuesses.push(letter);
      if(guessRemaining === 0){
        console.log("Sorry out of guesses! The word was: " + randomWord);
        getWord();
      }
    }

    
  }
  let stringConvert = "";
  stringConvert = currentWord.join("");
  console.log("The letter you entered was: " + letter + " the current word is: " + stringConvert+ " the random word is: " + randomWord);

  // If the word is solved get a new random word.
  if(stringConvert == randomWord){
    console.log("You Win!")
    numOfWins++;
    winsContainer = numOfWins.stringConvert;
    getWord();
  }

}


// Play Game
function playGame(){
  resetGame();
  getWord();
  
  }
  
  
  
  
  // call functions
  
  getWord();