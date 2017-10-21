import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './../user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  private username;
  private password;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  loginUser() {
    if (this.username === 'admin' && this.password === 'admin') {
      this.userService.setUserLoggedIn('Admin');
      this.router.navigate(['dashboard']);
    } else {
      this.username = '';
      this.password = '';
      alert('Invalid username or password.');
    }
  }

}
