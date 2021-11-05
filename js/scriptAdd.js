$(document).ready(function() {
	
	$("#addForm *[data-required=true]").focusout(function(e) {
		if($(this).val() == "") {
			$(this).addClass("error");
		}else {
			$(this).removeClass("error");
		}
		
	});
	
	$("#addForm").submit(function(e) {
		if(!isFormOK($(this))) {
			e.preventDefault();
			$("#messageDiv").slideDown("slow");
		}
	});
	
	function isFormOK(form) {
		var ok = true;
		form.find("*[data-required=true]").each(function() {
			if($(this).hasClass("error")) {
				ok = false;
			}
		});
		return ok;
	}
	
	$("nav #navList li ").hover(function(e) {
		$(this).css("background", "rgba(255, 255, 255, 0.9)");
		$(this).css("color", "black");
		$(this).animate({"width": "50%"}, "300");
		$(this).find("a").show();
	}, 
	function(e){
		$(this).css("background", "rgba(255, 255, 255, 0.7)");
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