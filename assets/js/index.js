const apiKey = 'f9b6d6f3a505f0fc5cf493aeb0974820';
let city = '';
const searchBtn = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
let lon = '';
let lat = '';


searchBtn.addEventListener('click', function (e) {
  e.preventDefault();
  city = searchInput.value;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
    });
  console.log(city);
  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`)
    .then(response => response.json())
    .then((data) => {
      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${data[0].lat}&lon=${lon = data[0].lon}&appid=${apiKey}`)
      .then(response => response.json())
      .then((data) => {
       console.log(data);
    });
    });
});