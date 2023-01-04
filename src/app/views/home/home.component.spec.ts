import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CardsService } from 'src/app/services/cards.service';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let cardsService: CardsService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
    cardsService = TestBed.inject(CardsService)
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
