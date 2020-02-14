/* Use local storage to store the user's todo list */

// send to storage
function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function clearTasks() {
    let table = document.querySelector('tbody');
    while (table.rows.length > 0) {
        table.deleteRow(0);
    }
}

// get tasks from storage
function loadTasks(tasks){
    clearTasks();

    tasks.forEach(
        (task) => {
            document.quertySelector('tbody').innerHTML +=
            `<tr>
                <td>${ task.completed }</td>
                <td>${ task.taskName }</td>
            <td>${ task.id }</td>`;
        }
    );
}

// Week 5 30 mins into video
// See week 04 announcment video - helpful concepts
// Week 1 - local storage
