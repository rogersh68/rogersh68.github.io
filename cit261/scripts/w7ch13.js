
/*
// Basic usage of Fetch API
fetch('https://example.com/data')
.then( // code that handles the response )
.catch( // code that runs if the server returns an error )

// Fetch API example
const url = 'https:example.com/data';
const headers = new Headers({ 'Content-Type': 'text/plain', 'Accept-Charset' : 'utf-8', 'Accept-Encoding':'gzip,deflate' })
const request = (url,{
    headers: headers
})
fetch(request)
.then( function(response) {
    if(response.ok) {
        return response;
    }
    throw Error(response.statusText);
})
.then( response => // do something with response )
.catch( error => console.log('There was an error!') )
*/

// Chapter 13 Receiving Information example

// assign each button in the HTML file to a variable
const textButton = document.getElementById('number');
const apiButton = document.getElementById('chuck');
const outputDiv = document.getElementById('output');

// assing the URLs to variables
const textURL = 'http://numbersapi.com/random';
const apiURL = 'https://api.chucknorris.io/jokes/random';

// assign event handler to number fact button (textButton)
textButton.addEventListener('click', () => {
    fetch(textURL)
    .then( response => {
        outputDiv.innerHTML = 'Waiting for response...';
    if(response.ok) {
        return response;
    }
        throw Error(response.statusText);
    })
    .then( response => response.text() )
    .then( text => outputDiv.innerText = text )
    .catch( error => console.log('There was an error:', error))
},false);

// assign event handler to chuck norris button (apiButton)
apiButton.addEventListener('click', () => {
    fetch(apiURL)
    .then( response => {
        outputDiv.innerHTML = 'Waiting for response...';
    if(response.ok) {
        return response;
    }
    throw Error(response.statusText);
    })
    .then( response => response.json() )
    .then( data => outputDiv.innerText = data.value )
    .catch( error => console.log('There was an error:', error))
},false);

// Chapter 13 Sending Information example

// create form 
const form = document.forms['todo'];

// add event lister
form.addEventListener('submit', addTask, false);
function addTask(event) {
    // prevent default behaviro of the form so it doesn't get submitted when button is clicked
    event.preventDefault(); 
    const number = form.task.value;
    const task = {
        userId: 1,
        title: form.task.value,
        completed: false
    }
    // transform object to a JSON string, send to server
    const data = JSON.stringify(task);
    const url = 'https://jsonplaceholder.typicode.com/todos';
    const headers = new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    });
    // use fetch to send and deal with response
    const request = new Request(url,
    {
        method: 'POST',
        header: headers,
        body: data
    }
    )
    fetch(request)
    .then( response => response.json() )
    .then( task => console.log(`Task saved with an id of ${task.id}`) )
    .catch( error => console.log('There was an error:', error))
}