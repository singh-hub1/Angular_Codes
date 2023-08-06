import { Component,OnInit } from '@angular/core';
import { CommunicationServiceService } from '../services/communication-service.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit  {
  constructor(private commuService:CommunicationServiceService){}
  ngOnInit(): void {
      
  } 
  welcome_cust(){
    this.commuService.sendMessage("Welcome to our system.");
  }
  thank_cust(){
    this.commuService.sendMessage("Thank you for puschasing our product.");
  }
}
