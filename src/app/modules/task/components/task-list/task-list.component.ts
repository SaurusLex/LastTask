import { Project } from "../../../../models/project.model";
import { Component, OnInit, Input, SimpleChanges } from "@angular/core";
import { Task } from "src/app/models/task.model";
import { TasksService } from "src/app/services/tasks/tasks.service";
import { Observable, observable, of, from } from "rxjs";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.sass"],
})
export class TaskListComponent implements OnInit {
  @Input() project;
  tasks: Task[] = [];
  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    this.getTasks();

  }
  getTasks() {
    this.tasksService.getTasks(this.project.id).subscribe((data) => {
      this.tasks = []
      this.tasks.push(...data)
    });
  }
  onTaskChange(){
    this.getTasks()
  }
  getTotalDuration(){
    let totalHours=0;
    this.tasks.forEach((task)=>{
      totalHours += task.duration
    })
    return totalHours;
  }

}
