import { MessageService } from 'primeng/api';
import { ProjectsService } from "./services/projects/projects.service";

import { NavigationService } from "./services/utils/navigation.service";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"],
})
export class AppComponent {
  title = "LastTask";
  constructor(
    navigationService: NavigationService,
    private projectService: ProjectsService,
    private messageService:MessageService
  ) {
    navigationService.loadRouting();
  }
  ngOnInit() {
    
  }
}
