import {State} from '../state/food.state';

/**
 * Basic selector - to get foods from store
 * @param {State} state
 * @returns {Food[]}
 */
export const getFoods = (state: State) => state.foods;
