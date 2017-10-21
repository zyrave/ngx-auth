import { Component, OnInit } from '@angular/core';

import { UserService } from './../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private user;

  constructor(private userService: UserService) {
    this.user = 'Anonymous';
  }

  ngOnInit() {
    this.user = this.userService.username;
  }

}
