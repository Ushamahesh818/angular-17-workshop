import { CommonModule } from '@angular/common';
import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
  outputs:['newEmpObjectEvent']
})
export class Child2Component {
  code:string='';
  name:string='';
  gender:string='Select Gender';
  annualSalary:number=0;
  dateOfBirth:any;
  newEmp:any;
  newEmpObjectEvent=new EventEmitter();


  
  createNewEmployee(){
    this.newEmp={ code: this.code, name: this.name, gender: this.gender, annualSalary: this.annualSalary, dateOfBirth: this.dateOfBirth };
    console.log(this.newEmp);
    this.newEmpObjectEvent.emit(this.newEmp);
  }

}
