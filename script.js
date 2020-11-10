var entercity;

function apicall () {
//var city = "florida";
var APIkey = "&appid=6f6303bd0f52f27c59eaf22e57fb595f";
var queryUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + entercity + APIkey;
console.log(queryUrl);
$.ajax({
  url: queryUrl,
  method: "GET"
})
  .then(function (response) {

    console.log(response);
    //look at the timestamp of the time 

    //loop through response list
    // if response.list[i].dt_txt includes ("21:00:00")
    // $(".fiveDay").append(
    //   `
    //   <div>${response.list[i].main.temp}</div>
    //   <div>${response.list[i].main.humidity}</div>
    //   <div>${response.list[i].main.humidity}</div>
    //   `
    //   )
    
  });
}

$(".search").on("click", function () {
entercity = $(".citysearch").val()
console.log(entercity);

apicall();

// city name, 


// the date, 
// an icon representation of weather conditions,
// the temperature, 
// the humidity, 
// the wind speed, and 
// the UV index

// var li = $("<li>");
// li.text(entercity);
// $("#pastCities").append(li)


$("#pastCities").append(
  `
  <li>
  ${entercity} 
  </li>
  `
)

})


