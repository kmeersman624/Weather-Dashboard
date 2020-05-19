//weather data dashboard area
var city = $("#searchinput").val();
const apiKey = "8ca043bed56f54032777742c195f1b73";
var previousCities = [];

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
    // var icon = $("<img>").attr("src","http://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
  //  // add content to html
    //  $("#currentimg").append(icon);
     $(".temp").text("Temperature: " + temp.toFixed(2) + "°F");
     $(".humidity").text("Humidity: " + response.main.humidity +"%");
     $(".wind").text("Wind Speed: " + response.wind.speed + "MPH");
   // Log the data in the console as well
    console.log("Temperature: " + temp);
    console.log("Humidity: " + response.main.humidity);
    console.log("Wind Speed: " + response.wind.speed);
    var lat = response.coord.lat
    var lon = response.coord.lon
    getUV(lat, lon);
   });
}
    //UI Index
  function getUV(lat, lon) {
    var uvqueryURL = "http://api.openweathermap.org/data/2.5/uvi?appid=8ca043bed56f54032777742c195f1b73&lat=" + lat + "&lon=" + lon;
    $.ajax({
        url: uvqueryURL,
        method: "GET"
    }).then(function (uvResponse) {
      var uv = uvResponse.value;
      console.log(uvResponse);
      $(".uv").html("UV Index: " + uv);

      if (uv < 3) {
        $(".uv").css('background-color', 'green');
      } else if (uv < 6) {
        $(".uv").css('background-color', 'yellow');
      } else if (uv < 8) {
        $(".uv").css('background-color', 'orange');
      } else if (uv < 11) {
        $(".uv").css('background-color', 'red');
      } else {
        $(".uv").css('background-color', 'violet');
      }
        });
  }
  
  //on click function for search button
  $("#searchbtn").on("click", function() {
    var city = $("#searchinput").val();
    console.log("city value is" + city);
    getWeather(city);
    previousCities.push(city);
    getStorage();
    renderButtons();
    fiveDayForecast(city);
  })
  //save to local storage
  function getStorage() {
    //send previous cities array to local storage
    localStorage.setItem("history", JSON.stringify(previousCities));
  };
  
  // local storage to return buttons from recent city searches
function renderButtons() {
    $("#buttons-view").empty();
    previousCities = JSON.parse(localStorage.getItem("history"));
    console.log(localStorage.getItem("history"));
    for (i = 0; i < previousCities.length; i++) {
      var li =$("<li>");
      li.addClass("previousCity");
      li.attr("data-city", previousCities[i]);
      li.text(previousCities[i]);
      $("#buttons-view").append(li);
      console.log(li);
  }
}

$("#buttons-view").on("click", "li", function () {
  var previousCity = $(this).attr("data-city");
  getWeather(previousCity);
});

//5 day weather forecast
function fiveDayForecast(city) {
  var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=8ca043bed56f54032777742c195f1b73";
  $.ajax({
    url: queryURL,
        method: "GET"
    }).then(function (response) {
      console.log(response);
      $("#5day").html(response);
      for (var i = 0; i < response.list.length; i += 8) {
      var column = $("<div>").addClass("col-md-2").appendTo("#5day");
      //generate cards for each day

      //pull data for cards
      response.list[i].dt_txt
      response.list[i].weather[0].icon;
      response.list[i].main.temp;
      response.list[i].main.humidity;
      }
    })
}



