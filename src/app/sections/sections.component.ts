import {Component, OnInit} from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';
import {User} from '../models/user.model.client';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {
  user: User;

  constructor(private userService: UserServiceClient) {
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
