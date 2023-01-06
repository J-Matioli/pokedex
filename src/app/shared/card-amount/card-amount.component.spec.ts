import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAmountComponent } from './card-amount.component';

describe('CardAmountComponent', () => {
  let component: CardAmountComponent;
  let fixture: ComponentFixture<CardAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAmountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
