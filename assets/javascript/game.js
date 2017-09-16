"use strict";

var winCounter = 0;
var lossCounter = 0;
var turnCounter = 20;
var totalScore;
var pinkCrystal;
var blueCrystal;
var purpleCrystal;
var whiteCrystal;
var goalNumber = 0;
var totalScore = 0;

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
getRandomNum();

function generateRandomAll() {
	pinkCrystal = getRandomNum(1, 12);
	blueCrystal = getRandomNum(1, 12);
	purpleCrystal = getRandomNum(1, 12);
	whiteCrystal = getRandomNum(1, 12);
	goalNumber = getRandomNum(19, 120);
	$("#goal-number").html(goalNumber);
}
generateRandomAll() ;

function crystalClick() {
	$("#pink-crystal").on("click", function() {
		totalScore += pinkCrystal;
		turnCounter--;
		$("#total-score").html(totalScore);
		$("#turns").html(turnCounter);
		console.log("The current score is " + totalScore);
		if (totalScore === goalNumber) {
				gameWon();
			} else if (totalScore > goalNumber) {
				gameLost();
			}

	});
	$("#blue-crystal").on("click", function() {
		totalScore += blueCrystal;
		turnCounter--;
		$("#total-score").html(totalScore);
		$("#turns").html(turnCounter);
		console.log("The current score is " + totalScore);
		if (totalScore === goalNumber) {
				gameWon();
			} else if (totalScore > goalNumber) {
				gameLost();
			}

	});
	$("#purple-crystal").on("click", function() {
		totalScore += purpleCrystal;
		turnCounter--;
		$("#total-score").html(totalScore);
		$("#turns").html(turnCounter);
		console.log("The current score is " + totalScore);
		if (totalScore === goalNumber) {
				gameWon();
			} else if (totalScore > goalNumber) {
				gameLost();
			}

	});
	$("#white-crystal").on("click", function() {
		totalScore += whiteCrystal;
		turnCounter--;
		$("#total-score").html(totalScore);
		$("#turns").html(turnCounter);
		console.log("The current score is " + totalScore);
			if (totalScore === goalNumber) {
				gameWon();
			} else if (totalScore > goalNumber) {
				gameLost();
			}

	});
}
crystalClick();

function gameLost () {
	alert("Your total score is too high.. You've succumbed to the crystal curse. Game over!");
	lossCounter++;
	$("#losses").html(lossCounter);
}

function gameWon () {
	alert("Your skills are legendary.. You win!");
	winCounter++;
	$("#wins").html(winCounter++);
}



//function for if you go above number and lose
//or if run out of turns

//	$(".crystal-button").on("click", function () {
//		if (totalScore > goalNumber);
//	});
//}
//gameLost();

//function for if you ===the goal number and win

function reset() {
        turnCounter = 20;
        $("#turns").html(turnCounter);
        goalNumber = 0;
        $("#goal-number").html(goalNumber);
        generateRandomAll(); 
        var winCounter = 0;
        $("#wins").html(winCounter);
        var lossCounter = 0;
        $("#losses").html(lossCounter);
    }

    reset();

    //write in once game over immediately call reset function