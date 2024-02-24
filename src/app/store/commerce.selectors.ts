import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CommerceState } from './commerce.reducer';

export const commerceSelector =
  createFeatureSelector<CommerceState>('commerce');

export const selectCommerces = createSelector(
  commerceSelector,
  (commerceState) => commerceState.commerces
);

export const selectError = createSelector(
  commerceSelector,
  (commerceState) => commerceState.error
);
