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
    

        // registerForm = new FormGroup({
        // email: new FormControl(null, [Validators.email, Validators.required]),
        // username: new FormControl(null, Validators.required),
        // password: new FormControl(null, Validators.required),
        // confirmPass:new FormControl(null, Validators.required)
        

    // })

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
  // userService:UserService;

  register(){
    
 
    // if(!this.credentials.valid || (this.credentials.controls.password.value != this.credentials.controls.confirmPass.value)){
    //   console.log('Invalid Form');
    //   alert("Invalid credentials, please check the form and submit again") ;
    //   return;
    // }
    this.auth.register(this.credentials).subscribe(
      () => {
        this.router.navigate(['/login'])
        console.log("You are successfully registered")
      },
      err => {
        console.error(err)
      }
    )
  }

   

    // this.userService.register(JSON.stringify(this.registerForm.value))
    // .subscribe(
    //   data=> {console.log(data); this.router.navigate(['/login']);},
    //   error=>console.error(error)
    // )
    // console.log(JSON.stringify(this.registerForm.value));
  }

 

