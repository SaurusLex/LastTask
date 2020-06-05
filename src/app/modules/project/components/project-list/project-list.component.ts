import { Router } from "@angular/router";
import { Component, OnInit, Input, ViewEncapsulation } from "@angular/core";
import { Project } from "../../../../models/project.model";
import { ProjectsService } from "src/app/services/projects/projects.service";
import { AuthService } from "src/app/services/auth/auth.service";
import { MessageService } from "primeng/api";
import * as _ from "lodash"

@Component({
  selector: "app-project-list",
  templateUrl: "./project-list.component.html",
  styleUrls: ["./project-list.component.sass"],
  encapsulation: ViewEncapsulation.None,
  providers: [MessageService],
})
export class ProjectListComponent implements OnInit {
  searchCriteria = "";
  filterCriteria = "";
  criteriaFilterOptions = [
    { label: "Todas", value: "" },
    { label: "Completadas", value: "c" },
    { label: "En curso", value: "p" },
  ];
  projects: Project[] = [];
  constructor(
    private ps: ProjectsService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.ps.getProjectsByUserId(sessionStorage.getItem("user-id")).subscribe(
      (success: []) => {
        this.projects = _.orderBy(success,["status"],["desc"]);
      },
      (error) => {
        this.router.navigate(["login"]);
      }
    );
  }
  onProjectDeleted() {
    this.getData();
  }
  openNewDialog() {
    this.router.navigate(["home", "projects", "create"]);
  }
}
