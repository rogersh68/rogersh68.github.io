const apiURL = "https://api.openweathermap.org/data/2.5/weather?zip=83549,us&units=imperial&APPID=29532d73c747db9a9cb1be86effaaac6";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
    const imagealt = jsObject.weather[0].description;

    document.getElementById('temp').textContent = Math.round(jsObject.main.temp);
    document.getElementById('icon').setAttribute('src', imagesrc);
    document.getElementById('icon').setAttribute('alt', imagealt);
    document.getElementById('desc').textContent = jsObject.weather[0].main;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('speed').textContent = Math.round(jsObject.wind.speed);
  });