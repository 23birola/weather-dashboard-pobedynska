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
renderHistory();

searchBtn.addEventListener('click', function (e) {
  e.preventDefault();
  city = searchInput.value;
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
      
      if (!historyArr.includes(city)) {
        historyArr.push(city);
        const historyEl = document.createElement('button');
        historyEl.textContent = city;
        historySection.appendChild(historyEl);
        //renderHistory();
        localStorage.setItem('locations', JSON.stringify(historyArr));
      }
    });
  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`)
    .then(response => response.json())
    .then((data) => {
      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${data[0].lat}&lon=${lon = data[0].lon}&appid=${apiKey}&units=metric`)
      .then(response => response.json())
        .then((data) => {
          const cardEl = document.createElement('div');
          cardEl.classList = 'card';
          cardEl.style.width = '18rem';
          const cardBodyEl = document.creatElement('div');
          cardBodyEl.classList = 'card-body';
          const cardTitleEl = document.createElement('h5');
          cardTitleEl.classList = 'ard-title';
          const cardImg = document.createElement('img');
          const tempatureEl = document.createElement('p');
          tempatureEl.textContent = `Temp: ${data.main.temp} C°`;
          const windEl = document.createElement('p');
          windEl.textContent = `Wind: ${data.wind.speed} KPH`;
          const humidityEl = document.createElement('p');
          humidityEl.textContent = `Humidity: ${data.main.humidity} %`;
       <div class="card" style="width: 18rem;">
           <div class="card-body">       
      <h5 class="card-title">Card title</h5>
      <img src="..." class="card-img-top" alt="..."></img>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
        </div>
    });
    });
});