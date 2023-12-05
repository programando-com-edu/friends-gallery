import { LoginService } from 'src/app/services/account/login.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthVerificatorService {

  private meUrl: string = 'http://localhost:8000/api/me';

  constructor(
    private http: HttpClient
  ) {}

  verifyMe(){
    const token = localStorage.getItem('logintoken');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(this.meUrl, {headers})
  }

}
