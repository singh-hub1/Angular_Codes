import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'find-Factorial';
  factorial(n:any):any {
    if (n === 0) {
      return 1;
    }
    return n * this.factorial(n - 1);
  }
  get_factorial(n:any) {
    console.log(this.factorial(n));
  }
}
