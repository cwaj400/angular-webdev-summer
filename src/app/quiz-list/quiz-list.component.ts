import {Component, OnInit} from '@angular/core';
import {QuizServiceClient} from '../services/quiz.service.client';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';
import {User} from '../models/user.model.client';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {

  quizzes = [];
  user = new User();
  quizTitle: '';
  quizPoints: Number;
  quizDescription: '';
  qid: Number;
  question: '';

  constructor(private service: QuizServiceClient, private router: Router, private userService: UserServiceClient,
              private quizClient: QuizServiceClient) {
    this.service.findAllQuizzes().then(quizzes => this.quizzes = quizzes);
    router.events.subscribe(event => {
      this.userService.currentUser()
        .then(response => response.json()).then(user => {
        if (user !== undefined) {
          this.user = user;
        } else {
          alert('Please sign in first');
          this.router.navigate(['login']);
        }
      });
    });
  }

  delete(quizId) {
    this.quizClient.deleteQuiz(quizId);
  }

  createQuiz(title) {
    const quiz = {
      title: this.quizTitle,
    };
    this.quizClient.createQuiz(quiz);
    alert('Quiz created!');
    window.location.reload(true);
  }

  ngOnInit() {

  }

}
