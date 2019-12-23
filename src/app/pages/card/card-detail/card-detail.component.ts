import { Component, OnInit } from '@angular/core';
import { Card } from '../../../models/card.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {
  card: Card = { } as Card;

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.card = data.card;
    });
  }

}
