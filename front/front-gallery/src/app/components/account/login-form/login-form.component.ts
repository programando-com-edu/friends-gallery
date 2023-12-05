import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../../services/account/login.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  account = {
    email: '',
    password: ''
  }

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  navigateToSignup(): void {
    this.router.navigate(['/signup']);
  }

  performLogin(): void {
    this.loginService.login(this.account)
  }

}
