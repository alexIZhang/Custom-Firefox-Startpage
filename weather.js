let API_key = '55f26e9d01f70b2eb29f94494dcf3fd5';
let input = 'Perth';
function getWeatherData() {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${API_key}`)
    .then((res) => res.json())
    .then((json) => JSON.stringify(json))
    .then((json) => JSON.parse(json))
    .then((data) => {
      let weatherDiv = document.getElementById("weatherDiv");
      let currTemp = data.main.temp;
      let weatherDesc = data.weather[0].description;
      let weatherIconID = data.weather[0].icon;
      let weatherText = document.createElement('p');
      weatherText.innerHTML = currTemp + "° " + weatherDesc[0].toUpperCase() + weatherDesc.substring(1, weatherDesc.length);
      weatherDiv.appendChild(weatherText);
      let imgSrc = `http://openweathermap.org/img/wn/${weatherIconID}.png`;
      let weatherIcon = document.createElement('img');
      weatherIcon.setAttribute("src", imgSrc);
      weatherDiv.appendChild(weatherIcon);
    });
}
getWeatherData();