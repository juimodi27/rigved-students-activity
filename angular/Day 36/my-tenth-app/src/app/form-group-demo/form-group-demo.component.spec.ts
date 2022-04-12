import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroupDemoComponent } from './form-group-demo.component';

describe('FormGroupDemoComponent', () => {
  let component: FormGroupDemoComponent;
  let fixture: ComponentFixture<FormGroupDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGroupDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGroupDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
