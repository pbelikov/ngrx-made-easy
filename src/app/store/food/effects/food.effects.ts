import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from '@ngrx/effects';
import {FoodAction, FoodActionTypes} from '../actions/food.actions';
import {map, switchMap} from 'rxjs/internal/operators';
import {ApiService} from '../../../api/api.service';

@Injectable()
export class FoodEffects {
  constructor(
    private actions$: Actions,
    private apiService: ApiService) {

  }

  @Effect() run$ = this.actions$.pipe(
    // Listen to CREATE_FOOD action
    ofType(FoodActionTypes.CREATE_FOOD),
    // Fetch payload
    map((action: FoodAction) => action.payload),
    // Call API or any other desired stuff
    switchMap(payload => this.apiService.run(payload ? payload['name'] : null).pipe(
        map(result =>  {
          return {
            type: FoodActionTypes.CREATE_FOOD_SUCCESS,
            payload: result
          };
        })
      )
    )
  );

}
