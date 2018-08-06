import {Injectable} from '@angular/core';

@Injectable()
export class UserServiceClient {
  login = (user) =>
    fetch('http://localhost:3000/api/login', {
      method: 'post',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then(response => response.status);

  currentUser = () =>
    fetch('http://localhost:3000/api/profiles', {
      credentials: 'include'
    });

  register = (user) =>
    fetch('http://localhost:3000/api/register', {
      method: 'post',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }, body: JSON.stringify(user)
    }).then(response => response.status);

  logout = () =>
    fetch('http://localhost:3000/api/logout', {
      method: 'post',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    })
  updateUser = (uid, user) => {
    fetch('http://localhost:3000/api/profile', {
      method: 'put',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }, body: JSON.stringify(user)
    });
  }
  deleteUser = (uid) => {
    fetch('http://localhost:3000/api/profile', {
      method: 'delete',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }, body: JSON.stringify(uid)
    });
  }
}
