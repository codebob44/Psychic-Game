


//define arrays for possible letter choices and possible number of guesses.
var options=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesdLetters = [];
var eachofLetters = null;



// Sets the variable equal to a random choice from the options array.
var computerGuess = options[Math.floor(Math.random() * options.length)];

function countGuessesLeft() {
	document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
}

function forUserGuesses() {
	document.querySelector("#picks").innerHTML = "Your Guesses so far: " + guessesdLetters.join(' ');
}

countGuessesLeft();

var restart = function() {
	guessesLeft = 9;
	guessesdLetters = [];
}

// When the user presses a key run the following: 
document.onkeyup = function(event) {
	
	guessesLeft--;
	
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	guessesdLetters.push(userGuess);
	countGuessesLeft();
	forUserGuesses();

	if (userGuess === computerGuess){
		wins++;
		alert("You are Psychic!");
		document.querySelector("#wins").innerHTML = "Wins: " + wins;
		restart();
	} 
	else if (guessesLeft === 0  ) {
		losses++;
		alert("Keep your day job.  Try again?");
		document.querySelector("#lose").innerHTML = "Loses: " + losses;
		restart();
	}
  };















