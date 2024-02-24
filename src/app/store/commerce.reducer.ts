import { createReducer, on } from '@ngrx/store';

import {
  loadCommercesSuccess,
  loadCommercesFailure,
  loadCommerces,
} from './commerce.actions';
import { Commerce } from '../modals/commerce.interface';

export interface CommerceState {
  commerces: Commerce[];
  error: any;
}

export const initialState: CommerceState = {
  commerces: [],
  error: null,
};

export const commerceReducer = createReducer(
  initialState,
  on(loadCommerces, (state) => {
    return { ...state };
  }),
  on(loadCommercesSuccess, (state, action) => {
    return { ...state, commerces: [...action.commerces] };
  }),

  on(loadCommercesFailure, (state, { error }) => {
    return { ...state, error };
  })
);
