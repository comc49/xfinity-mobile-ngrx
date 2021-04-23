import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadCatalogs, loadCatalogsSuccess, loadCatalogsFailure } from '../actions/catalog.actions';
import { CatalogService } from '../../pages/catalog/catalog.service';
import { of } from 'rxjs';
import { mergeMap, map, catchError} from 'rxjs/operators';



@Injectable()
export class CatalogEffects {
  catalog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCatalogs.type),
      mergeMap(() => this.catalogService.getProducts()
        .pipe(
          map(products => ({ type: loadCatalogsSuccess.type, products })),
          catchError(() => of({ type: loadCatalogsFailure.type }))
        )
      )
    )
  );




  constructor(
    private actions$: Actions,
    private catalogService: CatalogService
    ) {}

}
