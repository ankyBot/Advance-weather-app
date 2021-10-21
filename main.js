let user_input = document.getElementById("user-input");

let search_button = document.getElementById("search-button");

let output = document.querySelectorAll("span");

let icon = document.getElementById("icon");

let resultLocation = document.getElementById("locationDetail");

let key = "69533cbd9b424eaa880105408211910";

let showWeatherReport = () => {
  let userInput = user_input.value.trim();
  let baseUrl = "https://api.weatherapi.com/v1/";
  if (userInput != "") {
    userInput.trim();
    // let url = `${baseUrl}current.json?key=${key}&q=${userInput}`;

    let url = `${baseUrl}forecast.json?key=${key}&q=${userInput}&days=30&alerts=yes`;

    //history
    //forecast.json
    // skn

    fetch(url)
      .then((response) => response.json())
      .then((content) => {
        console.log(content);
        let location = `${content.location.name}, ${content.location.region}, ${content.location.country}`;

        let weather = content.current.condition.text;

        let weatherIcon = content.current.condition.icon;

        let temperature = content.current.temp_c;

        let maxTemp = content.forecast.forecastday[0].day.maxtemp_c;

        let minTemp = content.forecast.forecastday[0].day.mintemp_c;

        let hourlyReport = content.forecast.forecastday[0].hour;

        for (let i = 0; i < hourlyReport.length; i++) {
          console.log(hourlyReport[i].temp_c);
        }

        console.log(hourlyReport);

        resultLocation.innerText = location;

        output[0].innerText = weather;
        icon.src = weatherIcon;

        output[1].innerText = `${temperature}°C`;

        output[2].innerText = `${maxTemp}°C`;

        output[3].innerText = `${minTemp}°C`;
      })
      .catch((err) => {
        console.error(err);
        resultLocation.innerText = `Location not found`;
      });

    user_input.value = "";
  }
};

search_button.addEventListener("click", showWeatherReport);
