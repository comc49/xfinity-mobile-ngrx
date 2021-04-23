import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/models/product.model';

export const loadCatalogs = createAction(
  '[Catalog] Load Catalogs'
);

export const loadCatalogsSuccess = createAction(
  '[Catalog] Load Catalogs Success',
  props<{ products: Product[] }>()
);

export const loadCatalogsFailure = createAction(
  '[Catalog] Load Catalogs Failure',
  props<{ error: any }>()
);
