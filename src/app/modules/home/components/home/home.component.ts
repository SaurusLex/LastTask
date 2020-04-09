import { AuthService } from "./../../../../services/auth/auth.service";
import { Router } from "@angular/router";
import { ProjectsService } from "src/app/services/projects/projects.service";
import { Component, OnInit } from "@angular/core";
import { MenuItem, ConfirmationService } from "primeng/api";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.sass"],
})
export class HomeComponent implements OnInit {
  display: boolean;
  projects: [];
  items: MenuItem[];

  constructor(
    private ps: ProjectsService,
    private router: Router,
    private authService: AuthService,
    private projectsService: ProjectsService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.getData();
    this.items = [
      {
        label: "Borrar",
        icon: "pi pi-trash",
      },
      {
        separator: true,
      },
      {
        label: "Editar",
        icon: "pi pi-pencil",
      },
    ];
    console.log(this.items);
  }
  getData() {
    this.ps
      .getProjectsByUserId(this.authService.actualUser)
      .subscribe((success: []) => {
        this.projects = success;
      });
  }

  openNewDialog() {
    this.router.navigateByUrl("projects/create");
  }

  createProject(project) {
    this.ps.createProject(project).subscribe((success) => {});
  }
  openProject(project) {
    console.log("heloooo");
    this.router.navigateByUrl("/project/" + project);
  }
  onDelete(project) {
    this.confirmationService.confirm({
      message: "Are you sure that you want to perform this action?",
      accept: () => {
        this.projectsService.deleteById(project.id).subscribe(
          (success) => {
            console.log("Borrado con exito");
            this.getData();
          },
          (error) => {
            console.log("Error");
          }
        );
      },
    });
  }
}
