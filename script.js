$(document).ready(function(){

	console.log("it works.");
	
	
	
	//Variable x is the name of the "location" that you are currently in.
	//x is different for every screen that you look at.
	//It is also the name of the image that will be used as the background.
	var x = "2n";
	console.log(x);
	
	

	
	//This function takes the variable x and makes it into the background image.
	var i = function(y){
	
		var z = ("url(images/" + y + ".jpg)");
		console.log(z);
		$(".background").css("backgroundImage", z);
		
	};
	
	//set up the first image
	i(x);
	
	
	//These three functions determine what happens when you click on something.
	//I set it up like this because it is much more intuitive to say
	//"I am here, if I click left this happens, if I click right that happens"
	//rather than "I clicked left, If I'm here then this happens, if I'm there then that happens"
	
	//if you click on the left side of the screen:
	//the x variable changes to the value specified upon calling the function
	//the background image is also changed to the x value.
	var left = function(y){
		$(".left").click(function(){
			console.log("left");
			x = y;
			i(y);
			console.log(x);
		});
	};
	
	//if you click on the center of the screen:
	var center = function(y){
		$(".center").click(function(){
			console.log("center");
			x = y;
			i(y);
			console.log(x);
		});
	};
	
	//if you click on the right side of the screen:
	var right = function(y){
		$(".right").click(function(){
			console.log("right");
			x = y;
			i(y);
			console.log(x);
		});
	};
	
	
	
	
	
	
//This is the block of 'if' statements that determine what happens at every location.
//I want the javascript to go back to this point and re-assess which 'if' statement to 
//go into after every time the user clicks on something.

	
	
	$(".background").click(function(){
		if(x==="1n"){
			left("1w");
			center("4n");
			right("1e");
		}
		
		if(x==="1w"){
			left("1s");
			center("1w");
			right("1n");
		}
		
		if(x==="1s"){
			left("1e");
			center("1s");
			right("1w");
		}
		
		if(x==="1e"){
			left("1n");
			center("2e");
			right("1s");
		}
		
		if(x==="2n"){
			left("2w");
			center("5n");
			right("2e");
		}
		
		if(x==="2w"){
			left("2s");
			center("1w");
			right("2n");
		}
		
		if(x==="2s"){
			left("2e");
			center("8h");
			right("2w");
		}
		
		if(x==="2e"){
			left("2n");
			center("3e");
			right("2s");
		}
		
		if(x==="3n"){
			left("3w");
			center("6n");
			right("3e");
		}
		
		if(x==="3w"){
			left("3s");
			center("2w");
			right("3n");
		}
		
		if(x==="3s"){
			left("3e");
			center("3s");
			right("3w");
		}
		
		if(x==="3e"){
			left("3n");
			center("3e");
			right("3s");
		}
		
		if(x==="4n"){
			left("4w");
			center("7n");
			right("4e");
		}
		
		if(x==="4w"){
			left("4s");
			center("6h");
			right("4n");
		}
		
		if(x==="4s"){
			left("4e");
			center("1s");
			right("4w");
		}
		
		if(x==="4e"){
			left("4n");
			center("5e");
			right("4s");
		}
		
		if(x==="5n"){
			left("5w");
			center("8n");
			right("5e");
		}
		
		if(x==="5w"){
			left("5s");
			center("4w");
			right("5n");
		}
		
		if(x==="5s"){
			left("5e");
			center("2n");
			right("5w");
		}
		
		if(x==="5e"){
			left("5n");
			center("6e");
			right("5s");
		}
		
		if(x==="6n"){
			left("6w");
			center("9n");
			right("6e");
		}
		
		if(x==="6w"){
			left("6s");
			center("5w");
			right("6n");
		}
		
		if(x==="6s"){
			left("6e");
			center("3s");
			right("6w");
		}
		
		if(x==="6e"){
			left("6n");
			center("4h");
			right("6s");
		}
		
		if(x==="7n"){
			left("7w");
			center("7n");
			right("7e");
		}
		
		if(x==="7w"){
			left("7s");
			center("7w");
			right("7n");
		}
		
		if(x==="7s"){
			left("7e");
			center("4s");
			right("7w");
		}
		
		if(x==="7e"){
			left("7n");
			center("8e");
			right("7s");
		}
		
		if(x==="8n"){
			left("8w");
			center("2h");
			right("8e");
		}
		
		if(x==="8w"){
			left("8s");
			center("7w");
			right("8n");
		}
		
		if(x==="8s"){
			left("8e");
			center("5s");
			right("8w");
		}
		
		if(x==="8e"){
			left("8n");
			center("9e");
			right("8s");
		}
		
		if(x==="9n"){
			left("9w");
			center("9n");
			right("9e");
		}
		
		if(x==="9w"){
			left("9s");
			center("8w");
			right("9n");
		}
		
		if(x==="9s"){
			left("9e");
			center("6s");
			right("9w");
		}
		
		if(x==="9e"){
			left("9n");
			center("9e");
			right("9s");
		}
		
		if(x==="2h"){
			left("2h");
			center("2n");
			right("2h");
		}
		
		if(x==="4h"){
			left("4h");
			center("4e");
			right("4h");
		}
		
		if(x==="6h"){
			left("6h");
			center("6w");
			right("6h");
		}
		
		if(x==="8h"){
			left("8h");
			center("8s");
			right("8h");
		}

	});
		
		
		

	
	
});