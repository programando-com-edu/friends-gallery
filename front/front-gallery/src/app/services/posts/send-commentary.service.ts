import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SendCommentaryService {
  newPostUrl = 'http://localhost:8000/api/create-commentary/';

  constructor(private http: HttpClient, private router: Router) { }

  createNewCommentary(commentary:any): void{
    const token = localStorage.getItem('logintoken');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    this.http.post(this.newPostUrl, commentary, {headers}).subscribe((res:any)=> {
        this.router.navigate([''])
    });
  }
}
