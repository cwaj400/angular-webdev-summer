import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { WhiteBoardComponent } from './white-board/white-board.component';
import {CourseServiceClient} from './services/course.service.client';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { SectionsComponent } from './sections/sections.component';
import {UserServiceClient} from './services/user.service.client';
import {SectionServiceClient} from './services/section.service.client';
import {RouterModule} from '@angular/router';
import {routing} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    WhiteBoardComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    CourseNavigatorComponent,
    EnrollmentComponent,
    SectionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [CourseServiceClient, UserServiceClient, SectionServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
