//weather data dashboard area
const queryURL = "api.openweathermap.org/data/2.5/weather?q=" + city +"&appid=" + apiKey;
const apiKey = "8ca043bed56f54032777742c195f1b73";
const city = $(#searchinput).text;

//city name (date) weather type icon
const date = moment().format("(M/D/YYYY)");
$("#date").text(date);

//AJAX call to the OpenWeatherMap API
$.ajax({
    url: queryURL,
    method: "GET"
    })
//store all of the retrieved data inside of an object called "response"
   .then(function(response) {
   // Log the queryURL
   console.log(queryURL);
   // Log the resulting object
   console.log(response);
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

//UI Index
var uvURL = 
$.ajax({
    url: queryURL,
    method: "GET"
    })


// search area with local storage to return buttons from recent city searches

//on click function for submit button

//local storage retieval to new buttons
function renderButtons() {
    
}





//5 day weather forecast
var 5Day = 
$.ajax({
    url: queryURL,
    method: "GET"
    })



