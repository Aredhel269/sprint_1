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
        this.listTasks = [];
    }
    createTask(description) {
        const newTask = {
            id: this.listTasks.length + 1,
            description: description,
            completed: false,
        };
        this.listTasks.push(newTask);
    }
    completedTask(id) {
        const task = this.listTasks.find((t) => t.id === id);
        if (task) {
            task.completed = true;
        }
    }
    deleteTask(id) {
        this.listTasks = this.listTasks.filter((t) => t.id !== id);
    }
    readListTasks() {
        return this.listTasks;
    }
}
exports.ToDo = ToDo;
//# sourceMappingURL=todo.js.map