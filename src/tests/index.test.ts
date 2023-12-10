const { ToDo } = require('../todo');

test("afegir tasca hauria d'afegir una nova tasca a la llista", () => {
  // Crea una instància de ToDo
  const toDo = new ToDo(); 
  toDo.createTask('Buy groceries'); 
  expect(toDo.readListTasks()).toEqual([
    { 
      id: 1,
      description: 'Buy groceries', 
      completed: false }]);
});



/* describe('Calc', () => {
 test('should return 10 for add(6, 4)', () => {
   expect(new Calc().add(6, 4)).toBe(10)
 })
 test('should return 9 for add(10, -1)', () => {
   expect(new Calc().add(10, -1)).toBe(9)
 })
})
 



test('completeTask should mark a task as completed', () => {
  taskManager.completeTask(0);
  expect(taskManager.listTasks()[0].completed).toBe(true);
});

test('listTasks should return the list of tasks', () => {
  expect(taskManager.listTasks()).toEqual([{ task: 'Buy groceries', completed: true }]);
});

*/