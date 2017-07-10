import { Address } from './address';
export class Employee {
  id: number;
  name: string;
  phone: string;
  address: Address;
  constructor (id:number, name:string, phone:string, address:Address) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.address = address;
  }
}
