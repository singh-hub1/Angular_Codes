import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-programname',
  templateUrl: './programname.component.html',
  styleUrls: ['./programname.component.css']
})
export class ProgramnameComponent {
  programNames=[
    {"pid":1,"pname":"MCA Science"},
    {"pid":2,"pname":"Msc. CS"},
    {"pid":3,"pname":"MSc DS&BDA"},
    {"pid":4,"pname":"Msc Blockchain"},
    {"pid":5,"pname":"BSC CS"},
    {"pid":6,"pname":"BSc DS&BDA"},
    {"pid":7,"pname":"BCA Science"},
  ]

  constructor(private router:Router){}
  selectedPrgm(pn:any){
    this.router.navigate(['/program',pn.pid])
  }

}
