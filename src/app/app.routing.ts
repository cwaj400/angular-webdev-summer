import { Routes, RouterModule } from '@angular/router';
import {CourseNavigatorComponent} from './course-navigator/course-navigator.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {SectionsComponent} from './sections/sections.component';
import {EnrollmentComponent} from './enrollment/enrollment.component';
import {LogoutComponent} from './logout/logout.component';
import {ModuleListComponent} from './module-list/module-list.component';
import {QuizTakerComponent} from './quiz-taker/quiz-taker.component';
import {QuizListComponent} from './quiz-list/quiz-list.component';

const appRoutes: Routes = [
  { path: 'enrollments', component: EnrollmentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'courses', component: CourseNavigatorComponent },
  { path: 'sections', component: SectionsComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'modules', component: ModuleListComponent},
  { path: 'quizzes', component: QuizListComponent },
  { path: 'quiz/:quizId', component: QuizTakerComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
