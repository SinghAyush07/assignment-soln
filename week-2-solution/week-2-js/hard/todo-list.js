/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
    constructor(){
        this.todos=[];
    }

    add(todo){
        this.todos.push(todo);
    }

    remove(indexOfTodo){
        if( indexOfTodo >= 0 && indexOfTodo <= this.todos.length)
            this.todos.splice(indexOfTodo,1);
        else
            console.log("Invalid Index");
    }

    update(indexOfTodo, updatedTodo){
        if(indexOfTodo >= 0 && indexOfTodo <= this.todos.length)
            this.todos[indexOfTodo] = updatedTodo;
        else
             console.log("Invalid Index");        
    }

    getAll(){
        console.log(this.todos);
    }

    get(indexOfTodo){
        console.log(this.todos[indexOfTodo]);
    }

    clear(){
        this.todos = [];
    }
}

const todoList = new Todo();
todoList.add('Buy groceries');
todoList.add('Read a book');
todoList.getAll(); 
todoList.update(0, 'Buy fruits');
todoList.get(0);
todoList.remove(1);
todoList.getAll(); 
todoList.clear();
todoList.getAll(); 