import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import { selectCommerces, selectError } from '../store/commerce.selectors';
import { CommerceState } from '../store/commerce.reducer';
import { loadCommerces } from '../store/commerce.actions';
import { Commerce } from '../modals/commerce.interface';

@Component({
  selector: 'app-commerce-table',
  standalone: true,
  imports: [MatTableModule, CommonModule, MatSnackBarModule],
  templateUrl: './commerce-table.component.html',
  styleUrls: ['./commerce-table.component.scss'],
})
export class CommerceTableComponent implements OnInit {
  commerces$!: Observable<Commerce[]>;
  error$!: Observable<any>;

  noDataMessage = 'No data available. Please check back later.';
  successMessage = 'Data loaded successfully.';

  displayedColumns: string[] = [
    'id',
    'uid',
    'color',
    'department',
    'material',
    'product_name',
    'price',
    'price_string',
    'promo_code',
  ];

  constructor(
    private store: Store<CommerceState>,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadCommerces());

    this.commerces$ = this.store.pipe(select(selectCommerces));
    this.error$ = this.store.pipe(select(selectError));
    console.log(this.commerces$);

    this.commerces$.subscribe((commerces) => {
      if (commerces.length > 0) {
        this.snackBar.open(this.successMessage, '', { duration: 2000 });
      }
    });
  }
}
