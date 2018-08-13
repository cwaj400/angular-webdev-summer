import {Component, OnInit} from '@angular/core';
import {User} from '../models/user.model.client';
import {UserServiceClient} from '../services/user.service.client';
import {NavigationStart, Router, ActivatedRoute} from '@angular/router';
import {SectionServiceClient} from '../services/section.service.client';
import {Section} from '../models/section.model.client';
import isExtensible = Reflect.isExtensible;

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {

  sectionName = '';
  seats = '';
  courseId = '';
  sections = [];
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
    this.userService.currentUser()
      .then(response => response.json()).then(user => {
      if (user === undefined) {
        alert('user does not exist: ' + user);
      } else {
        this.user = user;
      }
    });
  }

  createSection(sectionName, seats) {
    const section = {
      title: sectionName,
      courseId: 11,
      seats: 5,
    };

    this.service.createSection(section).then(() => {
      // this.loadSections(this.courseId);
      alert('course id is: ' + this.courseId);
      alert('Section ' + sectionName + ' created!');
    });
    window.location.reload();
  }

  enroll(section) {
    // alert(section._id);
    this.service
      .enroll(section._id)
      .then(() => {
        this.router.navigate(['profile']);
      });
  }

  loadSections(courseId) {
    this.courseId = courseId;
    this
      .service
      .findSectionsForCourse(courseId)
      .then(sections => this.sections = sections);
  }
}
