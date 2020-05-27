import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  endpoint = environment.endpoint
  constructor(private http: HttpClient) { }
  create(client){
    return this.http.post(`${this.endpoint}/clients`,client)
  }
  getAll(){
    return this.http.get<[]>(`${this.endpoint}/clients`)
  }
}
