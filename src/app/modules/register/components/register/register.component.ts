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
    this.registerForm.valueChanges.subscribe((changes) => {
      console.log(changes);
    });
  }
  onSignIn() {
    this.router.navigateByUrl("/login");
  }
  register() {
    this.credentials = this.registerForm.value;
    console.log(this.credentials);

    this.registerService.register(this.credentials).subscribe(
      (success) => {
        this.registerService.setUserRegistered(success)
        this.router.navigateByUrl("/login")
        console.log(success);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
