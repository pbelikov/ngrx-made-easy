import * as _ from 'lodash';

import {FoodAction, FoodActionTypes} from "../actions/food.actions";
import {Food} from "../../../models/food.model";
import {State, initialState} from '../state/food.state';

export class FoodReducers {
  static createFood(state: State, payload: any): State {
    return {
      ...state,
      foods: [...state.foods, Object.assign({}, payload, {id: _.uniqueId()})]
    };
  }

  static createFoodSuccess(state: State, payload: string): State {
    const updatedFoods: Food[] = state.foods.map(food => {
      return food.name.toUpperCase() === payload ?
        Object.assign({}, food, {name: payload}) :
        food;
    });
    return {
      ...state,
      foods: [...updatedFoods]
    };
  }

  static removeFood(state: State, payload: number): State {
    return {
      ...state,
      foods: [...state.foods.filter(f => f.id != payload)]
    };
  }
}

export function reducer(state = initialState, action: FoodAction): State {
  switch (action.type) {
    case FoodActionTypes.CREATE_FOOD: {
      return FoodReducers.createFood(state, action.payload);
    }
    case FoodActionTypes.CREATE_FOOD_SUCCESS: {
      return FoodReducers.createFoodSuccess(state, action.payload as string);
    }
    case FoodActionTypes.REMOVE_FOOD: {
      return FoodReducers.removeFood(state, action.payload as number);
    }
    default: {
      return state;
    }
  }
}
