

// -------------------------- VARIABLES   ---------------------------------------------------

var numSquares = 6;
var colors = [];
var correctColor;
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#resetButton");
var modeButtons = document.querySelectorAll(".mode");
var header_color_Display = document.getElementById("cc");
//header_color_Display.textContent = correctColor;


//---------------------------------------------------------------------------------------------


init();


function init() {
	initModeButtons();
	initGameBoard();
	reset();

} 


function initModeButtons() {
	for(var i = 0;  i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function () {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;

			reset();
		});
	}
}

function initGameBoard() {
		for(var i = 0; i < squares.length; i++) {
		//set click events
			squares[i].addEventListener("click", function() {
				var clickedColor = this.style.backgroundColor;
				if(clickedColor === correctColor) {
					messageDisplay.textContent = "Correct!";
					resetButton.textContent = "Play again?";
					resetButton.style.color = correctColor;
					//modeButtons.style.color = clickedColor;
					document.querySelector("#stripe").style.color = correctColor;
					updateColors(clickedColor);
					h1.style.backgroundColor = clickedColor;
				}
				else {
					this.style.backgroundColor = "#232323";
					messageDisplay.textContent = "Try again";
				}
		});
	}
}

function reset() {
	colors = colorGenerator(numSquares);
	correctColor = color();
	header_color_Display.textContent = correctColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}

	h1.style.backgroundColor = "steelblue";
}



resetButton.addEventListener("click", function(){
	reset();
})






// ---------------------------- FUNCTIONS --------------------------------------------------

function updateColors(color) {
	//iterate through squares
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function color() {
	//Random whole number between 0 - 5
	var i = Math.floor(Math.random() * colors.length);
	return colors[i];
}


function colorGenerator(num) {
	//make an array
	var arr = [];
	//add num random colors to array
	for(var i = 0; i < num; i++) {
		arr.push(randomColor());
	}

	//return array
	return arr;
}

//Create Random RGB Color
function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb("  + r + ", " + g + ", " + b + ")";
}

