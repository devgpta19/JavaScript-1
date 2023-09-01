var apiKey = "60c8142833c66ef559917dd909f01e80"
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?unit=metric&q=";

var searchbox = document.querySelector("#search input");
var searchbtn = document.querySelector("#search button");
var weatherIcon = document.querySelector("#weather-icon")

async function checkWeather(city) {
    var response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    // if (responce.status == "404") {
    //     document.querySelector("#error").style.display = "block";
    //     document.querySelector("#weather").style.display = "none";
    // }

    // else {

        var data = await response.json();

        console.log(data);

        document.querySelector("#city").innerHTML = data.name;
        document.querySelector("#temp").innerHTML = Math.round(data.main.temp - 273.15) + "°C";
        document.querySelector("#maxtemp").innerHTML = Math.round(data.main.temp_max - 273.15) + "°C";
        document.querySelector("#mintemp").innerHTML = Math.round(data.main.temp_min - 273.15) + "°C";
        document.querySelector("#humidity").innerHTML = data.main.humidity + "%";
        document.querySelector("#wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "./images/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "./images/clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "./images/rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "./images/louds.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "./image/louds.png";
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "./image/snow.png";
        }



        document.querySelector("#weather").style.display = "initial";
        // document.querySelector("#error").style.display = "none";
    }
// }


searchbtn.addEventListener("click", function () {
    checkWeather(searchbox.value);
})