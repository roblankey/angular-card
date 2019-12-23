import { TestBed } from '@angular/core/testing';

import { CardDetailResolverService } from './card-detail-resolver.service';

describe('CardDetailResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardDetailResolverService = TestBed.get(CardDetailResolverService);
    expect(service).toBeTruthy();
  });
});
