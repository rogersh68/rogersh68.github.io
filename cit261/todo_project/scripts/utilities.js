import { Todo } from './todos.js';

// Declare object array
let tasks = [];


// See if there are items in storage and load if there are
if (localStorage.getItem("tasks")) {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    loadTasks();
}

/***** Page utilities *****/

// Let user add a new ToDo item:
window.addItem = addItem;

function addItem () {
    //Create new Todo object
    const task = new Todo(
        false,
        document.getElementById('new_task').value,
        getTimeID()
    );

    // Push new task object onto array
    tasks.push(task);

    // Save new task
    saveTasks(tasks);

    // Load new tasks to table
    loadTasks();

    // Reset add_item input field;
    clearField();
}


// Let user filter completed items:
window.filterCompleted = filterCompleted;

function filterCompleted() {
    //go through array, if completed == true display
    clearTasks();

    tasks.forEach(
        (task) => {
            if (task.completed == true) {
                // Create HTML elements
                let tr = document.createElement('tr');
                let tdCompleted = document.createElement('td');
                let tdTask = document.createElement('td');
                let tdId = document.createElement('td');
                let tdDelete = document.createElement('td');

                // Assign values to elements
                tdTask.textContent = task.taskName;
                tdId.textContent = task.id;

                // Make completed column a link
                let aComplete = document.createElement('a');
                aComplete.addEventListener('click', markComplete.bind(null, task), false);
                aComplete.setAttribute('href', '#');
                // Add different type of box symbol depending on if completed
                if (task.completed == true) {
                    aComplete.innerHTML = "&#9745;";
                }
                else {
                    aComplete.innerHTML = "&#9744;";
                }
                
                tdCompleted.appendChild(aComplete);
                
                // Make delete column a link
                let aDelete = document.createElement('a');
                aDelete.setAttribute('href', '#');
                aDelete.addEventListener('click', deleteTask.bind(null, task), false);
                aDelete.innerHTML = "&#9747;";

                tdDelete.appendChild(aDelete);

                // Append content to elements
                tr.appendChild(aComplete);
                tr.appendChild(tdTask);
                tr.appendChild(tdId);
                tr.appendChild(tdDelete);

                document.querySelector('tbody').appendChild(tr);
            }
        }
    );

}


// Let user filter active items:
window.filterActive = filterActive;

function filterActive() {
    //go through array, if completed == false display
    clearTasks();

    tasks.forEach(
        (task) => {
            if (task.completed == false) {
                // Create HTML elements
                let tr = document.createElement('tr');
                let tdCompleted = document.createElement('td');
                let tdTask = document.createElement('td');
                let tdId = document.createElement('td');
                let tdDelete = document.createElement('td');

                // Assign values to elements
                tdTask.textContent = task.taskName;
                tdId.textContent = task.id;

                // Make completed column a link
                let aComplete = document.createElement('a');
                aComplete.addEventListener('click', markComplete.bind(null, task), false);
                aComplete.setAttribute('href', '#');
                // Add different type of box symbol depending on if completed
                if (task.completed == true) {
                    aComplete.innerHTML = "&#9745;";
                }
                else {
                    aComplete.innerHTML = "&#9744;";
                }
                
                tdCompleted.appendChild(aComplete);
                
                // Make delete column a link
                let aDelete = document.createElement('a');
                aDelete.setAttribute('href', '#');
                aDelete.addEventListener('click', deleteTask.bind(null, task), false);
                aDelete.innerHTML = "&#9747;";

                tdDelete.appendChild(aDelete);

                // Append content to elements
                tr.appendChild(aComplete);
                tr.appendChild(tdTask);
                tr.appendChild(tdId);
                tr.appendChild(tdDelete);

                document.querySelector('tbody').appendChild(tr);
            }
        }
    );
}


// Let user mark items as complete:
function markComplete(task) {
    //find index of task in array
    let pos = tasks.indexOf(task);

    //if can't find task exit function
    if (pos < 0) {
        return;
    }

    //change completed
    if (task.completed == false) {
        task.completed = true;
    }
    else {
        task.completed = false;
    }
    
    // Save updates
    saveTasks(tasks);

    // Reload task list
    loadTasks();
}


// Let user delete items:
function deleteTask(task) {
    // find index of task in array
    let pos = tasks.indexOf(task);

    // if can't find task exit function
    if (pos < 0) {
        return;
    }

    // Take out the deleted task
    tasks.splice(pos, 1);

    // Save updates
    saveTasks(tasks);

    // Reload task list
    loadTasks();
}


// Count number of tasks left to do
function countTasks() {
    let count = 0;

    tasks.forEach(
        (task) => {
            if (task.completed == false) {
                count += 1;
            }
        }
    )

    document.getElementById('tasks_left').innerHTML = count;
}


function getTimeID() {
    var current = new Date();
    var timeStamp = current.toLocaleString(undefined, { dateStyle: 'short', timeStyle: 'short'}).replace(',', '');
    return timeStamp;
}

/***** Keep the page clean *****/

// Reset the add_item input field:
function clearField() {
    document.getElementById('new_task').value = '';
}


// Reset task list:
function clearTasks() {
    let table = document.querySelector('tbody');
    while (table.rows.length > 0) {
        table.deleteRow(0);
    }
}


/***** Use local storage to store the user's todo list *****/

// Send to storage:
function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


// Get tasks:
window.loadTasks = loadTasks;

function loadTasks() {
    // Clear tasks list from screen
    clearTasks();

    // Loop through tasks array
    tasks.forEach(
        (task) => {
            // Create HTML elements
            let tr = document.createElement('tr');
            let tdCompleted = document.createElement('td');
            let tdTask = document.createElement('td');
            let tdId = document.createElement('td');
            let tdDelete = document.createElement('td');

            // Assign values to elements
            tdTask.textContent = task.taskName;
            tdId.textContent = task.id;

            // Make completed column a link
            let aComplete = document.createElement('a');
            aComplete.addEventListener('click', markComplete.bind(null, task), false);
            aComplete.setAttribute('href', '#');
            // Add different type of box symbol depending on if completed
            if (task.completed == true) {
                aComplete.innerHTML = "&#9745;";
            }
            else {
                aComplete.innerHTML = "&#9744;";
            }
            
            tdCompleted.appendChild(aComplete);
            
            // Make delete column a link
            let aDelete = document.createElement('a');
            aDelete.setAttribute('href', '#');
            aDelete.addEventListener('click', deleteTask.bind(null, task), false);
            aDelete.innerHTML = "&#9747;";

            tdDelete.appendChild(aDelete);

            // Append content to elements
            tr.appendChild(aComplete);
            tr.appendChild(tdTask);
            tr.appendChild(tdId);
            tr.appendChild(tdDelete);

            document.querySelector('tbody').appendChild(tr);
        }
    );

    // Update number of tasks
    countTasks();
}