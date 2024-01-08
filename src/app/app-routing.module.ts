import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { TokenListComponent } from './components/token-list/token-list.component';


const routes: Routes = [
  {path:"task-details", component : TaskDetailComponent},
  {path:"task-list",component:TaskListComponent},
  {path:"user-list",component:UserListComponent},
  {path:"token-list",component:TokenListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
