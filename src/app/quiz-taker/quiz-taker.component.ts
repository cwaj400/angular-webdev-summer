import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationStart, Router} from '@angular/router';
import {QuizServiceClient} from '../services/quiz.service.client';
import {Quiz} from '../models/quiz.model.client';
import {User} from '../models/user.model.client';
import {UserServiceClient} from '../services/user.service.client';
import {QuestionServiceClient} from '../services/question.service.client';
import {ql} from '@angular/core/src/render3';

@Component({
  selector: 'app-quiz-taker',
  templateUrl: './quiz-taker.component.html',
  styleUrls: ['./quiz-taker.component.css']
})
export class QuizTakerComponent implements OnInit {

  quiz: Quiz = new Quiz();
  user: User = new User();

  title: '';
  description: '';
  choices: '';
  points: Number;
  questionId: Number;

  constructor(private service: QuizServiceClient,
              private activatedRoute: ActivatedRoute, private userService: UserServiceClient,
              private router: Router, private questionService: QuestionServiceClient) {
    router.events.subscribe(event => {
      this.userService.currentUser()
        .then(response => response.json()).then(user => {
        if (user !== undefined) {
          this.user = user;
        }
      });
    });
  }


  createQuestion = (title, points, description) => {
    const question = {
      title: this.title,
      points: this.points,
      description: this.description,
      questionType: 'TRUE_FALSE',
    };
    this.questionService.createQuestion(question).then(response => this.questionId = response._id);
    this.questionService.addQuestionToQuiz(this.quiz._id, this.questionId)
      .then(() => alert('Please click button again to create true/false question.'));
  };


  submitQuiz = quiz =>
    this.service
      .submitQuiz(quiz)
      .then(() => alert('Submitted!'));

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params => this.service
        .findQuizById(params['quizId'])
        .then(quiz => this.quiz = quiz));
  }

}
