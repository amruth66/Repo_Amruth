import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent  implements OnInit{

  addEmployeeForm : FormGroup;

  addEmployeeRequest : Employee={
    id: 0,
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: '',
    Employee: function (id: any, name: string, email: string, phone: number, salary: number, department: string): void {
      throw new Error('Function not implemented.');
    }
  };
  constructor(private employeeService : EmployeesService,private router : Router, private fb: FormBuilder){}
  ngOnInit(): void {
    this.addEmployeeForm=this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
      phone:['',[Validators.required,Validators.pattern("[0-9]{10}")]],
      salary:['',Validators.required],
      department :['',Validators.required]
    })
    
  }
  addEmployee()
  {
    console.log(this.addEmployeeForm);
    this.employeeService.addEmployee(this.addEmployeeRequest)
    .subscribe({
      next:(employee)=>
      {
        this.router.navigate(['home']);
      }
    });
  }



}
