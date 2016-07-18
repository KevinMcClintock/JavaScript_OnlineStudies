$(document).ready(function(){
	
	//$("h2").hide();	
	
	$("h1").click(function(){
		$("h2").hide(1000,function(){
			
			$("h3").fadeOut(1000);
			
			
		});
		//$("h2").toggle(1000);	
		//$("h2").fadetoggle(1000);
	});
	
});