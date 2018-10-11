import * as _ from 'lodash';

import {FoodAction, FoodActionTypes} from "../actions/food.actions";
import {Food} from "../../../models/food.model";

export interface State {
  foods: Food[];
};

export const initialState: State = {
  foods: [
    {
      id: 5, name: 'Hotdog', amount: 5, description: 'I am very-very-very hot!'
    }
  ]
};

export function reducer(state = initialState, action: FoodAction) {
  switch (action.type) {
    case FoodActionTypes.CREATE_FOOD: {
      const newFood = action.payload;
      return {
        ...state,
        foods: [...state.foods, Object.assign({}, newFood, {id: _.uniqueId()})]
      };
    }
    case FoodActionTypes.REMOVE_FOOD: {
      const foodId = action.payload;
      return {
        ...state,
        foods: [...state.foods.filter(f => f.id != foodId)]
      };
    }
    default: {
      return state;
    }
  }
}

/**
 * Basic selector - to get foods from store
 * @param {State} state
 * @returns {Food[]}
 */
export const getFoods = (state: State) => state.foods;
