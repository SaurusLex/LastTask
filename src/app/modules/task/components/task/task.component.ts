import { ComunicatorService } from "./../../../../services/utils/comunicator.service";
import { TasksService } from "src/app/services/tasks/tasks.service";
import { Task } from "../../../../models/task.model";
import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import * as moment from "moment";
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";
import { ConfirmationService } from "primeng/api";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.sass"],
  animations: [
    trigger("deleteTask", [
      state("normal", style({})),
      state("deleted", style({ opacity: 0, transform: "scale(0.0)" })),
      transition("normal => deleted", [animate("0.3s")]),
    ]),
  ],
})
export class TaskComponent implements OnInit {
  isDestroyed = false;
  @Input() task: Task;
  daysSinceCreation: number;
  horas: number;
  @Output() taskChange = new EventEmitter();
  constructor(
    private tasksService: TasksService,
    private confirmationService: ConfirmationService,
    private comunicatorService: ComunicatorService
  ) {}

  ngOnInit(): void {
    let today = moment(new Date());
    let taskDate = moment(this.task.created_at);
    this.daysSinceCreation = today.diff(taskDate, "days");
  }
  sumarHoras(horas) {
    if (horas) {
      this.task.duration = this.task.duration + parseFloat(horas);
      this.updateTask();
    }
  }
  getStatusName(key) {
    if (key == "IP") {
      return "En curso";
    } else if (key == "C") {
      return "Completada";
    }
  }
  deleteTask(id) {
    this.confirmationService.confirm({
      message: "¿Estas seguro de que quieres borrar la tarea?",
      accept: () => {
        this.tasksService.deleteOne(id).subscribe(
          (success) => {
            setTimeout(() => {
              this.comunicatorService.sendChange({action:"delete",item:"task"})
              this.taskChange.emit({ action: "delete" });
            }, 500);

            this.isDestroyed = true;
          },
          (err) => {
          }
        );
      },
    });
  }

  updateTask() {
    this.tasksService.complete(this.task).subscribe(
      (success) => {
        this.taskChange.emit({ action: "complete" });
      },
      (error) => {
      }
    );
  }
  completeTask() {
    this.task.status = "C";
    this.updateTask();
  }
}
