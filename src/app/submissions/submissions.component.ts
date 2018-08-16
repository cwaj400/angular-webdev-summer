import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model.client';
import {SectionServiceClient} from '../services/section.service.client';
import {UserServiceClient} from '../services/user.service.client';
import {ActivatedRoute, NavigationStart, Router} from '@angular/router';
import {QuizServiceClient} from '../services/quiz.service.client';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.css']
})
export class SubmissionsComponent implements OnInit {

  quizId = '';
  submissions = [];

  constructor(private service: QuizServiceClient,
              private aRoute: ActivatedRoute) {
    this.aRoute.params.subscribe(params =>
      this.loadSubmissions(params['quizId']));
  }


  loadSubmissions(quizId) {
    this.quizId = quizId;
    this.service.findQuizById(this.quizId)
      .then(submissions => this.submissions = submissions);
  }

  ngOnInit() {
  }

}
