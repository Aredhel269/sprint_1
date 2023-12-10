export class Task {
    id: number;
    description: string;
    completed: boolean;

    constructor(id: number, description: string, completed: boolean = false) {
        this.id = id;
        this.description = description;
        this.completed = completed;
    }
}
export class ToDo {
    tasks: Task[] = [];

    createTask(description: string): void {
        //Crear una nova instància de la classe Task
        //La classe Task té un constructor amb tres paràmetres
        const newTask: Task = new Task(this.tasks.length + 1, description, false);
        this.tasks.push(newTask);
    }

    completedTask(id: number): void {
        // Mètode find per buscar una tasca a la llista (this.tasks) 
        // amb id com a paràmetre. 
        const task = this.tasks.find((t) => t.id === id);
        if (task) {
            task.completed = true;
        }
    }

    deleteTask(id: number): void {
        const index = this.tasks.findIndex((t) => t.id === id);
        if (index !== -1) {  // -1 significa no trobat
        // Utilitzem el mètode splice per eliminar la tasca a la posició trobada
            this.tasks.splice(index, 1);
            //index: a partir d'on començarà a eliminar
            //1: quants elements es volen eliminar a partir de l'índex 
        }
    }    

    listTasks(): Task[] {
        return this.tasks;
    }
}
