const requestURL = 'https://rogersh68.github.io/cit230/final-project/guides.json';

fetch(requestURL)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    const guides = jsonObject['guides'];
    for (let i = 0; i < guides.length; i++) {
        let section = document.createElement('section');
        let div = document.createElement('div');
        let h2 = document.createElement('h2');
        let image = document.createElement('img');
        let level = document.createElement('p');
        let years = document.createElement('p');
        let email = document.createElement('p');
        let sketch = document.createElement('p');

        section.setAttribute('class', "guide-section");
        div.setAttribute('class', "guide-desc");
        h2.textContent = guides[i].name;
        image.setAttribute('src', guides[i].image);
        image.setAttribute('alt', guides[i].name);
        image.setAttribute('class', "guide-image");
        sketch.textContent = guides[i].sketch;
        level.textContent = "Certification Level: " + guides[i].level;
        years.textContent = "Years of Experience: " + guides[i].years;
        email.textContent = "Email: " + guides[i].email;

        section.appendChild(image);
        div.appendChild(h2);
        div.appendChild(sketch);
        div.appendChild(level);
        div.appendChild(years);
        div.appendChild(email);
        section.appendChild(div);

        document.querySelector('div.guides').appendChild(section);
    }
})