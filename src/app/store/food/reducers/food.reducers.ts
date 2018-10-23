import * as _ from 'lodash';

import {FoodAction, FoodActionTypes} from "../actions/food.actions";
import {Food} from "../../../models/food.model";
import {State, initialState} from '../state/food.state';

export function reducer(state = initialState, action: FoodAction) {
  switch (action.type) {
    case FoodActionTypes.CREATE_FOOD: {
      const newFood = action.payload;
      return {
        ...state,
        foods: [...state.foods, Object.assign({}, newFood, {id: _.uniqueId()})]
      };
    }
    case FoodActionTypes.CREATE_FOOD_SUCCESS: {
      const updatedFoodName = action.payload.toString();
      const updatedFoods: Food[] = state.foods.map(food => {
        return food.name.toUpperCase() === updatedFoodName ?
          Object.assign({}, food, {name: updatedFoodName}) :
          Object.assign({}, food);
      });
      return {
        ...state,
        foods: [...updatedFoods]
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
