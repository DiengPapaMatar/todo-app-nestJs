import { Body, Controller, Get, Post } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './interfaces/todo.interface';

@Controller('todos')
export class TodosController {

    constructor(
        private readonly tdService: TodosService
    ){}

    @Get()
    findAll(): Todo[]{
        return this.tdService.findAllTodos();
    }

    @Post()
    createTodo(@Body() newTodo){
        this.tdService.createTodo(newTodo)
    }
}
