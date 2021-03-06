export class Question {
  title: String;
  points: Number;
  description: String;
  true: Boolean;
  blanks: [{
    type: String
  }];
  choices: [{
    text: String,
    value: String,
    correct: Boolean,
  }];
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
