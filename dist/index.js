"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todo_1 = require("./todo");
const toDo = new todo_1.ToDo();
toDo.createTask('Començar sprint1');
toDo.completedTask(1);
toDo.deleteTask(2);
console.log(toDo.listTasks());
//# sourceMappingURL=index.js.map