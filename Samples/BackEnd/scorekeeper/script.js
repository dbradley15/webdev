var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var numInput = document.querySelector("input");
var limit = document.querySelector("#limit");
var p1Score = 0;
var p2Score = 0;
var winningScore = 5;
var gameOver = false;

var player_one_display = document.querySelector("#score1");
var player_two_display = document.querySelector("#score2");


p1Button.addEventListener("click", function() {
	if(!gameOver) {
		p1Score++;

		if(p1Score === winningScore) {
			player_one_display.classList.add("winner");
			gameOver = true;
		}

		player_one_display.textContent = p1Score;
	}
});


p2Button.addEventListener("click", function() {
	if(!gameOver) {
		p2Score++;

		if(p2Score === winningScore){
			player_two_display.classList.add("winner");
			gameOver = true;
		}

		player_two_display.textContent = p2Score;
	}
});

resetButton.addEventListener("click", reset);

function reset () {
	p1Score = 0;
	player_one_display.textContent = p1Score;
	player_one_display.classList.remove("winner");
	p2Score = 0;
	player_two_display.textContent = p2Score;
	player_two_display.classList.remove("winner");

	gameOver = false;
}

numInput.addEventListener("change", function () {
	limit.textContent = this.value;
	winningScore = Number(this.value);
	reset();
});