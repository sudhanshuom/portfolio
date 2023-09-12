import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AWSNotesComponent } from './aws-notes.component';

describe('AWSNotesComponent', () => {
  let component: AWSNotesComponent;
  let fixture: ComponentFixture<AWSNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AWSNotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AWSNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
