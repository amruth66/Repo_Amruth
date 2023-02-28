import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './componets/employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './componets/employees/edit-employee/edit-employee.component';
import { EmployeesListComponent } from './componets/employees/employees-list/employees-list.component';
import { LoginComponent } from './componets/employees/login/login.component';
import { SignupComponent } from './componets/employees/signup/signup.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path : 'login',
    component:LoginComponent
  },
  {
    path : 'signup',
    component:SignupComponent
  },
  {
    path:'employees',
    component:EmployeesListComponent
  },
  {
    path:'employees/add',
    component:AddEmployeeComponent
  },
  {
    path:'employees/edit/:id',
    component:EditEmployeeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
