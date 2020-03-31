const requestURL = '';

fetch(requestURL)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    const prophets = jsonObject['guides'];
    for (let i = 0; i < guides.length; i++) {
        let section = document.createElement('section');
        let h2 = document.createElement('h2');
        let image = document.createElement('img');
        let level = document.createElement('p');
        let years = document.createElement('p');
        let email = document.createElement('p');
        let sketch = document.createElement('p');

        h2.textContent = guides[i].name;
        image.setAttribute('src', guides[i].image);
        image.setAttribute('alt', guides[i].name);
        level.textContent = guides[i].level;
        years.textContent = guides[i].years;
        email.textContent = guides[i].email;
        sketch.textContent = guides[i].sketch;

        section.appendChild(image);
        section.appendChild(h2);
        section.appendChild(level);
        section.appendChild(years);
        section.appendChild(email);
        section.appendChild(sketch);

        document.querySelector('div.guides').appendChild(section);
    }
})