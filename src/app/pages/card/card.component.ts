import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from '../../models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  tabs: object[];

  constructor(private router: Router) {
    this.tabs = [
      {
        label: 'Search',
        link: './search',
        index: 0,
        disabled: false
      },
      {
        label: 'Detail',
        link: './detail',
        index: 1,
        disabled: true
      }
    ];
  }

  ngOnInit() {
  }

}
