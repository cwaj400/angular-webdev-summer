import {Component, OnInit} from '@angular/core';
import {SectionServiceClient} from '../services/section.service.client';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent implements OnInit {
  sections = [];
  currentUser = {};

  constructor(private sectionService: SectionServiceClient,
              private userService: UserServiceClient) {
  }

  enroll = (userId, sectionId, seats) => {
    if (seats > 0) {
      this.sectionService.updateSection(sectionId)
        .then(() => {
          if (userId) {
            this.sectionService.enroll(sectionId)
              .then((status) => {
                if (status === 200) {
                  alert('You have been successfully enrolled!');
                } else {
                  alert('Sorry, we could not enroll you in section ' + this.sectionService.findSectionByItsItd(sectionId));
                }
              })
              .then(() => this.sectionService.findAllSections()
                .then((sections) => this.sections = sections));

          } else {
            alert('Please login before enrolling in a section.');
          }
        });
    } else {
      alert('Looks like we\'ve run out of seats');
    }
  };

  ngOnInit() {
    this.sectionService
      .findAllSections()
      .then(sections => this.sections = sections)
      .then(() =>
        this.userService.currentUser()
          .then((user) => {
            this.currentUser = user;
          })
      );
  }
}
