import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private isUserLoggedIn;
  username;

  constructor() {
    this.isUserLoggedIn = false;
  }

  setUserLoggedIn(userName: string) {
    this.username = userName;
    this.isUserLoggedIn = true;
  }

  getUserLoggedIn() {
    return this.isUserLoggedIn;
  }

}
