import { TasksService } from 'src/app/services/tasks/tasks.service';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from "primeng/api";
import { AuthService } from "./services/auth/auth.service";
import { ProjectsService } from "./services/projects/projects.service";
import { RegisterModule } from "./modules/register/register.module";
import { HomeModule } from "./modules/home/home.module";
import { CommonModule } from "@angular/common";
import { LoginModule } from "./modules/login/login.module";
import { CardModule } from "primeng/card";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavbarModule } from "./shared/navbar/navbar.module";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { AuthInterceptorService } from './services/auth-interceptor.service';

registerLocaleData(es);
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
    RegisterModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    ToastModule
  ],
  providers: [
    ProjectsService,
    AuthService,
    ConfirmationService,
    MessageService,
    TasksService,
    { provide: LOCALE_ID, useValue: "es-ES" },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
