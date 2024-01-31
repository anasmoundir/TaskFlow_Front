import { createReducer, on } from '@ngrx/store';
import * as TokenActions from '../actions/token.actions';

export const initialState: any /* Set your initial state here */ = {};

export const tokenReducer = createReducer(
  initialState,
  on(TokenActions.loadTokensSuccess, (state, { tokens }) => ({ ...state, tokens })),

);
