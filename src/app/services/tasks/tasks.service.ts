import { ProjectsService } from "./../projects/projects.service";
import { HttpClient } from "@angular/common/http";
import { Task } from "./../../models/task.model";
import { Injectable } from "@angular/core";
import { Observable, Subject, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TasksService {
  endpoint = "http://lasttask.local/";
  tasksChange = new Subject<string>();

  constructor(
    private http: HttpClient
  ) {}
  getTasks(id): Observable<Task[]> {
    return this.http.get<Task[]>(this.endpoint + "projects/" + id + "/tasks");
  }
  create(task: Task) {
    return this.http.post<Task>(this.endpoint + "tasks", task);
  }
  deleteOne(id){
    return this.http.delete(this.endpoint+"tasks/"+id)
  }
  complete(task){
    return this.http.put(this.endpoint + "tasks",task)
  }
}
