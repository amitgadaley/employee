import { Component, OnInit } from '@angular/core';

import {Employee} from './datatype/employee'
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EmployeeService]
})

export class AppComponent implements OnInit {
  employees: Employee[];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
  }
  isNumber(contact:string): boolean {
    return /^\d+$/.test(contact);;
  }
}
