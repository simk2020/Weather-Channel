var entercity;

function apicall() {
  //var city = "florida";
  var APIkey = "&appid=6f6303bd0f52f27c59eaf22e57fb595f";
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
        
          $(".day1").append(
            `
              <p>Date: ${response.list[0].dt_txt}</p>
              <p> ${response.list[0].weather[0].icon} </p>
              <p>Temperature: ${response.list[0].main.feels_like}</p>
              <p>Humidity: ${response.list[0].main.humidity}%</p>
              `
          )
          $(".day2").append(
            `
              <p>Date: ${response.list[0].dt_txt}</p>
              <p> ${response.list[0].weather[0].icon} </p>
              <p>Temperature: ${response.list[0].main.feels_like}</p>
              <p>Humidity: ${response.list[0].main.humidity}%</p>
              `
          )
          $(".day3").append(
            `
              <p>Date: ${response.list[0].dt_txt}</p>
              <p> ${response.list[0].weather[0].icon} </p>
              <p> ${response.list[0].weather[0].icon}.attr(${response.list[0].weather[0].icon}, response); 
              <img src="${response.list[0].main.feels_like}">
              <img id="theImg" src="${response.list[0].main.feels_like}">
              <p>Humidity: ${response.list[0].main.humidity}%</p>
              `
          )
          $(".day4").append(
            `
              <p>Date: ${response.list[0].dt_txt}</p>
              <p> ${response.list[0].weather[0].icon} </p>
              <p>Temperature: ${response.list[0].main.feels_like}</p>
              <p>Humidity: ${response.list[0].main.humidity}%</p>
              `
          )
          $(".day5").append(
            `
              <p>Date: ${response.list[0].dt_txt}</p>
              <p> ${response.list[0].weather[0].icon} </p>
              <p>Temperature: ${response.list[0].main.feels_like}</p>
              <p>Humidity: ${response.list[0].main.humidity}%</p>
              `
          )
        })
    });
}

// forEach (response.list[i].dt_txt includes ("21:00:00"));

// );

// loop through response list
// if response.list[i].dt_txt includes ("21:00:00")
// $(".fiveDay").append(
//   `
//   <div>${response.list[i].main.temp}</div>
//   <div>${response.list[i].main.humidity}</div>
//   <div>${response.list[i].main.humidity}</div>
//   `
//   )



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
  <button>${entercity} </button>
  `
  )
})

