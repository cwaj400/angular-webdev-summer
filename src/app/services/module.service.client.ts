import {Injectable} from '@angular/core';



const URL = 'http://localhost:8080';

@Injectable()
export class ModuleServiceClient {

  findModulesForCourse = (courseId) =>
    fetch(URL + '/api/course/' + courseId + '/module',  {
      method: 'get',
    }).then(response => response.json());
}

