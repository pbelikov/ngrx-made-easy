import * as fromFood from './food';
import {createSelector} from '@ngrx/store';
import {FoodEffects} from './food/effects/food.effects';

/**
 * Make a map of states
 */
export interface State {
  food: fromFood.State;
}

/**
 * Make a map of reducers
 */
export const reducers = {
  food: fromFood.reducer
};

/**
 * Export selectors
 */

export * from './selectors/store.selectors';

/**
 * Export effects
 */
export const rootEffects = [FoodEffects];
