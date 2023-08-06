import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  output = 0;

  add(x : any , y : any){
    return Number(x) + Number(y);
  }

  subtract(x : any , y : any){
    return Number(x) - Number(y);
  }

  multiply(x : any , y : any){
    return Number(x) * Number(y);
  }

  divide(x : any , y : any){
    return Number(x) / Number(y);
  }
  
  mod(x : any , y : any){
    return Number(x) % Number(y);
  }

}
