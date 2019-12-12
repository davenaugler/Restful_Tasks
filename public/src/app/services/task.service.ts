import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Task } from "../models/task.interface";

@Injectable({
  providedIn: "root"
})
export class TaskService {
  constructor(private http: HttpClient) {}

  getAllDaTasks() {
    return this.http.get<Task[]>("/api/tasks");
  }

  getOneSingleTask(id: string) {
    return this.http.get<Task>(`/api/tasks/${id}`);
  }

  updateOneSingleTask(task: Task) {
    return this.http.put<Task>(`/api/tasks/update/${task._id}`, task);
  }

  createNewTask(task: Task) {
    return this.http.post<Task>("/api/tasks/create", task);
  }

  deleteTask(id: string) {
    return this.http.delete(`/api/tasks/delete/${id}`);
  }
}
