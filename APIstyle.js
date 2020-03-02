var request = new XMLHttpRequest();

request.open('GET', "https://api.jikan.moe/v3/manga/1/characters");

request.onload = function() {
    
    var response = request.response;
    var parsedData = JSON.parse(response);
    console.log(parsedData);
    
var name = parsedData.characters[0].name;
    console.log(name);
var url = parsedData.characters[0].url;
    console.log(url);
var anna = parsedData.characters[0].image_url;
    console.log(anna);
    
var portrait = document.createElement('img');
    portrait.setAttribute('src', anna);
    document.body.appendChild(portrait); 
    
}
request.send();