import {Injectable} from '@angular/core';

const URL = 'http://localhost:3000';

@Injectable()
export class SectionServiceClient {

  enroll = (sectionId) =>
    fetch(URL + '/api/section/' + sectionId + '/enroll', {
      method: 'put',
      credentials: 'include'
    }).then(response => response.json());


  findAllSections = () =>
    fetch(URL + '/api/section')
      .then(response => response.json());

  updateSection = sectionId =>
    fetch(URL + '/api/section/' + sectionId, {
      method: 'put',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.status);


  findSectionByItsItd = sectionId =>
    fetch(URL + '/api/section/' + sectionId, {
      method: 'get',
      credentials: 'include',
    }).then(response => response.json());


  deleteSection = sectionId =>
    fetch(URL + '/api/section/' + sectionId, {
      method: 'delete',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }, body: JSON.stringify(sectionId)
    }).then(response => response.json());


  findSectionsForCourse = courseId =>
    fetch(URL + '/api/course/' + courseId + '/section')
      .then(response => response.json());

  createSection = section =>
    fetch(URL + '/api/course/:courseId/section', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(section)
    }).then(response => response.json());
}
