import { Project } from "../../../../models/project.model";
import { AuthService } from "./../../../../services/auth/auth.service";
import { Router } from "@angular/router";
import { ProjectsService } from "src/app/services/projects/projects.service";
import { Component, OnInit, Input, Output, SimpleChanges } from "@angular/core";
import { MenuItem, ConfirmationService } from "primeng/api";
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
    private auth:AuthService
  ) {}

  ngOnInit(): void {
    
  }



}
