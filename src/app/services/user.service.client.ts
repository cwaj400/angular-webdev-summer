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
    });

  currentUser = () =>
    fetch('http://localhost:3000/api/profile', {
      method: 'get',
      credentials: 'include'
    }).then(response => response.json());

  register = (user) =>
    fetch('http://localhost:3000/api/register', {
      method: 'post',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }, body: JSON.stringify(user)
    });
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
