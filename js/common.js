$(document).ready(function(e) {

	$("nav #navList li ").hover(function(e) {
		$(this).css("background", "rgba(255, 255, 255, 0.9)");
		$(this).css("color", "black");
		$(this).animate({"width": "50%"}, "300");
		$(this).find("a").show();
	}, 
	function(e){
		$(this).css("background", "rgba(255, 255, 255, 0.5)");
		$(this).css("color", "white");
		$(this).animate({"width": "30px"}, "300");
		$(this).find("a").hide();
	});
	
	var today = new Date();
	var day = today.getDate();
	var month = today.getMonth()+1;
	var year = today.getFullYear();
	
	var formatedDate = day + "/" + month + "/" + year;
	$("#date").text(formatedDate);
	
});