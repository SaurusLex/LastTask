import { ProjectsService } from "src/app/services/projects/projects.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.sass"]
})
export class ProjectComponent implements OnInit {
  project;
  constructor(
    private ps: ProjectsService,
    private _Activatedroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    var id = this._Activatedroute.snapshot.paramMap.get("id");
    this.ps.getProjectById(id).subscribe(project => {
      this.project = project;
      console.log(project);
    });
  }
}
