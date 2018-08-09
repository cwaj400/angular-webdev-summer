import {Injectable} from '@angular/core';

const URL = 'http://localhost:3000';

@Injectable()
export class UserServiceClient {
  login = (user) =>
    fetch(URL + '/api/login', {
      method: 'post',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then(response => response.status);

  currentUser = () =>
    fetch(URL + '/api/profiles', {
      credentials: 'include'
    });

  register = (user) =>
    fetch(URL + '/api/register', {
      method: 'post',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }, body: JSON.stringify(user)
    }).then(response => response.status);

  logout = () =>
    fetch(URL + '/api/logout', {
      method: 'post',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    })
  updateUser = (uid, user) => {
    fetch(URL + '/api/profile', {
      method: 'put',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }, body: JSON.stringify(user)
    });
  }
  deleteUser = (uid) => {
    fetch(URL + '/api/profile', {
      method: 'delete',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }, body: JSON.stringify(uid)
    });
  }
}
