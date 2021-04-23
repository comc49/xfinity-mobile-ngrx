import { Action, createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/models/product.model';
import * as CatalogAction from '../actions'


export const catalogFeatureKey = 'catalog';

export interface CatalogState {
  products: Product[];
}

export const initialState: CatalogState = {
  products: null,
};


export const CatalogReducer = createReducer(
  initialState,
  on(CatalogAction.loadCatalogsSuccess, (state, { products }) => {
    console.log(products, ' products')
    return ({ ...state, products: products })
  }),
);

