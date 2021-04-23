import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { CatalogEffects } from '../../store/effects/catalog.effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    EffectsModule.forFeature([CatalogEffects])
  ]
})
export class CatalogModule { }
