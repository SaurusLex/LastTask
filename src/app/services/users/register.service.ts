import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class RegisterService {
  userRegistered;
  endpoint = environment.endpoint+"register";
  constructor(private http: HttpClient) {}

  register(user) {
    return this.http.post(this.endpoint, user);
  }
  getUserRegistered() {
    return this.userRegistered;
  }
  setUserRegistered(user) {
    this.userRegistered = user;
  }
}
