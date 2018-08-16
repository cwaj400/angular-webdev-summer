import {User} from './user.model.client';
import {Quiz} from './quiz.model.client';
import {Question} from './question.model.client';


export class Submissions {

student: User;
quiz: Quiz;
answers: [{
  fillBlanksAnswers: String,
  multipleChoiceAnswer: Number,
  trueFalseAnswer: Boolean,
  essayAnswer: String
}];
  question: Question;
  timestamp: Date;
}
