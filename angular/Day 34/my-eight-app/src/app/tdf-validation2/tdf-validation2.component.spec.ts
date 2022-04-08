import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdfValidation2Component } from './tdf-validation2.component';

describe('TdfValidation2Component', () => {
  let component: TdfValidation2Component;
  let fixture: ComponentFixture<TdfValidation2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdfValidation2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TdfValidation2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
