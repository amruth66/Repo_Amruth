import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private myhttp : HttpClient) {}

  employeeUrl:string = 'https://localhost:7243/api/Employees/';
  listEmployee:Employee[]=[];

  employeeData:Employee = new Employee(); //post nd insert

  getAllEmployees():Observable<Employee[]>{
    return this.myhttp.get<Employee[]>(this.employeeUrl);
  }

  addEmployee(addEmployeeRequest:Employee):Observable<Employee>
  {
    //addEmployeeRequest.id = 0;
    return this.myhttp.post<Employee>(this.employeeUrl,addEmployeeRequest);
  }

  getEmployee(id : any):Observable<Employee>{
    return this.myhttp.get<Employee>(this.employeeUrl+id);
  }
  
  updateEmployee(id:any,updateEmployeeRequest : Employee):Observable<Employee>
  {
    return this.myhttp.put<Employee>(this.employeeUrl+id,updateEmployeeRequest);
  }

  deleteEmployee(id:any):Observable<Employee>
  {
    return this.myhttp.delete<Employee>(this.employeeUrl+id);
  }
}