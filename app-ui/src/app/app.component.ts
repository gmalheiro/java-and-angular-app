<<<<<<< HEAD
import { Component } from '@angular/core';
=======
import { Component, OnInit, ViewChild } from '@angular/core';
import { Todo } from './todo';
import { AppService } from './app.service';
import { CheckboxChangeEvent } from 'primeng/checkbox';
>>>>>>> d12c691c20911fdf6bc91792121a25266783a957

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
<<<<<<< HEAD
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app-ui';
=======
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('todoTask') todoTask: any;

  task = '';
  todos: Todo[] = [];

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.appService.getTodoList().subscribe(
      response => {
        this.todos = response;
      }
    )
  }

  updateTodo(e: CheckboxChangeEvent, todo: Todo) {
    this.appService.updateTodo({ ...todo, completed: e.checked }).subscribe(
      response => console.log(response)
    )
  }

  deleteTodo(e: unknown, id: Todo['id']) {
    this.appService.deleteTodo(id).subscribe(
      response => this.getList()
    )
  }

  addTodo() {
    this.appService.addTodo({ task: this.task, completed: false }).subscribe(
      response => {
        this.todoTask.reset();
        this.getList();
      }
    )
  }
>>>>>>> d12c691c20911fdf6bc91792121a25266783a957
}
