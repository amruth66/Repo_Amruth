import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesListComponent } from './componets/employees/employees-list/employees-list.component';
import { AddEmployeeComponent } from './componets/employees/add-employee/add-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './componets/employees/edit-employee/edit-employee.component';
import { LoginComponent } from './componets/employees/login/login.component';
import { SignupComponent } from './componets/employees/signup/signup.component';
import { HeaderComponent } from './componets/header/header.component';
import { MentorAddComponent } from './componets/mentor/mentor-add/mentor-add.component';
import { MentorEditComponent } from './componets/mentor/mentor-edit/mentor-edit.component';
import { MentorListComponent } from './componets/mentor/mentor-list/mentor-list.component';
import { InternAddComponent } from './componets/intern/intern-add/intern-add.component';
import { InternEditComponent } from './componets/intern/intern-edit/intern-edit.component';
import { InternListComponent } from './componets/intern/intern-list/intern-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    MentorAddComponent,
    MentorEditComponent,
    MentorListComponent,
    InternAddComponent,
    InternEditComponent,
    InternListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
