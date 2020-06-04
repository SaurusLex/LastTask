import { ComunicatorService } from "./../../../../services/utils/comunicator.service";
import { Project } from "../../../../models/project.model";
import { AuthService } from "./../../../../services/auth/auth.service";
import { Router } from "@angular/router";
import { ProjectsService } from "src/app/services/projects/projects.service";
import { Component, OnInit, Input, Output, SimpleChanges } from "@angular/core";
import { MenuItem, ConfirmationService, MessageService } from "primeng/api";
import { EventEmitter } from "protractor";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.sass"],
})
export class HomeComponent implements OnInit {
  items: MenuItem[];
  display: boolean;
  projects: Project[] = [];

  constructor(
    private auth: AuthService,
    private comunicatorService: ComunicatorService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.comunicatorService.getMessage().subscribe((data) => {
      if (data && data.item == "project") {
        if (data.action == "create") {
          this.messageService.add({
            severity: "success",
            summary: "Proyecto creado",
            detail: "El proyecto ha sido creado con éxito",
          });
        }
        if (data.action == "delete") {
          this.messageService.add({
            severity: "success",
            summary: "Proyecto borrado",
            detail: "El proyecto ha sido borrado con éxito",
          });
        }
        if (data.action == "finish") {
          this.messageService.add({
            severity: "info",
            summary: "Proyecto finalizado",
            detail: "El proyecto ha sido finalizado con éxito",
          });
        }
      } else if (data && data.item == "task") {
        if (data && data.action == "create") {
          this.messageService.add({
            severity: "success",
            summary: "Tarea creada",
            detail: "La tarea se ha creado con éxito",
          });
        }
        if (data && data.action == "delete") {
          this.messageService.add({
            severity: "success",
            summary: "Tarea borrada",
            detail: "La tarea se ha borrado con éxito",
          });
        }
      }
    });
  }
}
