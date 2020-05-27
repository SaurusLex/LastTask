import { AboutComponent } from './modules/about/components/about/about.component';
import { TaskCreationComponent } from "./modules/task/components/task-creation/task-creation.component";
import { ProjectListComponent } from "./modules/project/components/project-list/project-list.component";
import { ProjectDetailComponent } from "./modules/project/components/project-detail/project-detail.component";
import { RegisterComponent } from "./modules/register/components/register/register.component";
import { ProjectCreationComponent } from "./modules/project/components/project-creation/project-creation.component";
import { ProjectComponent } from "./modules/project/components/project/project.component";
import { HomeComponent } from "./modules/home/components/home/home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./modules/login/components/login/login.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "", redirectTo: "/login", pathMatch: "full" },
  
  {
    path: "home",
    component: HomeComponent,
    children: [
      {
        path: "",
        component: ProjectListComponent,
        data: { breadcrumb: "projects" },
      },
      {
        path: "projects/create",
        component: ProjectCreationComponent,
      },
      {
        path: "projects/:id",
        component: ProjectDetailComponent,
      },
      {
        path: "projects/:id/tasks/create",
        component: TaskCreationComponent,
      },
      {
        path: "about",
        component:AboutComponent
      },

    ],
  },


  { path: "register", component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
