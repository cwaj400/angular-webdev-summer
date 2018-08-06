import {Component, OnInit} from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';
import {User} from '../models/user.model.client';
import {UserServiceClient} from '../services/user.service.client';
import {NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {
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
    this.userService.currentUser()
      .then(response => response.json()).then(user => {
      if (user === undefined) {
        alert('user does not exist: ' + user);
      } else {
        this.user = user;
        alert(user.username);
        alert('user username: ' + this.user.username);
      }
    });
  }
}
