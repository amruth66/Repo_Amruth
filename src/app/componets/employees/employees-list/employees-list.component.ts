import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit{
  
  employees: Employee[] = [

  ];
  // employees:Employee={
  //   //id:0,
  //   id: '',
  //   name: '',
  //   email: '',
  //   phone: 0,
  //   salary: 0,
  //   department: '',
  //   Employee: function (id: any, name: string, email: string, phone: number, salary: number, department: string): void {
  //     throw new Error('Function not implemented.');
  //   }
  // };
  constructor(private employeesService : EmployeesService,private router: Router){}
  ngOnInit(): void{
    this.employeesService.getAllEmployees()
    .subscribe({
      next:(employees)=>{
          this.employees = employees;
      },
      error : (response)=>{
        console.log(response);
      }
    })

  }
  deleteEmployee(id:any){
    alert("Delete??");
    this.employeesService.deleteEmployee(id)
    .subscribe({
      next:(response) => {
        this.router.navigate(['employee']);
      }
    })
  }


}
