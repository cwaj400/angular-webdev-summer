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
import {QuizServiceClient} from '../services/quiz.service.client';
import {Quiz} from '../models/quiz.model.client';
import {QuizListComponent} from '../quiz-list/quiz-list.component';


@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {

  user = new User();

  sectionTitle: '';
  sectionSeats: '';
  courses: Course[] = [];
  selectedCourse = new Course();
  sections: Section[] = [];
  selectedSection = new Section();

  constructor(private userService: UserServiceClient, private router: Router,
              private courseService: CourseServiceClient, private sectionService: SectionServiceClient,
              private quizService: QuizServiceClient) {
    router.events.subscribe(event => {
      this.userService.currentUser()
        .then(response => response.json()).then(user => {
        if (user !== undefined) {
          this.user = user;
        } else {
          alert('Please sign in first');
          this.router.navigate(['login']);
        }
      });
    });
  }

  selectCourse(course) {
    this.selectedCourse = undefined;
    this.selectedCourse = course;
    this.sectionService.findSectionsForCourse(course.id).then(sections => this.sections = sections);
  }

  createSection(title, seats) {
    const section = {
      title: title,
      courseId: this.selectedCourse.id,
      seats: seats,
    };
    this.sectionService.createSection(section).then(response => this.sections.push(response));
  }

  viewQuizzes() {
    this.router.navigate(['quizzes']);
  }

  enroll(section) {
  }


  ngOnInit() {
    this.courseService
      .findAllCourses()
      .then(courses => this.courses = courses);
  }

  seeContents(course) {
    // this.selectedCourse = this.courseService.findCourseById(course.id);
    // this.route.navigate(['modules']);
  }
}
