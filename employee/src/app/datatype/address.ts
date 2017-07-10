export class Address {
  city: string;
  address_line1: string;
  address_line2: string;
  postal_code: number;
  constructor(city:string, address_line1: string, address_line2: string, postal_code: number) {
    this.city = city;
    this.address_line1 = address_line1;
    this.address_line2 = address_line2;
    this.postal_code = postal_code;
  }
}
