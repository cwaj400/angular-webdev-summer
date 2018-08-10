import {Injectable} from '@angular/core';



const URL = 'http://localhost:8080';
@Injectable()
export class LessonServiceClient {


  findLessonsForModule = (moduleId) =>
    fetch(URL + '/api/course/:CID/module/MID/lesson'.replace('MID', moduleId), {
      method: 'get',
    }).then(response => response.json());
}


