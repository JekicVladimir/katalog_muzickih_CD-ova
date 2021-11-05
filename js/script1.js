$(document).ready(function(e) {
	
	$.getJSON("json/music.json", function(data){
	var idPr = getParamValue("id");
		for(var i=0; i<data.music.length; i++) {
			if(data.music[i].id == idPr) {
				var newMusicDiv = $(document.createElement("div"));
				newMusicDiv.addClass("musicDiv");
				
				var newImg = $(document.createElement("img"));
				newImg.attr("src", data.music[i].imgHires);
				
				var newH1 = $(document.createElement("h1"));
				newH1.addClass("musicTitle");
				newH1.text(data.music[i].title);
				
				var newH2 = $(document.createElement("h2"));
				newH2.addClass("musicAuthor");
				var authors = "";
				for(var j=0; j<data.music[i].authors.length; j++) {
					newH2.append(" " + data.music[i].authors[j]);
				}
				
				var newH3 = $(document.createElement("h2"));
				newH3.addClass("category");
				newH3.text("Kategorija: " + data.music[i].category);
				
				
				var newRightMusicDiv = $(document.createElement("div"));
				newMusicDiv.addClass("rightMusicDiv");
				
				var newH4 = $(document.createElement("h2"));
				newH4.addClass("listOfSongs");
				newH4.text("Pesme: " + " "+ data.music[i].listOfSongs);
				
				var newH5 = $(document.createElement("h2"));
				newH5.addClass("price");
				newH5.text("Cena: " + "   " + data.music[i].price + ".00" + " " + "din.");
				
				newMusicDiv.append(newImg);
				newMusicDiv.append(newH1);
				newMusicDiv.append(newH2);
				newMusicDiv.append(newH3);
				newRightMusicDiv.append(newH4);
				newRightMusicDiv.append(newH5);
				$("#content").append(newMusicDiv);
				$("#content").append(newRightMusicDiv);
			}
		}
		
		
			function getParamValue(name) {
	var location = decodeURI(window.location.toString());
	var index = location.indexOf("?")+1;
	var subs = location.substring(index, location.length);
	var splitted = subs.split("&");
	
	for(i=0; i < splitted.length; i++) {
		var s = splitted[i].split("=");
		var pName = s[0];
		var pValue = s[1];
		if(pName == name){
			return pValue.replace("+", " ");
		}
	}
	
	}
	
	});
	
});