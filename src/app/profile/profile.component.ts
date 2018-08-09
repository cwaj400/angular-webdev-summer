import {Component, OnInit} from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {User} from '../models/user.model.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;
  username: String;
  password: String;
  email: String;

  constructor(private userService: UserServiceClient) {
  }

  ngOnInit() {
    this.userService.currentUser()
      .then(response => response.json())
      .then(user => {
        this.user = user;
      });
  }

  update(username, password, email) {
    alert('user updated!');
    if (username !== undefined) {
      this.username = username;
    }
    if (password !== undefined) {
      this.password = password;
    }
    if (email !== undefined) {
      this.email = email;
    }
    const newUser = {
      username: username,
      password: password,
      email: email
    };
    // this.userService.updateUser(newUser);
  }

  // logout() {
  //   this.c
  //     .logout()
  //     .then(() =>
  //       this.router.navigate(['login']));
  //
  // }
}
