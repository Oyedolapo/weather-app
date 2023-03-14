let cityEl = document.querySelector(".city")
let tempEl = document.querySelector(".temp")
let humidValue = document.querySelector(".humidity")
let windSpeed = document.querySelector(".wind")
const inputEl = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const iconEl = document.querySelector(".weather-icon")
const weatherEl = document.querySelector(".weather")
const errorEl = document.querySelector(".error")
const apiKey = "1c21c8366d3df201b86f2a8e17075b49"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)

    if (response.status == 404) {
        errorEl.style.display = "block"
        weatherEl.style.display = "none"
    } else {
        let data = await response.json()

        console.log(data)
    
        cityEl.innerHTML = data.name
        tempEl.innerHTML = Math.round(data.main.temp) + "°C"
        humidValue.innerHTML = data.main.humidity + "%"
        windSpeed.innerHTML = data.wind.speed + " km/hr"
    
        if (data.weather[0].main == "Clouds") {
            iconEl.src = "images/clouds.png"
        } else if (data.weather[0].main == "Clear") {
            iconEl.src = "images/clear.png"
        } else if(data.weather[0].main == "Rain") {
            iconEl.src = "images/rain.png"
        } else if(data.weather[0].main == "Drizzle") {
            iconEl.src = "images/drizzle.png"
        } else if(data.weather[0].main == "Mist") {
            iconEl.src = "images/mist.png"
        } else if(data.weather[0].main == "Snow") {
            iconEl.src = "images/snow.png"
        }
    
        weatherEl.style.display = "block"
        errorEl.style.display = "none"
    
    }

}


searchBtn.addEventListener("click", () => {
    checkWeather(inputEl.value);
    inputEl.value = ""
})
