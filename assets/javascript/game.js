$(document).ready(function(){

	//variables
	var total = 0;
	var wins= 0;
    var losses = 0;
    

	function randomNum(){
		return Math.floor(Math.random() * (120 - 19)) + 19;
	}

	var targetNumber = randomNum();
	$("#randomNumber").html(targetNumber);

	var btn1= Math.floor(Math.random() * (12 +1)) + 1;
	var btn2= Math.floor(Math.random() * (12 +1)) + 1;
	var btn3= Math.floor(Math.random() * (12 +1)) + 1;
	var btn4= Math.floor(Math.random() * (12 +1)) + 1;


	function reset(){
        total = 0;
        targetNumber = randomNum(); 
		$("#randomNumber").html(targetNumber);      
		$("#myScore").text(total);
		btn1= Math.floor(Math.random() * (12 +1)) + 1;
		btn2= Math.floor(Math.random() * (12 +1)) + 1;
		btn3= Math.floor(Math.random() * (12 +1)) + 1;
		btn4= Math.floor(Math.random() * (12 +1)) + 1;


	}

	
	$(".diamond").on("click", function(){
		total += btn1;
		WinLose();
		$("#myScore").text(total);
		
	});

	$(".emerald").on("click", function(){
		total += btn2;
		WinLose();
		$("#myScore").text(total);
		

	});

	$(".sapphire").on("click", function(){
		total += btn3;
		WinLose();
		$("#myScore").text(total);
		

	});

	$(".ruby").on("click", function(){
		total += btn4;
		WinLose();
		$("#myScore").text(total);
		

	});

	function WinLose (){

	if (total === targetNumber){
        wins += 1;
        $("#wins").text("Wins: " + wins);
		alert("Winner!");
		reset();

    }

    else if (total > targetNumber){
        losses += 1;
        $("#losses").text("Losses: " + losses);
		alert("You lost!");
		reset();
	}
	
}
	
});