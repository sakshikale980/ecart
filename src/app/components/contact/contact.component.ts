import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  loginForm= new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)

    
  })
  get username(){return this.loginForm.get('username')}
  get password(){return this.loginForm.get('password')}

}
