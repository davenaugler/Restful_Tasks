import { Component, OnInit } from "@angular/core";
import { TaskService } from "src/app/services/task.service";
import { Task } from "src/app/models/task.interface";

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.scss"]
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  newTask: Task = {
    title: "",
    description: "",
    completed: false
  };
  selectedTask: Task;
  isEditing = false;
  constructor(private taskService: TaskService) {}

  ngOnInit() {}

  getAllDaTasks() {
    this.taskService.getAllDaTasks().subscribe(tasksFromDaDatabase => {
      this.tasks = tasksFromDaDatabase;
    });
  }

  getOneSingleTask(task: Task) {
    this.selectedTask = task;
  }

  createNewTask() {
    this.taskService.createNewTask(this.newTask).subscribe(data => {
      this.tasks.push(data);
      this.newTask.title = "";
      this.newTask.description = "";
    });
  }
  updateTask() {
    this.taskService.updateOneSingleTask(this.selectedTask).subscribe(data => {
      console.log(data);
      this.selectedTask = null;
      this.isEditing = false;
    });
  }
  deleteTask(id: string, index: number) {
    this.taskService.deleteTask(id).subscribe(data => {
      console.log(data);
      this.tasks.splice(index, 1);
    });
  }
}
