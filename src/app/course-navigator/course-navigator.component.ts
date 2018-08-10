import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';
import { ModuleServiceClient } from '../services/module.service.client';
import {Course} from '../models/course.model.client';
import {SectionServiceClient} from '../services/section.service.client';
import {NavigationStart, Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';
import {User} from '../models/user.model.client';
import {LessonServiceClient} from '../services/lesson.service.client';


@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {

  user = new User();

  courses: Course[] = [];
  selectedCourse = {};
  selectedModule = {};

  constructor(private userService: UserServiceClient, private router: Router,
              private courseService: CourseServiceClient, private sectionService: SectionServiceClient) {
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

  selectCourse(course) {
    this.selectedCourse = course;
    this.selectedModule = {};
  }
  selectModule(module) {
    this.selectedModule = module;
  }

  enroll(course) {
    this.router.navigate(['sections']);
  }
  ngOnInit() {
    this.courseService
      .findAllCourses()
      .then(courses => this.courses = courses);
  }

  seeContents(course) {
    this.selectedCourse = this.courseService.findCourseById(course.id);
    // this.route.navigate(['modules']);
  }
}
