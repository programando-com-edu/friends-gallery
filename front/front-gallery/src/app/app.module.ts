import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { BannerComponent } from './components/account/banner/banner.component';
import { LoginFormComponent } from './components/account/login-form/login-form.component';
import { SignupFormComponent } from './components/account/signup-form/signup-form.component';
import { HomeComponent } from './components/home/home.component';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PostFormComponent } from './components/post/post-form/post-form.component';
import { AprovePostComponent } from './components/post/aprove-post/aprove-post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    LoginFormComponent,
    SignupFormComponent,
    HomeComponent,
    PostFormComponent,
    AprovePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot()  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
