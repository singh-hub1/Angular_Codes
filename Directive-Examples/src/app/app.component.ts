import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Directive-Examples';

  
courseNames=["angular","ds","cs","C","Python","Daa","Java"];
num_in_words="Three";
greet=true;
happy = true;
style='italic';
fsize='30px';

addStyles={width:'150px',height:'150px',background:'skyblue',color:'black',border:''};

addStylesFunc(){
  this.addStyles['color']="purple";
  this.addStyles['border']="2px solid black";
}

StudentDlts:any[] = [
  {Rollno:1,
    Name:"vishal singh",
    Gender:"Male"},

{Rollno:2,
  Name:"singh",
  gender:"Male"},

  {Rollno:3,
    Name:"vishal",
    gender:"Male"}];

    // ---------------------------------------------------------------------
  classone=true;
  classtwo=true;
  
  addClasses={
    box:true,
    border:false,
    circle:false
  };

  displayClass(){
    this.classone=!this.classone;
    this.classtwo=!this.classtwo;
  }

  circleShape(){
  this.addClasses.border=!this.addClasses.border;
  this.addClasses.circle=!this.addClasses.circle;
  }

  //inputedText:String="To be displayed";

}
