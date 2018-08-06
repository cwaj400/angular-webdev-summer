import {Component, OnInit} from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';
import {UserServiceClient} from '../services/user.service.client';
import {User} from '../models/user.model.client';

@Component({
  selector: 'app-white-board',
  templateUrl: './white-board.component.html',
  styleUrls: ['./white-board.component.css']
})
export class WhiteBoardComponent implements OnInit {
  user: User;

  constructor(private userService: UserServiceClient) {
  }

  ngOnInit() {
    this.userService.currentUser()
      .then(response => response.json()).then(user => {
      if (user !== undefined) {
        this.user = user;
      }
    });
  }
}
