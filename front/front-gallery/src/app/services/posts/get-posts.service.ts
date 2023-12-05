import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetPostsService {
  getPostUrl = 'http://localhost:8000/api/post-list/';	


  constructor(private http: HttpClient, private router: Router) { }

  getPostList(): Observable<any> {
    const token = localStorage.getItem('logintoken');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(this.getPostUrl, {headers})
  }

}
