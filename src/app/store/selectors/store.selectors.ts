import * as fromFood from '../food';
import {State} from '../state/store.state';
import {createSelector} from '@ngrx/store';

/**
 * Export selectors
 */

export const getFood = (state: State) => state.food;
export const getFoods = createSelector(getFood, fromFood.getFoods);
