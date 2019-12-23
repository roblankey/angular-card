import { Component, OnInit } from '@angular/core';
import { Card } from '../../../models/card.model';
import { CardService } from '../../../services/card.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.scss']
})
export class CardSearchComponent implements OnInit {
  results: Card[] = [];
  filteredResults!: Observable<Card[]>;

  searchControl = new FormControl();

  constructor(private cardService: CardService, private router: Router) { }

  ngOnInit() {
    this.searchCards();
    this.filteredResults = this.searchControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.title),
        map(name => name ? this._filter(name) : this.results.slice())
      );
  }

  private _filter(value: string): Card[] {
    const filterValue = value.toLowerCase();

    return this.results.filter(result => result.title.toLowerCase().includes(filterValue));
  }

  displayFn(card?: Card): string | undefined {
    return card ? card.title : undefined;
  }

  searchCards(): void {
    this.cardService.getCards().subscribe(data => this.results = data);
  }

  showCardDetails(card: Card): void {
    this.router.navigate([`/angular-starter/card/detail/${card.id}`])
      .catch(err => console.log(err));
  }

}
