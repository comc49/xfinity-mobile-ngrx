import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadCatalogs } from './catalog.actions';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  products$: Observable<any[]> = this.store.select(state => state.products);


  constructor(private store: Store<{ products: any[]}>) { }


  ngOnInit(): void {
    this.store.dispatch({ type: loadCatalogs.type });
  }

}
