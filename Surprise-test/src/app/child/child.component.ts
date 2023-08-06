import { Component,OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
constructor(){}

@Input() Course_name1:[];
ngOnInit() {
}
}
