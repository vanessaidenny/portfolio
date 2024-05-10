import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectFreecycleComponent } from './project-freecycle.component';

describe('ProjectFreecycleComponent', () => {
  let component: ProjectFreecycleComponent;
  let fixture: ComponentFixture<ProjectFreecycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectFreecycleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectFreecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
