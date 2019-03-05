var url = 'https://api.finna.fi/v1/search?lookfor=gretzky';

function setup() {
	noCanvas();
  loadJSON(url, gotData);
}

function gotData(data) {
  var articles = data.records;
  
  for (var i = 0; i < articles.length; i++) {
   createElement('h1', articles[i].nonPresenterAuthors[0].name); 
   	createElement('h3', articles[i].title);
    	createP(articles[i].subjects);
  }
  
	//console.log(data.records[19].title);
}