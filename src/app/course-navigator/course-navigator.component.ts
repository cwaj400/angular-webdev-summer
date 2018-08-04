import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';
import {Course} from '../models/course.model.client';

@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {

  courses: Course[] = [];
  selectedCourse = {};
  selectedModule = {};

  constructor(private courseService: CourseServiceClient) { }

  selectCourse(course) {
    this.selectedCourse = course;
    this.selectedModule = {};
  }
  selectModule(module) {
    this.selectedModule = module;
  }
  ngOnInit() {
    this.courseService
      .findAllCourses()
      .then(courses => this.courses = courses);
  }

}
