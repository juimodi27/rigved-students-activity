import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderDemoComponent } from './builder-demo.component';

describe('BuilderDemoComponent', () => {
  let component: BuilderDemoComponent;
  let fixture: ComponentFixture<BuilderDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuilderDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuilderDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
