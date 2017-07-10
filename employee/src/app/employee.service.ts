import { Injectable } from '@angular/core';

import { Employee } from './datatype/employee';
import { EMPLOYEES } from './mock-data/mock-employees';

@Injectable()
export class EmployeeService {

  constructor() { }
  
  getEmployees(): Employee[] {
    return EMPLOYEES;
  }

}
