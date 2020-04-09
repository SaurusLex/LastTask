import { Router } from "@angular/router";
import { AuthService } from "./../../../../services/auth/auth.service";
import { FormGroup } from "@angular/forms";
import { ProjectsService } from "./../../../../services/projects/projects.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-project-creation",
  templateUrl: "./project-creation.component.html",
  styleUrls: ["./project-creation.component.sass"],
})
export class ProjectCreationComponent implements OnInit {
  createProjectForm: FormGroup;
  pictures = [
    "../../../../../assets/img/fondo.jpg",
    "../../../../../assets/img/fondo.jpg",
    "../../../../../assets/img/fondo.jpg",
    "../../../../../assets/img/fondo.jpg",
    "../../../../../assets/img/fondo.jpg",
    "../../../../../assets/img/fondo.jpg",
  ];
  constructor(
    private fb: FormBuilder,
    private projectService: ProjectsService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createProjectForm = this.fb.group({
      title: "",
      description: "",
      cost_per_hour: "",
      finish_date: "",
      img_src: "",
    });
  }

  onProjectCreate() {
    let project = this.createProjectForm.value;
    project.user_id = this.authService.actualUser;
    this.projectService.createProject(project).subscribe(
      (success) => {
        this.router.navigateByUrl("home");
        console.log(success);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
