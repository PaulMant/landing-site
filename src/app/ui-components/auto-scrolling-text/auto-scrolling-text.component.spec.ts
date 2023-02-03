import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoScrollingTextComponent } from './auto-scrolling-text.component';

describe('AutoScrollingTextComponent', () => {
  let component: AutoScrollingTextComponent;
  let fixture: ComponentFixture<AutoScrollingTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoScrollingTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoScrollingTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
