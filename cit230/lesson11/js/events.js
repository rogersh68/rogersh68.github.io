const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject["towns"];
    var path = window.location.pathname;
    var page = path.split("/").pop();
    for (let i = 0; i < towns.length; i++ ) {
        if (towns[i].name == "Preston" && page == "preston.html") {     
            for (let j = 0; j < towns[i].events.length; j++) {       
                let event = document.createElement('p');
                event.textContent = towns[i].events[j];
                document.querySelector('div.events').appendChild(event);
            }
        }

        else if (towns[i].name == "Soda Springs" && page == "sodasprings.html") {     
            for (let j = 0; j < towns[i].events.length; j++) {       
                let event = document.createElement('p');
                event.textContent = towns[i].events[j];
                document.querySelector('div.events').appendChild(event);
            }
        }

        else if (towns[i].name == "Fish Haven" && page == "fishhaven.html") {     
            for (let j = 0; j < towns[i].events.length; j++) {       
                let event = document.createElement('p');
                event.textContent = towns[i].events[j];
                document.querySelector('div.events').appendChild(event);
            }
        }
    }
  });

  