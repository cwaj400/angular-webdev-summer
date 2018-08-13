import {Component, OnInit} from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';
import {ModuleServiceClient} from '../services/module.service.client';
import {Course} from '../models/course.model.client';
import {SectionServiceClient} from '../services/section.service.client';
import {NavigationStart, Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';
import {User} from '../models/user.model.client';
import {LessonServiceClient} from '../services/lesson.service.client';
import {Section} from '../models/section.model.client';


@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {

  user = new User();

  sectionTitle: '';
  sectionSeats: Number;
  courses: Course[] = [];
  selectedCourse = new Course();
  sections: Section[] = [];

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
    this.sectionService.findSectionsForCourse(course.id).then(sections => this.sections = sections);
  }

  createSection(title, seats) {
    const section = {
      title: title,
      courseId: this.selectedCourse.id,
      seats: seats
    };
    this.sectionService.createSection(section).then(() =>
      alert('section ' + title + ' for course ' + this.selectedCourse.title + ' created!'));
  }

  enroll(section) {
    if (this.user === undefined) {
      alert('Please sign in first');
    } else {

    }
  }

  ngOnInit() {
    this.courseService
      .findAllCourses()
      .then(courses => this.courses = courses);
      alert('Please log in to see quizzes and enrollments');
  }

  seeContents(course) {
    // this.selectedCourse = this.courseService.findCourseById(course.id);
    // this.route.navigate(['modules']);
  }
}
