import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdfValidationDemoComponent } from './tdf-validation-demo.component';

describe('TdfValidationDemoComponent', () => {
  let component: TdfValidationDemoComponent;
  let fixture: ComponentFixture<TdfValidationDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdfValidationDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TdfValidationDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
