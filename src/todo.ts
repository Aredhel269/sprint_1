// todo.ts
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
    listTasks: Task[] = [];

    createTask(description: string): void {
        const newTask: Task = new Task(this.listTasks.length + 1, description, false);
        this.listTasks.push(newTask);
    }

    completedTask(id: number): void {
        const task = this.listTasks.find((t) => t.id === id);
        if (task) {
            task.completed = true;
        }
    }

    deleteTask(id: number): void {
        this.listTasks = this.listTasks.filter((t) => t.id !== id);
    }

    readListTasks(): Task[] {
        return this.listTasks;
    }
}
