import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthVerificatorService } from 'src/app/services/account/auth-verificator.service';
import { ApprovePostService } from 'src/app/services/posts/approve-post.service';

@Component({
  selector: 'app-aprove-post',
  templateUrl: './aprove-post.component.html',
  styleUrls: ['./aprove-post.component.css']
})
export class AprovePostComponent implements OnInit {
  posts:any;
  slideActive:any
  constructor(
    private aproveService : ApprovePostService,
    private authVerication: AuthVerificatorService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.authVerication.verifyMe().subscribe(
      (res:any)=> {},
      (error) => {
        this.router.navigate(['/login'])
      }
    );
    this.aproveService.getPostList().subscribe(
      (data) => {
        this.posts = data
      },
      (error) => {}
    );
  }

  slideChanged(event: any) {
    this.slideActive = event
  }

  approvePost() {
    let id = this.posts[this.slideActive].id
    this.aproveService.approvePost(id).subscribe((data) => {
      this.router.navigate(['/aprove-post'])
    })
  }
  denyPost() {
    let id = this.posts[this.slideActive].id
    this.aproveService.denyPost(id).subscribe((data) => {
      this.router.navigate(['/aprove-post'])
    })
  }
}
