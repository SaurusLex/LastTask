import { Project } from "../../models/project.model";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Subject } from "rxjs";
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: "root",
})
export class ProjectsService {
  headers = new HttpHeaders();
  actualProject: Project;
  projectChange = new Subject();
  endpoint = environment.endpoint+"projects";
  constructor(private http: HttpClient) {

  }

  getProjects() {
    return this.http.get(this.endpoint);
  }
  getProjectById(id) {
    return this.http.get(`${this.endpoint}/${id}`);
  }
  createProject(project) {
    return this.http.post(this.endpoint, project);
  }
  getProjectsByUserId(id) {
    return this.http.get(`${this.endpoint}/user/${id}`);
  }
  deleteById(id) {
    return this.http.delete(`${this.endpoint}/${id}`);
  }
  selectProject(project) {
    this.actualProject = project;
  }
  getActualProject() {
    return this.actualProject;
  }
  update(project){
    return this.http.put(this.endpoint,project)
  }
  finalBudget(id){
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/pdf');
    headers = headers.set('Access-Control-Allow-Origin', '*');
    headers = headers.set('Content-Type', 'application/pdf');
    return this.http.get(`${this.endpoint}/${id}/fbudget`,{ headers: headers, responseType: 'blob' })
  }
  estimatedBudget(id){
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/pdf');
    headers = headers.set('Access-Control-Allow-Origin', '*');
    headers = headers.set('Content-Type', 'application/pdf');
    return this.http.get(`${this.endpoint}/${id}/ebudget`,{ headers: headers, responseType: 'blob' })
  }
}
