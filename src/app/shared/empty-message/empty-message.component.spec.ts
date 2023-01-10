import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyMessageComponent } from './empty-message.component';

describe('EmptyMessageComponent', () => {
  let component: EmptyMessageComponent;
  let fixture: ComponentFixture<EmptyMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptyMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
