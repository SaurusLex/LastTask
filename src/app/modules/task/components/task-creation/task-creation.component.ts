import { ComunicatorService } from "./../../../../services/utils/comunicator.service";
import { NavigationService } from "../../../../services/utils/navigation.service";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { TasksService } from "src/app/services/tasks/tasks.service";
import { Task } from "./../../../../models/task.model";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { Route } from "@angular/compiler/src/core";

@Component({
  selector: "app-task-creation",
  templateUrl: "./task-creation.component.html",
  styleUrls: ["./task-creation.component.sass"],
})
export class TaskCreationComponent implements OnInit {
  previousUrl = "";
  createTaskForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private tasksService: TasksService,
    private router: Router,
    private navigationService: NavigationService,
    private ar: ActivatedRoute,
    private comunicatorService: ComunicatorService
  ) {}

  ngOnInit(): void {
    
    this.createTaskForm = this.fb.group({
      title: ["", Validators.required],
      estimated_duration: ["", Validators.required],
      description: [""],
    });

    this.previousUrl = this.navigationService.getPreviousUrl();
  }
  create() {
    let task: Task = this.createTaskForm.value;
    task.project_id = this.ar.snapshot.params.id;
    task.duration = 0;
    if (this.createTaskForm.valid) {
      this.tasksService.create(task).subscribe((success) => {
        this.comunicatorService.clearMessages()
        this.comunicatorService.sendChange({action:"create",item:"task"})
        console.log(success);
        this.router.navigate([this.previousUrl]);
      });
    } else {
      for (let control in this.createTaskForm.controls) {
        this.createTaskForm.controls[control].markAsDirty();
      }
    }
  }
}
