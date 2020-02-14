/* Todo class constructor */

export class Todo {
    constructor(completed, taskName, id) {
        this.completed = completed; //Boolean, true if task completed, false if incomplete
        this.taskName = taskName; //String, name of the task given by user
        this.id = id; //Timestamp, when the task was created
    }
}