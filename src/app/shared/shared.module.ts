import { BreadcrumbModule } from "primeng/breadcrumb";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { BadgeComponent } from "./components/badge/badge.component";

@NgModule({
  declarations: [BadgeComponent],
  imports: [
    CommonModule,
    InputTextModule,
    InputTextareaModule,
    BrowserAnimationsModule,
    BreadcrumbModule,
  ],
  exports: [BadgeComponent],
})
export class SharedModule {}
