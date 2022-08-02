import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public pokemon: Pokemon;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.pokemon = this.route.snapshot.data['pokemon'].data;

    console.log(this.pokemon);    
  }

}
