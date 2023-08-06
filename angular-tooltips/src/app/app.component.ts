import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
// import {MatTooltipModule} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
   title = 'angular-tooltips';

   showDelay = new FormControl(2000);
   hideDelay = new FormControl(3000);
   constructor() { }
   ngOnInit() {}
 
 }
