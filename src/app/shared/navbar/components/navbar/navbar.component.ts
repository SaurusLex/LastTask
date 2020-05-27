import { AuthService } from 'src/app/services/auth/auth.service';
import { Router, NavigationEnd } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { filter, map } from "rxjs/operators";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.sass"]
})
export class NavbarComponent implements OnInit {
  isLogin:boolean = false;

  constructor(private router: Router, private loc: Location,private authService:AuthService) {}

  ngOnInit(): void {
    this.onRouteChange()
  }
  onRouteChange() {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        if (e.url === "/login" || e.url === "/" || e.url==="/register") {
          console.log("estoy en el login");

          this.isLogin=true
        } else {
          this.isLogin=false
        }
      }
      );

  }

  logout() {
    let actualUser = Number.parseInt(sessionStorage.getItem("user-id"));
    this.authService.logout(actualUser).subscribe((data)=>{
      if("success" in data){
        sessionStorage.removeItem("token");
        this.router.navigateByUrl("login");
      }
    })

  }

}
