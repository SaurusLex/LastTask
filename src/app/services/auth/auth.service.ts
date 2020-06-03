import { of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  token = "";
  endpoint = environment.endpoint;
  actualUser: number;
  currentUserName: string;
  constructor(private http: HttpClient) {
    this.token = sessionStorage.getItem("token");
    this.actualUser = Number.parseInt(sessionStorage.getItem("user-id"));
  }

  authenticate(user) {
    return this.http.post(this.endpoint+"auth", user);
  }
  logout(id){
    return this.http.get(this.endpoint+"auth/logout/"+id);
  }
  getCurrentUserName(){
    return this.currentUserName
  }

}
