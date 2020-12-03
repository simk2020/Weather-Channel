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


      for (var i = 0; i < response.list.length; i++) {
        if (response.list[i].dt_txt.includes("12:00:00")) {
          console.log(response.list[i].dt_txt)
          $(".fiveDay").append(
            `
            <div class="card" style="width: 10em;">
            <div class ="row">
            <div class ="col-m-2">
            <img class="card-img-top" src="http://openweathermap.org/img/wn/${response.list[i].weather[0].icon}@2x.png" alt="Card image cap">
            <h5 class="card-title"> Date: ${response.list[i].dt_txt}</h5>
            <p class="card-text"> Temp: ${response.list[i].main.feels_like} </p>
            <p> Humidity: ${response.list[i].main.humidity}%</p>
          </div>
          </div>
          </div>

            `
          )
        };
      }
      // for (var i = 0; i < response.value.length; i++) {
      //   if (i <= 2 ) ${response1.value}, color = green;
      //   else ${response1.value}, color = green
      // }

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

          // appending all the required items in city column.
          $(".citycolumn").append(
            `
              <h2>${entercity.toUpperCase()}</h2>
              <p>Date: ${response.list[0].dt_txt}</p>
              <p>Temperature: ${response.list[0].main.feels_like}</p>
              <p>Wind: ${response.list[0].wind.speed} MPH </p>
              <p>Humidity: ${response.list[0].main.humidity}%</p>
              <p>UV Index: ${response1.value}</p>
              `
          )
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
  <button class="past">${entercity}</button>
  `
  )
})


// $(".past").on("click", function () {
//   entercity = $(".pastcity").val()
//   console.log(entercity);
//   apicall();
//   $(".citycolumn").empty();
//   $(".day1").empty();
//   $(".day2").empty();
//   $(".day3").empty();
//   $(".day4").empty();
//   $(".day5").empty();
// })
