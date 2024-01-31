import { createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';

export const initialState: any /* Set your initial state here */ = {};

export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUsersSuccess, (state, { users }) => ({ ...state, users })),
  // Handle other actions...
);
