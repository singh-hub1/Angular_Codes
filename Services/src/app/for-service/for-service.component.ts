import { Component,OnInit } from '@angular/core';
import { EmployeesService } from '../sevices/employees.service';

@Component({
  selector: 'app-for-service',
  templateUrl: './for-service.component.html',
  styleUrls: ['./for-service.component.css']
})
export class ForServiceComponent implements OnInit{

  emp:any [] = [];
  //  [
  //   {eid:1, ename:"Divyu", ecity:"pune", esalary:1000, dob:new Date("05/10/1990")},
  //   {eid:2, ename:"shivi", ecity:"jaipur", esalary:50000, dob:new Date("06/10/1998")},
  //   {eid:3, ename:"sneha", ecity:"ajmer", esalary:4000, dob:new Date("05/03/2002")},
  //   {eid:4, ename:"deepak", ecity:"jaipur", esalary:3000, dob:new Date("05/09/1990")},
  //   {eid:5, ename:"Divyu", ecity:"pune", esalary:2000, dob:new Date("05/02/1990")},

  // ];

  constructor(private eSer: EmployeesService) {}
  ngOnInit() {
    this.emp=this.eSer.getEmpData();
  }
}
