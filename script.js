//weather data dashboard area
var city = $("#searchinput").val();
const apiKey = "8ca043bed56f54032777742c195f1b73";

const date = moment().format("(M/D/YYYY)");
$("#date").text(date);

function getWeather(city) {
    //city name (date) weather type icon
    const queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=8ca043bed56f54032777742c195f1b73";

    //AJAX call to the OpenWeatherMap API
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    //store all of the retrieved data inside of an object called "response"
    .then(function(response) {
   // Log the queryURL
    // console.log(queryURL);
   // Log the resulting object
    //  console.log(response);
   // Transfer content to HTML
     $(".citydate").html(response.name);
   // Convert the temp to fahrenheit
    var temp = (response.main.temp - 273.15) * 1.80 + 32;
   // add temp content to html
     $(".temp").text("Temperature: " + temp.toFixed(2) + "°F");
     $(".humidity").text("Humidity: " + response.main.humidity +"%");
     $(".wind").text("Wind Speed: " + response.wind.speed + "MPH");
   // Log the data in the console as well
    console.log("Temperature: " + temp);
    console.log("Humidity: " + response.main.humidity);
    console.log("Wind Speed: " + response.wind.speed);
   });
}
    //UI Index
  function getUV(lat, lon) {
    var queryURL = "http://api.openweathermap.org/data/2.5/uvi?appid=8ca043bed56f54032777742c195f1b73&lat=" + response.coord.lat + "&lon=" + response.coord.lon;
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
          var uv = response.value;
          $(".uv").text("UV Index: " + response);
          console.log("UV Index: " + response);
        });
  }
  
  //on click function for search button
  $("#searchbtn").on("click", function() {
    var city = $("#searchinput").val();
    console.log("city value is" + city);
    getWeather(city);
  })
  
  // search area with local storage to return buttons from recent city searches
// var cities = []
// //local storage retieval to new buttons
// function renderButtons() {
//     $("#buttons-view").empty();
//     for (var i = 0; i < cities.length; i++) {
// }





//5 day weather forecast
// function fiveDayForecast(city) {
//   var city = $("#searchinput").val();  
//   var queryURL = "api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=8ca043bed56f54032777742c195f1b73";
//   $.ajax({
//     url: queryURL,
//         method: "GET"
//     }).then(function (response) {

//     })
// }



