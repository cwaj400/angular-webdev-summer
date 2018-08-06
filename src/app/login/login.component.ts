import {Component, OnInit} from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;

  constructor(private router: Router,
              private userService: UserServiceClient) {
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
