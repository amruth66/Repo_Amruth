import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
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
  user:User={
    Id:0,
    FirstName:'',
    LastName:'',
    UserName:'',
    Password:'',
    Email:'',
  }
  onLogin()
  {
    if(this.loginForm.valid)
    {
      this.user.UserName=this.loginForm.get('username')?.value;
      this.user.Password=this.loginForm.get('password')?.value;
      this.auth.login(this.user)
      .subscribe({
        next:(res)=>{
          alert(res.message);
          this.loginForm.reset();
          this.route.navigate(['/home']);
        },
        error:(err)=>{
            alert("User not Found");
        }
      })
    }
  }

}
