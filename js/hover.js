$(function() {
	$("#hero").hover(
		function() {
			$(this).attr("src", "images/hero_comp.gif");
		},
		function() {
			$(this).attr("src", "images/hero_comp.png");
		}                         
	);                  

	$("#phantom").hover(
		function() {
			$(this).attr("src", "images/phantom_comp.gif");
		},
		function() {
			$(this).attr("src", "images/phantom_comp.png");
		}                         
	);                  

	$("#etoile").hover(
		function() {
			$(this).attr("src", "images/etoile_comp.gif");
		},
		function() {
			$(this).attr("src", "images/etoile_comp.png");
		}                         
	);                  
});