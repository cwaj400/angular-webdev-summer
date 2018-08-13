import {Component, OnInit} from '@angular/core';
import {pureArrayDef} from '@angular/core/src/view';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: String;
  password: String;
  password2: String;
  email: String;

  constructor(private router: Router,
              private userService: UserServiceClient) {
  }

  ngOnInit() {
  }

  register = (username, password, password2, email, type) => {
    console.log('registering user: ' + username, password, email, type);

    if (username && password && email !== undefined) {
      if (password === password2) {
        const user = {
          username: username,
          password: password,
          email: email,
          type: type
        };
        const promise = this.userService.register(user)
          .then(status => {
            if (status === 200) {
              this.router.navigate(['profile']);
            } else {
              alert('That user already exists - IDENTITY THEFT IS NOT A JOKE, JIM');
            }
          });
      } else {
        alert('passwords much match');
      }
    } else {
      alert('oops - looks like you forgot to fill in some fields');
    }
  };
}
