$(document).ready(function(e) {

	var searchTerm = getParamValue("searchTerm");

	$.getJSON("json/music.json", function(data) {
		for(var i=0; i<data.music.length; i++) {
			if(data.music[i].title.toLowerCase().contains(searchTerm.toLowerCase())) {
				createBookElements(data.music[i]);
			}else {
				for(var j=0; j<data.music[i].authors.length; j++) {
					if(data.music[i].authors[j].toLowerCase().contains(searchTerm.toLowerCase())) {
						createBookElements(data.music[i]);
					}
				}
			}
		}
	});
	
	function createBookElements(music) {
		var newLi = $(document.createElement("li"));
		newLi.addClass("resultItem");
		
		var newDiv = $(document.createElement("div"));
		newDiv.addClass("musicInfoDiv");
		
		var newH1 = $(document.createElement("h1"));
		newH1.text(music.title);
		var newH2 = $(document.createElement("h2"));
		
		for(var i=0; i<music.authors.length; i++) {
			newH2.append(music.authors[i] + " ");
		}
		
		var newA = $(document.createElement("a"));
		newA.attr("href", "musicDetails.html?id=" + music.id);
		
		var newImg = $(document.createElement("img"));
		newImg.addClass("musicThumbnail");
		newImg.attr("src", music.imgHires);
		
		newA.append(newImg);
		
		newDiv.append(newH1)
		newDiv.append(newH2);
		newLi.append(newDiv);
		newLi.append(newA);
		$("#resultsList").append(newLi);
	}
	
	function getParamValue(name) {
			var location = decodeURI(window.location.toString());
			var index = location.indexOf("?")+1;
			var subs = location.substring(index, location.length);
			var splitted = subs.split("&");
	
			for(i=0; i < splitted.length; i++) {
				var s = splitted[i].split("=");
				var pName  = s[0];
				var pValue = s[1];
				if(pName == name) {
					return pValue.replace("+", " ");
				}
			}			
		}
});