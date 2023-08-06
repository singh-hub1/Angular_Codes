import { Component,Input,OnInit,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecyclehooks',
  templateUrl: './lifecyclehooks.component.html',
  styleUrls: ['./lifecyclehooks.component.css']
})
export class LifecyclehooksComponent implements OnInit {

@Input() childData:string="some text";
constructor(){
console.log("constructor is called ");
console.log(this.childData);
}

ngOnChanges(changes:SimpleChanges)
{
console.log("child component ngOnChanges is called ..");
console.log(changes);
}


ngOnInit():void{
   console.log("ngOnInit is called ");
}

ngDoCheck(){
   console.log("ngDoCheck method is called ");
}
forngDoCheck(){}



ngAfterContentInit(){
   console.log("ngAfterCheckInit method is called!")
 }

 ngAfterContentChecked(){
   console.log("ngAfterContentChecked method is called!!")
 }
 ngAfterViewInit(){
   console.log("ngAfterViewInit method is called!!")
 }

 ngAfterViewChecked(){
   console.log("ngAfterViewChecked method is called!!")
 }

 ngOnDestroy(){
   console.log("ngOnDestory method is called!!")
 }
}
