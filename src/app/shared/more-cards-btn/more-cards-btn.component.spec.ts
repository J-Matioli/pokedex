import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreCardsBtnComponent } from './more-cards-btn.component';

describe('MoreCardsBtnComponent', () => {
  let component: MoreCardsBtnComponent;
  let fixture: ComponentFixture<MoreCardsBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreCardsBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreCardsBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
