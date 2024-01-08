import { createAction, props } from '@ngrx/store';

import { Task } from '../models/task';

export const loadAllTasks = createAction('[Task] Load All Tasks');
export const loadAllTasksSuccess = createAction('[Task] Load All Tasks Success', props<{ tasks: Task[] }>());
export const loadAllTasksFailure = createAction('[Task] Load All Tasks Failure', props<{ error: any }>());

export const addTask = createAction('[Task] Add Task', props<{ task: Task }>());
export const addTaskSuccess = createAction('[Task] Add Task Success', props<{ task: Task }>());
export const addTaskFailure = createAction('[Task] Add Task Failure', props<{ error: any }>());

export const markTaskAsDone = createAction('[Task] Mark Task As Done', props<{ taskId: number }>());
export const markTaskAsDoneSuccess = createAction('[Task] Mark Task As Done Success', props<{ task: Task }>());
export const markTaskAsDoneFailure = createAction('[Task] Mark Task As Done Failure', props<{ error: any }>());

export const changeTask = createAction('[Task] Change Task', props<{ managerId: string, tokenId: number }>());
export const changeTaskSuccess = createAction('[Task] Change Task Success');
export const changeTaskFailure = createAction('[Task] Change Task Failure', props<{ error: any }>());

export const consumeDeleteRequest = createAction('[Task] Consume Delete Request', props<{ managerId: string, tokenId: number }>());
export const consumeDeleteRequestSuccess = createAction('[Task] Consume Delete Request Success');
export const consumeDeleteRequestFailure = createAction('[Task] Consume Delete Request Failure', props<{ error: any }>());

export const deleteTask = createAction('[Task] Delete Task', props<{ userId: string, taskId: number }>());
export const deleteTaskSuccess = createAction('[Task] Delete Task Success');
export const deleteTaskFailure = createAction('[Task] Delete Task Failure', props<{ error: any }>())
