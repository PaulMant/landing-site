import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollToTopArrowComponent } from './scroll-to-top-arrow.component';

describe('ScrollToTopArrowComponent', () => {
  let component: ScrollToTopArrowComponent;
  let fixture: ComponentFixture<ScrollToTopArrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollToTopArrowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollToTopArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
