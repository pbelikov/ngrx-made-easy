import {FoodAction} from "../actions/food.actions";
import {initialState} from '../state/food.state';
import {ActionExecutable} from "../../action-executable/action-executable.interface";

export function reducer(state = initialState, action: FoodAction) {
  if (!action.execute) {
    return state;
  }
  return action.execute(state);
}
