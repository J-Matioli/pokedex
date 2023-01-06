import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';
import { AttackComponent } from './attack/attack.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoreCardsBtnComponent } from './more-cards-btn/more-cards-btn.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardAmountComponent } from './card-amount/card-amount.component';

@NgModule({
  declarations: [
    CardComponent,
    AttackComponent,
    FilterComponent,
    MoreCardsBtnComponent,
    CardListComponent,
    CardAmountComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CardComponent,
    AttackComponent,
    FilterComponent,
    MoreCardsBtnComponent,
    CardListComponent,
    CardAmountComponent
  ]
})
export class SharedModule { }
