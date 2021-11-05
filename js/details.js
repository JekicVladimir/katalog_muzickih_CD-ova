$(document).ready(function(e) {
	
	$.getJSON("json/music.json", function(data){
		var id = getParamValue("id");
		for(var i=0; i<data.music_cd.length; i++) {
			if(data.music_cd[i].id == id ) {
				var newMusicDiv = $(document.createElement("div"));
				newMusicDiv.addClass("musicDiv");
				newMusicDiv.text("Detalji o cd-u: ");
					
				
				var newImg = $(document.createElement("img"));
				newImg.attr("src", data.music_cd[i].imgLores);
				
			
				
				var newH1 = $(document.createElement("h1"));
				
				newH1.addClass("musicTitle");
				newH1.text("Naslov:" + " " + data.music_cd[i].title);
				
				
				
				var newH2 = $(document.createElement("h2"));
				newH2.addClass("musicAuthor");
				
				var authors = "";
				
				for(var j=0; j<data.music_cd[i].authors.length; j++) {
					newH2.append("Izvodjač: " + " " + data.music_cd[i].authors[j]);
				
				}
				
				var newH3 = $(document.createElement("h3"));
				
				newH3.addClass("category");
				
				
				newH3.text("Kategorija: " + data.music_cd[i].category);
				

				var newRightMusicDiv = $(document.createElement("div"));
				newMusicDiv.addClass("rightMusicDiv");
				
				var newH4 = $(document.createElement("h4"));
				newH4.addClass("listOfSongs");
				newH4.text("Pesme: " + " "+ data.music_cd[i].listOfSongs);
		
				
			
				
				$("#hideButton").click(function(e){
				
				$(newH4).toggle(1000);
				
		});  
				
				
				
				
				var newH5 = $(document.createElement("h5"));
				newH5.addClass("price");
				newH5.text("Cena: " + "   " + data.music_cd[i].price + ".00" + " " + "din.");
				
				
				$("#hideButton").click(function(e){
				
				$(newH5).toggle(1000);
				
		});  
				
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
	});
	

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