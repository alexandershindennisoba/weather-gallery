//Weather Api 
const myWeatherApp = {};
myWeatherApp.apiUrl = 'http://api.openweathermap.org/data/2.5/weather';
myWeatherApp.apiKey = '53676921d77f931b9699b38ab357d31e';

  
const myArtApp = {};
myArtApp.apiUrl = 'https://www.rijksmuseum.nl/api/en/collection/';
myArtApp.apiKey = 'ge9zS0UR';
>>>>>>> 98145eb5efa1c83f6a8c1899d2d7a2035a6d1017

// Weather Promise
myWeatherApp.getUserCity = (city) => {
  myWeatherApp.getWeather = $.ajax({
    url: myWeatherApp.apiUrl,
    method: 'GET',
    appid: myWeatherApp.apiKey,
    dataType: 'json',
    data: {
      appid: myWeatherApp.apiKey,
      format: 'json',
      q: city,
      units: 'metric'
    }
  }).then((res) => {
    // Gives the result of the city weather condition and input that condition into getArt
    myArtApp.getArt(res.weather[0].main)
  })
  .fail((error) => {
    // console.log(error);
  })
};

// Art Promise

  myArtApp.getArt = (query) => {
  myArtApp.getArt = $.ajax({
    url: myArtApp.apiUrl,
    method: 'GET',
    dataType: 'json',
    data: {
      key: myArtApp.apiKey,
      format: 'json',
      q: query
    }
  }).then((res) => {
    // res is result of the query weather condition. gives back an object with array of artObjects
    // console.log(res);
    const artList = res.artObjects.filter((piece) => {
      // only returns images with value of true
      return piece.hasImage != ''
    });
    console.log(artList);
    // take array of returned images and run a for loop
    // for(let i = 0; i < artList.length; i++) {
      // returns indexes of array
      // choose random array index
    
    // map through the array and return array of image urls
    const filteredArtList = artList.map((piece) => {
      return piece.webImage.url
    })
    console.log(filteredArtList);
    
    const randomArtImage = Math.floor(Math.random() * filteredArtList.length);
    console.log(filteredArtList[randomArtImage]);

    // }
  }).fail((error) => {
    console.log(error);
  })
}

// const imageList = res.artObjects[i].map()
// imageList = [0, 1, ]
>>>>>>> 98145eb5efa1c83f6a8c1899d2d7a2035a6d1017

	myArtApp.displayArt = (pieces) => {
		console.log(pieces);
		if (pieces.hasImage === true){
		}
	}

// Start myWeatherApp
  myWeatherApp.init = () => {
    myWeatherApp.getUserCity('toronto');
    // myArtApp.getArt();
  }
  
// DOC READY
	$(function (){
		myWeatherApp.init();
		// console.log('Ready');
});

// PSEUDO CODE
// CONNECT MUSEUM API
// GET 'WEATHER' OBJECT THAT HAS PROPERTY 'MAIN' 
// THAT IS THE VALUE THAT WILL BE 
// run reijk museum api into above
// cheeck classical music, sort according to weather

// const imageList = res.artObjects[i].map()
// imageList = [0, 1,]