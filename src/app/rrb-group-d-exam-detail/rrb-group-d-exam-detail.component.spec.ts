import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RrbGroupDExamDetailComponent } from './rrb-group-d-exam-detail.component';

describe('RrbGroupDExamDetailComponent', () => {
  let component: RrbGroupDExamDetailComponent;
  let fixture: ComponentFixture<RrbGroupDExamDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RrbGroupDExamDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RrbGroupDExamDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
