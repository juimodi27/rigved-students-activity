import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsRecordComponent } from './students-record.component';

describe('StudentsRecordComponent', () => {
  let component: StudentsRecordComponent;
  let fixture: ComponentFixture<StudentsRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
