let user_input = document.getElementById("user-input");

let search_button = document.getElementById("search-button");

let output = document.querySelectorAll("p");

let locationDetail = document.getElementById("locationDetail");

let key = "69533cbd9b424eaa880105408211910";

let showWeatherReport = () => {
  let userInput = user_input.value.trim();
  let baseUrl = "https://api.weatherapi.com/v1/";
  if (userInput != "") {
    userInput.trim();
    let url = `${baseUrl}current.json?key=${key}&q=${userInput}`;
    // skn

    fetch(url)
      .then((response) => response.json())
      .then((content) => {
        console.log(content);
      })
      .catch((err) => {
        console.error(err);
      });
  }
};

search_button.addEventListener("click", showWeatherReport);
