import { Component } from '@angular/core';
import { QuestionService } from '../question.service';
import { NgFor, NgIf, NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MessageDialogComponent } from '../message-dialog/message-dialog.component';

@Component({
  selector: 'app-multiple-choice',
  imports: [NgFor, NgIf, FormsModule,NgStyle],
  templateUrl: './multiple-choice.component.html',
  styleUrl: './multiple-choice.component.scss'
})
export class MultipleChoiceComponent {
  questions: any[] = [];
  selectedAnswer: string | null = null;
  submitted: boolean = false;
  examNo: number = 1;
  selectedAnswersLength:number = 0;
  score: number = 0;
  minutes: number = 10;
  seconds:
  number = 0;  
  timerInterval: NodeJS.Timeout | null = null;
  hasFullAccess:boolean = false;
  userInputKey: string =  "";

  constructor(private questionService: QuestionService, private dialog: MatDialog) {
    this.openDialog();
    this.loadQuestions();
    if (this.questionService.rrbUserKeys && this.questionService.rrbUserKeys.includes(this.questionService.rrbUserKey)) {
      this.hasFullAccess = true;
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MessageDialogComponent, {
      width: '300px',
      data: { message: 'Start Exam' }
    });

    dialogRef.afterClosed().subscribe(result => {
      
        this.startTimer();
      
    });
  }

   
  // ngOnInit() {
  //   this.startTimer();
  // }

  selectedAnswers: { [key: number]: string } = {
  
  };

  loadQuestions() {
    this.questions = this.questionService.getQuestions(this.examNo);
    //this.startTimer();
  }

  selectAnswer(id: number, answer: string) {
    if(this.submitted) 
      return;
    this.selectedAnswers[id] = answer;
    this.selectedAnswersLength = Object.keys(this.selectedAnswers).length ;
  }

  submitAnswers() {
    this.submitted = true;
    if(this.timerInterval !== null) {
      clearInterval(this.timerInterval);
    }
    this.validateAnswers();
  }

  startTimer() {
    let timeLeft = 10  * 60; // 30 minutes in seconds
    if(this.timerInterval !== null) {
      clearInterval(this.timerInterval);
    }
    this.timerInterval = setInterval(() => {
      if (timeLeft > 0) {
      timeLeft--;
      this.updateTimerDisplay(timeLeft);
      } else {
      if (this.timerInterval !== null) {
        clearInterval(this.timerInterval);
      }
      if (!this.submitted) {
        this.submitAnswers();
      }
      }
    }, 1000);
  }

  updateTimerDisplay(timeLeft: number) {
    this.minutes = Math.floor(timeLeft / 60);
    this.seconds = timeLeft % 60;
  }

  // ngOnInit() {
  //   this.startTimer();
  // }

  validateAnswers() {
    this.score = 0;
     this.questions.forEach(q => {
      if(this.selectedAnswers[q.id] === q.correctAnswer.trim())
      {
        q.correct = true;
        this.score++;
      }
      else{
        q.correct = false;
      }
    });
  }

  NextExam() {
    this.examNo++;
    this.selectedAnswers = {};
    this.selectedAnswersLength = 0;
    this.selectedAnswer = null;
    this.score = 0;
    this.minutes = 10;
    this.seconds = 0;
    this.submitted = false;
    //this.startTimer();
    this.loadQuestions();
    this.openDialog();
   
  }
  
  PreviousExam() {
    if(this.examNo > 1)
    {
      this.examNo--;
      this.selectedAnswers = {};
      this.selectedAnswersLength = 0;
      this.selectedAnswer = null;
      this.score = 0;
      this.minutes = 10;
      this.seconds = 0;
      this.submitted = false;
      //this.startTimer();
      this.loadQuestions();
      this.openDialog();
    }
  }

  allQuestionsAnswered() {
    return Object.keys(this.selectedAnswers).length == this.questions.length;
  }

  btnGetFullAccessClick() { 
    if(this.userInputKey != "") {
    this.questionService.rrbUserKey = this.userInputKey;
    if (this.questionService.rrbUserKeys && this.questionService.rrbUserKeys.includes(this.questionService.rrbUserKey)) {
      this.hasFullAccess = true;
    }
    else{
      this.hasFullAccess = false;
      this.userInputKey = "";
    }
  }
}
  
}
