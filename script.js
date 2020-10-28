
var city = "florida";
var APIkey = "&appid=6f6303bd0f52f27c59eaf22e57fb595f";
var queryUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + APIkey;
console.log(queryUrl);
$.ajax({
  url: queryUrl,
  method: "GET"
})
  .then(function (response) {

    console.log(response);
  });


$(".search").on("click", function () {
var entercity = $(".citysearch").val()
console.log(entercity);

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


