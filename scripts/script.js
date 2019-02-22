
// Create myApp namespace to hold all properties
const myWeatherApp = {};
myWeatherApp.apiUrl = 'http://api.openweathermap.org/data/2.5/weather';
myWeatherApp.apiKey = '53676921d77f931b9699b38ab357d31e';

const myArtApp = {};
myArtApp.apiUrl = 'https://www.rijksmuseum.nl/api/en/collection/';
myArtApp.apiKey = 'ge9zS0UR';
  

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
    // console.log('it worked');
    console.log(res.weather[0].main);
    myArtApp.getArt(res.weather[0].main)
  })
  .fail((error) => {
    // console.log(error);
  })
};

// Art Promise
  myArtApp.getArt = (query) => {
  // console.log(query);
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
      console.log(res.artObjects);
      // const artList = res.artObjects.filter((value) => {
      //   return value.webImage.url != ''
      // });
      // console.log(artList);
      // console.log(res);
      const imageList = res.artObjects.filter(piece =>{
        if(piece.hasImage === true) {
          console.log(piece.webImage.url)
        }
      })
    }).fail((error) => {
      console.log(error);
    })
  }



    
// const imageList = res.artObjects[i].map()
// imageList = [0, 1, ]


// myArtApp.displayArt = (pieces) => {
//   console.log(pieces);
//   if (pieces.hasImage === true){
//   }
// }


  // Start myWeatherApp
  myWeatherApp.init = () => {
    myWeatherApp.getUserCity('seoul');
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
