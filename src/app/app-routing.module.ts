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
    component: HomeComponent
  },
  { path: "projects/create", component: ProjectCreationComponent },
  { path: "project/:id", component: ProjectComponent },
  { path: "register", component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
