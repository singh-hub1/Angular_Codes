import { Component } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reactive-form';

  /*
  regform =new FormGroup({
   // city:new FormControl(),
   // state:new FormControl(),  //If it is not combine with group
   studname:new FormControl(),
   studnumber:new FormControl(),
   studmail:new FormControl(),
   schoolNames:new FormControl(),
   ProgramesNames:new FormControl(),
   BrochureDefault:new FormControl(),
   address:new FormGroup({
      city1:new FormControl(),
      state1:new FormControl()
   })

  });

*/

constructor(private formbuilder:FormBuilder){}

regform=this.formbuilder.group({
   studname:['vishal singh',Validators.required],
   studmail:['vishalkvd2005@gmail.com',Validators.email],
   studnumber:['7875487500'],

   alternatephone:this.formbuilder.array([]),

   ProgramesNames:[''],
   schoolNames:['mathematics'],
   BrochureDefault:['true'],
   address:this.formbuilder.group({
      city:[''],
      state:['']
   })
})

get alternatephone()
{
   return this.regform.get('alternatephone') as FormArray;
}

addalternatephone(){
   return this.alternatephone.push(this.formbuilder.control(''));
}


/*
loaddata()
  {
   this.regform.setValue({
      studname:'vishal singh',
      studnumber:'9370735015',
      studmail:'vishalkvd2005@gmail.com',
      schoolNames:'',
      ProgramesNames:'',
      BrochureDefault:'true',
      address:{
         city:'Pune',
         state:'maharashtra'
      }

   });
  }
  */

/*

  loaddata()
  {
   this.regform.patchValue({
      studname:'vishal singh',
      studnumber:'9370735015',
   
      schoolNames:'',
      ProgramesNames:'',
      BrochureDefault:'false',
      address:{
         city1:'Pune',
         state1:'sd'
      }

   });
  }
*/

}
