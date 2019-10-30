
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var buttonReset = document.getElementById("buttonReset");
var buttonEasy = document.getElementById("buttonEasy");
var buttonHard = document.getElementById("buttonHard");
var isEasy = false;
var colors = generateRandomColors(6);

init();

function init(){
var pickedColour = pickColour();
colorDisplay.textContent = pickedColour;

setupAgain(false);

buttonReset.addEventListener("click",function(){
	setupAgain(isEasy);
});

buttonEasy.addEventListener("click", function(){
	setupAgain(true);
	buttonEasy.classList.add("selected");
	buttonHard.classList.remove("selected");
});

buttonHard.addEventListener("click", function(){
	setupAgain(false);
	buttonHard.classList.add("selected");
	buttonEasy.classList.remove("selected");
});

}

function changeAllSquareColor(color){

	for(var i=0; i<squares.length;i++){
				squares[i].style.backgroundColor = color;
			}
}

function hideBlocksForEasyMode(){
	for(var i = squares.length - 1 ; i > (squares.length/2) - 1 ; i--){
		squares[i].style.display = "none";
	}
}

function showBlocksForHardMode(){
	for(var i = squares.length - 1 ; i > (squares.length/2) - 1 ; i--){
		squares[i].style.display = "inline";
	}
}

function pickColour(){
	var randomNumber = Math.floor((Math.random() * colors.length));
	return colors[randomNumber];
}

function generateRandomNumber(limit){
	var randomNumber = Math.floor((Math.random() * limit));
	return randomNumber;
}

function generateRandomColors(arrayLength){
	var colorArray = [];
	for( var i = 0; i<arrayLength; i++){
		colorArray.push("rgb(" + generateRandomNumber(255) + ", " + generateRandomNumber(255) + ", " + generateRandomNumber(255) + ")");
	}
	console.log(colorArray);
	return colorArray;
}

function setupAgain(isEasy){
 this.isEasy = isEasy;
 colors = [];
 messageDisplay.textContent = "";
 buttonReset.textContent = "New Colours";

if(isEasy){
	 hideBlocksForEasyMode();
    colors = generateRandomColors(3);
}else{
	showBlocksForHardMode();
	colors = generateRandomColors(6);
}

pickedColour = pickColour();
colorDisplay.textContent = pickedColour;


for (var i = 0; i < squares.length; i++) {

	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function(){

		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColour){
			messageDisplay.textContent = "Correct!";
			for(var i=0; i<squares.length;i++){
				squares[i].style.backgroundColor = pickedColour;
				changeAllSquareColor(pickedColour);
				buttonReset.textContent = "Play Again?";
			}
			h1.style.backgroundColor = pickedColour;
		}else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Wrong! Try Again";
		}

	});
}

h1.style.backgroundColor = "steelblue";
}


