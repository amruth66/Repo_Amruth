import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employeeDetails:Employee={
    //id:0,
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: '',
    Employee: function (id: any, name: string, email: string, phone: number, salary: number, department: string): void {
      throw new Error('Function not implemented.');
    }
  };
  constructor(private route : ActivatedRoute,private employeeService : EmployeesService,private router: Router){}
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
        const id = params.get('id');
        if(id)
        {
            this.employeeService.getEmployee(id)
            .subscribe({
              next:(response)=>{
                this.employeeDetails = response;
              }
            })
        }
      }

    })
  }

  // deleteEmployee(id:any){
  //   this.employeeService.deleteEmployee(id)
  //   .subscribe({
  //     next:(response) => {
  //       this.router.navigate(['employees']);
  //     }
  //   })
  // }

  updateEmployee(id:any){
    alert("Are you sure to Update ?")
    this.employeeService.updateEmployee(this.employeeDetails.id,this.employeeDetails)
    .subscribe({
      next:(response)=>
      {
        this.router.navigate(['home']);
      }
    })
  }
}
