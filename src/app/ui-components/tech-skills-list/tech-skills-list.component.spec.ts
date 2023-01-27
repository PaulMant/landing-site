import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechSkillsListComponent } from './tech-skills-list.component';

describe('TechSkillsListComponent', () => {
  let component: TechSkillsListComponent;
  let fixture: ComponentFixture<TechSkillsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechSkillsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechSkillsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
