import { createAction, props } from '@ngrx/store';

import { Commerce } from '../modals/commerce.interface';

export const loadCommerces = createAction('[Commerce] Load Commerces');

export const loadCommercesSuccess = createAction(
  '[Commerce] Load Commerces Success',
  props<{ commerces: Commerce[] }>()
);

export const loadCommercesFailure = createAction(
  '[Commerce] Load Commerces Failure',
  props<{ error: any }>()
);
