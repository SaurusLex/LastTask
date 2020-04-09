import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from "./components/dialog/dialog.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";

@NgModule({
  declarations: [DialogComponent],
  imports: [CommonModule, InputTextModule, InputTextareaModule, BrowserAnimationsModule],
  exports: [DialogComponent]
})
export class SharedModule {}
