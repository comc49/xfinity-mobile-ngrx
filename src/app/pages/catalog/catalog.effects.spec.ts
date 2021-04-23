import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CatalogEffects } from './catalog.effects';

describe('CatalogEffects', () => {
  let actions$: Observable<any>;
  let effects: CatalogEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CatalogEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(CatalogEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
