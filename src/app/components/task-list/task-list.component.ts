import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from '../../models/task';
import { getAllTasks } from '../../store/selectors/task.selector';
import * as TaskActions from '../../store/actions/task.actions';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Observable<Task[]>;

  constructor(private store: Store) {
    this.tasks = this.store.select(getAllTasks);
  }

  ngOnInit(): void {
    console.log('Dispatching loadAllTasks action...');
    this.store.dispatch(TaskActions.loadAllTasks());
  }

}
