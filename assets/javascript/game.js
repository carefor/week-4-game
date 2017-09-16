var winCounter;
var loseCounter;
var turnCounter=20;
var totalScore;
var pinkCrystal;
var blueCrystal;
var purpleCrystal;
var whiteCrystal;
var goalNumber;
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
		$("#turnCounter").html(turnCounter);
		console.log("The current score is " + totalScore);
	});
	$("#blue-crystal").on("click", function() {
		totalScore += blueCrystal;
		turnCounter--;
		$("#total-score").html(totalScore);
		$("#turnCounter").html(turnCounter);
		console.log("The current score is " + totalScore);
	});
	$("#purple-crystal").on("click", function() {
		totalScore += purpleCrystal;
		turnCounter--;
		$("#total-score").html(totalScore);
		$("#turnCounter").html(turnCounter);
		console.log("The current score is " + totalScore);
	});
	$("#white-crystal").on("click", function() {
		totalScore += whiteCrystal;
		turnCounter--;
		$("#total-score").html(totalScore);
		$("#turnCounter").html(turnCounter);
		console.log("The current score is " + totalScore);
	});
}
crystalClick();

//funtion for if you go above number and lose

//function for if you ===the goal number and win

function reset() {
        turnCounter = 20;
        $("#turn-counter").html(turnCounter);
        userScore = 0;
        $("#goal-number").html(goalNumber);
        generateRandomAll(); //function to update numbers updateNums()
    }

    //write in once game over immediately call reset function