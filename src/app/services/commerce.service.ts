import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Store } from '@ngrx/store';

import { Observable, catchError, of } from 'rxjs';

import { loadCommerces, loadCommercesFailure } from '../store/commerce.actions';
import { Commerce } from '../modals/commerce.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommerceService {
  private baseUrl = environment.API_URL;

  constructor(private http: HttpClient, private store: Store) {}

  getCommerces(): Observable<Commerce[]> {
    this.store.dispatch(loadCommerces());

    return this.http.get<Commerce[]>(`${this.baseUrl}`).pipe(
      catchError((error) => {
        console.error('Error fetching commerces:', error);
        console.log(this.baseUrl);
        this.store.dispatch(loadCommercesFailure({ error }));
        return of([]);
      })
    );
  }
}
