import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {WhiteBoardComponent} from './white-board/white-board.component';
import {CourseServiceClient} from './services/course.service.client';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {CourseNavigatorComponent} from './course-navigator/course-navigator.component';
import {EnrollmentComponent} from './enrollment/enrollment.component';
import {SectionsComponent} from './sections/sections.component';
import {UserServiceClient} from './services/user.service.client';
import {SectionServiceClient} from './services/section.service.client';
import {RouterModule} from '@angular/router';
import {routing} from './app.routing';
import {LogoutComponent} from './logout/logout.component';
import {TrueFalseQuestionComponent} from './true-false-question/true-false-question.component';
import {MultipleChoiceQuestionComponent} from './multiple-choice-question/multiple-choice-question.component';
import {FillBlanksQuestionComponent} from './fill-blanks-question/fill-blanks-question.component';
import {EssayQuestionComponent} from './essay-question/essay-question.component';
import {QuizListComponent} from './quiz-list/quiz-list.component';
import {QuizTakerComponent} from './quiz-taker/quiz-taker.component';
import {ModuleListComponent} from './module-list/module-list.component';
import {LessonTabsComponent} from './lesson-tabs/lesson-tabs.component';
import {LessonServiceClient} from './services/lesson.service.client';
import {ModuleServiceClient} from './services/module.service.client';
import {WidgetListComponent} from './widget-list/widget-list.component';
import {QuizServiceClient} from './services/quiz.service.client';
import {SubmissionsComponent} from './submissions/submissions.component';
import {QuestionServiceClient} from './services/question.service.client';

@NgModule({
  declarations: [
    AppComponent,
    WhiteBoardComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    CourseNavigatorComponent,
    EnrollmentComponent,
    SectionsComponent,
    LogoutComponent,
    TrueFalseQuestionComponent,
    MultipleChoiceQuestionComponent,
    FillBlanksQuestionComponent,
    EssayQuestionComponent,
    QuizListComponent,
    QuizTakerComponent,
    ModuleListComponent,
    LessonTabsComponent,
    WidgetListComponent,
    SubmissionsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
  ],
  providers: [CourseServiceClient, UserServiceClient, ModuleServiceClient, SectionServiceClient, LessonServiceClient,
    QuizServiceClient, QuestionServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule {
}
