import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindOneuserComponent } from './find-oneuser.component';

describe('FindOneuserComponent', () => {
  let component: FindOneuserComponent;
  let fixture: ComponentFixture<FindOneuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindOneuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindOneuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
