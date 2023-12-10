"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToDo = exports.Task = void 0;
class Task {
    constructor(id, description, completed = false) {
        this.id = id;
        this.description = description;
        this.completed = completed;
    }
}
exports.Task = Task;
class ToDo {
    constructor() {
        this.tasks = [];
    }
    createTask(description) {
        const newTask = new Task(this.tasks.length + 1, description, false);
        this.tasks.push(newTask);
    }
    completedTask(id) {
        const task = this.tasks.find((t) => t.id === id);
        if (task) {
            task.completed = true;
        }
    }
    deleteTask(id) {
        const index = this.tasks.findIndex((t) => t.id === id);
        if (index !== -1) {
            this.tasks.splice(index, 1);
        }
    }
    listTasks() {
        return this.tasks;
    }
}
exports.ToDo = ToDo;
//# sourceMappingURL=todo.js.map