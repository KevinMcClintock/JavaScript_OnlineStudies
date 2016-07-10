$(document).ready(function(){

	/*
	Mouse down events.
	
	$("h1").mousedown(function(){
		
		$(this).css("background","red");	
		
	});
		$("h1").mouseup(function(){
		
		$(this).css("background","yellow");	
		
	});
	*/
		// When you hover over the tags
		
		$("h1").mouseenter(function(){
		
		$(this).css("background","red");	
		
	});
		$("h1").mouseleave(function(){
		
		$(this).css("background","yellow");	
		$(this).unbind();
		
	});
	
});