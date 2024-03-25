import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

  providers: [LoginService]

})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted: boolean = false;
  isLoading: boolean = false;

  get fc() {
    return this.loginForm.controls;
  }

  get fv() {
    return this.loginForm.value;
  }

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initialization();
  }

  initialization() {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  onSubmit() {
    this.submitted = true;
    this.isLoading = true;
    if (this.loginForm.invalid) {
      this.isLoading = false;
      return
    } else {

      const payload = {
        ...this.fv
      }

      localStorage.setItem('isLogin', 'true');
      localStorage.setItem('roleId', '1');
      // localStorage.setItem('roleId', '2');
      // localStorage.setItem('roleId', '3');
      this.router.navigate(['/dashboard']);

      this.loginService.login(payload).subscribe({
        next: (res: any) => {
          this.isLoading = false;
          localStorage.clear();
          localStorage.setItem('isLogin', 'true');
          localStorage.setItem('roleId', res.roleId);
          // localStorage.setItem('token', res.accessToken);
          // localStorage.setItem('refreshToken', res.refreshToken);
        },
        error: (err: any) => {
          this.isLoading = false;
        },
        complete: () => {
          this.router.navigate(['/dashboard']);
        }
      });

    }
  }

}
