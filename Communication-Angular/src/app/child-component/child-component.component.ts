import { Component,OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
   constructor(){}
@ Input() item=0;

@Output() UpdateDataEvent=new EventEmitter();

ngOnInit(): void {
    
}
}
