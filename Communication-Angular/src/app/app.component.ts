import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Communication-Angular';
  data=10;
  value=0
  UpdateData(item:any)
  {
   this.value=item
  }
}
