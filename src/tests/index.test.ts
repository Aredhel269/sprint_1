const { ToDo } = require('../todo');

// Crea una instància de ToDo
const toDo = new ToDo(); 

// Afegeix una tasca globalment
toDo.createTask('començar sprint1'); 

test("crear tasca hauria de crear una nova tasca", () => {
    expect(toDo.listTasks()).toEqual([
        { 
            id: 1,
            description: 'començar sprint1', 
            completed: false 
        }]);
});

test('listTasks ha de mostrar la llista', () => {
    expect(toDo.listTasks()).toEqual([
        { 
            id: 1,
            description: 'començar sprint1', 
            completed: false 
        }]);
});

test("completar tasca hauria de marcar com a completada una tasca", () => {
  toDo.completedTask(1); 
  expect(toDo.listTasks()[0].completed).toBe(true);
});

test("eliminar tasca hauria d'eliminar una tasca", () => {
  toDo.deleteTask(1); // Elimina la tasca amb id 1
  expect(toDo.listTasks().length).toBe(0);
});