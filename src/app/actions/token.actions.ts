import { createAction, props } from '@ngrx/store';

export const loadTokens = createAction('[Token] Load Tokens');
export const loadTokensSuccess = createAction('[Token] Load Tokens Success', props<{ tokens: any[] }>());
export const loadTokensFailure = createAction('[Token] Load Tokens Failure', props<{ error: any }>());
