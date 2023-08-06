import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'greet mam';
  greet : string = " Good morning peoples ! ";
  msg : string  = new Date().toString();
// --------------------------------------------------------------------------------------
  myName : string = "Vishal singh";
  wish : string = "Good Morning";
  flag = false;
//---------------------------------------
  sum(first : number, second : number) : number{
    return first + second;
  }
  //-----------------------------------------------------------------------------------------------
  greetEveryone(){
    return this.myName;
  }
//-------------------------------------------------------------------------------------------------
student = {
  rollNo : 100,
  studName : "XYZ"
}
//-----------------------------------------------------------------------------------
programName = ["FYMSc","MCA","M.Sc. D0S&BDA"];
//------------------------------------------------------
purple = "text-purple";
iserror = true;
changecolor ="green";
//-------------------------------------------------
url = window.location.href;
str = "";
textvalue = "Hello there !";
imgURL = "assets/image/vishal.jpeg";

  // Event Binding
  display(){
    alert("Click event is handled");
    this.str="Welcome Vishal Singh ";
  }

  dblClickEvent(){
    alert("Double click event is handled");
    this.str="";
  }

  blurEvent(){
    alert("Blur event is executed");
  }

  eventHandle(evt : any){
    console.log(evt);
  }

  inputevent1(txt : any){
    this.str = txt.value;
  }

  displayconsole(value : any){
    console.log(value);
  }

  eventHandle1(evt : any){
    console.log(evt);
  }
}
//---------------------------------------------------------------------------------------------------------






