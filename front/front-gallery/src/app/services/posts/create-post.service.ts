import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CreatePostService {
  newPostUrl = 'http://localhost:8000/api/create-post/';	

  constructor(private http: HttpClient, private router: Router) { }
  
  createNewPost(post:any): void{
    const token = localStorage.getItem('logintoken');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    this.http.post(this.newPostUrl, post, {headers}).subscribe((res:any)=> {
      if( res ){
        this.router.navigate([''])
      }
    });
  }
}
