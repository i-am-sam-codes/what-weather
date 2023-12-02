function init() {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => searchInput(e));
}
async function fetchData(cityName) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a850e970fcee14c3dc6dd045b4e06dd9`
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function searchInput(e) {
  e.preventDefault();

  const input = document.querySelector("#search-bar");
  const cityName = input.value.toLowerCase();

  fetchData(cityName);
}

init();
