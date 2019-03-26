import { Component, EventEmitter, Output } from '@angular/core';
// import { TodosListsComponent } from './todos-lists/todos-lists.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-project';
  // childdata =  ' ';
  // onClick(value: string) {
  //     this.childdata = value;
  // }
   Todos = [
    {name: 'Angular_01', completed: false},
    {name: 'Angular_02', completed: false},
    {name: 'Angular_03', completed: false}
  ];
  TodoName = '';

  DeleteTodo(todo) {
  this.Todos.splice(this.Todos.indexOf(todo), 1);
  }
  AddTodo() {
    this.Todos.push({name: this.TodoName, completed: true});
    this.TodoName = '';
  }
  MarkColor(status) {
    switch (status) {
      case true:
      return 'green';
      case false:
      return 'white';
    }
  }
  ChangeCompleted(Todo) {
  if ( Todo.completed === true ) {
    Todo.completed = false;
    this.MarkColor(Todo.completed);
} else if ( Todo.completed === false) {
    Todo.completed = true;
    this.MarkColor(Todo.completed);
}
  }
}

