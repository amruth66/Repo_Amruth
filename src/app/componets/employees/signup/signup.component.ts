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
      firstname : ['',Validators.required],
      lastname : ['',Validators.required],
      username : ['',Validators.required],
      email : ['',Validators.required],
      password : ['',Validators.required],
    })
    
  }
  onSignUp(){
    if(this.signUpForm.valid)
    {
      this.auth.signup(this.signUpForm.value)
      .subscribe({
      next:(res)=>{
        alert(res.message)
        this.signUpForm.reset();
        this.route.navigate(['home']);
      },
      error:(err)=>{
        alert(err.error.message)
      }
    })    
    }   
  }
}
