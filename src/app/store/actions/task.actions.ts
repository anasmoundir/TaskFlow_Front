import { createAction, props } from '@ngrx/store';
import { Task } from '../../models/task';


export const loadAllTasksFailure = createAction(
  '[Task] Load All Tasks Failure',
  props<{ error: any; triggeredFromEffect?: boolean }>()
);
    export const loadAllTasksSuccess = createAction(
      '[Task] Load All Tasks Success',
      props<{ tasks: Task[]; triggeredFromEffect?: boolean }>()
    );

export const addTask = createAction('[Task] Add Task', props<{ task: Task }>());
export const updateTask = createAction('[Task] Update Task', props<{ task: Task }>());
export const deleteTask = createAction('[Task] Delete Task', props<{ taskId: number }>());
export const loadAllTasks = createAction('[Task] Load All Tasks');
export const markTaskAsDone = createAction('[Task] Mark Task As Done', props<{ taskId: number }>());
export const markTaskAsDoneSuccess = createAction('[Task] Mark Task As Done Success', props<{ task: Task }>());
export const changeTask = createAction('[Task] Change Task', props<{ managerId: string, tokenId: number }>());
export const changeTaskSuccess = createAction('[Task] Change Task Success');
export const consumeDeleteRequest = createAction('[Task] Consume Delete Request', props<{ managerId: string, tokenId: number }>());
