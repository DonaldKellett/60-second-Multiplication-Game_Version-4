/*
 * game.js
 * 60-second Multiplication Game (Version 4)
 * Copyright (c) Donald Leung.  All rights reserved.
 *
 * Updates:
 * 1. You can now choose the difficulty of the game according to your ability
 * 2. As of Version 3, you now press "Enter" instead of "Submit" to submit your answer - this reduces the time lag thus making it more convenient
 * 3. Yay!  The script for this game has finally exceeded 100 lines of code!  I feel like a real coder (although the majority of lines is dominated by empty lines or comments XD)!
 */

var timeInSeconds = 60;
var numOne,
	numTwo,
	answer,
	totalQuestions,
	questionsCorrect,
	playerAnswer,
	key,
	difficulty;

// Levels of difficulty
// 1. Novice
// 2. Easy
// 3. Normal (Default)
// 4. Hard
// 5. Expert

difficulty = 3;

function init() {
	if (difficulty === 1) {
		// Novice: 0x0 to 5x5
		numOne = Math.round(5 * Math.random());
		numTwo = Math.round(5 * Math.random());
	} else if (difficulty === 2) {
		// Easy: 0x0 to 7x7
		numOne = Math.round(7 * Math.random());
		numTwo = Math.round(7 * Math.random());
	} else if (difficulty === 3) {
		// Normal: 0x0 to 9x9
		numOne = Math.round(9 * Math.random());
		numTwo = Math.round(9 * Math.random());
	} else if (difficulty === 4) {
		// Hard: 5x5 to 12x12
		numOne = Math.round(7 * Math.random()) + 5;
		numTwo = Math.round(7 * Math.random()) + 5;
	} else {
		// Expert: 10x10 to 20x20
		numOne = Math.round(10 * Math.random()) + 10;
		numTwo = Math.round(10 * Math.random()) + 10;
	}
	answer = numOne * numTwo;
	totalQuestions = 0;
	questionsCorrect = 0;
	document.getElementById("numOne").innerHTML = numOne;
	document.getElementById("numTwo").innerHTML = numTwo;
}

function decreaseDifficulty() {
	if (difficulty <= 1) {
		difficulty = 1;
	} else {
		difficulty--;
	}
	if (difficulty === 5) {
		document.getElementById("difficulty").innerHTML = "Expert";
	} else if (difficulty === 4) {
		document.getElementById("difficulty").innerHTML = "Hard";
	} else if (difficulty === 3) {
		document.getElementById("difficulty").innerHTML = "Normal";
	} else if (difficulty === 2) {
		document.getElementById("difficulty").innerHTML = "Easy";
	} else {
		document.getElementById("difficulty").innerHTML = "Novice";
	}
	console.log("Difficulty decreased.");
}

function increaseDifficulty() {
	if (difficulty >= 5) {
		difficulty = 5;
	} else {
		difficulty++;
	}
	if (difficulty === 5) {
		document.getElementById("difficulty").innerHTML = "Expert";
	} else if (difficulty === 4) {
		document.getElementById("difficulty").innerHTML = "Hard";
	} else if (difficulty === 3) {
		document.getElementById("difficulty").innerHTML = "Normal";
	} else if (difficulty === 2) {
		document.getElementById("difficulty").innerHTML = "Easy";
	} else {
		document.getElementById("difficulty").innerHTML = "Novice";
	}
	console.log("Difficulty increased.");
}

function startTimer() {
	timeInSeconds -= 1;
	document.getElementById("timer").innerHTML = "Time Remaining: " + timeInSeconds + " seconds";
	if (timeInSeconds < 0) {
		document.getElementById("timer").innerHTML = "TIME'S UP!";
		if (difficulty === 1) {
			document.getElementById("gameWindow").innerHTML = "<h2 style='font-size: 4em; font-weight: bolder;'>You scored " + questionsCorrect + " out of " + totalQuestions + " in Novice Mode!  Good job!</h2>";
		} else if (difficulty === 2) {
			document.getElementById("gameWindow").innerHTML = "<h2 style='font-size: 4em; font-weight: bolder;'>You scored " + questionsCorrect + " out of " + totalQuestions + " in Easy Mode!  Good job!</h2>";
		} else if (difficulty === 3) {
			document.getElementById("gameWindow").innerHTML = "<h2 style='font-size: 4em; font-weight: bolder;'>You scored " + questionsCorrect + " out of " + totalQuestions + " in Normal Mode!  Good job!</h2>";
		} else if (difficulty === 4) {
			document.getElementById("gameWindow").innerHTML = "<h2 style='font-size: 4em; font-weight: bolder;'>You scored " + questionsCorrect + " out of " + totalQuestions + " in Hard Mode!  Good job!</h2>";
		} else {
			document.getElementById("gameWindow").innerHTML = "<h2 style='font-size: 4em; font-weight: bolder;'>You scored " + questionsCorrect + " out of " + totalQuestions + " in Expert Mode!  Good job!</h2>";
		}
		document.getElementById("script-wrapper").innerHTML = "<!-- Script successfully deleted -->";
					}
	setTimeout("startTimer()", 1000);
}

function startGame() {
	document.getElementById("horizontalRule").style.display = "block";
	document.getElementById("gameWindow").style.display = "block";
	document.getElementById("leftArrow").style.display = "none";
	document.getElementById("rightArrow").style.display = "none";
	startTimer();
	disableStartButton();
	init();
}

function disableStartButton() {
	document.getElementById("startButton").style.display = "none";
}

function verify() {
	if (timeInSeconds >= 0) {
		playerAnswer = document.getElementById("playerAnswer").value;
		if (playerAnswer === answer.toString()) {
			totalQuestions++;
			questionsCorrect++;
			if (difficulty === 1) {
				// Novice: 0x0 to 5x5
				numOne = Math.round(5 * Math.random());
				numTwo = Math.round(5 * Math.random());
			} else if (difficulty === 2) {
				// Easy: 0x0 to 7x7
				numOne = Math.round(7 * Math.random());
				numTwo = Math.round(7 * Math.random());
			} else if (difficulty === 3) {
				// Normal: 0x0 to 9x9
				numOne = Math.round(9 * Math.random());
				numTwo = Math.round(9 * Math.random());
			} else if (difficulty === 4) {
				// Hard: 5x5 to 12x12
				numOne = Math.round(7 * Math.random()) + 5;
				numTwo = Math.round(7 * Math.random()) + 5;
			} else {
				// Expert: 10x10 to 20x20
				numOne = Math.round(10 * Math.random()) + 10;
				numTwo = Math.round(10 * Math.random()) + 10;
			}
			answer = numOne * numTwo;
			document.getElementById("numOne").innerHTML = numOne;
			document.getElementById("numTwo").innerHTML = numTwo;
			document.getElementById("playerAnswer").value = "";
		} else {
			totalQuestions++;
			if (difficulty === 1) {
				// Novice: 0x0 to 5x5
				numOne = Math.round(5 * Math.random());
				numTwo = Math.round(5 * Math.random());
			} else if (difficulty === 2) {
				// Easy: 0x0 to 7x7
				numOne = Math.round(7 * Math.random());
				numTwo = Math.round(7 * Math.random());
			} else if (difficulty === 3) {
				// Normal: 0x0 to 9x9
				numOne = Math.round(9 * Math.random());
				numTwo = Math.round(9 * Math.random());
			} else if (difficulty === 4) {
				// Hard: 5x5 to 12x12
				numOne = Math.round(7 * Math.random()) + 5;
				numTwo = Math.round(7 * Math.random()) + 5;
			} else {
				// Expert: 10x10 to 20x20
				numOne = Math.round(10 * Math.random()) + 10;
				numTwo = Math.round(10 * Math.random()) + 10;
			}
			answer = numOne * numTwo;
			document.getElementById("numOne").innerHTML = numOne;
			document.getElementById("numTwo").innerHTML = numTwo;
			document.getElementById("playerAnswer").value = "";
		}
	} else {alert("Time's up!  You are not allowed to answer anymore.");}
}

document.onkeydown = function(event) {
	key = event.keyCode;
	if (key == 13) {
		verify();
	} else if (key == 37) {
		decreaseDifficulty();
	} else if (key == 39) {
		increaseDifficulty();
	}
}