import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hey';
  data="angular";
  // value1='';
  getVal()
  {
    return "code step by step";
  }
  num=100;

  alertName()
  {
    alert("vishal singh");
  }

  getNames(fname:any,lname:any)
  {
    alert(fname + lname);
  }

  getData()
  {
    console.log("hello world!");
  }
//****************************************************** */
  getData1(val:string)
  {
    console.log(val);
  }

  getData2(val:string)
  {
    console.log(val);
  }

//   ********************************************************
  getMouse(val:string)
  {
    console.log(val);

  }
// *******************************************************************
  displayval='';
  getValue(val:string)
  {
    console.warn(val);
    this.displayval=val;
  }
//******************************************************** */
  count=0
  counter(type:string)
  {
    type=='add' ? this.count++ : this.count--;
    // this.count++;
  }
  //************************************************************** */
  }
