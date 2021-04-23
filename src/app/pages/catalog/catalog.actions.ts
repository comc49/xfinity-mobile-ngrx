import { createAction, props } from '@ngrx/store';

export const loadCatalogs = createAction(
  '[Catalog] Load Catalogs'
);

export const loadCatalogsSuccess = createAction(
  '[Catalog] Load Catalogs Success',
  props<{ data: any }>()
);

export const loadCatalogsFailure = createAction(
  '[Catalog] Load Catalogs Failure',
  props<{ error: any }>()
);
