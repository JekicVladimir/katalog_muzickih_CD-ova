$(document).ready(function(e) {
	$.getJSON("json/music.json", function(data){
		for(var i=0; i<data.music.length; i++) {
			var categories = data.music[i].category.split(",");
			for(var j=0; j<categories.length; j++) {
				var newLi = $(document.createElement("li"));
				newLi.text(categories[j].trim());
				$("#categoryList").append(newLi);
				
			}
		}
	
		$('#categoryList').on('click', 'li', function(e) {
			var cat = $(this).text();
			$("#categoryMusic").empty();
			
			for(var i=0; i<data.music.length; i++) {
				if(data.music[i].category.contains(cat)) {
					var newLi = $(document.createElement("li"));
					newLi.addClass("resultItem");
		
					var newDiv = $(document.createElement("div"));
					newDiv.addClass("musicInfoDiv");
		
					var newH1 = $(document.createElement("h1"));
					newH1.text(data.music[i].title);
					var newH2 = $(document.createElement("h2"));
		
					for(var j=0; j<data.music[i].authors.length; j++) {
						newH2.append(data.music[i].authors[j] + " ");
					}
		
					var newA = $(document.createElement("a"));
					newA.attr("href", "musicDetails.html?id=" + data.music[i].id);
		
					var newImg = $(document.createElement("img"));
					newImg.addClass("musicThumbnail");
					newImg.attr("src", data.music[i].imgHires);
		
					newA.append(newImg);
		
					newDiv.append(newH1)
					newDiv.append(newH2);
					newLi.append(newDiv);
					newLi.append(newA);
					$("#categoryMusic").append(newLi);;
				}
			}
			
		});
	
	});
});