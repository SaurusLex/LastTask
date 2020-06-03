import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicatorService {

  private subject = new Subject<any>();
  constructor() { }

    sendMessage(message: string) {
      this.subject.next({ text: message });
    }
    sendChange(change:{action:string, item:string}){
      this.subject.next(change)
    }

    clearMessages() {
        this.subject.next();
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}
