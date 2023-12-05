import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApprovePostService {
  private approveData:any
  retrivePostsUrl = 'http://localhost:8000/api/post-for-approve/';
  approveUrl = 'http://localhost:8000/api/approve-post/';

  constructor(private http: HttpClient,) { }
  
  private getApproveUrl(id:any) {
    return this.approveUrl + id + '/' 
  }

  getPostList(): Observable<any> {
    const token = localStorage.getItem('logintoken');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(this.retrivePostsUrl, {headers})
  }

  approvePost(id:any){
    const token = localStorage.getItem('logintoken');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    this.approveData = {
      "approved":true
    }
    return this.http.patch(this.getApproveUrl(id), this.approveData,  {headers})
  }

  denyPost(id:any){
    const token = localStorage.getItem('logintoken');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    this.approveData = {
      "approved":false,
      "active":false
    }
    return this.http.patch(this.getApproveUrl(id), this.approveData,  {headers})
  }
}
