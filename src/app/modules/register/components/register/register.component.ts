import { FormGroup } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { RegisterService } from "./../../../../services/users/register.service";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.sass"],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  credentials;
  msgs = [];
  constructor(
    private router: Router,
    private registerService: RegisterService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: "",
      email: "",
      password: "",
    });
  }
  onSignIn() {
    this.router.navigateByUrl("/login");
  }
  register() {
    this.credentials = this.registerForm.value;

    this.registerService.register(this.credentials).subscribe(
      (success) => {
        let user = success
        this.registerService.setUserRegistered(user)
        this.router.navigate(["login"],{state:{
          "user":user
        }})
      },
      (error) => {
      }
    );
  }
}
