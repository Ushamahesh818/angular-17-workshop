import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration-template-driven',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './registration-template-driven.component.html',
  styleUrl: './registration-template-driven.component.css'
})
export class RegistrationTemplateDrivenComponent {

  contactObj!: contact;

  countryList: country[] = [
    new country('1', 'India'),
    new country('2', 'USA'),
    new country('3', 'England'),
  ];

  ngOnInit() {
      // this.contactObj = {
    //   firstname: "Sachin",
    //   lastname: "Tendulkar",
    //   email: "sachin@gmail.com",
    //   gender: "male",
    //   isMarried: true,
    //   country: "2",
    //   address: { city: "Mumbai", street: "Perry Cross Rd", pincode: "400050" }
    // };
 
    this.contactObj = {
      firstname: "",
      lastname: "",
      email: "",
      gender: "",
      isMarried: true,
      country: "",
      address: { city: "", street: "", pincode: "" }
    };
 
  }
  setDefaults(){
    this.contactObj = {
      firstname: "Sachin",
      lastname: "Tendulkar",
      email: "sachin@gmail.com",
      gender: "male",
      isMarried: true,
      country: "2",
      address: { city: "Mumbai", street: "Perry Cross Rd", pincode: "400050" }
    };
  }
  
  OnSubmit(contactForm: any){
console.log(contactForm.value)
  }
}

export class contact{
  firstname!: string;
  lastname!: string;
  email!: string;
  gender!: string;
  isMarried!: boolean;
  country!: string;
  address!: {
    city: string;
    street: string;
    pincode: string;
  };

}
export class country {
  id: string;
  name: string;
 
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
 