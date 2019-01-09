var api = 'https://api.finna.fi/api/v1/search?lookfor=';
var city = '&type=AllFields&field[]=rawData&sort=relevance%2Cid%20asc&page=1&limit=20&prettyPrint=false&lng=fi';



function setup() {
	noCanvas();
  var button = select('#submit');
  button.mousePressed(weatherAsk);
  
  input = select('#hae');
  
}

  function weatherAsk() {
    var url = api + input.value() + city;
    loadJSON(url, gotData);

}

function gotData(data) {

  var articles = data.records;
    
  for (var i = 0; i < articles.length; i++) {
    createElement('h2', articles[i].rawData.author[0]).addClass('author');
      for (var j = 0; j < articles.length; j++) {
      	createElement('h5', 'ISBN: ' + articles[j].rawData.isbn[0]).addClass('btn btn-lg btn-primary');
        	for (var e = 0; e < articles.length; e++) {
      			createImg(articles[e].rawData.url[0]).addClass('');
            	for (var b = 0; b < articles.length; b++) {
                createElement('li', 'Hyllypaikka: ' + articles[b].rawData.classification_str_mv[1]).addClass('btn btn-lg btn-success');
                	for (var y = 0; y < articles.length; y++) {
                		createElement('p', articles[y].rawData.physical[0])('btn btn-lg btn-primary');
        	}
        }
			}
		}
	}
}