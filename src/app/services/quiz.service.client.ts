import {Injectable} from '@angular/core';

const URL = 'http://localhost:3000/';

@Injectable()
export class QuizServiceClient {
  submitQuiz = quiz =>
    fetch(URL + 'api/quiz/' + quiz._id + '/submission', {
      method: 'post',
      body: JSON.stringify(quiz),
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
      }
    })
      .then(response => response.json());

  createQuiz(quiz) {
  }

  findAllQuizzes = () =>
    fetch(URL + 'api/quiz')
      .then(response => response.json());

  findQuizById = quizId =>
    fetch(URL + 'api/quiz/' + quizId)
      .then(response => response.json());

  updateQuiz(quizId, quiz) {
    fetch(URL + 'api/quiz/' + quizId, {
      method: 'put',
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
      }
    });
  }

  deleteQuiz(quizId) {
    fetch(URL + 'api/quiz/' + quizId, {
      method: 'delete',
      credentials: 'include',
      headers: {
        'conten-type': 'application/json',
      }
    });
  }
}
