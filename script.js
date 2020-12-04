var entercity;
var pastcity;
function apicall() {
  //var city = "florida";
  var APIkey = "&units=imperial&appid=6f6303bd0f52f27c59eaf22e57fb595f";
  var queryUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + entercity + APIkey;

  console.log(queryUrl);
  $.ajax({
    url: queryUrl,
    method: "GET"
  })
    .then(function (response) {
      //response 
      console.log(response);

      // city name, 
      console.log(entercity);

      // the date, 
      console.log(response.list[0].dt_txt);

      // an icon representation of weather conditions
      console.log(response.list[0].weather[0].icon)

      // the temperature, 
      console.log(response.list[0].main.feels_like);
      console.log(response.list[0].main.temp_max);
      console.log(response.list[0].main.temp_min);

      // the humidity, 
      console.log(response.list[0].main.humidity);

      // the wind speed, and 
      console.log(response.list[0].wind);

      // the UV index
      console.log(response.city.coord.lat);
      console.log(response.city.coord.lon);

      $(".fiveDayForecast").empty()
      for (var i = 0; i < response.list.length; i++) {
        if (response.list[i].dt_txt.includes("12:00:00")) {
          console.log(response.list[i].dt_txt)
          $(".fiveDayForecast").append(
            `
              <div class ="col-md-2">
                <div class="card" style="">
                  <div class="card-body">
                    <h5 class="card-title">Date: ${response.list[i].dt_txt}</h5>
                    <img class="card-img-top" src="http://openweathermap.org/img/wn/${response.list[i].weather[0].icon}@2x.png" alt="Card image cap">
                    <p class="card-text">Temp: ${response.list[i].main.feels_like} </p>
                    <p class="card-text">Humidity: ${response.list[i].main.humidity} </p>
                  </div>
                </div>
              </div>
            `
          )
        };
      }

      var queryUrl2 = "http://api.openweathermap.org/data/2.5/uvi?lat=" + response.city.coord.lat + "&lon=" + response.city.coord.lon + APIkey;
      console.log(queryUrl2);
      $.ajax({
        url: queryUrl2,
        method: "GET"
      })
        .then(function (response1) {
          console.log(response1);
          // the UV index
          console.log(response1.value);
          $(".citycolumn").empty()
          // appending all the required items in city column.
          $(".citycolumn").append(
            `
              <h2>${entercity.toUpperCase()}</h2>
              <p>Date: ${response.list[0].dt_txt}</p>
              <p>Temperature: ${response.list[0].main.feels_like}</p>
              <p>Wind: ${response.list[0].wind.speed} MPH </p>
              <p>Humidity: ${response.list[0].main.humidity}%</p>
              <p>UV Index:<span class="uvIndex"> ${response1.value}</span></p>
              `
          )

          if (response1.value < 3) {
            $(".uvIndex").addClass("green")
          } else if (response1.value >= 3 && response1.value < 5) {
            $(".uvIndex").addClass("yellow")
          } else {
            $(".uvIndex").addClass("red")
          }
        })
    });
}


$(".search").on("click", function () {
  entercity = $(".citysearch").val()
  console.log(entercity);
  apicall();
  $(".citycolumn").empty();
  $(".day1").empty();
  $(".day2").empty();
  $(".day3").empty();
  $(".day4").empty();
  $(".day5").empty();

  $("#pastCities").append(
    `
  <button type="button" id="${entercity}" class="past" value="${entercity}">${entercity}</button>
  `
  )
})

function getHistory() {
  entercity = $(this).attr("id")
  apicall();
}
$(document).on("click", ".past", getHistory)
