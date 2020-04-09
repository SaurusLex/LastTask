import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  endpoint = "http://lasttask.local/auth";
  constructor(private http: HttpClient) {}
  actualUser: number = Number.parseInt(sessionStorage.getItem("user"));
  authenticate(user) {
    return this.http.post(this.endpoint, user);
  }


}
