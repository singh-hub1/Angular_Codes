import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'life-cycle-hooks';
  parentData:string="";
  
  sendDataChild(inpText:HTMLInputElement)
  {
   this.parentData=inpText.value;
  }
  destroyValue:boolean=true;
  destroyFunc(){
   this.destroyValue=!this.destroyValue;
 }
}
