import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  token = "";
  endpoint = "http://lasttask.local/auth";
  actualUser: number;
  constructor(private http: HttpClient) {
    this.token = sessionStorage.getItem("token");
    this.actualUser = Number.parseInt(sessionStorage.getItem("user-id"));
  }

  authenticate(user) {
    return this.http.post(this.endpoint, user);
  }
  logout(id){
    return this.http.get(this.endpoint+"/logout/"+id);
  }

}
