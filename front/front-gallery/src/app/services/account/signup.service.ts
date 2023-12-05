import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from '../account.model';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  signupUrl = 'http://localhost:8000/api/create-user/';

  constructor(private http: HttpClient, private loginService:LoginService) { }

  createAccount(account: Account){
    this.http.post(this.signupUrl, account).subscribe((res:any)=> {
      if( res ){
        this.loginService.login(account)
      }
    });
    return 
  }
}
