import {Section} from './section.model.client';

export class User {
  username: String;
  password: String;
  email: String;
  userType: String;
  sections: Section[];
}
