import { CarouselModule } from "primeng/carousel";
import { ProjectModule } from "../project/project.module";
import { ConfirmationService } from "primeng/api";
import { SharedModule } from "./../../shared/shared.module";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { NgModule, LOCALE_ID } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./components/home/home.component";
import { SplitButtonModule } from "primeng/splitbutton";
import { MenuModule } from "primeng/menu";
import { ToolbarModule } from "primeng/toolbar";
import { DialogModule } from "primeng/dialog";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { BreadcrumbModule } from "primeng/breadcrumb";
import { ToastModule } from 'primeng/toast';

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
    SharedModule,
    ProjectModule,
    CarouselModule,
    BreadcrumbModule,
    ToastModule
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
