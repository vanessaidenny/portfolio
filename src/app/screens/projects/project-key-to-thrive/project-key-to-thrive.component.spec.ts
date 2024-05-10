import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectKeyToThriveComponent } from './project-key-to-thrive.component';

describe('ProjectKeyToThriveComponent', () => {
  let component: ProjectKeyToThriveComponent;
  let fixture: ComponentFixture<ProjectKeyToThriveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectKeyToThriveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectKeyToThriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
