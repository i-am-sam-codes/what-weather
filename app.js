function init() {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => handleSubmit(e));
}

async function handleSubmit(e) {
  e.preventDefault();

  const input = document.querySelector("#search-bar");
  const inputValue = input.value.toLowerCase();

  const weatherData = await fetchData(inputValue);
  const cityName = weatherData.name
  const weatherDescription = weatherData.weather[0].description;
  const temperature = Math.floor(weatherData.main.temp);
  
  const gifData = await fetchGiphyImage(weatherDescription);
  const gifUrl = gifData.data[0].images.original.url
  displayWeather(cityName, temperature, weatherDescription, gifUrl);
}

async function fetchData(cityName) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a850e970fcee14c3dc6dd045b4e06dd9&units=imperial`
    );
    const data = await response.json();

    return data
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function displayWeather(cityName, temperature, weatherDescription, gifUrl) {
  const display = document.querySelector(".display");
  const img = document.querySelector('img');
  
  display.textContent = `The current weather in ${cityName} is ${temperature}° F with ${weatherDescription}`;
  img.src = gifUrl

}

async function fetchGiphyImage(weatherDescription) {
  const query = `${weatherDescription} weather`

  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=aDKC7Z1QyGy3M1ZNmjzaxHUy1xnaCX7X&q=${query}&limit=2&offset=0&rating=g&lang=en&bundle=messaging_non_clips`);
    const giphy = await response.json();
    
    return giphy
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

init();
