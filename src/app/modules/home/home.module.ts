import { ConfirmationService } from 'primeng/api';
import { SharedModule } from './../../shared/shared.module';
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./components/home/home.component";
import { SplitButtonModule } from "primeng/splitbutton";
import { MenuModule } from "primeng/menu";
import { ToolbarModule } from "primeng/toolbar";
import { DialogModule } from "primeng/dialog";
import { FlexLayoutModule } from '@angular/flex-layout';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    SplitButtonModule,
    MenuModule,
    ToolbarModule,
    DialogModule,
    SharedModule,
    FlexLayoutModule,
    ConfirmDialogModule,

  ],
  exports:[HomeComponent]
})
export class HomeModule {}
