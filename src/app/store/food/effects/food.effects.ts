import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from '@ngrx/effects';
import {CreateFoodSuccess, FoodAction, FoodActionTypes} from '../actions/food.actions';
import {map, switchMap} from 'rxjs/internal/operators';
import {ApiService} from '../../../api/api.service';
import {Food} from '../../../models/food.model';

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
        map(result => new CreateFoodSuccess(<Food>result))
      )
    )
  );

}
