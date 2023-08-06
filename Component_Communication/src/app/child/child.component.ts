import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() dataFromParent = "";

  @Input() factorial = 0;

  @Input() palindrome = "";

  @Input() armstrong = "";

  @Input() perfectNo = "";
  
  @Output() dataFromChild = new EventEmitter();
  sendDataToParent(){
    this.dataFromChild.emit("This data is from Child Component");
  }


  @Input() textFromParent = "";
  @Output() textFromChild = new EventEmitter();
  displayTextToParent(str : string){
    this.textFromChild.emit(str);
  }

  @Input() addnFromParent = 0;
  @Output() addnFromChild = new EventEmitter();
  displayAddnToParent(nums : any){
    this.addnFromChild.emit(nums);
  }

  @Input() new_upper = "";
  @Output() rev = new EventEmitter();
  displayStringToParent(message : string){
    this.rev.emit(message);
  }

}
