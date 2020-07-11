import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UserService, TokenPayload  } from '../service/user.service'

 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
 
})
export class RegisterComponent {


    credentials: TokenPayload = {
      _id: '',
      email: '',
      username: '',
      password: ''
    }
   

  constructor(private auth: UserService, private router: Router) {}

  // ngOnInit() {}

  moveToLogin(){
    this.router.navigate(['/login']);
  }
 
register(){
    
if(this.credentials.email && this.credentials.username &&this.credentials.password) {
    this.auth.register(this.credentials).subscribe(
      () => {
        this.router.navigate(['/login'])
        console.log("You are successfully registered")
      },
      err => {
        console.error(err)
        alert('Credentials do not match or left an empty field, please try again')
      }
    
  )
    } else {
      alert('The fields are empty, please fill each required field');
    }
  }

  loaded() {
    console.log('loaded');
  }
  }

 

