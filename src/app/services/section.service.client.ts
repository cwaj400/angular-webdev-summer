import {Injectable} from '@angular/core';

@Injectable()
export class SectionServiceClient {

  enroll = sectionId =>
    fetch('http://localhost:3000/api/section/' + sectionId + '/enroll', {
      method: 'put',
      credentials: 'include'
    });

  findAllSections = () =>
    fetch('http://localhost:3000/api/section')
      .then(response => response.json());

  findSectionsForCourse = courseId =>
    fetch('http://localhost:3000/api/course/:courseId/' + courseId + '/section')
      .then(response => response.json());

  findSectionByItsItd = sectionId =>
    fetch('http://localhost:3000/api/section/:sectionId' + sectionId, {
      method: 'get',
      credentials: 'include',
    }).then(response => response.json());

  updateSection = sectionId =>
    fetch('http://localhost:3000/api/section/:sectionId' + sectionId, {
      method: 'put',
      credentials: 'include',
    });

  deleteSection = sectionId =>
    fetch('http://localhost:3000/api/section/:sectionId' + sectionId, {
      method: 'delete',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }, body: JSON.stringify(sectionId)
    }).then(response => response.json());

  createSection = section =>
    fetch('http://localhost:3000/api/course/:courseId/section', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(section)
    })
      .then(response => response.json());
}
