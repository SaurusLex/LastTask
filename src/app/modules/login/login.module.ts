import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { LoginComponent } from "./components/login/login.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { PasswordModule } from "primeng/password";
import { MessagesModule } from "primeng/messages";
import { MessageModule } from "primeng/message";

@NgModule({
  declarations: [LoginComponent],
  imports: [
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
    RouterModule
  ]
})
export class LoginModule {}
