function init() {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => searchInput(e));
}
async function fetchData(cityName) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/search.json?key=c22524022e1d4eb4a5c11444233011&q=${cityName}`
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
