import { ComunicatorService } from './../../../../services/utils/comunicator.service';
import { ClientsService } from "./../../../../services/clients/clients.service";
import { Router } from "@angular/router";
import { AuthService } from "./../../../../services/auth/auth.service";
import { FormGroup, Validators } from "@angular/forms";
import { ProjectsService } from "./../../../../services/projects/projects.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import * as moment from "moment";
import { Galleria } from "primeng/galleria";
import { MessageService, SelectItem } from "primeng/api";
import { Subscription } from 'rxjs';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: "app-project-creation",
  templateUrl: "./project-creation.component.html",
  styleUrls: ["./project-creation.component.sass"],
  providers: [MessageService],
})
export class ProjectCreationComponent implements OnInit {
  @ViewChild(Galleria, { static: true }) galleria;
  subscriptionClient: Subscription;
  selectedPic;
  isImageInvalid = false;
  isVisibleClientForm = false;
  clients = [];
  createProjectForm: FormGroup;
  minDateCalendar=new Date()
  pictures = [
    {
      src: "assets/img/project-1.jpg",
      index: 0,
    },
    {
      src: "assets/img/project-2.jpg",
      index: 1,
    },
    {
      src: "assets/img/project-3.jpg",
      index: 2,
    },
    {
      src: "assets/img/project-4.jpg",
      index: 3,
    },
    {
      src: "assets/img/project-5.jpg",
      index: 4,
    },
    {
      src: "assets/img/project-6.jpg",
      index: 5,
    },
  ];
  constructor(
    private fb: FormBuilder,
    private projectService: ProjectsService,
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService,
    private clientsService: ClientsService,
    private comunicator: ComunicatorService
  ) {
    this.subscriptionClient = this.comunicator.getMessage().subscribe(message => {
      if (message) {
        this.getClients()
        this.isVisibleClientForm=false;
      }
    });
    this.clients = [];
  }
ngOnDestroy() {
  this.subscriptionClient.unsubscribe()
}
  ngAfterViewInit() {
    console.log("galleria:", this.galleria);
  }
  ngOnInit(): void {
    console.log("galleria:", this.galleria);
    console.log(this.getClients());


    this.createProjectForm = this.fb.group({
      title: ["", Validators.required],
      description: ["", Validators.required],
      cost_per_hour: ["", Validators.required],
      finish_date: ["", Validators.required],
      client:["",Validators.required]
    });
  }

  onProjectCreate() {



    console.log(this.createProjectForm.valid);
    let project:Project = new Project();

    project.title = this.createProjectForm.value.title
    project.description = this.createProjectForm.value.description
    project.cost_per_hour = this.createProjectForm.value.cost_per_hour
    project.img_src = this.selectedPic ? this.selectedPic.src : "";
    project.user_id = this.authService.actualUser;
    project.client_id = this.createProjectForm.value.client.id
    project.status = "P";
    project.finish_date = moment(this.createProjectForm.value.finish_date).format("YYYY/MM/D");

    if (this.selectedPic == undefined || this.selectedPic == "") {
      this.isImageInvalid = true;
    }
    if (!this.createProjectForm.invalid && !this.isImageInvalid) {
      this.projectService.createProject(project).subscribe(
        (success) => {
          this.projectService.projectChange.next({ action: "new" });
          this.router.navigate(["/home"]);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      for (let control in this.createProjectForm.controls) {
        console.log(control);
        this.createProjectForm.controls[control].markAsDirty();
      }
    }
  }
  onImgSelect(img) {
    this.selectedPic = img;
    this.isImageInvalid = false;
    console.log(img);
  }
  onToastClose({
    message: {
      data: { redirectTo },
    },
  }) {
    this.router.navigate([redirectTo]);
  }
  showClientForm() {
    this.isVisibleClientForm = true;
  }
  getClients() {
    this.clientsService.getAll().subscribe(
      (success) => {
        this.clients = success
        console.log(success);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
