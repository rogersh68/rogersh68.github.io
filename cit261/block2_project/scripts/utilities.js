import { Artwork } from './artwork.js';

// Initialize user's art array
let myArt = [];

// See if there are items in storage and load if there are
if (localStorage.getItem("myArt")) {
    myArt = JSON.parse(localStorage.getItem("myArt"));
    loadArt();
}

/***** Page utilities *****/


// Switch views
const changeview = document.querySelector('.view');
changeview.addEventListener("click", viewChanger, false);

function viewChanger() {
    document.querySelector(".display").classList.toggle("display_all");
}

// Add new artwork
function addArt () {
    const artwork = 0; //placeholder for now
    // Use JSON fetch? event listener, click then add

    // Push onto array
    myArt.push(artwork);

    // Save
    saveArt(myArt);

    // Load
    loadArt();

    // reset add input 
    clearField(); // May not need with selection
}

// Remove artwork
function removeArt (artwork) {
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
    document.getElementById('new_task').value = ''; // reset selection field?
}


// Reset artwork list
// needs to be updated to work with grid
function clearArt() {
    let table = document.querySelector('tbody');
    while (table.rows.length > 0) {
        table.deleteRow(0);
    }
}


/***** Use local storage to store the user's todo list *****/

// Send to storage
function saveArt(myArt) {
    localStorage.setItem('tasks', JSON.stringify(myArt));
}

// Get stored array
function loadArt() {
    // Clear previous list from screen
    clearArt();

    // Loop through art array
    myArt.forEach(
        (artwork) => {
            // Create HTML elements

            // Assign values to elements

            // Append content to elements

        }
    );
}


// Upload the JSON data
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


