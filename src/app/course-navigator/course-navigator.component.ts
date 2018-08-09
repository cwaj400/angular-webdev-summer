import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';
import {Course} from '../models/course.model.client';
import {SectionServiceClient} from '../services/section.service.client';
import { Router } from '@angular/router';


@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {

  courses: Course[] = [];
  selectedCourse = {};
  selectedModule = {};

  constructor(private route: Router, private courseService: CourseServiceClient, private sectionService: SectionServiceClient) {
  }

  selectCourse(course) {
    this.selectedCourse = course;
    this.selectedModule = {};
  }
  selectModule(module) {
    this.selectedModule = module;
  }

  enroll(course) {
    this.route.navigate(['sections']);
  }
  ngOnInit() {
    this.courseService
      .findAllCourses()
      .then(courses => this.courses = courses);
  }

}
