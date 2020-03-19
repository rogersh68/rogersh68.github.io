const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject["towns"];
    for (let i = 0; i < towns.length; i++ ) {
        if (towns[i].name == "Fish Haven" || towns[i].name == "Preston" || towns[i].name == "Soda Springs") {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let motto = document.createElement('h3');
            let founded = document.createElement('h3');
            let pop = document.createElement('h3');
            let rainfall = document.createElement('h3');
            let image = document.createElement('img');

            h2.textContent = towns[i].name;
            motto.textContent = towns[i].motto;
            motto.setAttribute('class', 'town-motto');
            founded.textContent = "Year Founded: " + towns[i].yearFounded;
            founded.setAttribute('class', 'town-info');
            pop.textContent = "Population: " + towns[i].currentPopulation;
            pop.setAttribute('class', 'town-info');
            rainfall.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
            rainfall.setAttribute('class', 'town-info');
            image.setAttribute('src', 'images/' + towns[i].photo);
            image.setAttribute('alt', towns[i].name);

            card.appendChild(h2);
            card.appendChild(motto);
            card.appendChild(founded);
            card.appendChild(pop);
            card.appendChild(rainfall);
            card.appendChild(image);
        
            document.querySelector('div.towns').appendChild(card);
        }
    }
  });

  