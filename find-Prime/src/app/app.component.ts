import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  checkPrime(inputno: any) {
    let isPrime = true;

    if (inputno > 1) {

      for (let i = 2; i < inputno; i++) {
        if (inputno % i == 0) {
          isPrime = false;
          break;
        }
      }

      if (isPrime) {
        console.log(`${inputno} is a prime number`);
      } else {
        console.log(`${inputno} is a not prime number`);
      }
    }

    // check if number is less than 1
    if (inputno <= 1) {
      console.log("The number is not a prime number.");
    }
  }
}
