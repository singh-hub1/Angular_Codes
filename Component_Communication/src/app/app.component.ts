import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Child1Component } from './child1/child1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  
  title = 'Component_Communication';

  sendDataToChild : string = "This data is from parent component";

  dataRecvd="";
  parentRecv(data : string){
    this.dataRecvd = data;
  }
  
  findFactorial(num : number) : number{
    let fact = 1;
    for(let i = 1 ; i <= num; i++){
      fact = fact * i;
    }
    return fact;
  }

  checkPalindrome(num : number){

    let temp, rem, rev = 0;
    temp = num;
    while(num>1){
      rem = Math.floor(num % 10);
      rev = (rev * 10) + rem;
      num = num / 10;
    }
    if(temp == rev){
      return `${rev} is a palindrome number`;
    }
    else{
      return `${rev} is not a palindrome number`;
    }
  }

  checkArmstrong(num : number){

    let temp, rem, sum = 0;
    temp = num;
    while(num > 1){
      rem = Math.floor(num % 10);
      sum += Math.pow(rem,3);
      num /= 10;
    }

    if(temp == sum){
      return `${temp} is an armstrong number`;
    }
    else{
      return `${temp} is not an armstrong number`; 
    }
  }

  checkPerfectNumber(num : number){
    let i = 1,sum = 0;
    while(i <= num/2){
      if(num % i == 0){
        sum += i
      }
      i++;
    }
    
    if(num == sum){
      return `${num} is a perfect number`;
    }
    else{
      return `${num} is not a perfect number`;
    }
  }

  // Question 1
  displayTextToChild(x : any){
    return x;
  }

  text = ""
  parentRec(str : string){
    this.text = str;
  }

  // Question 2
  total = 0;
  displayAddnToChild(num1 : any, num2 : any){
    return this.total = Number(num1) + Number(num2);
  }

  final_ans = 0;
  addn(no : any){
    return this.final_ans = Number(no)+this.total;
  }

  
  // Question 3

  displayStringToChild(message : string) {
    return message;
    
  }


  str = "";
  reverseString(msg : string){
    this.str = msg.split('').reverse().join('');
    return this.str;
  }

  // Send data to child1 component
  sendDataToChild1 : string = "This data is from child 1";
  counter = 0;
  buttonClicked(){
    return this.counter += 1
  }


  // Accessing child properties or method using ViewChild
  @ViewChild(Child1Component) private child!:Child1Component;
  ngAfterViewInit(): void {
    this.child.msg1 = "This message is from parent Component";
  }
}
