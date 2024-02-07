import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { TaskEffects } from './effects/task.effects';
import { StoreModule as NgRxStoreModule, ActionReducerMap } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import * as fromTask from './reducers/task.reducer';

import { AppState } from './app.state';

const reducers: ActionReducerMap<AppState> = {
  task: fromTask.taskReducerWrapper,
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgRxStoreModule.forRoot(reducers),
    EffectsModule.forRoot([TaskEffects]),
    StoreRouterConnectingModule.forRoot(),
  ],
})
export class TaskStoreModule {}
