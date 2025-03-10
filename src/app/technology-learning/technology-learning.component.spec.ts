import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyLearningComponent } from './technology-learning.component';

describe('TechnologyLearningComponent', () => {
  let component: TechnologyLearningComponent;
  let fixture: ComponentFixture<TechnologyLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnologyLearningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologyLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
