import { Component } from '@angular/core';
import { EmployeeCRUDService } from '../../services/employee-crud.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-employee-crud',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './employee-crud.component.html',
  styleUrl: './employee-crud.component.css'
})
export class EmployeeCRUDComponent {
  employees:any=[];
  name1:string='';
  age:string='';
  salary:any;
  empId:string=''
  isEdit:boolean=false;

  private url:string="http://localhost:3000/data";
  constructor(private employeeCRUDService:EmployeeCRUDService){
  }

  fetchEmployees(){
    this.employeeCRUDService.getALLEmployees().subscribe(response=>{
      this.employees=response;
    })
  }

  addEmployee() {
    const payload = {"employee_name":this.name1,"employee_salary":this.salary,"employee_age":this.age,profile_image:''};
    if(this.isEdit){
      this.employeeCRUDService.updateEmployee(this.empId,payload).subscribe((response:any)=>{
        this.fetchEmployees();
      })
      this.clearAll();
    }else{
    this.employeeCRUDService.createEmployee(payload).subscribe((response: any) => {
      Swal.fire('Record Added', 'Employee Added successfully', 'success');
      this.fetchEmployees();
      this.clearAll();
   
    })}
  }
  updateEmployee(empId:any,employee_name: any, employee_salary: any, employee_age: any,profile_image:any){
    const payload = {employee_name, employee_salary,employee_age,profile_image};
    this.employeeCRUDService.updateEmployee(empId,payload).subscribe((response:any)=>{
      this.fetchEmployees();
    })
  }
  editEmployee(empObj:any){
      this.isEdit=true;
      this.empId=empObj.id;
      this.name1=empObj.employee_name;
      this.salary=empObj.employee_salary;
      this.age=empObj.employee_age;
  }

clearAll(){
this.name1='';
this.salary='';
this.age='';
this.isEdit=false;

  }
}
