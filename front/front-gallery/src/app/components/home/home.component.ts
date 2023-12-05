import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthVerificatorService } from 'src/app/services/account/auth-verificator.service';
import { GetPostsService } from 'src/app/services/posts/get-posts.service';
import { SendCommentaryService } from 'src/app/services/posts/send-commentary.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private commentaryData:any
  posts:any;
  hasApproval:boolean = false;
  commentText: string = '';

  constructor(
    private getPosts: GetPostsService,
    private authVerication: AuthVerificatorService,
    private commentaryCreate: SendCommentaryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authVerication.verifyMe().subscribe(
      (res:any)=> {
        if(res){
          this.hasApproval = res.approval_right
        }
      },
      (error) => {
        this.router.navigate(['/login'])
      }
    );
    this.getPosts.getPostList().subscribe(
      (data) => {
        this.posts = data
      },
      (error) => {}
    );
  }
  navigateToPosts(): void {
    this.router.navigate([this.hasApproval ? '/aprove-post' : '/new-post']);
    console.log('teste')
  }
  sendCommentary(commentText:string, postId:any): void {
    this.commentaryData = {
      "commentary":commentText,
      "post": postId
    }
    this.commentaryCreate.createNewCommentary(this.commentaryData)
  }
}
