import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAllusersComponent } from './find-allusers.component';

describe('FindAllusersComponent', () => {
  let component: FindAllusersComponent;
  let fixture: ComponentFixture<FindAllusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindAllusersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindAllusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
