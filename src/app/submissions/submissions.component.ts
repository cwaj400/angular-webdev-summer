import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model.client';
import {SectionServiceClient} from '../services/section.service.client';
import {UserServiceClient} from '../services/user.service.client';
import {ActivatedRoute, NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.css']
})
export class SubmissionsComponent implements OnInit {


  submissions = [];
  user: User = new User();

  constructor(private service: SectionServiceClient,
              private userService: UserServiceClient,
              private router: Router, private route: ActivatedRoute) {

    // route.params.subscribe(params => this.loadSections(params['courseId']));

    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.userService.currentUser()
          .then(response => response.json()).then(user => {
          if (user !== undefined) {
            this.user = user;
          } else {
            alert('Please log in first');
            this.router.navigate(['login']);
          }
        });
      }
    });
  }
  ngOnInit() {
  }

}
