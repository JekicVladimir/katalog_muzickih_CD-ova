$(document).ready(function(e) {
	
	$.getJSON("json/music.json", function(data){
		for(var i=0; i<data.music.length; i++) {
			if(data.music[i].new == "true") {
				var newMusicDiv = $(document.createElement("div"));
				newMusicDiv.addClass("musicDiv");
				
				var newA = $(document.createElement("a"));
				newA.attr("href", "musicDetails.html?id=" + data.music[i].id);
				
				var newImg = $(document.createElement("img"));
				newImg.attr("src", data.music[i].imgHires);
				
				newA.append(newImg);
				
				var newH1 = $(document.createElement("h1"));
				newH1.addClass("musicTitle");
				newH1.text(data.music[i].title);
				
				var newH2 = $(document.createElement("h2"));
				newH2.addClass("musicAuthor");
				
				var authors = "";
				
				for(var j=0; j<data.music[i].authors.length; j++) {
					newH2.append(" " + data.music[i].authors[j]);
				}
				
				newMusicDiv.append(newA);
				newMusicDiv.append(newH1);
				newMusicDiv.append(newH2);
				$("#content").append(newMusicDiv);
			}
		}
	});
	
});