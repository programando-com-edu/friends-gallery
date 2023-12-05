import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Account} from '../account.model';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private isAuthenticated: boolean = false;
  loginUrl = 'http://localhost:8000/api/token/';	

  constructor(private http: HttpClient, private router: Router) { }

  login(account: Account){
    this.http.post(this.loginUrl, account).subscribe((res:any)=> {
      if(res.access){
        localStorage.setItem('logintoken', res.access)
        localStorage.setItem('refreshtoken', res.refresh)
        this.router.navigate([''])
        this.isAuthenticated=true;
      }
    });
    
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
