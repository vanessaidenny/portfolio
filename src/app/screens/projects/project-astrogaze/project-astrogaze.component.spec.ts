import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAstrogazeComponent } from './project-astrogaze.component';

describe('ProjectAstrogazeComponent', () => {
  let component: ProjectAstrogazeComponent;
  let fixture: ComponentFixture<ProjectAstrogazeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectAstrogazeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectAstrogazeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
