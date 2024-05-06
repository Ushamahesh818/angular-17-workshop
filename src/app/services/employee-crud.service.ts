import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeCRUDService {
  private url:string="http://localhost:3000/data";
  constructor(private _http:HttpClient) { 
  }

  getALLEmployees(){
    return this._http.get(this.url);
  }

  createEmployee(empObj:any){
    return this._http.post(this.url,empObj);
  }

  updateEmployee(empId:any,empObj:any){
    return this._http.patch(`${this.url}/${empId}`,empObj);
  }

  deleteEmployee(empId:any){
    return this._http.delete(`${this.url}/${empId}`);
  }
}
