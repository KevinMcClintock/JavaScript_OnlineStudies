$(document).ready(function(){

	//hide the paragraphs
	$("p").hide();
	
	$("h1").click(function(){
	
		$(this).next().slideToggle(300);
	
	});

});



