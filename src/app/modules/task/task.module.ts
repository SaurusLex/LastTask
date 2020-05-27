import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { InputTextareaModule } from "primeng/inputtextarea";
import { SharedModule } from "./../../shared/shared.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { TaskListComponent } from "./components/task-list/task-list.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TaskComponent } from "./components/task/task.component";
import { OrderListModule } from "primeng/orderlist";
import { ButtonModule } from "primeng/button";
import { TaskCreationComponent } from "./components/task-creation/task-creation.component";
import { InputTextModule } from 'primeng/inputtext';
import {PanelModule} from 'primeng/panel';
import {AccordionModule} from 'primeng/accordion';
import {KeyFilterModule} from 'primeng/keyfilter';

@NgModule({
  declarations: [TaskComponent, TaskListComponent, TaskCreationComponent],
  imports: [
    CommonModule,
    OrderListModule,
    ButtonModule,
    FlexLayoutModule,
    SharedModule,
    InputTextareaModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
    PanelModule,
    RouterModule,
    AccordionModule,
    KeyFilterModule
  ],
  exports: [TaskListComponent, TaskComponent],
})
export class TaskModule {}
