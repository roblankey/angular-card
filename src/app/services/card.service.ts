import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Card } from '../models/card.model';
import { CARDS } from '../pages/card/mock-cards';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  getCards() : Observable<Card[]> {
    return of(CARDS.sort((a, b) => a.title.localeCompare(b.title)));
  }

  getCard(id: string): Observable<Card> {
    let card;
    card = CARDS.find(c => c.id === id);

    if (typeof card === 'undefined') {
      throw new Error('Could not find card!')
    }
    return of(card);
  }
}
