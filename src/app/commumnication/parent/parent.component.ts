import { Component } from '@angular/core';
import { Child1Component } from '../child1/child1.component';
import { Child2Component } from '../child2/child2.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [Child1Component,Child2Component],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  employees : any[]= [
    { code: '101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '1988-06-25' },
    { code: '102', name: 'Jerry', gender: 'Male', annualSalary: 5700.95, dateOfBirth: '1938-03-2' },
    { code: '103', name: 'Dotty', gender: 'Female', annualSalary: 5900, dateOfBirth: '1998-12-5' },
    { code: '104', name: 'Mary', gender: 'Female', annualSalary: 6500.826, dateOfBirth: '1928-10-25' },
    { code: '105', name: 'Catherine', gender: 'Female', annualSalary: 6600.826, dateOfBirth: '1988-08-25' }
];
receiveEmployeeFromChild(data:any){
  console.log(data)
this.employees.splice(this.employees.indexOf(data),1);
}

addNewEmployee(data:any){
  this.employees.push(data);
}
  
}
