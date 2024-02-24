import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { EMPTY } from 'rxjs';
import { map, catchError, exhaustMap } from 'rxjs/operators';

import { CommerceService } from '../services/commerce.service';
import { loadCommercesSuccess } from './commerce.actions';

@Injectable()
export class CommerceEffects {
  constructor(
    private actions$: Actions,
    private commerceService: CommerceService
  ) {}

  _commerce = createEffect(() =>
    this.actions$.pipe(
      ofType('[Commerce] Load Commerces'),
      exhaustMap((action) => {
        return this.commerceService.getCommerces().pipe(
          map((data) => {
            return loadCommercesSuccess({ commerces: data });
          }),
          catchError(() => EMPTY)
        );
      })
    )
  );
}
