import { createReducer, on } from '@ngrx/store';
import * as TaskActions from '../actions/task.actions';
import { Task } from '../models/task';

export const initialState: Task[] = [];

export const taskReducer = createReducer(
  initialState,
  on(TaskActions.loadAllTasksSuccess, (_state, { tasks }) => tasks),
  on(TaskActions.addTask, (state, { task }) => [...state, task]),
  on(TaskActions.deleteTask, (state, { taskId }) => state.filter(task => task.id !== taskId)),
);
