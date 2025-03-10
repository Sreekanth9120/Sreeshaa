import { NgFor, NgForOf } from '@angular/common';
import { Router } from '@angular/router';
import { Component, NgModule } from '@angular/core';
import { QuestionService } from '../question.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rrb-group-d-exam-detail',
  imports: [NgForOf, NgFor, FormsModule],
  templateUrl: './rrb-group-d-exam-detail.component.html',
  styleUrl: './rrb-group-d-exam-detail.component.scss'
})
export class RrbGroupDExamDetailComponent {
  constructor(private router: Router, private questionService: QuestionService) {}

  rrbUserKey: string =""; 

  particularsList = [
    { name: 'Organization', details: 'Railway Recruitment Board (RRB)' },
    { name: 'Exam Name', details: 'RRB Group D' },
    { name: 'Subjects', details: this.getSubjects() },
    { name: 'Mode of Exam', details: 'Online (Computer Based Test)' },
    { name: 'Duration', details: '90 minutes' },
    { name: 'Official website', details: 'http://www.rrbcdg.gov.in/' }
  ];

  getSubjects() {
    return [
      'Mathematics',
      'General Intelligence and Reasoning',
      'General Science',
      'General Awareness and Current Affairs'
    ];
  }

  btnStartPrepClick() {
    this.questionService.rrbUserKey = this.rrbUserKey;
    this.router.navigate(['/rrbExam']);
  }
}
