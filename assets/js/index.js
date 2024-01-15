const apiKey = 'f9b6d6f3a505f0fc5cf493aeb0974820';
const searchBtn = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const todaySection = document.getElementById('today');
const forecastSection = document.getElementById('forecast');
const historySection = document.getElementById('history');
let city = '';
const historyArr = JSON.parse(localStorage.getItem('locations')) ? JSON.parse(localStorage.getItem('locations')) : [];


function renderHistory() {
  historyArr.forEach( (element) => { 
  const historyEl = document.createElement('button');
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

      const titleEl = document.createElement('h1');
      titleEl.className = 'cityTitle';
      titleEl.textContent = `${city} (${formattedDate})`;
      const tempatureEl = document.createElement('p');
      tempatureEl.textContent = `Temp: ${data.main.temp} C°`;
      const windEl = document.createElement('p');
      windEl.textContent = `Wind: ${data.wind.speed} KPH`;
      const humidityEl = document.createElement('p');
      humidityEl.textContent = `Humidity: ${data.main.humidity} %`;
      console.log(data);
      todaySection.append(titleEl, tempatureEl, windEl, humidityEl);
      const iconCode = data.weather[0].icon;
      const weatherIcon = document.createElement('img');
      weatherIcon.src = `http://openweathermap.org/img/w/${iconCode}.png`;
      weatherIcon.alt = 'weather icon';
      titleEl.append(weatherIcon);
    });
}

function renderForcast() {
  forecastSection.textContent = '';
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`)
    .then(response => response.json())
    .then((data) => {
      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${data[0].lat}&lon=${lon = data[0].lon}&appid=${apiKey}&units=metric`)
      .then(response => response.json())
        .then((data) => {
          for (let i = 4; i < 39; i = i + 8) {
            const cardEl = document.createElement('div');
            cardEl.classList = 'card';
            cardEl.style.width = '18rem';
            const cardBodyEl = document.createElement('div');
            cardBodyEl.classList = 'card-body';
            const cardTitleEl = document.createElement('h5');
            cardTitleEl.classList = 'card-title';
            cardTitleEl.textContent = data.list[i].dt_txt;
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
  if (!historyArr.includes(city)) {
        historyArr.push(city);
        const historyEl = document.createElement('button');
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
  renderTodayWeather();
  renderForcast();
})