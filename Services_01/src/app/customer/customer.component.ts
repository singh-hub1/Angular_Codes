import { Component,OnInit } from '@angular/core';
import { CommunicationServiceService } from '../services/communication-service.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
    displayMsg1:string="";
    displayMsg2:string="";
    constructor(private commuService:CommunicationServiceService){}
    ngOnInit():void{
      this.commuService.managerMsg$.subscribe(
        msg=>{
          if(msg=='Welcome to our system.'){
            this.displayMsg1="Greetings Manager";
            alert('Greetings Manager');
          }
          else if(msg=='Thank you for puschasing our product.'){
            this.displayMsg2="Thank you Manager";
            alert('Thank you Manager');
          }
          }
        )
      }
  }
