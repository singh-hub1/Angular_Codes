import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomeDirective]'
})
export class CustomeDirectiveDirective {

  constructor(private elem:ElementRef) {  //we can create our specific order pubic or private.
   elem.nativeElement.style.color="green";
   elem.nativeElement.style.backgroundColor="orange";

   }

}
//You can add custum directive just like normal component



