import { ComunicatorService } from './../../../../services/utils/comunicator.service';
import { Project } from './../../../../models/project.model';
import { ProjectsService } from "./../../../../services/projects/projects.service";
import { ConfirmationService } from "primeng/api";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {saveAs as importedSaveAs} from "file-saver";
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";

@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.sass"],
  animations: [
    trigger("deleteProject", [
      state("normal", style({})),
      state("deleted", style({ opacity: 0, transform:"scale(0.0)" })),
      transition("normal => deleted", [animate("0.3s")]),
    ]),
  ],
})
export class ProjectComponent implements OnInit {

  isDestroyed = false;
  @Input() projectData: Project;
  @Output() projectDeleted = new EventEmitter()
  constructor(
    private ps: ProjectsService,
    private _Activatedroute: ActivatedRoute,
    private router: Router,
    private confirmationService: ConfirmationService,
    private projectsService: ProjectsService,
    private comunicatorService: ComunicatorService
  ) {}

  ngOnInit(): void {
  }
  createProject(project) {
    this.ps.createProject(project).subscribe((success) => {});
  }
  openProject(project:Project) {
    this.projectsService.selectProject(project);
    this.router.navigate(['home','projects',project.id]);
  }
  onDelete(project) {

    this.confirmationService.confirm({
      message: "¿Estas seguro de que quieres borrar el proyecto?",
      accept: () => {
        this.projectsService.deleteById(project.id).subscribe(
          (success) => {
            this.comunicatorService.sendChange({action:"delete",item:"project"})
            this.isDestroyed = true;
            setTimeout(() => {
              this.projectDeleted.emit()
            }, 500);
          },
          (error) => {
          }
        );
      },
    });
  }
  generateFinalBudget(){
    this.projectsService.finalBudget(this.projectData.id).subscribe((success)=>{
      let file = new Blob([success],{ type: 'application/pdf' })
      importedSaveAs(file, 'Resumen.pdf');

    },error=>{

    })
  }
}
