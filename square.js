

$(document).ready(function(){
squares = 15;
newWidth = 10;
newHeight = 10;


	rows();
	newGrid();
	hoverOver();	
});


//generate rows function
rows = function(){
	row = 0;
	while(row <= squares){

		columns();
		row++;
		
		column = 0;
		
	};
};

//generate column blocks function
columns = function(){
	column = 0;
	while(column <= squares){	

				if(column === 0){
					$("div #wrapper").append("<div style='width:"+newWidth+"px; height:"+newHeight+"px' class='clear'></div>");

				}
				else if (column <= squares){
					$("div #wrapper").append("<div style='width:"+newWidth+"px; height:"+newHeight+"px'></div>");

				}
				column++;
				

	};
};


//hover to black function
var hoverOver = function(){
$("#wrapper div").hover(function(){
	$(this).css("background-color","#333");
});
};

	//Prompt Question
var newGrid = function(){
	$("button").on("click",function(){
		squaresTemp = prompt("How many squares per side should the sketch box have?");
		if(isNaN(squaresTemp)){
			alert("This is not a number. Try again ;)");
			return false;
		}
		else
		width = $("div #wrapper").width();
		height = $("div #wrapper").height();

		newWidth = width / squaresTemp;
		newHeight = height / squaresTemp;
		squares = squaresTemp - 1;

		$("#wrapper > div").remove();

		rows();
		hoverOver();

	})
};