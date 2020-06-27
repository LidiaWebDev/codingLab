import { Injectable } from '@angular/core'
import { Router, CanActivate } from '@angular/router'
import { UserService } from './user.service'

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private loginService: UserService, private router: Router) {}

  canActivate() {
    if (!this.loginService.isLoggedIn()) {
      this.router.navigate(['/'])
      return false
    }
    return true
  }
}