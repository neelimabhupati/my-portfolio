import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('ProjectDetailsButton', () => {
  let component: ProjectDetailsButton;
  let fixture: ComponentFixture<ProjectDetailsButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectDetailsButton],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectDetailsButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
