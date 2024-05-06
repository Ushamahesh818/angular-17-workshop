import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prefix',
  standalone: true
})
export class PrefixPipe implements PipeTransform {

  transform(employees:any): any {
    //console.log(employees)
    employees.forEach((emp:any) => {
      
      if(emp.gender == 'Male'){
        emp.name="Mr."+emp.name;
      }else{
        emp.name="Ms."+emp.name;
      }
    });

    return employees;
  }

}
