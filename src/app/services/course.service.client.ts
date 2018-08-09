import {Injectable} from '@angular/core';



const URL = 'http://localhost:8080';

@Injectable()
export class CourseServiceClient {
  findAllCourses() {
    return fetch(URL + '/api/course')
      .then(response => response.json());
  }
}
