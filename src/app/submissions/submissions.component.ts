import {Component, OnInit} from '@angular/core';
import {User} from '../models/user.model.client';
import {SectionServiceClient} from '../services/section.service.client';
import {UserServiceClient} from '../services/user.service.client';
import {ActivatedRoute, NavigationStart, Router} from '@angular/router';
import {QuizServiceClient} from '../services/quiz.service.client';
import {subscribeOn} from 'rxjs/operators';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.css']
})
export class SubmissionsComponent implements OnInit {
  quiz: '';
  user = '';
  quizId = Number;
  submissions = [];

  constructor(private activatedRoute: ActivatedRoute,
              private quizService: QuizServiceClient) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.quizId = params['quizId'];
      this.quizService.findSubmissionsForQuizId(this.quizId).then((submissions) => this.submissions = submissions);
      this.quizService.findQuizById(this.quizId)
        .then(quiz => this.quiz = quiz).then(() => console.log(this.submissions));
    });
  }
}
