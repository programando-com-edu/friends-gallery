import { SignupService } from './../../../services/account/signup.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/account/login.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  account = {
    name: "",
    email: "",
    password: "",
  }
  constructor(private signupService: SignupService ) { }

  ngOnInit(): void {
  }

  performCreate(): void {
    this.signupService.createAccount(this.account)
  }
}
