import { Employee } from '../datatype/employee';
import { Address } from '../datatype/address';

export const EMPLOYEES: Employee[] = [
  { "id": 1,
    "name": "Jhon",
    "phone": "9999999999",
    "address" : new Address ("Pune", "ABC road", "XYZ building", 12455) 
  },
  { "id": 2,
    "name": "Jacob",
    "phone": "AZ99A99PQ9",
    "address" : new Address ("Pune", "PQR road", "ABC building", 13455)
  },
  { "id": 3,
    "name": "Ari",
    "phone": "145458522",
    "address" : new Address ("Mumbai", "ABC road", "XYZ building", 12455)
  },
];
