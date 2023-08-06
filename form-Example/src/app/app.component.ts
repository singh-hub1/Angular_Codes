import { Component } from '@angular/core';
import { Formdata } from './formdata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form-Example';
  
  userdata=new Formdata
  ('','','','7875487500','vishal@gmail.com','computer Science','',true);
}
