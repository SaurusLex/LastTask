
import { SearchPipe } from './../../pipes/search.pipe';
import { ClientModule } from './../client/client/client.module';
import { MessageService } from 'primeng/api';
import { DirectivesModule } from "./../../directives/directives.module";
import { TaskModule } from "./../task/task.module";
import { SharedModule } from "../../shared/shared.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { InputTextareaModule } from "primeng/inputtextarea";
import { FlexLayoutModule } from "@angular/flex-layout";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProjectComponent } from "./components/project/project.component";
import { ProjectCreationComponent } from "./components/project-creation/project-creation.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";
import { PasswordModule } from "primeng/password";
import { MessageModule } from "primeng/message";
import { MessagesModule } from "primeng/messages";
import { RouterModule } from "@angular/router";
import { CalendarModule } from "primeng/calendar";
import { ProjectListComponent } from "./components/project-list/project-list.component";
import { ProjectDetailComponent } from "./components/project-detail/project-detail.component";
import { CarouselModule } from "primeng/carousel";
import { GalleriaModule } from "primeng/galleria";
import { ToastModule } from "primeng/toast";
import {DropdownModule} from 'primeng/dropdown';
import {SelectButtonModule} from 'primeng/selectbutton';

@NgModule({
  declarations: [
    ProjectComponent,
    ProjectCreationComponent,
    ProjectListComponent,
    ProjectDetailComponent,
    SearchPipe
  ],
  imports: [
    InputTextareaModule,
    CommonModule,
    CardModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule,
    CardModule,
    FlexLayoutModule,
    InputTextModule,
    PasswordModule,
    BrowserAnimationsModule,
    MessageModule,
    MessagesModule,
    RouterModule,
    CalendarModule,
    SharedModule,
    CarouselModule,
    TaskModule,
    GalleriaModule,
    DirectivesModule,
    ClientModule,
    DropdownModule,
    SelectButtonModule


  ],
  exports: [ProjectListComponent]

})
export class ProjectModule {}
