import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from "primeng/button";
import { DropdownModule } from "primeng/dropdown";
import { FlexLayoutModule } from "@angular/flex-layout";
import { InputTextModule } from "primeng/inputtext";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClientCreationComponent } from "./components/client-creation/client-creation.component";
import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [ClientCreationComponent],
  imports: [
    CommonModule,
    InputTextModule,
    FlexLayoutModule,
    DropdownModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule

  ],
  exports: [ClientCreationComponent],
})
export class ClientModule {}
