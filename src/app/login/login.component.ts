import {Component, OnInit} from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {NavigationStart, Router} from '@angular/router';
import {User} from '../models/user.model.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;
  user: User = new User();

  constructor(private userService: UserServiceClient, private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.userService.currentUser()
          .then(response => response.json()).then(user => {
          if (user !== undefined) {
            this.user = user;
          }
        });
      }
    });
  }

  login = (username, password) => {
    if (username && password !== undefined) {
      const user = {
        username: username,
        password: password,
      };
      this.userService.login(user)
        .then(status => {
          if (status === 200) {
            this.router.navigate(['profile']);
          } else {
            alert('That person doesn\'t exist - consider registering instead');
          }
        });
    } else {
      alert('Looks like you forgot to fill in some fields');
    }
  };


  ngOnInit() {
  }

  goToRegister() {
    this.router.navigate(['register']);
  }
}
