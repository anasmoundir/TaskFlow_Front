import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { TokenListComponent } from './components/token-list/token-list.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { StoreModule } from '@ngrx/store';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatCardModule} from "@angular/material/card"
import { taskReducer } from './reducers/task.reducer';
import { TaskEffects } from './effects/task.effects';
import { tokenReducer } from './reducers/token.reducer';
import { TokenEffects } from './effects/token.effects';
import { userReducer } from './reducers/user.reducer';
import { UserEffects } from './effects/user.effects';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskDetailComponent,
    TokenListComponent,
    UserListComponent,
    NavbarComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      task: taskReducer,
      token: tokenReducer,
      user: userReducer,
    }),
    EffectsModule.forRoot([
       TaskEffects,
       TokenEffects,
       UserEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
