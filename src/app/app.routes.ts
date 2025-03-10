import { Routes } from '@angular/router';
import { ExamPreparationComponent } from './exam-preparation/exam-preparation.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TechnologyLearningComponent } from './technology-learning/technology-learning.component';
import { BestProductsComponent } from './best-products/best-products.component';
import { RrbGroupDExamDetailComponent } from './rrb-group-d-exam-detail/rrb-group-d-exam-detail.component';
import { MultipleChoiceComponent } from './multiple-choice/multiple-choice.component';

export const routes: Routes = [{ path: '', component: HomeComponent},
    { path: 'examList', component: ExamPreparationComponent },
    { path: 'techlearn', component: TechnologyLearningComponent },
    { path: 'bestproducts', component: BestProductsComponent },
    { path: 'rrbGroupD', component: RrbGroupDExamDetailComponent },
    { path: 'rrbExam', component: MultipleChoiceComponent }
];
