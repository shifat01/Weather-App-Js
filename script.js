const cityInput = document.getElementById('cityInput');
const getWeather = document.getElementById('getWeather');
const cityName = document.getElementById('cityName');
const dateTime = document.getElementById('dateTime');
const temperature = document.getElementById('temperature');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windSpeed');

getWeather.addEventListener('click', () => {
  const city = cityInput.value;
  if(city === '') return;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e69f06714ea16ac3f91b5acb2771a962`)
    .then(res => res.json())
    .then(data => {
      cityName.textContent = `${data.name}, ${data.sys.country}`;
      const now = new Date();
      dateTime.textContent = now.toLocaleString();
      temperature.textContent = `Temperature: ${data.main.temp} °C`;
      humidity.textContent = `Humidity: ${data.main.humidity} %`;
      windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
    })
    .catch(() => {
      cityName.textContent = 'City not found';
      dateTime.textContent = '';
      temperature.textContent = '';
      humidity.textContent = '';
      windSpeed.textContent = '';
    });
});