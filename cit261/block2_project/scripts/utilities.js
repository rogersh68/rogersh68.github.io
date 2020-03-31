import { Artwork } from './artwork.js';

// set JSON URL
const requestURL = 'https://rogersh68.github.io/cit261/block2_project/scripts/data.json';

// Initialize user's art array
let myArt = [];

// See if there are items in storage and load if there are
if (localStorage.getItem("myArt")) {
    myArt = JSON.parse(localStorage.getItem("myArt"));
    loadArt();
}

/***** Page utilities *****/
// Options toggle
const menu = document.querySelector('.menu');
menu.addEventListener("click", optionsMenu, false);

function optionsMenu() {
    document.querySelector(".options").classList.toggle("viewOptions");
}

// Switch views
const changeview = document.querySelector('.view');
changeview.addEventListener("click", viewChanger, false);

function viewChanger() {
    document.querySelector(".display").classList.toggle("display_all");

    if (changeview.innerHTML === "View All") {
        changeview.innerHTML = "Detailed View";
    }
    else {
        changeview.innerHTML = "View All";
    }
}


// Get JSON data for select options
fetch(requestURL)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    const artworks = jsonObject['artworks'];
    for (let i = 0; i < artworks.length; i++) {
        let option = document.createElement('option');
        
        option.setAttribute('value', artworks[i].artworkID);
        option.textContent = artworks[i].name;

        document.querySelector('select.newArtwork').appendChild(option);
    }
})

// Add new artwork
window.addArt = addArt;
function addArt() {
    // Find id of artwork user selected
    let id = document.querySelector(".newArtwork").value;

    // Fetch artwork's JSON data
    fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const artworks = jsonObject['artworks'];
        for (let i = 0; i < artworks.length; i++) {
            if (id == artworks[i].artworkID) {
                // Save data for artwork
                let name = artworks[i].name;
                let artist = artworks[i].artist;
                let created = artworks[i].created;
                let style = artworks[i].style;
                let fact = artworks[i].fact;
                let source = artworks[i].source;
                let imageurl = artworks[i].imageurl;

                // Create artwork object
                const artwork = new Artwork (name, artist, created, style, fact, source, imageurl);

                // Push onto array
                myArt.push(artwork);

                // Save
                saveArt(myArt);

                // Load
                loadArt();
            }
        }
    })

    // Reset/Update art select 
    updateSelect();
}

// Remove artwork
function removeArt(artwork) {
    // find index of artwork in array
    let pos = myArt.indexOf(artwork);

    // if can't find artwork exit function
    if (pos < 0) {
        return;
    }

    // remove the artwork from the array
    myArt.splice(pos, 1);

    // Save
    saveArt(myArt);

    // Load
    loadArt();
}

/***** Keep the page clean *****/

// Reset the selection field
function updateSelect() {
    // Reset selection field to prompt
    let select = document.querySelector(".newArtwork");
    select.selectedIndex = 0;
}


// Clear display
function clearArt() {
    let section = document.querySelector(".artwork");

    if (section != null) {
        section.remove();
    } 
}

/***** Use local storage to store the user's todo list *****/

// Send to storage
function saveArt(myArt) {
    localStorage.setItem('myArt', JSON.stringify(myArt));
}

// Get stored array
function loadArt() {
    // Clear previous list from screen
    for (let i = 0; i <= myArt.length; i++) {
        clearArt();
    }
    

    // Loop through art array
    myArt.forEach(
        (artwork) => {
            // Create HTML elements
            let section = document.createElement('section')
            let img = document.createElement('img');
            let div = document.createElement('div');
            let h2 = document.createElement('h2');
            let h3 = document.createElement('h3');
            let pCreated = document.createElement('p');
            let pStyle = document.createElement('p');
            let pFact = document.createElement('p');
            let aSource = document.createElement('a');
            let aRemove = document.createElement('a');
            let separator = document.createElement('span');
            let figcaption = document.createElement('figcaption');
            let imgDiv = document.createElement('div');

            // Assign values to elements
            section.setAttribute('class', "artwork")
            imgDiv.setAttribute('class', "art-image");
            img.setAttribute('src', artwork.imageurl);
            img.setAttribute('alt', artwork.name);
            figcaption.textContent = artwork.name + " by " + artwork.artist;
            div.setAttribute('class', "art-desc");
            h2.textContent = artwork.name;
            h3.textContent = "By: " + artwork.artist;
            pCreated.textContent = "Year Created: " + artwork.created;
            pStyle.textContent = "Style: " + artwork.style;
            pFact.textContent = artwork.fact;
            aSource.setAttribute('href', artwork.source);
            aSource.textContent = "Learn More";
            aRemove.setAttribute('href', '#');
            aRemove.addEventListener('click', removeArt.bind(null, artwork), false);
            aRemove.textContent = "Remove";
            separator.innerHTML = "&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;";

            // Append content to elements
            imgDiv.appendChild(img);
            imgDiv.appendChild(figcaption);

            section.appendChild(imgDiv);

            div.appendChild(h2);
            div.appendChild(h3);
            div.appendChild(pCreated);
            div.appendChild(pStyle);
            div.appendChild(pFact);
            div.appendChild(aSource);
            div.appendChild(separator);
            div.appendChild(aRemove);
            
            section.appendChild(div);
        
            // Append section to HTML display div
            document.querySelector('.display').appendChild(section);
        }
    );
}



