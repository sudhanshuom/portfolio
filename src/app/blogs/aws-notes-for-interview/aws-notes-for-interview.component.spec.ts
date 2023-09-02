import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AWSNotesForInterviewComponent } from './aws-notes-for-interview.component';

describe('AWSNotesForInterviewComponent', () => {
  let component: AWSNotesForInterviewComponent;
  let fixture: ComponentFixture<AWSNotesForInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AWSNotesForInterviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AWSNotesForInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
