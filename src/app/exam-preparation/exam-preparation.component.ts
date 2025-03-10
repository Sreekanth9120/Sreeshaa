import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [NgFor, RouterModule],
  templateUrl: './exam-preparation.component.html',
  styleUrl: './exam-preparation.component.scss'
})
export class ExamPreparationComponent {
  examsList = [
    { name: 'RRB Group D 2025', link: '/rrbGroupD' },
    { name: 'All Bank Exams', link: '/BankExams' },
    { name: 'SSC Exams', link: '/SSCExams' }
  ]
  
}
