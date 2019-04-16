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

export const actionExecutors: Map<string, (state: State, payload: any) => State> = new Map();
actionExecutors.set(FoodActionTypes.CREATE_FOOD, FoodReducers.createFood);
actionExecutors.set(FoodActionTypes.CREATE_FOOD_SUCCESS, FoodReducers.createFoodSuccess);
actionExecutors.set(FoodActionTypes.REMOVE_FOOD, FoodReducers.removeFood);

export function reducer(state = initialState, action: FoodAction): State {
  if (!actionExecutors.get(action.type)) {
    return state;
  }
  return actionExecutors.get(action.type)(state, action.payload);
}
