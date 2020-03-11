const requestURL = 'https://rogersh68.github.io/cit261/block2_project/scripts/data.json';

fetch(requestURL)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    const artworks = jsonOnbect['artworks'];
    for (let i = 0; i < artworks.length; i++) {
        let display = document.createElement('section');
        let h2 = document.createElement('h2');
        let image = document.createElement('img');

        h2.textContent = artworks[i].name;
        image.setAttribute('src', artworks[i].imageurl);

        display.appendChild(h2);
        display.appendChild(image);

        document.querySelector('div.display').appendChild(display);
    }
})