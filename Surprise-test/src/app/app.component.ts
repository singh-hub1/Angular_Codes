import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Surprise-test';
   Course_name1: string[];
ngOnInit(){
   course_name1: Array<string>;    
    this.Course_name1 = new Array<string>('ds', 'java', 'cpp');
}
}
