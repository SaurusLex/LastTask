import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProjectComponent } from "./components/project/project.component";
import { ProjectCreationComponent } from "./components/project-creation/project-creation.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { RouterModule } from '@angular/router';
import {CalendarModule} from 'primeng/calendar';


@NgModule({
  declarations: [ProjectComponent, ProjectCreationComponent],
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
    CalendarModule

  ]
})
export class ProjectModule {}
