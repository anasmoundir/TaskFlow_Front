import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Task } from '../../models/task';
import { AppState } from '../app.state';

const selectTaskState = createFeatureSelector<AppState>('task');

export const getAllTasks = createSelector(
  selectTaskState,
  (state: AppState) => state.task
);

export const getTaskById = createSelector(
  selectTaskState,
  (state: AppState, props: { id: number }) => state.task.find(task => task.id === props.id)
);
