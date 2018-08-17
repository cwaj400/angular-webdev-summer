import {Injectable} from '@angular/core';


const URL = 'http://localhost:3000';

@Injectable()
export class QuestionServiceClient {

  addQuestionToQuiz = (qid, questionId) =>
    fetch(URL + '/api/quiz/' + qid + '/question/' + questionId, {
      method: 'put',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());

  createQuestion = (question) =>
    fetch(URL + '/api/question', {
      method: 'post',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }, body: JSON.stringify(question)
    }).then(response => response.json());
}

