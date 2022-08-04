import { Component, Input, OnInit } from '@angular/core';
import { Attack } from 'src/app/models/pokemon';

@Component({
  selector: 'app-attack',
  templateUrl: './attack.component.html',
  styleUrls: ['./attack.component.scss']
})
export class AttackComponent implements OnInit {

  @Input() attack: Attack;
  
  constructor() { }

  ngOnInit(): void {
  }

}
