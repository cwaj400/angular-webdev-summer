import {Injectable} from '@angular/core';
import {repeat} from 'rxjs/operators';



const URL = 'http://localhost:8080';

@Injectable()
export class CourseServiceClient {

  findAllCourses = () => {
    return fetch(URL + '/api/course')
      .then(response => response.json());
  };

  findCourseById = (courseId) => {
    return fetch(URL + '/api/course/' + courseId).then(response => response.json());
  }
}
