import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  endpoint = "http://lasttask.local/projects"
  constructor(private http: HttpClient) { }

  getProjects(){
    return this.http.get(this.endpoint)
  }
  getProjectById(id){
    return this.http.get(`${this.endpoint}/${id}`)
  }
  createProject(project){
    return this.http.post(this.endpoint,project)
  }
  getProjectsByUserId(id){
    return this.http.get(`${this.endpoint}/user/${id}`)
  }
  deleteById(id){
    return this.http.delete(`${this.endpoint}/${id}`)
  }
}
