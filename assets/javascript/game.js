$(document).ready(function(){

	//variables
	var total = 0;
	var wins= 0;
    var losses = 0;
    

	function randomNum(){
		return Math.floor(Math.random() * (120 +1)) + 19;
	}

	var targetNumber = randomNum;
	$("#randomNumber").html(targetNumber);

	var btn1= Math.floor(Math.random() * (12 +1)) + 1;
	var btn2= Math.floor(Math.random() * (12 +1)) + 1;
	var btn3= Math.floor(Math.random() * (12 +1)) + 1;
	var btn4= Math.floor(Math.random() * (12 +1)) + 1;


	function reset(){
		total = 0;
		$("#randomNumber").html(targetNumber);
		targetNumber = randomNum;
		$("#myScore").text(total);
		btn1= Math.floor(Math.random() * (12 +1)) + 1;
		btn2= Math.floor(Math.random() * (12 +1)) + 1;
		btn3= Math.floor(Math.random() * (12 +1)) + 1;
		btn4= Math.floor(Math.random() * (12 +1)) + 1;


	}

	
	$("#diamond").on("click", function(){
		total += btn1;
		WinLoose();
		$("#myScore").text(total);
		
	});

	$("emerald").on("click", function(){
		total += btn2;
		WinLoose();
		$("#myScore").text(total);
		

	});

	$("#sapphire").on("click", function(){
		total += btn3;
		WinLoose();
		$("#myScore").text(total);
		

	});

	$("#ruby").on("click", function(){
		total += btn4;
		WinLoose();
		$("#myScore").text(total);
		

	});

	function WinLoose (){

	if (total === targetNumber){
		wins += 1;
		alert("Winner!");
		$("#wins").text(wins);
		reset();

	} else if(counter > targetNumber){
		losses += 1;
		alert("You lost!");
		$("#losses").text(losses);
		reset();
	}
	
}
	
});