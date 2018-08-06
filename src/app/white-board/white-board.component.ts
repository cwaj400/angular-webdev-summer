import {Component, OnInit} from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';
import {UserServiceClient} from '../services/user.service.client';
import {User} from '../models/user.model.client';
import {NavigationStart, Router} from '@angular/router';
import {Navigation} from 'selenium-webdriver';

@Component({
  selector: 'app-white-board',
  templateUrl: './white-board.component.html',
  styleUrls: ['./white-board.component.css']
})
export class WhiteBoardComponent implements OnInit {
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

  ngOnInit() {

  }

  logout() {
    this.userService.logout();
    alert('Logging you out ' + this.user.username);
    this.router.navigate(['login']);
  }
}
