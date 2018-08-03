import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';

@Component({
  selector: 'app-white-board',
  templateUrl: './white-board.component.html',
  styleUrls: ['./white-board.component.css']
})
export class WhiteBoardComponent implements OnInit {

  courses = [];
  selectedCourse = {};
  selectedModule = {};

  constructor(private courseService: CourseServiceClient) {}
  selectCourse(course) {
    this.selectedCourse = course;
    this.selectedModule = {};
  }
  selectModule(module) {
    this.selectedModule = module;
  }
  deleteCourse(courseId) {
    this.courses = this.courses.filter(course =>
          course.id !== courseId);
  }
  addCourse(courseTitle) {
    const largestId = Math.max.apply(
      Math, this.courses.map(
        function(course){
          return course.id; }));
    this.courses.push(
      {title: courseTitle, id: largestId + 1}
    );
  }

  ngOnInit() {
    this.courseService.findAllCourses().then(courses => this.courses = courses);
  }

}
