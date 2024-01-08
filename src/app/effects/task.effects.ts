import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import * as TaskActions from '../actions/task.actions';
import { TaskService } from '../services/task.service';  // Import your task service

@Injectable()
export class TaskEffects {

  loadAllTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.loadAllTasks),
      mergeMap(() => this.taskService.getAllTasks().pipe(
        map(tasks => TaskActions.loadAllTasksSuccess({ tasks })),
        catchError(error => of(TaskActions.loadAllTasksFailure({ error })))
      ))
    )
  );

  // Add other effects for addTask, markTaskAsDone, changeTask, consumeDeleteRequest, etc.

  constructor(
    private actions$: Actions,
    private taskService: TaskService  // Inject your task service
  ) {}
}
