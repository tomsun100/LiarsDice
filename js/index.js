//<script>

var dice1 = Math.floor(Math.random()*6+1);
var dice2 = Math.floor(Math.random()*6+1);
var dice3 = Math.floor(Math.random()*6+1);
var dice4 = Math.floor(Math.random()*6+1);
var dice5 = Math.floor(Math.random()*6+1);

function selectImage(dice){
    var imageLink;
    switch(dice){
    case 1:
	imageLink = "./img/1.png";
    case 2:
	imageLink = "./img/2.png";
    case 3:
	imageLink = "./img/3.png";
    case 4:
	imageLink = "./img/4.png";
    case 5:
	imageLink = "./img/5.png";
    case 6:
	imageLink = "./img/6.png";

    }

    return imageLink;
}


$(document).ready(function(){

	function roll(){
	    $("#dice1").text(Math.floor(Math.random()*6+1));
	    $("#dice2").text(Math.floor(Math.random()*6+1));
	    $("#dice3").text(Math.floor(Math.random()*6+1));
	    $("#dice4").text(Math.floor(Math.random()*6+1));
	    $("#dice5").text(Math.floor(Math.random()*6+1));
	};
	
	roll();//First roll on page load
	

	$("#roll").click(function(){
		roll();
	    });//Roll Dice Button
	
    });

//</script>