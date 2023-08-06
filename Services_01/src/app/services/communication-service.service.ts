import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationServiceService {

  private managerMsgSource=new Subject<string>();
  managerMsg$=this.managerMsgSource.asObservable();
  constructor() { }
  sendMessage(msg:string){
    this.managerMsgSource.next(msg);
  }
}
