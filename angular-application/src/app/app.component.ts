import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-application';

  getData()
  {
    return "Value from method";
  }

  value = 'Value from this keyword';
  getData1(){
    return this.value;
  }

  obj = {name : 'Vishal singh', age: 22 };

  currentURL = window.location.href;

  GetYTChannel()
  {
    alert('My alert')
  }

  str = "Get string value";
  GetValue()
  {
    alert(this.str);
  }

  getValueByParam(name : any)
  {
    alert(name)
  }

  strName = ''
  GetValue1(val : any){
    console.warn(val);
    this.strName = val;
  }

  sum = 0;
  calc(num1 : any, num2 : any){
    this.sum = parseFloat(num1) + parseFloat(num2);
  }
}