import * as _ from 'lodash';

import {Food} from '../../../models/food.model';
import {ActionExecutable} from '../../action-executable/action-executable.interface';
import {State} from '../state/food.state';

export const enum FoodActionTypes {
  CREATE_FOOD = '[Food] Create',
  CREATE_FOOD_SUCCESS = '[Food] Create success',
  REMOVE_FOOD = '[Food] Remove'
}

export class CreateFood implements ActionExecutable<State> {
  readonly type: string = FoodActionTypes.CREATE_FOOD;
  constructor(public payload: Food) {}

  execute(state: State): State {
    const newFood = this.payload;
    return {
      ...state,
      foods: [...state.foods, Object.assign({}, newFood, {id: _.uniqueId()})]
    };
  }
}

export class CreateFoodSuccess implements ActionExecutable<State> {
  readonly type: string = FoodActionTypes.CREATE_FOOD_SUCCESS;
  constructor(public payload: Food) {}

  execute(state: State): State {
    const updatedFoodName = this.payload.toString();
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
}

export class RemoveFood implements ActionExecutable<State> {
  readonly type: string = FoodActionTypes.REMOVE_FOOD;
  constructor(public payload: number) {}

  execute(state: State): State {
    const foodId = this.payload;
    return {
      ...state,
      foods: [...state.foods.filter(f => f.id !== foodId)]
    };
  }
}

export type FoodAction = CreateFood | CreateFoodSuccess | RemoveFood;
