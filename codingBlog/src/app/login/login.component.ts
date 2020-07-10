import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, TokenPayload} from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // providers: [UserService]
})
export class LoginComponent {

  credentials: TokenPayload = {
    _id: '',
    email: '',
    username: '',
    password: ''
  }
  
constructor(private loginService: UserService, private router: Router) {window.scrollTo(0, 0);}

 validateLogin() {

    if(this.credentials.email && this.credentials.password) {
      console.log('connected successfully, email is ',this.credentials.email,'; password is ',this.credentials.password)

      this.loginService.validateLogin(this.credentials).subscribe(result =>
     {console.log('result is ', result);
     if (result) {
      this.router.navigate(['/home']);
      
     }else {
       alert("Such user does not exist, please check your credentials and try again")
       this.router.navigate(['/login']);
     }
    }, error => {
      console.log('error is ', error);
      alert('Wrong login credentials, please try again')
    });
    
    } else {
      alert('Enter you email and the password');
    }
  }


  moveToRegister() {
    this.router.navigate(['/register'])
  }

  loaded(){
    console.log('loaded');
  }

 
}

