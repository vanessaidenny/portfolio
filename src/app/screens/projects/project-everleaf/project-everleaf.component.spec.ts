import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectEverleafComponent } from './project-everleaf.component';

describe('ProjectEverleafComponent', () => {
  let component: ProjectEverleafComponent;
  let fixture: ComponentFixture<ProjectEverleafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectEverleafComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectEverleafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
