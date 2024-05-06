import { CommonModule } from '@angular/common';
import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
  inputs:['empArray'],
  outputs:['employeeEvent']
})
export class Child1Component {
  employeeEvent= new EventEmitter();

  empArray:any;

  deleteEmployee(emp:any){
    console.log("in child1 delete method");
    this.employeeEvent.emit(emp);
  }

}
