import { ConfirmationService } from 'primeng/api';
import { AuthService } from './services/auth/auth.service';
import { ProjectsService } from './services/projects/projects.service';
import { RegisterModule } from './modules/register/register.module';
import { ProjectModule } from './modules/project/project.module';
import { HomeModule } from './modules/home/home.module';
import { CommonModule } from '@angular/common';
import { LoginModule } from './modules/login/login.module';
import { CardModule } from 'primeng/card';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavbarModule } from "./shared/navbar/navbar.module";
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    RouterModule,
    BrowserModule,
    NavbarModule,
    CardModule,
    LoginModule,
    HomeModule,
    ProjectModule,
    RegisterModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [ProjectsService,AuthService, ConfirmationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
