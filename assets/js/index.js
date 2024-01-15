const apiKey = 'f9b6d6f3a505f0fc5cf493aeb0974820';
const searchBtn = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const todaySection = document.getElementById('todayForecast');
const forecastSection = document.getElementById('forecast');
const historySection = document.getElementById('history');
let city = '';
const historyArr = JSON.parse(localStorage.getItem('locations')) ? JSON.parse(localStorage.getItem('locations')) : [];


function renderHistory() {
  historyArr.forEach( (element) => { 
  const historyEl = document.createElement('button');
  historyEl.classList = 'btn btn-secondary'; 
  historyEl.textContent = element;
  historySection.appendChild(historyEl);
})
}

function renderTodayWeather() {
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then((data) => {
      todaySection.textContent = '';
      const timeZone = data.timezone;
      const currentDate = new Date().toLocaleString('en-US', timeZone);
      const formattedDate = dayjs(currentDate, { format: 'M/D/YYYY, h:mm:ss A' }).format('DD/MM/YYYY');

      const titleEl = document.createElement('h2');
      titleEl.className = 'cityTitle';
      titleEl.textContent = `${city} (${formattedDate})`;
      const tempatureEl = document.createElement('p');
      tempatureEl.textContent = `Temp: ${data.main.temp} C°`;
      const windEl = document.createElement('p');
      windEl.textContent = `Wind: ${data.wind.speed} KPH`;
      const humidityEl = document.createElement('p');
      humidityEl.textContent = `Humidity: ${data.main.humidity} %`;
      console.log(data);
      const iconCode = data.weather[0].icon;
      const weatherIcon = document.createElement('img');
      weatherIcon.src = `http://openweathermap.org/img/w/${iconCode}.png`;
      weatherIcon.alt = 'weather icon';
      titleEl.append(weatherIcon);
      todaySection.append(titleEl, tempatureEl, windEl, humidityEl);
      todaySection.classList = 'todayForecast';
    }).catch(error => alert(error));
}

function renderForcast() {
  forecastSection.textContent = '';
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`)
    .then(response => response.json())
    .then((data) => {
      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${data[0].lat}&lon=${lon = data[0].lon}&appid=${apiKey}&units=metric`)
      .then(response => response.json())
        .then((data) => {
          const forecastTitle = document.createElement('h3');
          forecastTitle.textContent = '5-Day Forecast:';
          forecastSection.append(forecastTitle);
          for (let i = 4; i < 39; i = i + 8) {
            const forecastTitle = document.createElement('h3');
            forecastTitle.textContent = '5-Day Forecast';
            const cardEl = document.createElement('div');
            cardEl.classList = 'card';
            cardEl.style.width = '12rem';
            const cardBodyEl = document.createElement('div');
            cardBodyEl.classList = 'card-body';
            const cardTitleEl = document.createElement('h5');
            cardTitleEl.classList = 'card-title';
            cardTitleEl.textContent = dayjs(data.list[i].dt_txt, { format: 'M/D/YYYY, h:mm:ss A' }).format('DD/MM/YYYY');
            console.log(data);
            console.log(data.list[i].dt_txt);
            const cardImg = document.createElement('img');
            const iconCode = data.list[i].weather[0].icon;
            cardImg.src =  `http://openweathermap.org/img/w/${iconCode}.png`;
            const cardTempatureEl = document.createElement('p');
            cardTempatureEl.classList = 'card-text';
            cardTempatureEl.textContent = `Temp: ${data.list[i].main.temp} C°`;
            const cardWindEl = document.createElement('p');
            cardWindEl.classList = 'card-text';
            console.log(cardTitleEl);
            cardWindEl.textContent = `Wind: ${data.list[i].wind.speed} KPH`;
            const cardHumidityEl = document.createElement('p');
            cardHumidityEl.classList = 'card-text';
            cardHumidityEl.textContent = `Humidity: ${data.list[i].main.humidity} %`;
            cardBodyEl.append(cardTitleEl, cardImg, cardTempatureEl, cardWindEl, cardHumidityEl);
            cardEl.append(cardBodyEl);
            forecastSection.append(cardEl);
          }
    });
    });
}

searchBtn.addEventListener('click', function (e) {
  e.preventDefault();
  city = searchInput.value;
  if (city === '') {
    alert(`Insert city`);
    return;
  }
  if (!historyArr.includes(city)) {
      historyArr.push(city);
      const historyEl = document.createElement('button');
      historyEl.classList = 'btn btn-secondary';
      historyEl.textContent = city;
      historySection.appendChild(historyEl);
      localStorage.setItem('locations', JSON.stringify(historyArr));
      }
  renderTodayWeather();
  renderForcast();
});

renderHistory();

historySection.addEventListener('click', function (e) {
  e.preventDefault();
  city = e.target.textContent;
   if (city === '') {
    alert(`Insert city`);
    return;
  }
  renderTodayWeather();
  renderForcast();
})