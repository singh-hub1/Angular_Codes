import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {

  // @Input() dataToParentFromChild = "";

  // counter = 0
  
  // @Output() c = new EventEmitter();
  // incrCounter(){
  //   this.counter += 1
  //   this.c.emit();
  // }

  // Parent accessing child properties and methods using template reference variable
  myName : string = "This is angular lecture";
  hello(){
    alert("Good afternoon");
  }

  counter = 0;
  incrCounter(){
    this.counter += 1;
  }

  // Parent accessing child properties or method using VIEWCHILD
  msg1 : string = "";
}
