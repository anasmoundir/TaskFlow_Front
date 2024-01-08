import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Task } from '../models/task';
import * as TaskActions from '../actions/task.actions';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = "";

  constructor(private http: HttpClient, private store: Store) {}

  getAllTasks(): Observable<Task[]> {
    this.store.dispatch(TaskActions.loadAllTasks());
    return this.http.get<Task[]>(`${this.apiUrl}/api/tasks/all`);
  }

  addTask(task: Task): Observable<Task> {
    this.store.dispatch(TaskActions.addTask({ task }));
    return this.http.post<Task>(`${this.apiUrl}/api/tasks/save`, task);
  }

  markTaskAsDone(taskId: number): Observable<Task> {
    this.store.dispatch(TaskActions.markTaskAsDone({ taskId }));
    return this.http.post<Task>(`${this.apiUrl}/api/tasks/status/${taskId}/edit`, null);
  }

  changeTask(managerId: string, tokenId: number): Observable<void> {
    this.store.dispatch(TaskActions.changeTask({ managerId, tokenId }));
    return this.http.post<void>(`${this.apiUrl}/api/tasks/change`, { managerId, tokenId });
  }

  consumeDeleteRequest(managerId: string, tokenId: number): Observable<void> {
    this.store.dispatch(TaskActions.consumeDeleteRequest({ managerId, tokenId }));
    return this.http.post<void>(`${this.apiUrl}/api/tasks/request/delete`, { managerId, tokenId });
  }
}
