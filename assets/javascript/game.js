"use strict";

var winCounter = 0;
var lossCounter = 0;
var turnCounter = 20;
var totalScore;
var sparkleCrystal;
var flashCrystal;
var morphCrystal;
var diamondCrystal;
var magicNumber = 0;
var totalScore = 0;
var overlay = document.querySelector(".overlay");
var gif = document.querySelector(".gif");
var gifBackground = document.querySelector(".gif-background");

function getRandomNum() {
	var rangeArray = [];
	var i;

	for (var i = 1; i <= 12; i++) {
   		rangeArray.push(i);
   	}
   	console.log("Original array: " + rangeArray);

   	var theLength = rangeArray.length - 1;
   	var randomize;
   	var tempValue;

   	for (i = theLength; i > 0; i--) { 
    	randomize = Math.floor(Math.random() * i);
    	tempValue = rangeArray[i];
    	rangeArray[i] = rangeArray[randomize];
    	rangeArray[randomize] = tempValue;
	}
	console.log("Shuffled array: " + rangeArray);

   	for (i = 0; i < 4; i++) {
   		sparkleCrystal = rangeArray[0];
		flashCrystal = rangeArray[1];
		morphCrystal = rangeArray[2];
		diamondCrystal = rangeArray[3];
	}
	console.log("The sparkle-crystal is worth " + sparkleCrystal);
	console.log("The flash-crystal is worth " + flashCrystal);
	console.log("The morph-crystal is worth " + morphCrystal);
	console.log("The diamond-crystal is worth " + diamondCrystal);


    var min = 19; 
    var max = 120;
    var magicNumber = Math.floor(Math.random() * (max - min) + min);
	$("#magic-number").html(magicNumber);
	console.log("The magic number is " + magicNumber);
}


function crystalClick() {
	$("#sparkle-crystal").on("click", function() {
		totalScore += sparkleCrystal;
		turnCounter--;
		$("#total-score").html(totalScore);
		$("#turns").html(turnCounter);
			if (totalScore === magicNumber) {
				gameWon();
			} else if (totalScore > magicNumber) {
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
			if (totalScore === magicNumber) {
				gameWon();
			} else if (totalScore > magicNumber) {
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
			if (totalScore === magicNumber) {
				gameWon();
			} else if (totalScore > magicNumber) {
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
			if (totalScore === magicNumber) {
				gameWon();
			} else if (totalScore > magicNumber) {
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
  	gif.style.background = "url('https://media.giphy.com/media/dng7u2mrY7Gfe/giphy.gif') no-repeat center center";
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
  	gif.style.background = "url('https://media.giphy.com/media/l41Yt9kM4fusKvrK8/giphy.gif') no-repeat center center";
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
    magicNumber = "";
    $("#magic-number").html(magicNumber);
    getRandomNum(); 
}
reset();