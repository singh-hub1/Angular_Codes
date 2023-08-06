import { Component,OnInit } from '@angular/core';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-forservice',
  templateUrl: './forservice.component.html',
  styleUrls: ['./forservice.component.css']
})
export class ForserviceComponent implements OnInit {
  emp:any[]=[];
  /*[
    {eid:1,ename:"Ram",ecity:"Pune",esalary:95000,dob:new Date("05/10/1981")},
    {eid:2,ename:"Seja",ecity:"Mumbai",esalary:92000,dob:new Date("05/12/1983")},
    {eid:3,ename:"Reja",ecity:"Surat",esalary:90000,dob:new Date("10/09/1985")},
    {eid:4,ename:"Teja",ecity:"Panaji",esalary:85000,dob:new Date("12/04/1986")},
    {eid:5,ename:"Sham",ecity:"Nagpur",esalary:89000,dob:new Date("11/11/1987")},
  ];*/
  constructor(private eSer:EmployeesService){}
  ngOnInit(){
    this.emp=this.eSer.getEmpData();
  }
}
