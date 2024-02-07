import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError, distinctUntilChanged, filter } from 'rxjs/operators';
import * as TaskActions from '../actions/task.actions';
import { TaskService } from '../../services/task.service';


@Injectable()
export class TaskEffects {


  loadAllTasks$ = createEffect(() =>
  this.actions$.pipe(
    ofType(TaskActions.loadAllTasks),
    filter((action) => !('triggeredFromEffect' in action)),
    mergeMap(() =>
      this.taskService.getAllTasks().pipe(
        map(tasks => {
          console.log('Tasks loaded successfully:', tasks);
          return TaskActions.loadAllTasksSuccess({ tasks, triggeredFromEffect: true});
        }),
        catchError(error => {
          console.error('Error loading tasks:', error);
          return of(TaskActions.loadAllTasksFailure({ error, triggeredFromEffect: true }));
        })
      )
    )
  )
);


  constructor(
    private actions$: Actions,
    private taskService: TaskService
  ) {}
}
