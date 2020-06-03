import { RegisterService } from "./../../../../services/users/register.service";
import { AuthService } from "./../../../../services/auth/auth.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { ProjectsService } from "src/app/services/projects/projects.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.sass"],
})
export class LoginComponent implements OnInit {
  registeredUser;
  authorized: boolean = false;
  msgs = [];
  credentials;
  loginForm: FormGroup;
  selectedValues: string[] = ["val1", "val2"];
  constructor(
    private ps: ProjectsService,
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private registerService: RegisterService
  ) {
    if(this.router.getCurrentNavigation().extras.state !=undefined){
      this.registeredUser = this.router.getCurrentNavigation().extras.state.user
    }
    console.log()

  }
  ngOnInit(): void {
    this.createForm();
    this.setLogin();
  }
  createForm() {
    this.loginForm = this.fb.group({
      email: [""],
      password: [""],
    });
  }
  setLogin() {

    if(this.registeredUser){
      this.loginForm.controls['email'].setValue(this.registeredUser.email)
    }
  }
  login() {
    this.credentials = this.loginForm.value;
    this.authService.authenticate(this.credentials).subscribe(
      (response) => {
        console.log("Logged",response);
        if ("success" in response) {
        
          this.authService.currentUserName = response["user"]["name"];

          sessionStorage.setItem("token", response["success"]["token"]);
          sessionStorage.setItem("user-id", response["user"]["id"]);
          sessionStorage.setItem("user-name", response["user"]["name"]);

          this.router.navigate(["/home"]);
        }
      },
      (error) => {
        this.authorized = false;
        if(error.status == 0){
          this.showMessageError("error", "Ha habido un error en el servidor. ", "Inténtelo más tarde");
        }
        console.log(error);
      }
    );
  }
  showMessageError(severity, summary, detail) {
    this.msgs = [];
    this.msgs.push({ severity: severity, summary: summary, detail: detail });
  }
  /* getProjects(){
    this.ps.getProjects().subscribe(data => {
      this.values = data;

    });
  } */
}
