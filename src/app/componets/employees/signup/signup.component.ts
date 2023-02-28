import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm : FormGroup;
  constructor(private fb:FormBuilder,private auth:AuthService,private route : Router){}
  ngOnInit(): void {

    this.signUpForm = this.fb.group({
      firstName : ['',Validators.required],
      lastName : ['',Validators.required],
      userName : ['',Validators.required],
      email : ['',Validators.required],
      password : ['',Validators.required],
    })
    
  }
  onSignUp(){
    this.auth.signup(this.signUpForm.value)
    .subscribe({
      next:(res)=>{
        alert(res.message)
        this.signUpForm.reset();
        this.route.navigate(['login']);
      },
      error:(err)=>{
        alert(err.error.message)

      }
    })
  }

}
