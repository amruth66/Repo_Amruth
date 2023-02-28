import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm !: FormGroup;
  constructor(private fb: FormBuilder,private auth : AuthService,private route : Router){}
  ngOnInit(): void {
    this.loginForm=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
    throw new Error('Method not implemented.');
  }

  onLogin(){
    this.auth.login(this.loginForm.value)
    .subscribe({
      next:(res)=>{
        alert(res.message);
        this.loginForm.reset();
        this.route.navigate(['employees']);
      },
      error:(err)=>{
        alert(err.error.message)

      }
    })
  }
  

}
