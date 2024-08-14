import { Injectable } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';

export class TodosService {

    todos: Todo[] = [
        {
            id: 1,
            titre: 'Todo 1',
            description: 'Mon premier todo',
            fait: false,
        },
        {
            id: 2,
            titre: 'Todo 2',
            description: 'Mon deuxieme todo',
            fait: true,
        },
        {
            id: 3,
            titre: 'Todo 3',
            description: 'Mon troisieme todo',
            fait: false,
        }
    ]

    findAllTodos(){
        return this.todos;
    }

    createTodo(newTodo){
        console.log('new todo', newTodo)
        this.todos = [...this.todos, newTodo]
    }
}
