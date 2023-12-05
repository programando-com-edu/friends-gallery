import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './components/account/login-form/login-form.component';
import { SignupFormComponent } from './components/account/signup-form/signup-form.component';
import { HomeComponent } from './components/home/home.component';
import { PostFormComponent } from './components/post/post-form/post-form.component';
import { AuthVerificatorService } from './services/account/auth-verificator.service';
import { AprovePostComponent } from './components/post/aprove-post/aprove-post.component';


const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'signup', component: SignupFormComponent },
  { path: 'new-post', component: PostFormComponent, },
  { path: 'aprove-post', component: AprovePostComponent, },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
