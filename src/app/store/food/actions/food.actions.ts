import {Action} from "@ngrx/store";
import {Food} from "../../../models/food.model";

export const enum FoodActionTypes {
  CREATE_FOOD = '[Food] Create',
  REMOVE_FOOD = '[Food] Remove'
};

export class CreateFood implements Action {
  readonly type: string = FoodActionTypes.CREATE_FOOD;
  constructor(public payload: Food) {}
}

export class RemoveFood implements Action {
  readonly type: string = FoodActionTypes.REMOVE_FOOD;
  constructor(public payload: number) {}
}

export type FoodAction = CreateFood | RemoveFood;
