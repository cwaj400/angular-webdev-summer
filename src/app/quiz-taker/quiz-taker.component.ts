import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {QuizServiceClient} from "../services/quiz.service.client";
import {Quiz} from '../models/quiz.model.client';

@Component({
  selector: 'app-quiz-taker',
  templateUrl: './quiz-taker.component.html',
  styleUrls: ['./quiz-taker.component.css']
})
export class QuizTakerComponent implements OnInit {

  constructor(private service: QuizServiceClient,
              private activatedRoute: ActivatedRoute) { }

  quizId = '';
  quiz = new Quiz();

  submitQuiz = quiz =>
    this.service
      .submitQuiz(quiz)
      .then(submission => console.log(submission));

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params => this.service
        .findQuizById(params['quizId'])
        .then(quiz => this.quiz = quiz));
  }

}
