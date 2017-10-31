/* script.js 
   Author: Based on Signe Okkels Larsen code, edited by Robert Hernandez
   Date: August 15, 2016
*/


$(document).ready(function(){ // begin document.ready block


	$(".audio-pic").hover(
		function(){
			
			$(this).css({"border":"2px solid #990000"}); // Edit CSS/style during hover state here
			
			var audfile = $(this).attr("src");
			audfile = audfile.replace(".jpg","");		
			$("#sound1").attr("src", audfile + ".mp3");
			$("#sound1").get(0).play();
			
		}, 
		function() {
           $(this).css({"border":"0px"}); // Edit CSS/style AFTER hover state here. I'd recommend it matching original state.
           
 			$("#sound1").get(0).pause();          
        }
     );

var audio = document.getElementById("sound1");

	$("#my-mute-btn").click( function(){
       
       $("#sound1").prop('muted', !$("#sound1").prop('muted'));
   
   	});

			   
}); //end document.ready block



	

	
	
	

