import { Injectable } from '@angular/core';
import { CardService } from '../../../services/card.service';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Card } from '../../../models/card.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardDetailResolverService implements Resolve<Card> {
  constructor(private cardService: CardService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Card> {
    return this.cardService.getCard(route.params.stub);
  }
}
