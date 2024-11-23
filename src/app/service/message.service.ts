import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
   private messagePublisher=new Subject();

   sendMessage(msg:string){
    this.messagePublisher.next({text:msg});
   }
   clearMessage(){
      this.messagePublisher.next(null);
   }
   getMessage():Observable<any>{
    return this.messagePublisher.asObservable();
   }

  constructor() { }
}
