import {Question} from './question.model.client';

export class Quiz {
  title: String;
  points: Number;
  description: String;
  choices: [{
    text: String,
    value: String,
    correct: Boolean
  }];
  questions: Question[];
  questionType: {
    type: String,
    enum: [
      'ESSAY',
      'FILL_BLANKS',
      'TRUE_FALSE',
      'CHOICE'
      ]
  };
}

