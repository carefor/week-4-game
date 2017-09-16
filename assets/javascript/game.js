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
			} else if (turnCounter === 0) {
				noTurns();
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
			} else if (turnCounter === 0) {
				noTurns();
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
			} else if (turnCounter === 0) {
				noTurns();
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
			} else if (turnCounter === 0) {
				noTurns();
			}
	});
}
crystalClick();

function gameLost () {
	alert("Your total score is too high.. You've succumbed to the crystal curse. Game over!");
	lossCounter++;
	$("#losses").html(lossCounter);
	reset();
}

function noTurns() {
	alert("Oops! Looks like you ran out of turns. Better luck next time.. ");
	lossCounter++;
	$("#losses").html(lossCounter);
	reset();
}
//or if run out of turns

function gameWon () {
	alert("Your skills are legendary.. You win!");
	winCounter++;
	$("#wins").html(winCounter);
	reset();
}

function reset() {
        turnCounter = 20;
        $("#turns").html(turnCounter);
        totalScore = 0;
        $("#total-score").html(totalScore);
        $("#losses").html(lossCounter);
         goalNumber = "";
        $("#goal-number").html(goalNumber);
        generateRandomAll(); 
}
reset();