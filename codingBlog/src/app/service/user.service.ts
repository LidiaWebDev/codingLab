import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'
import { User } from '../models/user'

export interface UserDetails {
  
  _id: string
  email: string
  username: string
  password: string
  exp: number
  iat: number
}

interface TokenResponse {
  token: string
}

export interface TokenPayload {
  _id: string
  email: string
  username: string
  password: string
}

@Injectable()
export class UserService {
  private token: string
  list: User []

  constructor(private http: HttpClient, private router: Router) {}
  
  private saveToken(token: string): void {
    localStorage.setItem('usertoken', token)
    this.token = token
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('usertoken')
    }
    return this.token
  }

  public getUserDetails(): UserDetails {
    const token = this.getToken()
    let payload
    if (token) {
      payload = token.split('.')[1]
      payload = window.atob(payload)
      return JSON.parse(payload)
    } else {
      return null
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails()
    if (user) {
      return user.exp > Date.now() / 1000
    } else {
      return false
    }
  }
 //Register a new user - add him to the db
  public register(user: TokenPayload): Observable<any> {
     const base = this.http.post(`http://127.0.0.1:3000/users/register`, user)
       const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token)
        }
        return data
       
      })
    )
   return request
  }

   //login already an existing user 
  private request(method: 'post', type: 'login', user?:TokenPayload): Observable<any> {
    let base;

    if (method === 'post') {
      base = this.http.post(`http://127.0.0.1:3000/users/login`, user);
    }
    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token)
        }
        return data
      })
  )
  return request;
  }
  
  
  public validateLogin(user: TokenPayload): Observable<any> {
    return this.request('post', 'login', user)
  }
    
  


  public profile(): Observable<any> {
    return this.http.get(`http://127.0.0.1:3000/users/home`, {
      headers: { Authorization: ` ${this.getToken()}` }
    })
  }

  public logout(): void {
    this.token = ''
    window.localStorage.removeItem('usertoken')
    this.router.navigateByUrl('/')
  }
}