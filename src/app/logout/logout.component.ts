import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {User} from '../models/user.model.client';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  user: User = new User();

  constructor(private userService: UserServiceClient) { }

  ngOnInit() {
    this.userService.currentUser()
      .then(response => response.json()).then(user => {
      if (user !== undefined) {
        this.user = user;
      }
    });
    this.userService.logout();
  }
}
