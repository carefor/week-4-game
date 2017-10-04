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
var gifBackground = document.querySelector(".gif-background");

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
		console.log("This sparkle-crystal is worth " + sparkleCrystal);
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
		console.log("This flash-crystal is worth " + flashCrystal);
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
		console.log("This morph-crystal is worth " + morphCrystal);
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
		console.log("The diamond-crystal is worth " + diamondCrystal);
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
  	overlay.style.display = "block";
  	gifBackground.style.display = "block";
  	gif.style.display = "block";
  	gif.style.background = "url('https://media.giphy.com/media/cN34n6Ka8GrcY/giphy.gif') no-repeat center center";
  	var turnsText = "You ran out of turns.. Our planet has succumbed to the crystal curse!";
  	$("#end-text").append(turnsText);
  	console.log("*You ran out of turns. Game over.");
}

function overlayLostTotal() {
  	overlay.style.display = "block";
  	gifBackground.style.display = "block";
  	gif.style.display = "block";
  	gif.style.background = "url('https://media.giphy.com/media/cN34n6Ka8GrcY/giphy.gif') no-repeat center center";
  	var loseText = "You've exceeded the magic number.. Our planet has succumbed to the crystal curse!";
  	$("#end-text").append(loseText);
  	console.log("*You've exceeded the magic number. Game over.");
}

function overlayWon() {
  	overlay.style.display = "block";
  	gifBackground.style.display = "block";
  	gif.style.display = "block";
  	gif.style.background = "url('https://media.giphy.com/media/l378vyvOMTge2eD84/giphy.gif') no-repeat center center";
  	var winText = "*Your skills are legendary.. We're saved!";
  	$("#end-text").append(winText);
  	console.log("You win!")
}

function gameLostTurns () {
	lossCounter++;
	$("#losses").html(lossCounter);
	overlayLostTurns();
	setTimeout (reset, 7000);

}

function gameLostTotal () {
	lossCounter++;
	$("#losses").html(lossCounter);
	overlayLostTotal();
	setTimeout (reset, 7000);
}

function gameWon () {
	winCounter++;
	$("#wins").html(winCounter);
	overlayWon();
	setTimeout (reset, 7000);
}

function reset() {
  	overlay.style.display = "none";
  	gifBackground.style.display = "none";
  	gif.style.display = "none";
  	$("#end-text").empty();
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