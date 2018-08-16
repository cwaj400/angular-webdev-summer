import {Component, OnInit} from '@angular/core';
import {SectionServiceClient} from '../services/section.service.client';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';
import {User} from '../models/user.model.client';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent implements OnInit {
  sections = [];
  currentUser = new User();


  constructor(private sectionService: SectionServiceClient,
              private userService: UserServiceClient, private router: Router) {
    // router.events.subscribe(event => {
    //   this.userService.currentUser()
    //     .then(response => response.json()).then(user => {
    //     if (user !== undefined) {
    //       this.currentUser = user;
    //       this.sectionService.findEnrollmentsForStudent(this.currentUser._id).then((enrollments) => this.sections = enrollments);
    //     }
    //   });
    // });
  }

  enroll = (userId, sectionId, seats) => {

    // if (seats > 0) {
    //   this.sectionService.updateSection(sectionId)
    //     .then(() => {
    //       if (userId) {
    //         this.sectionService.enroll(sectionId)
    //           .then((status) => {
    //             if (status === 200) {
    //               alert('You have been successfully enrolled!');
    //             } else {
    //               alert('Sorry, we could not enroll you in section ' + this.sectionService.findSectionByItsItd(sectionId));
    //             }
    //           })
    //           .then(() => this.sectionService.findAllSections()
    //             .then((sections) => this.sections = sections));
    //
    //       } else {
    //         alert('Please login before enrolling in a section.');
    //       }
    //     });
    // } else {
    //   alert('Looks like we\'ve run out of seats');
    // }
  };

  ngOnInit() {

    this.userService.currentUser()
      .then(response => response.json()).then(user => {
      if (user !== undefined) {
        this.currentUser = user;
        this.sectionService
          .findAllSections()
          .then(sections => this.sections = sections);
      } else {
        alert('Please log in first');
        this.router.navigate(['login']);
      }
    });
  }
}
