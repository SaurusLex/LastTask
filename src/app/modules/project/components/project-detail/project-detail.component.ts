import { ComunicatorService } from './../../../../services/utils/comunicator.service';
import { ActivatedRoute, Router } from "@angular/router";
import { ProjectsService } from "src/app/services/projects/projects.service";
import { Component, OnInit } from "@angular/core";
import { Project } from "../../../../models/project.model";
import * as moment from "../../../../../../node_modules/moment";
import {saveAs as importedSaveAs} from "file-saver";

@Component({
  selector: "app-project-detail",
  templateUrl: "./project-detail.component.html",
  styleUrls: ["./project-detail.component.sass"],
})
export class ProjectDetailComponent implements OnInit {
  daysUntil: number = 0;
  project: Project;
  constructor(
    private projectsService: ProjectsService,
    private route: ActivatedRoute,
    private router: Router,
    private comunicatorService: ComunicatorService
  ) {}

  ngOnInit(): void {
    this.projectsService
      .getProjectById(this.route.snapshot.paramMap.get("id"))
      .subscribe((data: Project) => {
        this.project = data;

        this.daysUntil = moment(this.project.finish_date).diff(
          new Date(),
          "days"
        );
      });
  }
  newTask() {
    this.router.navigate(['tasks','create'],{relativeTo:this.route});
  }
  finishProject(){
    this.project.status = "C"
    this.updateProject().subscribe(success=>{
      this.comunicatorService.sendChange({action:"finish",item:"project"})
      this.router.navigate(["home"])
    })
  }
  updateProject(){
    return this.projectsService.update(this.project)
  }
  generateEstimatedBudget(){
    this.projectsService.estimatedBudget(this.project.id).subscribe((success)=>{
      let file = new Blob([success],{ type: 'application/pdf' })
      let todayDate = moment(new Date()).format("D-MM-YYYY");
      importedSaveAs(file, 'Estimacion presupuesto '+todayDate+'.pdf');

    },error=>{

    })
  }
}
