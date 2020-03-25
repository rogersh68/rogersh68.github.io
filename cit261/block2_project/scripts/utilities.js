import { Artwork } from './artwork.js';

// set JSON URL
const requestURL = 'https://rogersh68.github.io/cit261/block2_project/scripts/data.json';

// Initialize user's art array
let myArt = [];

const artwork = new Artwork ("Impression, Sunrise", "Claude Monet", 1872, "Impressionist", "This work depicts the port of Le Havre, Monet's hometown.", "https://www.facebook.com", "https://www.claude-monet.com/images/paintings/impression-sunrise.jpg");

myArt.push(artwork);

console.log(myArt);

loadArt();

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

// Get art options from JSON data for add new selector
fetch(requestURL)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    const artworks = jsonObject['artworks'];
    for (let i = 0; i < artworks.length; i++) {
        let option = document.createElement('option');
        let value = artworks[i].artworkID;
        option.setAttribute('value', value);
        let text = artworks[i].name;
        option.textContent = text;

        document.querySelector('select.newArtwork').appendChild(option);
    }
})

// Add new artwork
window.addArt = addArt;
function addArt() {
    // Find id of artwork user selected
    let id = findID()

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
            }
        }
    })

    // Save
    saveArt(myArt);

    // Load
    loadArt();

    // reset add input 
    clearField(); // May not need with selection
}

function findID() {
    let id = document.querySelector(".newArtwork").value;
    return id;
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

// Reset the selection field:
function clearField() {
    //document.getElementById('new_task').value = ''; // reset selection field?
}


// Reset artwork list
function clearArt() {
    let section = document.querySelector(".artwork");

    if (myArt.length > 0) {
        for (let i = 0; i < myArt.length; i++) {
            section.remove();
        }
    }
    else {
        return;
    }
}

/***** Use local storage to store the user's todo list *****/

// Send to storage
function saveArt(myArt) {
    localStorage.setItem('artworks', JSON.stringify(myArt));
}

// Get stored array
function loadArt() {
    // Clear previous list from screen
    //clearArt();

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

            // Assign values to elements
            section.setAttribute('class', "artwork")
            img.setAttribute('src', artwork.imageurl);
            img.setAttribute('alt', artwork.name);
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
            section.appendChild(img);

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



