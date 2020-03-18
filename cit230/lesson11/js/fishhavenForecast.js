const forecastapiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5585000&units=imperial&APPID=29532d73c747db9a9cb1be86effaaac6";

fetch(forecastapiURL)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);
    const fivedayforecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
    console.log(fivedayforecast);

    for (let i=0; i < fivedayforecast.length; i++) {
        // set temperature
        document.getElementById(`temp${i}`).textContent = fivedayforecast[i].main.temp;

        // set icon image
        const imagesrc = `https://openweathermap.org/img/w/${fivedayforecast[i].weather[0].icon}.png`;
        const desc = fivedayforecast[i].weather[0].description;
        document.getElementById(`icon${i}`).setAttribute('src', imagesrc);
        document.getElementById(`icon${i}`).setAttribute('alt', desc);

        // set day of week
        var today = new Date();
        var weekday = today.getDay();
        for (let i=0; i < 5; i++) {
            weekday++;
            if (weekday > 6) {
                weekday = 0;
            }
            switch(weekday) {
                case 0:
                    day = "Sun";
                    break;
                case 1:
                    day = "Mon";
                    break;
                case 2:
                    day = "Tues";
                    break;
                case 3:
                    day = "Wed";
                    break;
                case 4:
                    day = "Thurs";
                    break;
                case 5:
                    day = "Fri";
                    break;
                case 6:
                    day = "Sat";
                    break;
                default:
                    day = "N/A";
            }
            document.getElementById(`day${i}`).textContent = day;
        }

    }

});