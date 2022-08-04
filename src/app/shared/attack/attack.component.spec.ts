import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Attack } from 'src/app/models/pokemon';

import { AttackComponent } from './attack.component';

describe('AttackComponent', () => {
  let component: AttackComponent;
  let fixture: ComponentFixture<AttackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttackComponent);
    component = fixture.componentInstance;
    component.attack = {} as Attack;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
