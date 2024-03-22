import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  loginForm= new FormGroup({

    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)])

  });
  loginService: any;


  get email(){ return this.loginForm.get('email')}
  get password(){return this.loginForm.get('password')}

  constructor(
    private router:Router
  ) {

    
   }

  ngOnInit(): void {
  }
  
 onSubmit() {
    if (this.loginForm.valid){
      return;
    }
    const payload ={
      email: this.email?.value,
      password:this.password?.value
    };
    this.loginService.login(payload).subscribe({
      next: (res:any) =>{
        alert("login Added Successfully");
      },
        error:(err:any) =>{
          console.error(err);
        },
        compleate: () =>
        this.router.navigate(["/layout"])
    })
  }

    navigateTolayout() {
    this.router.navigate(["/layout"]);
      }
  }