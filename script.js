const apiKey = "b79e59d6a956d166e0c235a148225231"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }
    else {
        var data = await response.json()

        document.querySelector(".city").innerHTML = data.name
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"
        document.querySelector(".max_temp").innerHTML = Math.round(data.main.temp_max) + "°C"
        document.querySelector(".min_temp").innerHTML = Math.round(data.main.temp_min) + "°C"
        document.querySelector(".feels_like").innerHTML = Math.round(data.main.feels_like) + "°C"
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
        document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " Kmph"
        document.querySelector(".pressure").innerHTML = Math.round(data.main.pressure) + " hPa"

        const mainWeather = data.weather[0].main
        document.querySelector(".primary-condition").innerHTML = `${mainWeather}`
        const descriptionWeather = data.weather[0].description
        document.querySelector(".secondary-condition").innerHTML = `${descriptionWeather}`


        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "images/snow.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        }
        else
            console.log("WEATHER")

        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display = "none"
    }

}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value)
})
