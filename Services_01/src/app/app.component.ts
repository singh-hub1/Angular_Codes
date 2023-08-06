import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component_lifecyclehooks';
  destroyValue:boolean=true;
  parentData:string = "";
  sendDataChild(inpText:HTMLInputElement){
    this.parentData = inpText.value;
  }
  destroyFunc(){
    this.destroyValue=!this.destroyValue;
  }
}