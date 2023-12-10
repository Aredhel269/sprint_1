// index.ts
import { Task, ToDo } from './todo';

const toDo = new ToDo();

// Afegir una tasca
toDo.createTask('Començar sprint1');

// Marcar una tasca com a completada
toDo.completedTask(1);

// Eliminar una tasca
toDo.deleteTask(2);

// Mostrar la llista de tasques
console.log(toDo.listTasks());
