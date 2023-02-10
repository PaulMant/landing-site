import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectToContactComponent } from './redirect-to-contact.component';

describe('RedirectToContactComponent', () => {
  let component: RedirectToContactComponent;
  let fixture: ComponentFixture<RedirectToContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedirectToContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedirectToContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
