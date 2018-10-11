import * as fromFood from './food';
import {createSelector} from '@ngrx/store';

/**
 * Make a map of states
 */
export interface State {
  food: fromFood.State
}

/**
 * Make a map of reducers
 */
export const reducers = {
  food: fromFood.reducer
};

export const getFood = (state: State) => state.food;

export const getFoods = createSelector(getFood, fromFood.getFoods);
