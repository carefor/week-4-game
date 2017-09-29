"use strict";

var winCounter = 0;
var lossCounter = 0;
var turnCounter = 20;
var totalScore;
var sparkleCrystal;
var flashCrystal;
var morphCrystal;
var diamondCrystal;
var goalNumber = 0;
var totalScore = 0;
var overlay = document.querySelector(".overlay");
var gif = document.querySelector(".gif");

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
getRandomNum();

function generateRandomAll() {
	sparkleCrystal = getRandomNum(1, 12);
	flashCrystal = getRandomNum(1, 12);
	morphCrystal = getRandomNum(1, 12);
	diamondCrystal = getRandomNum(1, 12);
	goalNumber = getRandomNum(19, 120);
	$("#goal-number").html(goalNumber);
}
generateRandomAll() ;

function crystalClick() {
	$("#sparkle-crystal").on("click", function() {
		totalScore += sparkleCrystal;
		turnCounter--;
		$("#total-score").html(totalScore);
		$("#turns").html(turnCounter);
		console.log("The current score is " + totalScore);
			if (totalScore === goalNumber) {
				gameWon();
			} else if (totalScore > goalNumber) {
				gameLostTotal();
			} else if (turnCounter === 0) {
				gameLostTurns();
			}
	});
	$("#flash-crystal").on("click", function() {
		totalScore += flashCrystal;
		turnCounter--;
		$("#total-score").html(totalScore);
		$("#turns").html(turnCounter);
		console.log("The current score is " + totalScore);
			if (totalScore === goalNumber) {
				gameWon();
			} else if (totalScore > goalNumber) {
				gameLostTotal();
			} else if (turnCounter === 0) {
				gameLostTurns();
			}
	});
	$("#morph-crystal").on("click", function() {
		totalScore += morphCrystal;
		turnCounter--;
		$("#total-score").html(totalScore);
		$("#turns").html(turnCounter);
		console.log("The current score is " + totalScore);
			if (totalScore === goalNumber) {
				gameWon();
			} else if (totalScore > goalNumber) {
				gameLostTotal();
			} else if (turnCounter === 0) {
				gameLostTurns();
			}
	});
	$("#diamond-crystal").on("click", function() {
		totalScore += diamondCrystal;
		turnCounter--;
		$("#total-score").html(totalScore);
		$("#turns").html(turnCounter);
		console.log("The current score is " + totalScore);
			if (totalScore === goalNumber) {
				gameWon();
			} else if (totalScore > goalNumber) {
				gameLostTotal();
			} else if (turnCounter === 0) {
				gameLostTurns();
			}
	});
}
crystalClick();

function overlayLostTurns() {
	overlay = document.querySelector(".overlay");
  	overlay.style.display = "block";
  	gif = document.querySelector(".gif");
  	gif.style.display = "block'";
  	gif.style.background = "url('https://media.giphy.com/media/cN34n6Ka8GrcY/giphy.gif') no-repeat center center";
  	var turnsText = "Your total score is too high.. You've succumbed to the crystal curse. Game over!";
  	$("#end-text").append(turnsText);
}

function overlayLostTotal() {
	overlay = document.querySelector(".overlay");
  	overlay.style.display = "block";
  	gif = document.querySelector(".gif");
  	gif.style.display = "block'";
  	gif.style.background = "url('https://media.giphy.com/media/cN34n6Ka8GrcY/giphy.gif') no-repeat center center";
  	var loseText = "Oops! Looks like you ran out of turns. Better luck next time.. ";
  	$("#end-text").append(loseText);
}

function overlayWon() {
	overlay = document.querySelector(".overlay");
  	overlay.style.display = "block";
  	gif = document.querySelector(".gif");
  	gif.style.display = "block'";
  	gif.style.background = "url('https://media.giphy.com/media/l378vyvOMTge2eD84/giphy.gif') no-repeat center center";
  	var winText = "Your skills are legendary.. You win!";
  	$("#end-text").append(winText);
}

function gameLostTurns () {
	lossCounter++;
	$("#losses").html(lossCounter);
	overlayLostTurns();
	setTimeout (reset, 5000);

}

function gameLostTotal () {
	lossCounter++;
	$("#losses").html(lossCounter);
	overlayLostTotal();
	setTimeout (reset, 5000);
}

function gameWon () {
	winCounter++;
	$("#wins").html(winCounter);
	overlayWon();
	setTimeout (reset, 5000);
}

function reset() {
        	overlay = document.querySelector(".overlay");
  	overlay.style.display = "none";
  	gif = document.querySelector(".gif");
  	gif.style.display = "none";
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