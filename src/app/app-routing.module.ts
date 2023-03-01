import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './componets/employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './componets/employees/edit-employee/edit-employee.component';
import { EmployeesListComponent } from './componets/employees/employees-list/employees-list.component';
import { LoginComponent } from './componets/employees/login/login.component';
import { SignupComponent } from './componets/employees/signup/signup.component';
import { HeaderComponent } from './componets/header/header.component';

const routes: Routes = [
  {
    path:'',pathMatch:"full",
    redirectTo:"login"
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
    path:'home',component:HeaderComponent,children:[
    {
      path:'',component:EmployeesListComponent
    },
    {
      path:'add',
      component:AddEmployeeComponent
    },
    {
      path:'edit/:id',
      component:EditEmployeeComponent
    }]
  }
  // {
  //   path:'employees',
  //   component:EmployeesListComponent
  // },
  // {
  //   path:'employees/add',
  //   component:AddEmployeeComponent
  // },
  // {
  //   path:'employees/edit/:id',
  //   component:EditEmployeeComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
