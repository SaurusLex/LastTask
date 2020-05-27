import { BreadcrumbModule } from "primeng/breadcrumb";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DialogComponent } from "./components/dialog/dialog.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { BadgeComponent } from "./components/badge/badge.component";
import { BreadcrumbComponent } from "./components/breadcrumb/breadcrumb.component";

@NgModule({
  declarations: [DialogComponent, BadgeComponent, BreadcrumbComponent],
  imports: [
    CommonModule,
    InputTextModule,
    InputTextareaModule,
    BrowserAnimationsModule,
    BreadcrumbModule,
  ],
  exports: [DialogComponent, BadgeComponent, BreadcrumbComponent],
})
export class SharedModule {}
